
import { PreparationSection } from '../types';
import { SunIcon, DropletIcon, FireIcon, BeakerIcon, FlaskIcon, BookOpenIcon, ClipboardCheckIcon, LeafIcon } from '../components/Icon';

export const PREPARATIONS_DATA: PreparationSection[] = [
    {
        id: 'secar-ervas',
        title: 'Como Secar Ervas',
        icon: SunIcon,
        content: [
            { type: 'paragraph', text: 'Secar as ervas é uma das maneiras de garantir um suprimento de medicamentos sempre a mão. É especialmente útil quando a erva só está disponível numa determinada época do ano ou quando o acesso a planta fresca é difícil.' },
            { type: 'paragraph', text: 'A maneira mais simples e tradicional de secar ervas é secá-las ao ar, sem qualquer fonte de calor adicional. Após lavar e secar os ramos, amarre os talos com barbante e pendure em um local quente e seco. Para secar muitas ervas, pode-se usar um suporte ou até mesmo cabides de roupa para pendurar vários maços juntos.' },
            { type: 'image', src: 'https://i.imgur.com/fCLmZfU.jpeg', alt: 'Ervas penduradas para secar' },
            { type: 'paragraph', text: 'Você também pode secá-las em uma forma, colocando duas folhas de papel toalha, cobrindo com um tecido tipo mosquiteiro para evitar o pouso de insetos e deixando a forma em um lugar quente, seco e ventilado. No caso de flores, separe-as dos talos e seque na bandeja. O mesmo vale para sementes.' },
            { type: 'paragraph', text: 'A secagem dessa maneira pode levar até três semanas (embora frequentemente seja mais rápida), dependendo da planta, do seu teor de umidade e das condições climáticas. Quanto mais quente e seco o ar, mais rápida será a desidratação.' },
            { type: 'paragraph', text: 'Este processo natural funciona muito bem para folhas finas, que secam rápido. Porém, para secagem de raízes, cascas, frutos e folhas "gordinhas", como é o caso das folhas da família crassulácea, há o risco de o material mofar antes da secagem completa.' },
            { type: 'note', text: 'Neste caso, o mais indicado é um desidratador. Desidratadores comerciais tem uma fonte de calor, um sistema de ventilação para remover o ar úmido e controle de temperatura. Porém, o custo pode não ser acessível para a secagem doméstica.' },
            { type: 'paragraph', text: 'Uma alternativa é a construção de um desidratador caseiro, cujas especificações você pode obter neste excelente material da Embrapa: “Construa Você Mesmo um Desidratador de Alimentos", acessível no link:' },
            { type: 'link', text: 'Acessar material da Embrapa', href: 'https://ainfo.cnptia.embrapa.br/digital/bitstream/item/183393/1/DOC-130-construcao-secador.pdf' },
            { type: 'paragraph', text: 'Quando estiverem secas, separe as folhas dos talos e armazene-as em potes de vidro hermeticamente fechados. Vidros de conserva reutilizados são ideais para isso. Uma alternativa e guardar as ervas secas em sacos plásticos, dobrar e grampear a boca e guardar no freezer.' },
        ]
    },
    {
        id: 'infusoes-agua',
        title: 'Infusões em Água',
        icon: DropletIcon,
        content: [
            { type: 'paragraph', text: 'No processo de infusão, as propriedades das ervas são simplesmente extraídas das folhas ou grãos na água. Esse processo pode ser usado com praticamente qualquer erva. A diferença entre o processo a quente e o processo a frio é, principalmente, o tempo de extração, que no processo a frio é mais demorado.'},
            { type: 'image', src: 'https://i.imgur.com/3Z2Yp4p.jpeg', alt: 'Chá de ervas em uma xícara' },
            { type: 'subheading', text: 'Método Quente (Chá)' },
            { type: 'paragraph', text: 'A maneira típica de infundir ervas quentes é fazendo um chá. Chás de ervas podem ser feitos a partir de ervas individuais, mas é mais comum usar uma mistura de ervas que funcionam bem para tratar a condição que você deseja curar.' },
            { type: 'paragraph', text: 'A vantagem da infusão quente sobre a fria é que frequentemente extrai mais dos ingredientes essenciais do tecido da planta. O calor quebra as paredes celulares, criando uma infusão mais forte. Eu, pessoalmente, prefiro o processo de infusão a quente (chá). É mais rápido, a extração é melhor e os microrganismos que sempre estão presentes nas plantas são (em sua maioria) eliminados pela água quente.'},
            { type: 'subheading', text: 'Método Frio' },
            { type: 'paragraph', text: 'Uma infusão quente também pode extrair ingredientes que não são desejáveis, como aqueles que conferem à infusão um sabor amargo. Nesse caso, uma infusão a frio pode ser melhor. Ervas mucilaginosas tendem a extrair melhor a frio, deixando a mucilagem intacta.' },
            { type: 'paragraph', text: 'Para a infusão a frio, deixe as ervas submersas de 48 horas a 5 dias. Esse tempo depende da parte da planta usada. Quanto mais lenhosa, maior o tempo necessário para extrair os princípios ativos. Esse é o caso de cascas, raízes e sementes.'},
            { type: 'note', text: 'Para ambos os tipos de infusão, uma regra simples é usar 1 colher de sobremesa de folhas secas bem picadas para 1 xícara de água. Se usar ervas frescas, dobre a quantidade de erva (ou use 1 colher de sopa).'}
        ]
    },
    {
        id: 'decoccoes',
        title: 'Decocções',
        icon: FireIcon,
        content: [
            { type: 'paragraph', text: 'A decocção é útil para ervas que não liberam tão facilmente seus princípios ativos, tais como partes lenhosas das ervas. Por exemplo, cascas, caules, sementes e raízes duras. Além disso, é uma ótima maneira de criar uma forma mais concentrada dos princípios ativos.' },
            { type: 'paragraph', text: 'Por outro lado, é preciso ter em mente que muitos compostos das plantas são sensíveis ao calor prolongado, se degradando com o calor e perdendo suas propriedades. Portanto, para ervas herbáceas e folhas, prefira um outro método de preparo.'},
            { type: 'image', src: 'https://i.imgur.com/M6s79iF.jpeg', alt: 'Panela com ervas fervendo para decocção' },
            { type: 'subheading', text: 'Como Fazer uma Decocção'},
            { type: 'list', ordered: true, items: [
                'Esmague, pique ou triture as ervas, deixando-as em pedaços pequenos e coloque-as em sua panela com a água ainda fria e tampe.',
                'Deixe as ervas descansarem na água fria por umas 2 horas.',
                'Leve a panela ao fogo. Assim que a água ferver, reduza o fogo para uma fervura suave.',
                'Continue fervendo em fogo baixo por 15 a 20 minutos.',
                'Desligue o fogo e aguarde a temperatura baixar para morno.',
                'Coe e armazene o líquido em um recipiente com tampa.',
                'Após esfriar, guarde na geladeira e consuma em até 24 horas.'
            ]},
            { type: 'note', text: 'Como regra geral você pode fazer sua decocção usando 3 colheres de sobremesa de ervas secas ou (3 colheres de sopa de ervas frescas) para 3 xícaras de água (750 ml).'},
            { type: 'subheading', text: 'Decocções Concentradas'},
            { type: 'paragraph', text: 'São semelhantes às decocções, com a exceção de que são fervidas até que o volume final seja igual a metade ou 1/4 do volume original de líquido. Isso multiplica a concentração medicinal final. Neste caso, você deve ingerir apenas a metade ou 1/4 da dose recomendada.'}
        ]
    },
    {
        id: 'infusoes-oleo',
        title: 'Infusões em Óleos',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Os métodos de infusão quente e fria são usados para infundir ervas em óleo. Use apenas ervas secas para evitar que as plantas liberem água no óleo, o que pode comprometer a validade.'},
            { type: 'paragraph', text: 'Quanto ao óleo, você pode usar óleo de oliva, que é estável, adequado para fazer pomadas e tem um preço acessível. Outras opções são o óleo de amêndoas doce, óleo de coco, semente de uva ou abacate. Uma alternativa mais barata é o óleo de girassol.'},
            { type: 'image', src: 'https://i.imgur.com/Oa0Ym7r.jpeg', alt: 'Frasco com óleo e ervas para infusão' },
            { type: 'subheading', text: 'Infusão "Fria" em Óleo'},
            { type: 'list', ordered: true, items: [
                'Rasgue ou esmague as ervas secas e coloque-as em um frasco de vidro limpo e esterilizado. Encha o frasco 1/3 com ervas secas.',
                'Despeje o óleo sobre as ervas. Preencha até cerca de 1,25 cm da borda. Misture bem, removendo todas as bolhas de ar. Tampe e rotule com a erva e a data.',
                'Armazene o frasco por 6 a 8 semanas. Certifique-se de não ultrapassar 8 a 10 semanas, pois o óleo pode ficar rançoso.',
                'Após 6 a 8 semanas, coe as ervas. É importante que não fiquem resíduos da planta no óleo. Este óleo pode ser usado diretamente ou para fazer pomadas. Dura cerca de 1 a 2 anos.'
            ]},
            { type: 'subheading', text: 'Infusão "Quente" em Óleo'},
            { type: 'paragraph', text: 'Para infundir óleos com calor, use um banho maria ou uma panela elétrica com ajuste "morno" ou muito baixo. É importante não aquecer demais o óleo!'},
            { type: 'list', ordered: true, items: [
                'Pique ou triture as ervas secas e coloque-as em um frasco de vidro limpo e esterilizado (1/3 do frasco).',
                'Despeje o óleo sobre as ervas, garantindo que toda a erva está submersa. Misture bem, tampe e rotule.',
                'Coloque os frascos na panela elétrica ou no banho-maria e cozinhe em fogo baixo por 30 a 40 minutos. Se as ervas forem lenhosas (cascas, sementes), aumente o tempo para 2 horas.',
                'Desligue o fogo e deixe o óleo esfriar. Após esfriar, coe as ervas. O óleo pode ser usado diretamente ou para fazer pomadas. Dura cerca de 1 ano.'
            ]}
        ]
    },
    {
        id: 'pomadas',
        title: 'Pomadas',
        icon: LeafIcon,
        content: [
            { type: 'paragraph', text: 'As pomadas são uma maneira útil de aplicar ervas na pele. Elas são eficazes no tratamento de queimaduras, erupções cutâneas, irritações na pele, picadas, feridas, eczema, músculos doloridos, artrite, dor nos nervos e muito mais. Transformar infusões de óleo de ervas em pomadas fornece uma maneira prática de aplicar ervas e levá-las consigo quando não estiver em casa.'},
            { type: 'paragraph', text: 'Existem algumas alternativas para fazer a sua pomada. Uma delas é usar óleos essenciais, mas o processo requer muitas adaptações. A segunda maneira é fazer um óleo infundido usando o processo que expliquei anteriormente. E a terceira maneira é o "Método Rápido", que vou te explicar agora...'},
            { type: 'image', src: 'https://i.imgur.com/vJhdeQ5.jpeg', alt: 'Potes de pomada de calêndula' },
            { type: 'subheading', text: 'Método Rápido para Pomada'},
            { type: 'paragraph', text: 'O método mais rápido para fazer pomadas de ervas combina as etapas de infusão em óleo e preparação da pomada em uma única etapa. Este método usa uma quantidade grande de ervas secas para acelerar o processo de extração.'},
            { type: 'list', ordered: true, items: [
                'Coloque uma quantidade grande de ervas em um recipiente e despeje óleo suficiente para cobrir as ervas. Você vai precisar de um fogão elétrico ou banho-maria. Cozinhe em fogo baixo por 1 ou 2 horas, mantendo a temperatura entre 60 e 100 graus.',
                'Mexa frequentemente, deixe esfriar um pouco e coe para retirar todas as ervas. Despeje de volta na panela.',
                'Adicione 48 gramas de cera de abelha para cada xícara (250 ml) de óleo.',
                'Aqueça e mexa até que a cera de abelha esteja completamente derretida e misturada ao óleo.',
                'Recomendo que você adicione vitamina E oleosa para aumentar a validade da sua pomada (a vitamina E evita a oxidação que deixa óleos e gorduras rançosas).',
                'Antes de despejar nos recipientes (frascos/latas) definitivos, teste a consistência. Coloque uma pequena quantidade em um dos recipientes e aguarde esfriar. Se estiver muito dura, adicione mais óleo, e se estiver muito mole, adicione mais cera de abelha.',
                'Quando estiver satisfeito com a consistência, despeje a pomada nos recipientes, tampe e etiquete com o nome das ervas usadas e a data de fabricação.'
            ]},
            { type: 'subheading', text: 'Alternativas para Cera de Abelha' },
            { type: 'paragraph', text: 'Você pode usar a cera de abelha branca (clarificada) para evitar a cor amarelada típica da cera in-natura ou, para uma preparação vegana, você pode usar a cera de carnaúba pura (não use as que são preparadas para móveis e outras aplicações, pois elas contêm aditivos que podem ser prejudiciais a saúde).' }
        ]
    },
    {
        id: 'tinturas',
        title: 'Tinturas',
        icon: FlaskIcon,
        content: [
            { type: 'paragraph', text: 'As tinturas são extratos medicinais que podem ser feitos com qualquer erva. A preparação com álcool é muito mais eficiente. O álcool extrai uma grande quantidade de compostos bioativos e conserva a tintura por mais tempo, além de ser absorvida mais rapidamente pelo organismo.'},
            { type: 'paragraph', text: 'Uma grande vantagem é a praticidade e o tempo de validade. Uma tintura pode durar até 1 ano se mantida em frasco escuro e ao abrigo da luz.'},
            { type: 'image', src: 'https://i.imgur.com/R3mGqK4.jpeg', alt: 'Frasco de tintura com conta-gotas' },
            { type: 'note', text: 'Minha recomendação é que você use álcool de cereais a 70%, que pode ser adquirido na maioria das farmácias de manipulação.'},
            { type: 'subheading', text: 'Passo a Passo'},
            { type: 'list', ordered: true, items: [
                'Coloque num frasco de vidro limpo e esterilizado as ervas que deseja extrair. A regra geral é 150 gramas de erva para um vidro de 500 ml.',
                'Complete o vidro com o álcool de cereais a 70%. Tampe e agite o vidro.',
                'Coloque uma etiqueta com o nome das ervas e a data de preparo.',
                'Mantenha o vidro guardado em um local escuro.',
                'Aguarde de 21 a 30 dias e agite o vidro uma vez por dia para acelerar o processo.',
                'Coe as ervas e guarde a sua tintura em um local protegido da luz.',
                'Para problemas mais graves, tome 20 gotas, 3x por dia. Para problemas mais leves, tome 10 gotas.'
            ]}
        ]
    },
    {
        id: 'xarope',
        title: 'Xarope',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Xarope é uma excelente opção para tratar gripes, infecções de garganta e bronquite. Além disso, é muito simples de fazer.'},
            { type: 'image', src: 'https://i.imgur.com/tX2eJt2.jpeg', alt: 'Pote de xarope caseiro' },
            { type: 'subheading', text: 'Método a Quente'},
            { type: 'paragraph', text: 'Começa com uma decocção concentrada (reduzida a 1/4 do volume). O próximo passo é acrescentar açúcar ou mel e continuar apurando até formar uma calda com a consistência desejada. Faça em banho-maria ou em fogo baixo para não degradar os compostos.'},
            { type: 'subheading', text: 'Método a Frio (Ex: Casca de Abacaxi)'},
            { type: 'paragraph', text: 'Este método pode ser usado quando a erva contém bastante água, como polpa ou cascas de frutas.'},
            { type: 'list', ordered: true, items: [
                'Escove o abacaxi inteiro para remover restos secos de cascas, sujeiras e contaminantes.',
                'Descasque o abacaxi e reserve as cascas.',
                'Em um pote, coloque uma camada de cascas e cubra com açúcar. Vá repetindo o processo até acabarem as cascas.',
                'Tampe o pote e guarde em um local fresco de 2 a 3 dias.',
                'Após formar uma calda, remova as cascas e coe a calda.',
                'Coloque a calda em um vidro e guarde na geladeira. Tem validade de até 6 meses.'
            ]}
        ]
    },
    {
        id: 'cataplasma',
        title: 'Cataplasma (Emplastro)',
        icon: LeafIcon,
        content: [
            { type: 'paragraph', text: 'Cataplasmas são uma das formas mais antigas de utilizar ervas medicinais. Oferecem uma maneira direta e eficaz de aplicar os benefícios das ervas na área afetada do corpo, sendo úteis para queimaduras, picadas, cortes, dores nas articulações e contusões.'},
            { type: 'image', src: 'https://i.imgur.com/a9k9Y8r.jpeg', alt: 'Aplicação de um cataplasma de ervas' },
            { type: 'subheading', text: 'Método a Frio'},
            { type: 'list', ordered: true, items: [
                'Selecione as ervas frescas necessárias e rasgue-as ou corte-as finamente. A ideia é que as folhas estejam quebradas para que a seiva possa sair.',
                'Aplique uma quantidade generosa na área afetada e fixe no lugar com uma atadura ou gaze.',
                'Mantenha úmido e troque algumas vezes por dia.'
            ]},
            { type: 'subheading', text: 'Método a Quente'},
             { type: 'list', ordered: true, items: [
                'Faça um chá forte com as ervas (40g de ervas secas ou 80g de frescas para 1/2 litro de água).',
                'Despeje o chá numa vasilha e acrescente farinha ou fubá de milho, misturando até formar uma pasta.',
                'Coloque a pasta em um pano, aplique sobre a área afetada e fixe no lugar.',
                'Mantenha úmido e renove 3 vezes por dia.'
            ]},
        ]
    },
    {
        id: 'recomendacoes',
        title: 'Recomendações Finais',
        icon: ClipboardCheckIcon,
        content: [
            { type: 'paragraph', text: 'Como você pode perceber, não é muito difícil preparar remédios naturais em casa. Contudo, é importante cuidar dos aspectos de qualidade e higiene.'},
            { type: 'list', items: [
                'Use sempre ervas de boa qualidade, descartando as que apresentem sinais de mofo ou envelhecimento.',
                'Atente-se para a correta identificação botânica da espécie. Muitas são fáceis de identificar, mas outras podem ser parecidas com espécies tóxicas. Na dúvida, adquira em uma loja de produtos naturais.',
                'Mantenha seus utensílios e recipientes sempre bem limpos e esterilizados. Lave-os com água e detergente e pulverize com álcool 70%.',
                'Esterilize os vidros em água fervente ou na panela de pressão por 10 minutos.',
                'Lave bem as mãos e, se possível, use luvas e touca para evitar contaminações.',
                'Se perceber qualquer alteração na cor, textura, cheiro ou sabor da sua preparação, descarte e prepare uma nova.'
            ]},
        ]
    }
];