import React, { useState } from 'react';
import { generateIdeasAndImage } from '../services/geminiService';
import { SparklesIcon } from '../components/Icon';

interface Result {
    ideas: string[];
    imageUrl: string;
}

const IdeaGeneratorScreen: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<Result | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Por favor, insira um tema para gerar ideias.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const generationResult = await generateIdeasAndImage(prompt);
            setResult(generationResult);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: Chá de camomila para uma noite de sono tranquila..."
                    className="w-full p-3 bg-white border border-black/5 rounded-xl focus:ring-2 focus:ring-brand-primary focus:outline-none transition duration-200 text-brand-text placeholder-brand-muted min-h-[100px] resize-none"
                    aria-label="Tema para gerar ideias"
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-brand-premium text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-brand-premium/30 transform hover:scale-105 disabled:bg-orange-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gerando...
                        </>
                    ) : (
                       <>
                         <SparklesIcon className="w-5 h-5" />
                         Gerar Ideias
                       </>
                    )}
                </button>
            </div>

            {error && (
                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-lg" role="alert">
                    <p className="font-bold">Erro</p>
                    <p>{error}</p>
                </div>
            )}

            {result && (
                <div className="space-y-4 animate-fade-in">
                    <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
                        <h3 className="text-lg font-bold text-brand-text">Banner Sugerido</h3>
                         <img src={result.imageUrl} alt="Imagem gerada por IA para o tema" className="w-full h-auto object-cover rounded-xl" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm space-y-3">
                        <h3 className="text-lg font-bold text-brand-text">Ideias de Conteúdo</h3>
                        <ul className="space-y-3 list-decimal list-inside text-brand-muted">
                            {result.ideas.map((idea, index) => (
                                <li key={index} className="p-3 bg-brand-background rounded-lg">{idea}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            
            {!isLoading && !result && (
                 <div className="text-center py-10 px-4">
                    <div className="inline-block bg-brand-secondary p-4 rounded-full">
                        <SparklesIcon className="w-10 h-10 text-brand-primary"/>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-brand-text">Dê vida às suas ideias</h3>
                    <p className="mt-1 text-sm text-brand-muted">
                        Use nosso gerador de IA para criar banners e textos inspiradores para seus posts e conteúdos sobre bem-estar natural.
                    </p>
                </div>
            )}

        </div>
    );
};

export default IdeaGeneratorScreen;
