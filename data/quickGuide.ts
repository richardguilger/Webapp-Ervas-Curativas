import { QuickGuideCategory } from '../types';

export const QUICK_GUIDE_DATA: QuickGuideCategory[] = [
    {
        id: 1,
        category: "Ossos",
        problems: [
            { problem: "Fraturas", herbs: ["Confrei"] },
            { problem: "Osteoartrite", herbs: ["Unha-de-gato", "Confrei", "Dente-de-leão", "Prímula", "Bardana", "Alho-poró"] },
            { problem: "Osteoporose", herbs: ["Cimífuga", "Dente-de-leão", "Prímula", "Licopódio", "Trevo-vermelho"] }
        ]
    },
    {
        id: 2,
        category: "Câncer",
        problems: [
            { problem: "Prevenção e tratamento", herbs: ["Ashwagandha", "Coração-sangrando", "Repolho", "Calêndula", "Unha-de-gato", "Amor-do-hortelão", "Confrei", "Dente-de-leão", "Ênula", "Linhaça", "Bardana", "Manjericão-santo", "Alho-poró", "Melissa", "Alcaçuz", "Cardo-mariano", "Orégano", "Beldroega", "Alecrim", "Prunela", "Cúrcuma", "Mostarda-branca", "Losna", "Picão"] },
            { problem: "Câncer de pele", herbs: ["Repolho", "Cardo-mariano", "Trevo-vermelho", "Azedinha"] },
            { problem: "Tumores", herbs: ["Repolho", "Amor-do-hortelão", "Verbasco", "Orégano", "Prunela", "Azedinha", "Picão"] }
        ]
    },
    {
        id: 3,
        category: "Doenças e problemas da infância",
        problems: [
            { problem: "Enurese noturna (xixi na cama)", herbs: ["Papoula-da-califórnia", "Erva-de-são-joão"] },
            { problem: "Cólicas", herbs: ["Camomila", "Endro", "Funcho", "Tanaceto", "Ançarinha-branca", "Melissa", "Prunela", "Alface-selvagem", "Gualtéria"] },
            { problem: "Infecção respiratória", herbs: ["Orégano", "Margarida"] }
        ]
    },
    {
        id: 4,
        category: "Problemas Digestivos e Intestinais",
        problems: [
            { problem: "Dor Abdominal", herbs: ["Agrimônia", "Babosa", "Uva-ursi", "Cimífuga", "Calêndula", "Camomila", "Chicória", "Cebolinha", "Funcho", "Kudzu", "Erva-de-bicho", "Alho-poró", "Erva-cidreira", "Tomilho"] },
            { problem: "Inchaço", herbs: ["Babosa", "Agastache", "Cimífuga", "Camomila", "Pulmonária", "Prímula", "Alho", "Alho-poró", "Erva-cidreira", "Levístico", "Artemísia", "Erva-de-são-joão", "Manjerona"] },
            { problem: "Cândida", herbs: ["Agastache", "Chicória", "Arnica-brasileira", "Melissa", "Orégano", "Losna"] },
            { problem: "Prisão de Ventre", herbs: ["Babosa", "Repolho", "Morugem", "Licopódio", "Dente-de-leão", "Endro", "Língua-de-vaca", "Funcho", "Tanaceto", "Linhaça", "Alho", "Melissa", "Ançarinha-branca", "Alho-poró", "Artemísia", "Tanchagem", "Azedinha"] },
            { problem: "Doença de Crohn", herbs: ["Babosa", "Calêndula", "Unha-de-gato", "Camomila", "Kudzu", "Hortelã-pimenta", "Tanchagem", "Prunela", "Losna"] },
            { problem: "Diarreia", herbs: ["Agrimônia", "Agastache", "Uva-ursi", "Pulmonária", "Dente-de-leão", "Língua-de-vaca", "Hidraste", "Artemísia", "Hortelã-pimenta", "Tanchagem", "Framboesa", "Prunela", "Erva-de-são-joão", "Manjerona", "Tomilho", "Morango-silvestre", "Peixinho", "Picão"] },
            { problem: "Diverticulite", herbs: ["Babosa"]},
            { problem: "Úlcera Duodenal", herbs: ["Calêndula", "Alho", "Picão"] },
            { problem: "Desinteria", herbs: ["Erva-de-são-joão", "Morango-silvestre", "Picão"]},
            { problem: "Gases", herbs: ["Babosa", "Agastache", "Angelica", "Monarda", "Licopódio", "Endro", "Funcho", "Alho", "Hortelã-pimenta", "Prunela", "Losna"] },
            { problem: "Intoxicação por Comida", herbs: ["Monarda", "Endro", "Funcho", "Alho", "Levístico", "Artemísia", "Mostarda-branca", "Losna"]},
            { problem: "Gastrite e Gastroenterite", herbs: ["Cimífuga", "Calêndula", "Camomila", "Chicória", "Cebolinha", "Prímula", "Kudzu", "Verbasco", "Hortelã-pimenta", "Prunela", "Azedinha", "Erva-de-são-joão", "Morango-silvestre", "Picão"] },
            { problem: "Azia", herbs: ["Babosa", "Funcho", "Girassol-batateiro", "Losna", "Picão"] },
            { problem: "Síndrome do Intestino Irritável", herbs: ["Babosa", "Borragem", "Unha-de-gato", "Camomila", "Endro", "Lúpolo", "Kudzu", "Hortelã-pimenta", "Tanchagem", "Losna"] },
            { problem: "Indigestão", herbs: ["Agrimônia", "Agastache", "Cimífuga", "Camomila", "Cebolinha", "Dente-de-leão", "Prímula", "Funcho", "Bardana", "Lúpolo", "Girassol-batateiro", "Melissa", "Erva-cidreira", "Alcaçuz", "Hortelã-pimenta", "Alecrim", "Sálvia", "Manjerona"] },
            { problem: "Doença Inflamatória Intestinal", herbs: ["Babosa", "Calêndula", "Levístico", "Tanchagem", "Losna"]},
            { problem: "Colite", herbs: ["Calêndula", "Hortelã-pimenta", "Prunela"]},
            { problem: "Problemas Intestinais em Geral", herbs: ["Repolho", "Calêndula", "Hortelã-pimenta", "Azedinha", "Tomilho", "Losna"]},
            { problem: "Vermes e Parasitas Intestinais", herbs: ["Margarida-amarela", "Chicória", "Ênula", "Tanaceto", "Alho", "Ançarinha-branca", "Artemísia", "Verbasco", "Tanchagem", "Prunela", "Azedinha", "Tomilho", "Losna"] },
            { problem: "Síndrome do Intestino Permeável", herbs: ["Alcaçuz", "Tanchagem"]},
            { problem: "Náuseas e Vômitos", herbs: ["Monarda", "Cebolinha", "Malva", "Hortelã-pimenta"]},
            { problem: "Úlcera Péptica", herbs: ["Calêndula", "Alcaçuz", "Malva", "Erva-de-são-joão", "Picão"]},
            { problem: "Prebióticos", herbs: ["Chicória", "Dente-de-leão", "Alho", "Bardana", "Girassol-batateiro", "Alho-poró"]},
            { problem: "Infecção Gastrointestinal", herbs: ["Monarda", "Alho", "Malva", "Tomilho"]},
            { problem: "Colite Ulcerativa", herbs: ["Pulmonária", "Tanchagem", "Alecrim", "Prunela"]},
            { problem: "Hemorroida", herbs: ["Picão"]},
        ]
    },
    {
        id: 5,
        category: "Dependência Química",
        problems: [
            { problem: "Alcoolismo", herbs: ["Kudzu", "Scutellaria"] },
            { problem: "Abstinência de Drogas", herbs: ["Scutellaria", "Erva-de-são-joão"] },
            { problem: "Abstinência de Nicotina", herbs: ["Lobélia", "Scutellaria", "Valeriana"] },
            { problem: "Abstinência de Opiáceos", herbs: ["Papoula-da-califórnia", "Erva-de-são-joão"] }
        ]
    },
    {
        id: 6,
        category: "Ouvidos",
        problems: [
            { problem: "Dor de Ouvido", herbs: ["Margarida-amarela", "Verbasco"] },
            { problem: "Infecção de Ouvido", herbs: ["Alho", "Verbasco", "Mil-folhas"] }
        ]
    },
    {
        id: 7,
        category: "Olhos",
        problems: [
            { problem: "Catarata", herbs: ["Manjericão-santo"] },
            { problem: "Conjuntivite e Infecção Oculares", herbs: ["Agrimônia", "Camomila", "Funcho", "Hidraste", "Margarida", "Peixinho", "Mil-folhas"] },
            { problem: "Inflamação Oculares", herbs: ["Calêndula", "Camomila", "Chicória", "Funcho", "Manjericão-santo", "Tanchagem", "Mil-folhas"] },
            { problem: "Glaucoma", herbs: ["Manjericão-santo"] },
            { problem: "Degeneração Macular", herbs: ["Borragem", "Manjericão-santo"] },
            { problem: "Terçol", herbs: ["Peixinho"] }
        ]
    },
    {
        id: 8,
        category: "Problemas Femininos",
        problems: [
            { problem: "Amenorreia (Ausência de Menstruação)", herbs: ["Chicória", "Manjerona"] },
            { problem: "Amamentação", herbs: ["Repolho", "Endro", "Funcho", "Barba-de-velho", "Manjerona", "Picão"] },
            { problem: "Parto", herbs: ["Uva-ursi", "Barba-de-velho", "Sálvia", "Mil-folhas", "Picão"] },
            { problem: "Contraceptivo", herbs: ["Tanaceto"] },
            { problem: "Endometriose", herbs: ["Dente-de-leão", "Prímula", "Linhaça", "Alho", "Alho-poró", "Mil-folhas"] },
            { problem: "Aumento da Fertilidade", herbs: ["Prímula", "Alcaçuz", "Rhodiola", "Manjerona"] },
            { problem: "Hemorragia Vaginal Pós-parto", herbs: ["Uva-ursi"] },
            { problem: "Desregulação Hormonal", herbs: ["Unha-de-gato", "Prímula", "Funcho", "Linhaça", "Kudzu", "Cardo-mariano", "Artemísia", "Rhodiola", "Sálvia", "Barba-de-velho", "Erva-de-são-joão"] },
            { problem: "Sintomas da Menopausa", herbs: ["Cimífuga", "Prímula", "Linhaça", "Kudzu", "Melissa", "Alcaçuz", "Trevo-vermelho", "Sálvia", "Erva-de-são-joão", "Manjerona"] },
            { problem: "Depressão Pós-Parto", herbs: ["Uva-ursi", "Erva-de-são-joão"] },
            { problem: "Gravidez e Trabalho de Parto", herbs: ["Alho-poró", "Framboesa", "Repolho", "Picão"] },
            { problem: "Tensão Pré-menstrual (TPM)", herbs: ["Cimífuga", "Borragem", "Calêndula", "Prímula", "Funcho", "Lúpolo", "Melissa", "Alcaçuz", "Framboesa", "Erva-de-são-joão", "Manjerona"] },
            { problem: "Aumento da Libido", herbs: ["Cimífuga", "Barba-de-velho", "Repolho"] },
            { problem: "Inflamação da Uretra", herbs: ["Uva-ursi", "Grama-de-ponta"] },
            { problem: "Infecção Vaginal", herbs: ["Amaranto", "Uva-ursi", "Hidraste"] }
        ]
    },
    {
        id: 9,
        category: "Glândulas",
        problems: [
            { problem: "Fadiga de Origem Adrenal", herbs: ["Ginseng-americano", "Rhodiola"] },
            { problem: "Glândulas Endócrinas", herbs: ["Cardo-mariano", "Barba-de-velho"] },
            { problem: "Baço Inchado", herbs: ["Rhodiola", "Urtiga"] },
            { problem: "Tireoide", herbs: ["Melissa", "Rhodiola"] }
        ]
    },
    {
        id: 10,
        category: "Cabelos",
        problems: [
            { problem: "Queda de Cabelos", herbs: ["Prímula", "Licopódio", "Alecrim", "Sálvia"] },
            { problem: "Piolhos", herbs: ["Lavanda", "Tomilho"] }
        ]
    },
    {
        id: 11,
        category: "Coração e Sistema Circulatório",
        problems: [
            { problem: "Anemia", herbs: ["Dente-de-leão", "Bardana", "Ançarinha-branca", "Alho-poró", "Urtiga"] },
            { problem: "Angina", herbs: ["Agastache"] },
            { problem: "Pressão Alta", herbs: ["Borragem", "Unha-de-gato", "Cebolinha", "Prímula", "Alho", "Kudzu", "Erva-de-bicho", "Lavanda", "Alho-poró", "Melissa", "Artemísia", "Framboesa", "Erva-de-são-joão", "Manjerona", "Cúrcuma", "Valeriana", "Picão"] },
            { problem: "Pressão Baixa", herbs: ["Arnica-brasileira", "Hidraste", "Alecrim", "Cúrcuma"] },
            { problem: "Limpeza do Sangue", herbs: ["Morugem", "Tanaceto", "Mil-folhas"] },
            { problem: "Afinar o Sangue", herbs: ["Trevo-vermelho", "Erva-de-cheiro", "Cúrcuma"] },
            { problem: "Insuficiência Cardíaca", herbs: ["Urtiga"] },
            { problem: "Baixar o Colesterol", herbs: ["Amaranto", "Dente-de-leão", "Prímula", "Linhaça", "Alho", "Alho-poró", "Cardo-mariano", "Figo-da-índia", "Beldroega", "Trevo-vermelho", "Barba-de-velho"] },
            { problem: "Aumento da Circulação (vasodilatador)", herbs: ["Angelica", "Erva-de-cobra", "Alho", "Bardana", "Kudzu", "Figo-da-índia", "Trevo-vermelho", "Alecrim", "Urtiga", "Cúrcuma", "Picão"] },
            { problem: "Coagulação do Sangue", herbs: ["Agrimônia", "Amaranto", "Pulmonária", "Kudzu", "Alho-poró", "Artemísia", "Trevo-vermelho", "Peixinho", "Mil-folhas"] },
            { problem: "Infarto", herbs: ["Cebolinha", "Orégano", "Cúrcuma"] },
            { problem: "Doenças Cardíacas", herbs: ["Unha-de-gato", "Cebolinha", "Lúpolo", "Erva-de-bicho", "Alho-poró", "Cardo-mariano", "Figo-da-índia", "Trevo-vermelho"] },
            { problem: "Isquemia Cardíaca", herbs: ["Kudzu", "Picão"] },
            { problem: "Sangramento do Nariz (Epistaxe)", herbs: ["Amaranto", "Urtiga", "Mil-folhas"] },
            { problem: "Flebite", herbs: ["Arnica"] },
            { problem: "Redução da Frequência Cardíaca", herbs: ["Valeriana"] },
            { problem: "Tônico para o Coração", herbs: ["Purungo", "Peixinho"] },
            { problem: "Varicose", herbs: ["Morugem"] }
        ]
    },
    {
        id: 12,
        category: "Sistema Imunológico",
        problems: [
            { problem: "Alergias", herbs: ["Borragem", "Camomila", "Equinácea", "Prímula", "Alho", "Arnica-brasileira", "Levístico", "Prunela", "Urtiga", "Picão"] },
            { problem: "Doenças Autoimunes", herbs: ["Unha-de-gato", "Cebolinha", "Prímula", "Linhaça", "Tanchagem"] },
            { problem: "Linfonodos", herbs: ["Coração-sangrando", "Calêndula"] },
            { problem: "Lúpus", herbs: ["Linhaça"] },
            { problem: "Esclerose Múltipla", herbs: ["Prímula", "Linhaça"] },
            { problem: "Aumentar a Imunidade", herbs: ["Ashwagandha", "Margarida-amarela", "Calêndula", "Unha-de-gato", "Cebolinha", "Dente-de-leão", "Equinácea", "Hidraste", "Bardana", "Tomilho", "Orégano", "Azedinha"] }
        ]
    },
    {
        id: 13,
        category: "Infecções",
        problems: [
            { problem: "Antiviral", herbs: ["Agastache", "Calêndula", "Unha-de-gato", "Equinácea", "Hidraste", "Alho-poró", "Melissa", "Tomilho", "Alcaçuz", "Orégano", "Hortelã-pimenta", "Prunela", "Erva-de-são-joão", "Tomilho"] },
            { problem: "Bacillus", herbs: ["Chicória", "Artemísia"] },
            { problem: "Catapora", herbs: ["Amor-do-hortelão", "Licopódio", "Calêndula"] },
            { problem: "Gripes e Resfriados", herbs: ["Ginseng-americano", "Agastache", "Angelica", "Monarda", "Margarida-amarela", "Erva-de-cobra", "Licopódio", "Equinácea", "Tanaceto", "Linhaça", "Alho", "Arnica-brasileira", "Hidraste", "Ançarinha-branca", "Lavanda", "Alcaçuz", "Malva", "Azedinha", "Erva-de-são-joão", "Erva-de-cheiro", "Sálvia", "Mil-folhas"] },
            { problem: "Dengue", herbs: ["Erva-de-cobra", "Unha-de-gato"] },
            { problem: "Escherichia coli", herbs: ["Chicória", "Artemísia", "Losna"] },
            { problem: "Vírus Epstein-Barr", herbs: ["Unha-de-gato", "Equinácea", "Alho", "Melissa", "Orégano", "Erva-de-são-joão"] },
            { problem: "Infecções Fúngicas (Sapinho, Infecção por Levedura, Pé de Atleta)", herbs: ["Agastache", "Angelica", "Calêndula", "Unha-de-gato", "Cebolinha", "Licopódio", "Equinácea", "Alho", "Arnica-brasileira", "Hidraste", "Bardana", "Licopódio", "Erva-de-bicho", "Alho-poró", "Melissa", "Tomilho", "Artemísia", "Orégano", "Beldroega", "Alecrim", "Chicória", "Mostarda-branca", "Losna", "Mil-folhas"] },
            { problem: "Gonorreia", herbs: ["Uva-ursi", "Grama-de-ponta"] },
            { problem: "Herpes", herbs: ["Agastache", "Calêndula", "Unha-de-gato", "Morugem", "Equinácea", "Bardana", "Melissa", "Prunela", "Erva-de-são-joão", "Picão"] },
            { problem: "HIV/AIDS", herbs: ["Alcaçuz", "Prunela"] },
            { problem: "HPV (Vírus do Papiloma Humano)", herbs: ["Unha-de-gato"] },
            { problem: "Infecções em Geral (viral, bacteriano e por parasitas)", herbs: ["Amaranto", "Erva-de-cobra", "Confrei", "Equinácea", "Alho", "Hidraste", "Alho-poró", "Tomilho", "Prunela", "Azedinha", "Mostarda-branca", "Picão"] },
            { problem: "Laringite", herbs: ["Funcho", "Arnica-brasileira", "Lavanda", "Verbasco"] },
            { problem: "Sistema Linfático", herbs: ["Calêndula", "Amor-do-hortelão", "Bardana"] },
            { problem: "Doença de Lyme", herbs: ["Unha-de-gato", "Alho", "Losna"] },
            { problem: "Malária", herbs: ["Erva-de-cobra", "Chicória", "Licopódio", "Losna", "Picão"] },
            { problem: "Sarampo", herbs: ["Amor-do-hortelão", "Kudzu", "Mil-folhas"] },
            { problem: "Mononucleose", herbs: ["Alho", "Artemísia"] },
            { problem: "Staphylococcus aureus resistente à meticilina (SARM)", herbs: ["Peixinho"] },
            { problem: "Parasitas e Vermes", herbs: ["Margarida-amarela", "Chicória", "Tanaceto", "Alho", "Orégano", "Azedinha", "Tomilho", "Losna"] },
            { problem: "Pseudomonas", herbs: ["Chicória", "Artemísia", "Alecrim", "Picão"] },
            { problem: "Roseola", herbs: ["Morugem"] },
            { problem: "Salmonella", herbs: ["Chicória", "Losna"] },
            { problem: "Herpes-Zóster", herbs: ["Morugem", "Equinácea", "Melissa", "Orégano", "Erva-de-são-joão"] },
            { problem: "Dor de Garganta", herbs: ["Amaranto", "Angelica", "Monarda", "Borragem", "Amor-do-hortelão", "Confrei", "Pulmonária", "Funcho", "Linhaça", "Alho", "Bardana", "Arnica", "Licopódio", "Lavanda", "Alcaçuz", "Tanchagem", "Sálvia", "Prunela", "Erva-de-cheiro", "Tomilho", "Mostarda-branca", "Morango-silvestre", "Gualtéria", "Peixinho"] }
        ]
    },
    {
        id: 14,
        category: "Fígado, Vesícula Biliar e Baço",
        problems: [
            { problem: "Desintoxicação do Fígado", herbs: ["Calêndula", "Dente-de-leão", "Língua-de-vaca", "Bardana", "Lúpolo", "Melissa", "Cardo-mariano", "Artemísia", "Prunela", "Erva-de-são-joão", "Urtiga", "Peixinho", "Picão"] },
            { problem: "Gordura no Fígado", herbs: ["Chicória", "Dente-de-leão", "Cardo-mariano"] },
            { problem: "Fortalecer o Fígado, Vesícula Biliar e Baço", herbs: ["Chicória", "Dente-de-leão", "Língua-de-vaca", "Urtiga", "Picão"] },
            { problem: "Doenças da Vesícula Biliar", herbs: ["Agrimônia", "Calêndula", "Chicória", "Grama-de-ponta"] },
            { problem: "Pedras na Vesícula", herbs: ["Dente-de-leão", "Cardo-mariano"] },
            { problem: "Hepatite B", herbs: ["Unha-de-gato", "Prunela"] },
            { problem: "Hepatite C", herbs: ["Alcaçuz", "Prunela"] },
            { problem: "Icterícia", herbs: ["Chicória", "Grama-de-ponta", "Dente-de-leão", "Alho", "Lúpolo", "Prunela"] },
            { problem: "Danos e Problemas no Fígado", herbs: ["Dente-de-leão", "Prímula", "Cardo-mariano", "Chicória", "Hortelã-pimenta", "Prunela"] },
            { problem: "Fígado Lento", herbs: ["Agrimônia"] }
        ]
    },
    {
        id: 15,
        category: "Problemas Masculinos",
        problems: [
            { problem: "Disfunção Erétil", herbs: ["Ginseng-americano"] },
            { problem: "Problemas Hormonais", herbs: ["Linhaça", "Sálvia"] },
            { problem: "Polução Noturna", herbs: ["Sálvia"] },
            { problem: "Ejaculação Precoce", herbs: ["Sálvia"] },
            { problem: "Próstata Inchada (HPB e Câncer de Próstata)", herbs: ["Repolho", "Amor-do-hortelão", "Grama-de-ponta", "Linhaça", "Alho-poró", "Cardo-mariano"] },
            { problem: "Aumento da Potência Sexual", herbs: ["Rhodiola"] }
        ]
    },
    {
        id: 16,
        category: "Problemas Bucais, Orais e Dentais",
        problems: [
            { problem: "Sangramento e Inchaço das Gengivas", herbs: ["Babosa", "Borragem", "Confrei", "Funcho", "Ançarinha-branca", "Tanchagem", "Tomilho"] },
            { problem: "Herpes Labial", herbs: ["Agastache", "Calêndula", "Equinácea", "Linhaça", "Bardana", "Melissa", "Prunela", "Erva-de-são-joão"] },
            { problem: "Gengivite", herbs: ["Calêndula", "Tomilho"] },
            { problem: "Mal Hálito", herbs: ["Endro", "Tanaceto", "Alecrim"] },
            { problem: "Pasta de Dente", herbs: ["Babosa", "Calêndula", "Alecrim", "Tomilho"] },
            { problem: "Lesões na Boca", herbs: ["Amaranto", "Tanaceto", "Peixinho", "Mil-folhas", "Picão"] },
            { problem: "Candidíase Oral", herbs: ["Alho", "Arnica-brasileira"] },
            { problem: "Dor de Dente", herbs: ["Coração-sangrando", "Papoula-da-califórnia", "Arnica", "Ançarinha-branca", "Tanchagem", "Picão"] }
        ]
    },
    {
        id: 17,
        category: "Músculos, Juntas e Tendões",
        problems: [
            { problem: "Artrite", herbs: ["Borragem", "Repolho", "Morugem", "Grama-de-ponta", "Dente-de-leão", "Prímula", "Arnica-brasileira", "Arnica", "Erva-de-bicho", "Ançarinha-branca", "Alho-poró", "Lemon", "Hortelã-pimenta", "Figo-da-índia", "Alecrim", "Barba-de-velho", "Erva-de-são-joão", "Urtiga", "Cúrcuma", "Repolho", "Mostarda-branca", "Morango-silvestre"] },
            { problem: "Bursite", herbs: ["Erva-cidreira"] },
            { problem: "Túnel do Carpo", herbs: ["Calêndula", "Repolho"] },
            { problem: "Dor nas Juntas", herbs: ["Angelica", "Ashwagandha", "Coração-sangrando", "Repolho", "Confrei", "Arnica-brasileira", "Arnica", "Erva-cidreira", "Lobélia", "Levístico", "Hortelã-pimenta", "Figo-da-índia", "Repolho", "Mostarda-branca", "Morango-silvestre"] },
            { problem: "Dor nos Músculos", herbs: ["Agastache", "Camomila", "Arnica", "Lavanda", "Lobélia", "Figo-da-índia", "Erva-de-são-joão", "Urtiga", "Manjerona", "Repolho", "Gualtéria", "Picão"] },
            { problem: "Espasmos Musculares", herbs: ["Ginseng-americano", "Coração-sangrando", "Calêndula", "Papoula-da-califórnia", "Camomila", "Grama-de-ponta", "Endro", "Lúpolo", "Lavanda", "Lobélia", "Artemísia", "Verbasco", "Hortelã-pimenta", "Scutellaria", "Urtiga", "Manjerona", "Tomilho", "Repolho", "Peixinho"] },
            { problem: "Distensão Muscular", herbs: ["Coração-sangrando", "Confrei", "Arnica", "Urtiga", "Mil-folhas"] },
            { problem: "Artrite Reumatoide e Reumatismo", herbs: ["Ashwagandha", "Unha-de-gato", "Morugem", "Cebolinha", "Licopódio", "Grama-de-ponta", "Prímula", "Tanaceto", "Bardana", "Arnica", "Erva-de-bicho", "Alho-poró", "Erva-cidreira", "Hortelã-pimenta", "Figo-da-índia", "Alecrim", "Barba-de-velho", "Erva-de-são-joão", "Urtiga", "Mostarda-branca", "Morango-silvestre"] },
            { problem: "Tendinite", herbs: ["Urtiga"] }
        ]
    },
    {
        id: 18,
        category: "Sistema Nervoso e Cabeça",
        problems: [
            { problem: "Alzheimer", herbs: ["Ashwagandha", "Borragem", "Purungo", "Licopódio", "Melissa", "Cúrcuma", "Scutellaria"] },
            { problem: "Ansiedade", herbs: ["Agastache", "Angelica", "Ashwagandha", "Cimífuga", "Coração-sangrando", "Papoula-da-califórnia", "Lúpolo", "Lavanda", "Melissa", "Erva-cidreira", "Lobélia", "Rhodiola", "Scutellaria", "Erva-de-são-joão", "Valeriana", "Mil-folhas"] },
            { problem: "Estimular o Apetite", herbs: ["Coração-sangrando", "Cebolinha", "Hortelã-pimenta", "Losna"] },
            { problem: "Concentração", herbs: ["Ginseng-americano", "Ashwagandha", "Rhodiola", "Alecrim"] },
            { problem: "Confusão Mental", herbs: ["Barba-de-velho"] },
            { problem: "Demência", herbs: ["Purungo", "Licopódio", "Melissa", "Alecrim", "Barba-de-velho"] },
            { problem: "Depressão", herbs: ["Ginseng-americano", "Ashwagandha", "Purungo", "Prímula", "Manjericão-santo", "Melissa", "Lobélia", "Rhodiola", "Scutellaria", "Barba-de-velho", "Erva-de-são-joão", "Cúrcuma", "Valeriana"] },
            { problem: "Epilepsia e Convulsões", herbs: ["Lúpolo", "Lavanda", "Artemísia", "Scutellaria", "Tomilho", "Valeriana", "Repolho"] },
            { problem: "Dores de Cabeça e Enxaqueca", herbs: ["Agrimônia", "Purungo", "Tanaceto", "Hortelã-pimenta", "Alecrim", "Scutellaria", "Manjerona", "Gualtéria", "Mil-folhas", "Picão"] },
            { problem: "Hiperatividade", herbs: ["Prímula", "Melissa"] },
            { problem: "Insônia", herbs: ["Agrimônia", "Cimífuga", "Camomila", "Lúpolo", "Melissa", "Artemísia", "Scutellaria", "Erva-de-são-joão", "Valeriana", "Alface-selvagem"] },
            { problem: "Perda de Memória", herbs: ["Ginseng-americano", "Ashwagandha", "Purungo", "Melissa", "Rhodiola", "Alecrim", "Sálvia", "Barba-de-velho", "Cúrcuma"] },
            { problem: "Dor nos Nervos e Neuralgias", herbs: ["Angelica", "Coração-sangrando", "Morugem", "Prímula", "Lavanda", "Hortelã-pimenta", "Erva-de-são-joão", "Urtiga"] },
            { problem: "Comportamento Obsessivo Compulsivo", herbs: ["Erva-de-são-joão", "Valeriana"] },
            { problem: "Analgésicos", herbs: ["Babosa", "Coração-sangrando", "Chicória", "Confrei", "Tanaceto", "Arnica", "Manjericão-santo", "Alface-selvagem", "Gualtéria", "Mil-folhas"] },
            { problem: "Ataques de Pânico", herbs: ["Valeriana"] },
            { problem: "Parkinson", herbs: ["Ashwagandha", "Linhaça", "Scutellaria"] },
            { problem: "Estresse Pós-Traumático", herbs: ["Papoula-da-califórnia", "Rhodiola"] },
            { problem: "Inquietação", herbs: ["Melissa", "Erva-de-são-joão", "Alface-selvagem"] },
            { problem: "Esquizofrenia", herbs: ["Papoula-da-califórnia"] },
            { problem: "Ciático", herbs: ["Hortelã-pimenta", "Erva-de-são-joão", "Urtiga", "Gualtéria"] },
            { problem: "Sedativos", herbs: ["Cimífuga", "Coração-sangrando", "Papoula-da-califórnia", "Chicória", "Lúpolo", "Lavanda", "Alface-selvagem"] },
            { problem: "Estresse", herbs: ["Ginseng-americano", "Ashwagandha", "Borragem", "Manjericão-santo", "Lavanda", "Melissa", "Erva-cidreira", "Rhodiola", "Scutellaria", "Manjerona"] },
            { problem: "Acidente Vascular Cerebral (AVC)", herbs: ["Orégano"] }
        ]
    },
    {
        id: 19,
        category: "Pâncreas",
        problems: [{ problem: "Diabetes", herbs: ["Babosa", "Amaranto", "Ginseng-americano", "Purungo", "Repolho", "Chicória", "Ênula", "Prímula", "Alho", "Hidraste", "Bardana", "Licopódio", "Kudzu", "Alho-poró", "Melissa", "Cardo-mariano", "Tanchagem", "Figo-da-índia", "Beldroega", "Prunela", "Azedinha", "Barba-de-velho", "Manjerona"] }]
    },
    {
        id: 20,
        category: "Problemas Respiratórios e Pulmões",
        problems: [
            { problem: "Asma", herbs: ["Angelica", "Camomila", "Confrei", "Pulmonária", "Equinácea", "Ênula", "Prímula", "Manjericão-santo", "Lúpolo", "Lavanda", "Tomilho", "Lobélia", "Artemísia", "Verbasco", "Orégano", "Margarida", "Beldroega", "Prunela", "Urtiga", "Repolho", "Picão"] },
            { problem: "Bronquite", herbs: ["Agastache", "Angelica", "Erva-de-cobra", "Camomila", "Pulmonária", "Equinácea", "Ênula", "Alho", "Manjericão-santo", "Licopódio", "Lavanda", "Erva-cidreira", "Lobélia", "Malva", "Verbasco", "Erva-de-cheiro", "Tomilho", "Repolho", "Mostarda-branca", "Picão"] },
            { problem: "Congestão", herbs: ["Agastache", "Monarda", "Erva-de-cobra", "Camomila", "Licopódio", "Confrei", "Linhaça", "Alho", "Arnica-brasileira", "Lavanda", "Tomilho", "Erva-cidreira", "Margarida", "Erva-de-são-joão", "Erva-de-cheiro", "Mostarda-branca", "Mil-folhas"] },
            { problem: "Tosse", herbs: ["Angelica", "Confrei", "Linhaça", "Bardana", "Lavanda", "Alcaçuz", "Malva", "Margarida", "Tomilho", "Sálvia"] },
            { problem: "Enfisema", herbs: ["Ginger", "Malva", "Verbasco", "Erva-de-são-joão"] },
            { problem: "Expectorante", herbs: ["Erva-de-cobra", "Prímula", "Ênula", "Funcho", "Lobélia", "Levístico", "Verbasco", "Tanchagem", "Erva-de-são-joão", "Tomilho", "Repolho"] },
            { problem: "Inflamação do Aparelho Respiratório", herbs: ["Licopódio", "Hidraste", "Ançarinha-branca", "Tanchagem", "Erva-de-são-joão", "Manjerona"] },
            { problem: "Pleurisia", herbs: ["Lobélia"] },
            { problem: "Pneumonia", herbs: ["Borragem", "Lobélia", "Mostarda-branca"] },
            { problem: "Traqueíte", herbs: ["Verbasco"] },
            { problem: "Tuberculose", herbs: ["Margarida-amarela", "Ênula", "Verbasco", "Rhodiola", "Erva-de-são-joão", "Repolho"] },
            { problem: "Coqueluche", herbs: ["Camomila", "Pulmonária", "Ênula", "Prímula", "Linhaça", "Alho", "Lavanda", "Margarida"] }
        ]
    },
    {
        id: 21,
        category: "Problemas de Pele",
        problems: [
            { problem: "Irritação e esfoladuras", herbs: ["Babosa", "Margarida-amarela", "Purungo", "Calêndula", "Morugem", "Língua-de-vaca", "Tanaceto", "Arnica-brasileira", "Hidraste", "Ançarinha-branca", "Lobélia", "Levístico", "Hortelã-pimenta"] },
            { problem: "Abcessos", herbs: ["Amor-do-hortelão", "Linhaça", "Mil-folhas"] },
            { problem: "Acne", herbs: ["Angelica", "Calêndula", "Morugem", "Chicória", "Amor-do-hortelão", "Prímula", "Linhaça", "Alho", "Bardana", "Levístico", "Cardo-mariano", "Tanchagem", "Tomilho"] },
            { problem: "Escaras", herbs: ["Lúpolo"] },
            { problem: "Furúnculos", herbs: ["Purungo", "Morugem", "Chicória", "Amor-do-hortelão", "Pulmonária", "Linhaça", "Arnica-brasileira", "Hidraste", "Bardana", "Lúpolo", "Lobélia", "Picão"] },
            { problem: "Hematomas", herbs: ["Coração-sangrando", "Confrei", "Prímula", "Bardana", "Arnica", "Lúpolo", "Malva", "Margarida", "Erva-de-são-joão", "Repolho", "Confrei", "Mil-folhas"] },
            { problem: "Queimaduras", herbs: ["Agastache", "Calêndula", "Amor-do-hortelão", "Confrei", "Pulmonária", "Equinácea", "Tanaceto", "Linhaça", "Arnica-brasileira", "Bardana", "Ançarinha-branca", "Malva", "Artemísia", "Erva-de-são-joão", "Urtiga", "Repolho", "Confrei", "Morango-silvestre"] },
            { problem: "Carbúnculos", herbs: ["Linhaça"] },
            { problem: "Queimadura de Frio", herbs: ["Arnica", "Mostarda-branca"] },
            { problem: "Calos", herbs: ["Dente-de-leão", "Alho"] },
            { problem: "Cortes", herbs: ["Margarida-amarela", "Calêndula", "Amor-do-hortelão", "Pulmonária", "Arnica-brasileira", "Verbasco", "Tanchagem", "Erva-de-são-joão", "Mil-folhas", "Morango-silvestre"] },
            { problem: "Dermatite", herbs: ["Morugem", "Licopódio", "Levístico"] },
            { problem: "Assaduras de bebê", herbs: ["Calêndula"] },
            { problem: "Eczema", herbs: ["Babosa", "Calêndula", "Camomila", "Morugem", "Chicória", "Amor-do-hortelão", "Licopódio", "Confrei", "Pulmonária", "Dente-de-leão", "Prímula", "Linhaça", "Bardana", "Arnica", "Licopódio", "Ançarinha-branca", "Lavanda", "Alcaçuz", "Cardo-mariano", "Figo-da-índia", "Trevo-vermelho", "Erva-de-são-joão", "Urtiga"] },
            { problem: "Corpos estranhos (tipo farpas)", herbs: ["Tanchagem"] },
            { problem: "Hemorróidas", herbs: ["Calêndula", "Pulmonária", "Prímula", "Verbasco", "Prunela", "Barba-de-velho", "Erva-de-são-joão", "Urtiga", "Peixinho", "Mil-folhas"] },
            { problem: "Hidradenite Supurativa", herbs: ["Funcho"] },
            { problem: "Urticária", herbs: ["Morugem", "Licopódio", "Figo-da-índia"] },
            { problem: "Impetigo", herbs: ["Bardana"] },
            { problem: "Infecções em Geral", herbs: ["Babosa", "Agastache", "Margarida-amarela", "Borragem", "Purungo", "Repolho", "Calêndula", "Camomila", "Confrei", "Grama-de-ponta", "Equinácea", "Manjericão-santo", "Lúpolo", "Verbasco", "Framboesa", "Erva-de-são-joão", "Mil-folhas"] },
            { problem: "Picada de Insetos", herbs: ["Licopódio", "Equinácea", "Bardana", "Margarida", "Tanchagem", "Prunela", "Urtiga", "Repolho", "Peixinho"] },
            { problem: "Rachaduras nos Lábios", herbs: ["Calêndula"] },
            { problem: "Úlceras na Boca", herbs: ["Amaranto", "Borragem", "Pulmonária", "Hidraste"] },
            { problem: "Coceira e Irritação por Plantas Venenosas", herbs: ["Agastache", "Erva-de-bicho", "Artemísia", "Prunela"] },
            { problem: "Psoríase", herbs: ["Babosa", "Calêndula", "Amor-do-hortelão", "Licopódio", "Confrei", "Dente-de-leão", "Prímula", "Linhaça", "Bardana", "Lavanda", "Levístico", "Cardo-mariano", "Figo-da-índia", "Trevo-vermelho", "Valeriana"] },
            { problem: "Micoses", herbs: ["Calêndula", "Chicória", "Pulmonária", "Dente-de-leão", "Bardana", "Manjericão-santo", "Orégano", "Beldroega"] },
            { problem: "Herpes-Zóster", herbs: ["Morugem", "Equinácea", "Alho", "Melissa", "Erva-de-são-joão"] },
            { problem: "Infecção por Staphylococcus", herbs: ["Chicória", "Erva-cidreira", "Malva", "Artemísia", "Orégano", "Alecrim"] },
            { problem: "Queimadura de Sol", herbs: ["Babosa", "Calêndula", "Amor-do-hortelão", "Licopódio", "Verbasco", "Erva-de-são-joão", "Urtiga", "Morango-silvestre"] },
            { problem: "Úlceras na Pele", herbs: ["Repolho", "Calêndula", "Hidraste", "Verbasco", "Framboesa", "Prunela", "Gualtéria"] },
            { problem: "Verrugas", herbs: ["Dente-de-leão", "Alho", "Verbasco", "Tomilho", "Alface-selvagem"] }
        ]
    },
    {
        id: 22,
        category: "Machucados",
        problems: [
            { problem: "Machucados", herbs: ["Agrimônia", "Babosa", "Agastache", "Margarida-amarela", "Borragem", "Repolho", "Calêndula", "Licopódio", "Confrei", "Pulmonária", "Dente-de-leão", "Língua-de-vaca", "Equinácea", "Prímula", "Arnica-brasileira", "Arnica", "Lúpulo", "Verbasco", "Margarida", "Tanchagem", "Framboesa", "Sálvia", "Prunela", "Erva-de-são-joão", "Urtiga", "Cúrcuma", "Mostarda-branca", "Morango-silvestre", "Peixinho", "Picão"] }
        ]
    },
    {
        id: 23,
        category: "Venenos",
        problems: [
            { problem: "Induzir o vômito", herbs: ["Lobélia"] },
            { problem: "Envenenamento por cogumelos", herbs: ["Cardo-mariano"] },
            { problem: "Ingestão de Venenos", herbs: ["Lobélia", "Mostarda-branca"] }
        ]
    },
    {
        id: 24,
        category: "Aparelho Urinário",
        problems: [
            { problem: "Cistite", herbs: ["Uva-ursi", "Pulmonária", "Grama-de-ponta", "Tanaceto", "Lavanda", "Tanchagem"] },
            { problem: "Bexiga Irritável", herbs: ["Lúpolo"] },
            { problem: "Obstruções", herbs: ["Amor-do-hortelão"] },
            { problem: "Infecções Urinárias", herbs: ["Uva-ursi", "Amor-do-hortelão", "Licopódio", "Pulmonária", "Grama-de-ponta", "Dente-de-leão", "Equinácea", "Funcho", "Arnica-brasileira", "Hidraste", "Lavanda", "Alho-poró", "Levístico", "Malva", "Tanchagem", "Azedinha"] },
        ]
    },
    {
        id: 25,
        category: "Para o Corpo Inteiro",
        problems: [
            { problem: "Adaptógenos", herbs: ["Ginseng-americano", "Unha-de-gato", "Rhodiola"] },
            { problem: "Antioxidantes", herbs: ["Ginseng-americano", "Cúrcuma", "Borragem", "Purungo", "Unha-de-gato"] },
            { problem: "Desintoxicação", herbs: ["Dente-de-leão", "Amor-do-hortelão", "Pulmonária", "Funcho", "Hidraste", "Bardana"] },
            { problem: "Diuréticos", herbs: ["Amaranto", "Uva-ursi", "Chicória", "Cebolinha", "Amor-do-hortelão", "Grama-de-ponta"] },
            { problem: "Edema (inchaço)", herbs: ["Licopódio"] },
            { problem: "Fadiga", herbs: ["Ginseng-americano", "Unha-de-gato", "Rhodiola", "Barba-de-velho", "Erva-de-são-joão", "Urtiga"] },
            { problem: "Gota", herbs: ["Uva-ursi", "Grama-de-ponta", "Arnica-brasileira", "Alho-poró", "Hortelã-pimenta"] },
            { problem: "Anti-inflamatórios", herbs: ["Agrimônia", "Purungo", "Repolho", "Unha-de-gato", "Chicória", "Cebolinha", "Amor-do-hortelão", "Confrei", "Pulmonária", "Dente-de-leão", "Arnica-brasileira", "Arnica", "Manjericão-santo", "Lúpolo", "Licopódio", "Melissa", "Levístico", "Malva", "Verbasco", "Margarida", "Tanchagem", "Figo-da-índia", "Alecrim", "Prunela", "Azedinha", "Urtiga", "Tomilho", "Cúrcuma", "Gualtéria"] },
            { problem: "Parar de Fumar", herbs: ["Lobélia", "Scutellaria", "Erva-de-são-joão", "Valeriana"] },
            { problem: "Aumento da Resistência Física", herbs: ["Ashwagandha", "Rhodiola"] },
            { problem: "Estimula o Metabolismo", herbs: ["Coração-sangrando", "Orégano"] }
        ]
    },
    {
        id: 26,
        category: "Cuidados Emergenciais",
        problems: [
            { problem: "Sangramento Externo", herbs: ["Agrimônia", "Amaranto", "Amor-do-hortelão", "Hidraste", "Mil-folhas"] },
            { problem: "Febre", herbs: ["Monarda", "Erva-de-cobra", "Amor-do-hortelão", "Tanaceto", "Alho", "Erva-de-cheiro", "Mil-folhas"] },
            { problem: "Sangramento Interno", herbs: ["Hidraste", "Prunela", "Mil-folhas"] },
            { problem: "Picada de Cobra", herbs: ["Margarida-amarela", "Equinácea", "Verbasco", "Tanchagem", "Figo-da-índia"] },
            { problem: "Picada de Aranha", herbs: ["Equinácea", "Tanchagem"] }
        ]
    },
    {
        id: 27,
        category: "Outros",
        problems: [
            { problem: "Plantas com Propriedades Antibióticas", herbs: ["Agrimônia", "Confrei", "Purungo", "Calêndula", "Unha-de-gato", "Chicória", "Cebolinha", "Amor-do-hortelão", "Pulmonária", "Equinácea", "Alho", "Arnica-brasileira", "Hidraste", "Bardana", "Arnica", "Licopódio", "Lavanda", "Alho-poró", "Melissa", "Tomilho", "Malva", "Artemísia", "Orégano", "Tanchagem", "Hortelã-pimenta", "Alecrim", "Sálvia", "Morango-silvestre", "Mostarda-branca", "Losna", "Mil-folhas", "Picão"] },
            { problem: "Redução da Glicemia", herbs: ["Babosa", "Amaranto", "Ginseng-americano", "Purungo", "Repolho", "Dente-de-leão", "Alho", "Bardana", "Hidraste", "Licopódio", "Girassol-batateiro", "Alho-poró", "Melissa"] },
            { problem: "Síndrome das Pernas Inquietas", herbs: ["Valeriana", "Scutellaria"] },
            { problem: "Escabiose, Piolhos e Ácaros", herbs: ["Tomilho"] },
            { problem: "Streptococcus", herbs: ["Malva", "Artemísia"] },
            { problem: "Sífilis", herbs: ["Uva-ursi"] },
            { problem: "Tétano", herbs: ["Morugem"] },
            { problem: "Amigdalite", herbs: ["Amor-do-hortelão", "Bardana", "Lavanda"] },
            { problem: "Febre Tifoide", herbs: ["Erva-de-cobra"] },
            { problem: "Doenças Venéreas", herbs: ["Morugem", "Linhaça", "Erva-de-cheiro"] },
            { problem: "Problemas Renais", herbs: ["Agrimônia", "Uva-ursi", "Licopódio", "Pulmonária", "Arnica-brasileira", "Prunela", "Azedinha"] },
            { problem: "Pedra no Rim", herbs: ["Uva-ursi", "Amor-do-hortelão", "Licopódio", "Grama-de-ponta", "Funcho", "Arnica-brasileira", "Manjericão-santo", "Licopódio", "Levístico", "Cardo-mariano"] },
            { problem: "Nefrite", herbs: ["Uva-ursi"] },
            { problem: "Fortalecer os Rins", herbs: ["Unha-de-gato", "Licopódio", "Dente-de-leão", "Arnica-brasileira", "Bardana", "Cardo-mariano", "Prunela"] },
            { problem: "Analgésicos", herbs: ["Babosa", "Chicória", "Arnica", "Alface-selvagem", "Gualtéria"] },
            { problem: "Coceira e Irritação por Plantas Venenosas", herbs: ["Agastache", "Erva-de-bicho", "Artemísia", "Prunela"] },
            { problem: "Psoríase", herbs: ["Babosa", "Calêndula", "Amor-do-hortelão", "Licopódio", "Confrei", "Dente-de-leão", "Prímula", "Linhaça", "Bardana", "Lavanda", "Levístico", "Cardo-mariano", "Figo-da-índia", "Trevo-vermelho", "Valeriana"] },
            { problem: "Micoses", herbs: ["Calêndula", "Chicória", "Pulmonária", "Dente-de-leão", "Bardana", "Manjericão-santo", "Orégano", "Beldroega"] },
            { problem: "Herpes-Zóster", herbs: ["Morugem", "Equinácea", "Alho", "Melissa", "Erva-de-são-joão"] },
            { problem: "Infecção por Staphylococcus", herbs: ["Chicória", "Erva-cidreira", "Malva", "Artemísia", "Orégano", "Alecrim"] },
            { problem: "Queimadura de Sol", herbs: ["Babosa", "Calêndula", "Amor-do-hortelão", "Licopódio", "Verbasco", "Erva-de-são-joão", "Urtiga", "Morango-silvestre"] },
            { problem: "Úlceras na Pele", herbs: ["Repolho", "Calêndula", "Hidraste", "Verbasco", "Framboesa", "Prunela", "Gualtéria"] },
            { problem: "Verrugas", herbs: ["Dente-de-leão", "Alho", "Verbasco", "Tomilho", "Alface-selvagem"] }
        ]
    }
];