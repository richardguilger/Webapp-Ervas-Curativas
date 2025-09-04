import { PreparationSection } from '../types';
import { BookOpenIcon, SearchIcon, BeakerIcon, FireIcon, ClockIcon, ClipboardListIcon, FlaskIcon, AlertTriangleIcon, LightningIcon, LeafIcon, UserIcon } from '../components/Icon';

export const ARTHRITIS_RECIPES_DATA: PreparationSection[] = [
    {
        id: 'introducao',
        title: 'Introdução',
        icon: UserIcon,
        content: [
            { type: 'paragraph', text: 'Caro Leitor(a), Eu me chamo Jaime Figueiredo, sou Biólogo, Mestre em Ecologia, Doutor em Biotecnologia e Biodiversidade e Especialista em Plantas Medicinais.' },
            { type: 'paragraph', text: 'Porém, eu penso que a minha formação é o menos relevante. O mais importante é que eu já sofri com problemas de coluna (hérnia de disco), lesão por esforço repetitivo, tendinite, síndrome do túnel do carpo, desgaste da cartilagem do quadril, gota, hanseníase e dores musculares generalizadas.' },
            { type: 'paragraph', text: 'Ou seja, tudo que eu vou compartilhar com você é a aplicação prática na minha vida. Sem dúvida que minha formação e pós-graduações me ajudaram na busca por um tratamento mais eficaz, natural e com menos efeitos colaterais.' },
            { type: 'paragraph', text: 'Mas, foi no meu dia a dia, que eu descobri o que funciona e o que não funciona. Se você sofre com dores, leva uma vida limitada e sente que os tratamentos com remédios químicos de farmácia parecem não resolver, saiba que eu te entendo.' },
            { type: 'paragraph', text: 'Por outro lado, não sou o dono da verdade e não estou afirmando que tenho a “fórmula mágica” que vai resolver todos os seus problemas. Afinal, cada pessoa tem um metabolismo e uma condição de saúde diferente.' },
            { type: 'paragraph', text: 'O que eu posso afirmar é que estamos falando de um conhecimento ancestral, que foi validado pelos cientistas e se tornaram parte dos programas do Ministério da Saúde.' },
            { type: 'paragraph', text: 'O meu maior mérito foi estudar centenas de artigos científicos, listas, formulações e separar o “lixo” da internet do que realmente funciona. Além disso, tive a preocupação de selecionar plantas que tenham baixa toxicidade e sejam seguras para a maioria das pessoas.' },
            { type: 'paragraph', text: 'Por que para a maioria? Porque algumas pessoas têm condições especiais, que requerem cuidados extras e acompanhamento profissional próximo e constante. Se esse for seu caso, não tome qualquer preparação de plantas medicinais sem antes consultar o seu médico.' },
            { type: 'paragraph', text: 'A propósito, eu tenho o dever de reforçar esta recomendação: este material tem um objetivo meramente informativo. Em hipótese alguma ele substitui o diagnóstico, orientação, recomendação ou prescrição realizada por um médico ou especialista da área da saúde habilitado. Sempre converse com seu médico antes de interromper um tratamento ou fazer uso de qualquer produto fitoterápicos, incluindo as plantas medicinais.' },
            { type: 'paragraph', text: 'Agora, deixe-me falar um pouco sobre como esse material foi organizado.' },
            { type: 'note', text: 'ESTE CONTEÚDO É MERAMENTE INFORMATIVO. EM HIPÓSTESE ALGUMA ELE SUBSTITUI O DIAGNÓSTICO OU PRESCRIÇÃO DE TRATAMENTO. AS PLANTAS E FITOTERÁPICOS NÃO SÃO ISENTOS DE EFEITOS INDESEJÁVEIS E INTERAÇÕES MEDICAMENTOSAS. SEMPRE CONVERSE COM SEU MÉDICO ANTES DE FAZER USO DE QUALQUER MEDICAMENTO, SEJA ELE QUÍMICO, FITOTERÁPICO OU IN-NATURA.' },
            { type: 'subheading', text: 'Simples e direto ao que interessa' },
            { type: 'paragraph', text: 'Quando comecei a escrever este material pela primeira vez, fiz o que todo mundo faz... Coloquei a descrição botânica da planta, fitoquímica, problemas de saúde para a qual ela era citada, possíveis efeitos adversos, fotos e um monte de outras informações. Confesso que estava orgulhoso!' },
            { type: 'paragraph', text: 'Até que lembrei da época que minha filha, com 3 ou 4 anos, sofria com problemas recorrentes de inflamação de garganta, febre e tosse. Infelizmente, os remédios industrializados não resolviam. Foram muitas noites sem dormir ou passadas com ela internada no hospital.' },
            { type: 'paragraph', text: 'Naquela época eu não sabia nada sobre plantas medicinais. Mas, desesperado com a ineficácia dos tratamentos alopáticos, resolvi buscar ajuda nas plantas medicinais. Eu achei seria algo simples. Afinal, se os antigos usavam as plantas para tratar a maioria dos problemas de saúde, não podia ser tão complicado. Mas, logo percebi que estava enganado.' },
            { type: 'paragraph', text: 'Minhas pesquisas na internet, nos livros e consultando outras pessoas revelaram que as informações eram confusas. A mesma planta era indicada para vários problemas de saúde que não tinham relação alguma entre si. Várias plantas tratavam a mesma coisa. Num lugar falava uma coisa e, noutro, era completamente diferente. A posologia mudava, a parte da planta também.' },
            { type: 'paragraph', text: 'Resumindo, eu me sentia mais seguro consertando um computador de última geração do que fazendo um simples chá para tosse. Para a minha tristeza, se passaram 30 anos e as coisas pouco melhoraram. A falta de clareza e as informações desencontradas continuam... até pioraram. Não é toa que as pessoas preferem usar os medicamentos industrializados.' },
            { type: 'paragraph', text: 'Está com dor no nervo ciático? Basta encostar no balcão da farmácia para sair de lá com uma caixa de nimesulida ou outro anti-inflamatório que apenas irá aliviar os sintomas, por um tempo (em troca de vários efeitos colaterais e danos crônicos). Se não resolver, volta na farmácia e pega uma caixa de outro remédio. E, depois outro e outro.' },
            { type: 'paragraph', text: 'Por mais que a solução fornecida pelo medicamento químico não seja definitiva e, que haja danos causados pelo próprio remédio, temos que concordar que é simples de usar. E é nesse ponto que eu queria chegar. Simplicidade. A maioria das pessoas querem apenas se livrar do problema e não se tornar um especialista em fitoterapia ou botânica.' },
            { type: 'paragraph', text: 'Portanto, eu abandonei o livro glamouroso que estava escrevendo e recomecei do zero. Resolvi escrever um guia simples, curto, direto ao ponto e, o mais fácil possível de entender e aplicar. O resultado é este material que você recebeu. Espero que ele te ajude.' }
        ]
    },
    {
        id: 'onde-conseguir',
        title: 'Onde Conseguir as Ervas',
        icon: SearchIcon,
        content: [
            { type: 'paragraph', text: 'Conseguir as ervas frescas nem sempre é uma tarefa fácil, e identificar a espécie correta é crucial. Algumas plantas possuem espécies parecidas que podem ser tóxicas. Além disso, plantas de ruas e terrenos baldios podem estar contaminadas.' },
            { type: 'paragraph', text: 'Por isso, recomendo que você compre as ervas desidratadas em lojas especializadas. Comprando das lojas, você terá acesso a uma erva corretamente identificada, processada e embalada com acompanhamento profissional.' },
            { type: 'subheading', text: 'Lojas online no Brasil:' },
            { type: 'list', items: ['Chá e Cia: https://www.chaecia.com.br/', 'Relva Verde: https://www.lojarelvaverde.com.br/'] },
            { type: 'subheading', text: 'Lojas em Portugal:' },
            { type: 'list', items: ['Chás do Mundo: https://chasdomundo.pt/pt/', 'Antiga Ervanária: https://antigaervanaria.pt/'] },
            { type: 'note', text: 'Nas etiquetas e sites, é comum encontrar descrições terapêuticas. Frequentemente, essas informações estão erradas, incompletas ou desatualizadas. Por favor, ignore essa descrição e siga as orientações deste guia.' }
        ]
    },
    {
        id: 'unidades-medida',
        title: 'Unidades de Medida',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Em se falando de plantas, a exatidão da unidade de medida não precisa ser tão rigorosa. A quantidade de princípio ativo numa planta muda com as características do ambiente em que ela cresceu, o solo, o clima, etc.' },
            { type: 'paragraph', text: 'Porém, é preciso ter uma base. A norma RDC Nº 10/2010 da ANVISA estabelece uma equivalência para medidas populares, que usaremos como referência.' },
            { type: 'table', headers: ['Unidade de Medida', 'Peso', 'Volume'], rows: [
                ['1 colher de sopa', '3 gramas', '15 ml'],
                ['1 colher de sobremesa', '2 gramas', '10 ml'],
                ['1 colher de chá', '1 grama', '5 ml'],
                ['1 colher de café', '0,5 gramas', '2 ml'],
                ['1 xícara de chá ou copo', '-', '150 ml'],
                ['1 xícara de café', '-', '50 ml'],
                ['1 cálice', '-', '30 ml']
            ]},
            { type: 'note', text: 'Se você tiver uma balança e copo graduado, recomendo que converta as unidades para gramas e mililitros, pois uma colher de chá de cúrcuma pesa muito mais que uma de folhas secas de erva-baleeira.'}
        ]
    },
     {
        id: 'como-preparar',
        title: 'Como Preparar as Ervas (Infusão)',
        icon: FireIcon,
        content: [
            { type: 'paragraph', text: 'Para ingerir, a maneira mais simples, rápida e prática é a infusão, o nome técnico para chá. O processo para fazer o chá é bastante simples:' },
            { type: 'list', ordered: true, items: [
                'Coloque a quantidade indicada das ervas em um recipiente;',
                'Coloque a quantidade de água indicada para ferver;',
                'Quando levantar a fervura, derrame a água sobre as ervas. Se necessário, mexa com uma colher para que toda a erva esteja coberta pela água.',
                'Cubra e espere esfriar até chegar a uma temperatura que seja confortável para tomar (morna);',
                'Se sobrar para outras tomadas, é recomendado guardar em geladeira e protegido da luz. Isso conservará os princípios ativos por até 24 horas.'
            ]},
            { type: 'note', text: 'Para a maioria dos tratamentos, a recomendação é 1 xícara de chá (150 ml), 3 vezes por dia. Quando for diferente, estará indicado na receita.'}
        ]
    },
    {
        id: 'tempo-tratamento',
        title: 'Tempo de Tratamento',
        icon: ClockIcon,
        content: [
            { type: 'paragraph', text: 'O tempo de tratamento é um dos assuntos mais difíceis de estabelecer, pois depende da gravidade, da reação do organismo e de outros fatores.' },
            { type: 'list', items: [
                'Casos pontuais (como torções): fazer uso até que haja melhora.',
                'Casos recorrentes: de 1 a 3 meses, podendo chegar a seis.',
                'Casos crônicos: fazer uso contínuo, respeitando as dosagens e as restrições descritas na ficha técnica das plantas.'
            ]},
            { type: 'paragraph', text: 'É bem possível que já nos primeiros dias você perceba que as dores estão diminuindo. No tratamento com ervas, as baixas concentrações de princípios ativos garantem maior segurança e menos efeitos colaterais, mas é preciso ter um pouco mais de paciência.'}
        ]
    },
    {
        id: 'receitas',
        title: 'Receitas',
        icon: ClipboardListIcon,
        content: [
            { type: 'note', text: 'A erva Mentrasto (Ageratum conyzoides) está em todas as receitas por sua propriedade especial de inibir o processo de degradação das cartilagens. Caso seu problema não envolva degradação, sinta-se à vontade para retirá-la.'},
            { type: 'subheading', text: 'Receita 1' },
            { type: 'list', items: ['Cúrcuma (Curcuma longa)', 'Mentrasto ou erva-de-são-joão (Ageratum conyzoides)', 'Unha-de-gato (Uncaria tomentosa)']},
            { type: 'paragraph', text: 'Preparo: colocar uma colher de chá (1 grama) de cada erva em um recipiente. Em seguida, ferver 3 xícaras de chá de água (450 ml). Despeje a água fervente sobre as ervas e abafe. Aguarde esfriar e coe. Tomar 3 xícaras de chá (150 ml) por dia, de 8 em 8 horas.' },
            { type: 'subheading', text: 'Receita 2' },
            { type: 'list', items: ['Cúrcuma (Curcuma longa)', 'Mentrasto ou erva-de-são-joão (Ageratum conyzoides)', 'Garra-do-diabo (Harpagophytum procumbens)']},
            { type: 'paragraph', text: 'Preparo: Idêntico à Receita 1.' },
            { type: 'subheading', text: 'Receita 3' },
            { type: 'list', items: ['Erva-baleeira (Cordia verbenacea)', 'Mentrasto ou erva-de-são-joão (Ageratum conyzoides)', 'Garra-do-diabo (Harpagophytum procumbens)']},
            { type: 'paragraph', text: 'Preparo: Idêntico à Receita 1.' },
            { type: 'subheading', text: 'Receita 4' },
            { type: 'list', items: ['Erva-baleeira (Cordia verbenacea)', 'Mentrasto ou erva-de-são-joão (Ageratum conyzoides)', 'Semente de Sucupira (Pterodon emarginatus)']},
            { type: 'paragraph', text: 'Preparo: Colocar 1 colher de chá (1g) de cada erva e uma semente de sucupira esmagada em um recipiente. A semente de sucupira é resistente; use uma ferramenta para romper a casca e expor o conteúdo. Em seguida, siga o mesmo preparo das outras receitas.' },
        ]
    },
    {
        id: 'outras-opcoes',
        title: 'Outras Opções de Tratamento',
        icon: FlaskIcon,
        content: [
             { type: 'paragraph', text: 'Estas são opções que podem ser usadas em conjunto com os chás ou isoladamente.'},
             { type: 'subheading', text: 'Óleo de sucupira (Pterodon emarginatus)' },
             { type: 'paragraph', text: 'Você pode comprar em lojas de produtos naturais e colocar de 3 a 5 gotas em meio copo de água. Tomar 2x por dia. Caso já esteja usando a sucupira no chá, não tome nos dois. Escolha uma opção.' },
             { type: 'subheading', text: 'Óleo de copaíba (Copaifera langsdorffii)' },
             { type: 'paragraph', text: 'Você pode comprar em lojas de produtos naturais e colocar de 3 a 5 gotas em meio copo de água. Tomar 2x por dia. O óleo de copaíba é um poderoso anti-inflamatório.' },
             { type: 'subheading', text: 'Cúrcuma em pó (Curcuma longa)' },
             { type: 'paragraph', text: 'Ao invés de fazer o chá, coloque 1 colher de café em meio copo de água, misture bem e tome 1x por dia.' },
        ]
    },
    {
        id: 'alerta-canela-velho',
        title: 'Alerta sobre a Canela-de-Velho',
        icon: AlertTriangleIcon,
        content: [
            { type: 'paragraph', text: 'A Canela-de-velho (Miconia albicans) é popular para problemas articulares, mas é alvo de polêmicas por sua capacidade de acumular alumínio, que em excesso pode causar problemas neurológicos e é associado ao desenvolvimento de Alzheimer.'},
            { type: 'paragraph', text: 'Alguns defendem que apenas a planta de solos ricos em alumínio (Cerrado) seria tóxica. Porém, um estudo mostrou que a planta tem seu crescimento prejudicado em solos sem alumínio, sugerindo uma dependência.'},
            { type: 'note', text: 'Na ausência de informações conclusivas e risco para a saúde, é melhor prevenir. Considerando que existem outras ervas que podem tratar os mesmos problemas com eficácia, não vejo razões suficientes para correr o risco.'}
        ]
    },
    {
        id: 'nutrindo-cartilagens',
        title: 'Nutrindo as Cartilagens',
        icon: LightningIcon,
        content: [
            { type: 'paragraph', text: 'As ervas indicadas irão tratar a dor, a inflamação e reduzir a degradação das cartilagens. Contudo, é importante fornecer ao corpo os nutrientes que ele necessita para produzir novas cartilagens.'},
            { type: 'paragraph', text: 'Um dos mais importantes é o colágeno do tipo 2. Além disso, outros elementos são essenciais:'},
            { type: 'list', items: ['Zinco', 'Magnésio', 'Cálcio', 'Vitamina C', 'Vitamina D']},
            { type: 'paragraph', text: 'Todos esses elementos podem ser obtidos com um suplemento polivitamínico e mineral. Dependendo da sua idade e condição, pode ser interessante fazer exames para determinar o nível de deficiência e consultar um médico.'}
        ]
    },
    {
        id: 'ficha-tecnica',
        title: 'Ficha Técnica das Plantas',
        icon: LeafIcon,
        content: [
            { type: 'plantProfile', profile: {
                id: 'copaiba',
                name: 'Copaíba',
                scientificName: 'Copaifera langsdorffii',
                images: ['https://i.imgur.com/uFkSrg2.jpeg'],
                usedPart: 'Óleo de copaíba e, mais raramente, as cascas preparadas por decocção.',
                toxicity: 'Estudos científicos demonstraram que o óleo de copaíba tem baixíssima toxicidade, sendo reportado efeitos adversos apenas em dosagens muito elevadas (4 gramas por quilo).',
                contraindications: 'Gestantes e lactantes não devem fazer uso.',
                applications: 'Cicatrizante, anti-inflamatório, redução da sensibilidade a dor, antiparasitário, anticâncer, gastroprotetiva, dentre outros menos estudados.'
            }},
            { type: 'plantProfile', profile: {
                id: 'curcuma',
                name: 'Cúrcuma',
                scientificName: 'Curcuma longa L.',
                images: ['https://i.imgur.com/h9vC0h4.jpeg'],
                usedPart: 'Rizoma (raiz)',
                toxicity: 'Testes realizados com cobaias demostraram que a Curcuma longa apresenta baixa toxicidade aguda, subcrônica e crônica, sendo que efeitos adversos só foram observados em quantidades extremamente elevadas (da ordem de 1Kg de cúrcuma por quilo de peso do animal).',
                contraindications: 'Não deve ser utilizado por gestantes, lactantes, por pessoas portadoras de obstrução dos dutos biliares, úlcera gastroduodenal e portadores de insuficiência hepática ou renal.',
                applications: 'Anti-inflamatório, analgésico, hepatoprotetor e para tratamento da artrite, distúrbios grastrointestinais, desordens dermatológicas e efeito cicatrizante. Popularmente usada para flatulências, dispepsia, feridas cutâneas, malária e doenças de pele.'
            }},
            { type: 'plantProfile', profile: {
                id: 'erva-baleeira',
                name: 'Erva-baleeira',
                scientificName: 'Cordia verbenacea',
                images: ['https://i.imgur.com/7vj7V0c.jpeg'],
                usedPart: 'Folhas',
                toxicity: 'Não há ocorrências registradas ou citações de efeitos adversos. Contudo, é sabido que não se deve usar as flores, que produzem alguns compostos tóxicos.',
                contraindications: 'De acordo a Cartilha de Plantas e Fitoterápicos do Conselho Regional de Farmácia de São Paulo /SP, a única contraindicação apontada é a suspensão do uso caso surja alguma reação alérgica.',
                applications: 'Anti-inflamatória e analgésica em caso contusões. Ainda, no tratamento de úlceras, reumatismo, problemas de coluna. Apresenta propriedades antiofídica, analgésica, antimicrobiana e esquistossomicida.'
            }},
            { type: 'plantProfile', profile: {
                id: 'garra-do-diabo',
                name: 'Garra-do-diabo',
                scientificName: 'Harpagophytum procumbens',
                images: ['https://i.imgur.com/rN4gXmY.jpeg'],
                usedPart: 'Raiz',
                toxicity: 'Diarreia, alterações no paladar, leve efeito hipoglicemiante. Dos poucos estudos existentes, o que se observa, em geral, é uma baixa toxicidade, principalmente em se tratando da via oral.',
                contraindications: 'Não utilizar caso tenha problemas de úlceras estomacais, duodenais e cálculos biliares.',
                applications: 'Dores articulares e lombalgias. Apresenta efeitos anti-inflamatórios e analgésicos.'
            }},
            { type: 'plantProfile', profile: {
                id: 'mentrasto',
                name: 'Mentrasto ou erva-de-são-joão',
                scientificName: 'Ageratum conyzoides',
                images: ['https://i.imgur.com/hUa5T6t.jpeg'],
                usedPart: 'Folhas, sem as flores.',
                toxicity: 'Não usar as flores.',
                contraindications: 'Não deve ser usada por pessoas com problemas hepáticos.',
                applications: 'Dores crônicas das osteoartrites, relaxante muscular, antimicrobial, analgésico, anti-inflamatório, gastroproteção, antitumoral, aumento da área e espessura das cartilagens articulares.'
            }},
            { type: 'plantProfile', profile: {
                id: 'sucupira',
                name: 'Sucupira',
                scientificName: 'Pterodon emarginatus',
                images: ['https://i.imgur.com/d9jAnvV.jpeg'],
                usedPart: 'Óleo da semente',
                toxicity: 'Estudos demonstram que o uso nas doses recomendadas não causa toxicidade.',
                contraindications: 'Grávidas, lactantes e pessoas com problemas hepáticos ou renais.',
                applications: 'Analgésico, anti-inflamatório, antioxidante, antimicrobial, anticâncer, relaxante muscular, hipoglicêmica, redução do colesterol e triglicerídeos. Popularmente usada para dores e inflamações de garganta.'
            }},
            { type: 'plantProfile', profile: {
                id: 'unha-de-gato',
                name: 'Unha-de-gato',
                scientificName: 'Uncaria tomentosa',
                images: ['https://i.imgur.com/O6LdMbv.jpeg'],
                usedPart: 'Casca do caule e da raiz rasurada.',
                toxicity: 'O uso pode provocar cansaço, febre, diarreia e constipação. Altas doses podem causar sintomas pancreáticos e alterações do nervo óptico. Aumento do risco de sangramento com anticoagulantes.',
                contraindications: 'Não é recomendado o uso antes e depois de quimioterapia, nem em pacientes hemofílicos. Não utilizar em menores de 3 anos e portadores de Lúpus. Evitar uso com imunossupressores e em pacientes transplantados.',
                applications: 'Dores articulares e musculares agudas, como anti-inflamatório. Antioxidante, anticâncer, antimicrobial, antiprotozoários, antiviral, estimula o sistema imunológico, atividade cardiovascular, antialzheimer.'
            }},
        ]
    }
];