import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const textModel = 'gemini-2.5-flash';
const imageModel = 'imagen-4.0-generate-001';

interface GenerationResult {
    ideas: string[];
    imageUrl: string;
}

// Schema for the text generation response
const ideasSchema = {
    type: Type.OBJECT,
    properties: {
        ideas: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING,
                description: 'Uma ideia criativa para post ou banner.'
            }
        }
    }
};

export const generateIdeasAndImage = async (prompt: string): Promise<GenerationResult> => {
    try {
        // Parallel API calls for efficiency
        const [textPromise, imagePromise] = [
            // Text generation
            ai.models.generateContent({
                model: textModel,
                contents: `Gere 5 ideias curtas e criativas para posts ou banners sobre o seguinte tema: "${prompt}". As ideias devem ser inspiradoras e alinhadas a um público que busca bem-estar e soluções naturais.`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: ideasSchema,
                },
            }),
            // Image generation
            ai.models.generateImages({
                model: imageModel,
                prompt: `Uma imagem de alta qualidade, premium e esteticamente agradável para um post sobre "${prompt}". O estilo deve ser natural, inspirador e moderno, com foco em bem-estar. Evite estéticas de clínica médica. Pense em luz natural, elementos orgânicos e uma paleta de cores suaves.`,
                config: {
                    numberOfImages: 1,
                    outputMimeType: 'image/jpeg',
                    aspectRatio: '1:1',
                },
            })
        ];

        const [textResponse, imageResponse] = await Promise.all([textPromise, imagePromise]);
        
        // Process text response
        const jsonText = textResponse.text.trim();
        const parsedIdeas: { ideas: string[] } = JSON.parse(jsonText);
        if (!parsedIdeas || !Array.isArray(parsedIdeas.ideas) || parsedIdeas.ideas.length === 0) {
            throw new Error("A API de texto não retornou ideias válidas.");
        }
        
        // Process image response
        const base64ImageBytes = imageResponse.generatedImages?.[0]?.image?.imageBytes;
        if (!base64ImageBytes) {
            throw new Error("A API de imagem não retornou uma imagem válida.");
        }
        const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

        return {
            ideas: parsedIdeas.ideas,
            imageUrl: imageUrl
        };

    } catch (error) {
        console.error("Erro ao gerar conteúdo com a API Gemini:", error);
        throw new Error("Não foi possível gerar as ideias. Tente novamente mais tarde.");
    }
};
