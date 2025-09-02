
import { PreparationSection } from '../types';
import { AlertTriangleIcon, BookOpenIcon, HelpIcon, LeafIcon, ClockIcon, BeakerIcon, FlaskIcon, ClipboardCheckIcon } from '../components/Icon';

export const MEDICINAL_BOTTLES_DATA: PreparationSection[] = [
    {
        id: 'aviso-importante',
        title: 'Aviso Importante',
        icon: AlertTriangleIcon,
        content: [
            { type: 'paragraph', text: 'Advertências e aviso legal: As informações contidas nesse livro têm caráter meramente informativo. As plantas medicinais não são isentas de efeitos adversos, pois contém princípios que são ativos no organismo e os efeitos variam de acordo com a fisiologia e condições de cada pessoa. De maneira alguma recomendamos ou sugerimos que as mesmas possam ser usadas sem o acompanhamento de um profissional de saúde.' },
            { type: 'paragraph', text: 'Também, o conteúdo deste livro não deve ser utilizado para autodiagnóstico, autotratamento ou automedicação. Não abandone um tratamento convencional sem a concordância de um médico. Esteja ciente que não nos responsabilizamos pelo uso indevido e as eventuais consequências que o uso destas informações possa causar. Na dúvida, consulte um profissional médico.' }
        ]
    },
    {
        id: 'introducao',
        title: 'Introdução',
        icon: BookOpenIcon,
        content: [
            { type: 'paragraph', text: 'Caro leitor(a), As garrafadas são uma preparação medicinal tradicional em muitos lugares do mundo, incluindo a Europa, a Índia, a China, dentre outros. Em boa parte, essa popularidade se deve a facilidade do processo de produção, que usa ingredientes e utensílios simples e prontamente disponíveis.'},
            { type: 'paragraph', text: 'Contudo, no Brasil, por questões históricas, geográficas e de eficácia, as garrafadas se tornaram uma preparação de grande sucesso. Histórica porque no Brasil a mistura das culturas europeia, indígena, africana, oriental e de muitos outros países permitiu que os conhecimentos tradicionais fossem compartilhados, resultando em preparações muito mais poderosas.' },
            { type: 'paragraph', text: 'Geográfica because a dimensão continental do Brasil dificultava (e ainda dificulta) o acesso aos recursos medicinais modernos. Com isso quero dizer que em algumas comunidades da Amazônia e do Sertão Nordestino, chegar a um posto de saúde pública pode levar dias. Face a tais dificuldades, tais comunidades isoladas usam a medicina que a natureza lhes fornece de graça, a poucos metros de suas casas.' },
            { type: 'paragraph', text: 'E eu digo eficácia porque muitos dos efeitos curativos que as garrafadas tradicionais prometem estão sendo confirmadas pela ciência. Um valioso conhecimento que ainda hoje sobrevive, passando de geração para geração, a centenas de anos. Humildemente, tenho que admitir que não sou o criador das fórmulas das garrafadas que você verá logo mais à frente. Meu trabalho neste material se resumiu a receber o conhecimento, conferir as propriedades alegadas nos artigos de investigação científica e passá-los para você. Neste aspecto, me considero muito mais um perpetuador do conhecimento tradicional (professor) do que um cientista. E é com muito orgulho que aceito essa missão. Nas próximas páginas vou lhe explicar alguns detalhes do processo de produção das garrafadas e, depois, as receitas consagradas pelo conhecimento tradicional. Dito isso, vamos em frente... Abraços, Prof. Dr. Jaime Figueiredo' }
        ]
    },
    {
        id: 'o-que-sao-garrafadas',
        title: 'O que são "Garrafadas"?',
        icon: HelpIcon,
        content: [
            { type: 'paragraph', text: 'Talvez em sua região elas até já existam, mas sejam conhecidas por outros nomes. Por isso, penso que seja pertinente eu explicar o que é e porque é chamada por assim. A "Garrafada" recebeu este nome porque tradicionalmente ela é produzida com ervas medicinais, vinho e é envasada na própria garrafa da bebida. Como veremos em breve, nos tempos modernos, elas podem ser produzidas usando outros líquidos como extrator para os princípios ativos das ervas, o que é uma boa notícia para quem não pode ingerir álcool.' },
            { type: 'subheading', text: 'Líquidos usados na extração' },
            { type: 'paragraph', text: 'Os princípios ativos são as substâncias produzidas pelas plantas e que possuem um efeito terapêutico em nosso organismo. Contudo, eles estão ligados quimicamente a estrutura da planta. Se queremos usá-los como remédio, precisamos extraí-los de alguma maneira e concentrá-los em uma preparação medicinal. Essa é função do líquido extrator. Ele age rompendo a ligação química, concentrando os princípios ativos e, muitas vezes, conservando-os por longo tempo. Essa preparação que usa ervas mais o líquido extrator resulta em uma preparação eficiente e prontamente disponível para uso.' },
            { type: 'paragraph', text: 'Vinho: É o mais usado por estar disponível na maioria dos lugares. Em geral, o vinho contém de 10 a 15% de álcool, sendo que no Brasil o mínimo teor alcoólico permitido para que receba o nome “vinho” é de 7%. O álcool presente no vinho funciona como extrator para os princípios ativos e, ainda, atua como um conservante, permitindo armazenar a garrafada por até 6 meses (ou mais, a depender das condições e armazenamento). Além disso, o próprio vinho, quando consumido com moderação, possui propriedades que beneficiam nosso organismo, tais como resveratrol, antioxidantes, vitaminas, minerais e muitos outros.' },
            { type: 'paragraph', text: 'Cachaça: Em alguns lugares do Brasil a aguardente feita de cana de açúcar é usada como líquido extrator, sendo uma opção para regiões nas quais o cultivo da uva não prospera. Porém, a cachaça possui um teor alcoólico variando de 38 a 54%, o que pode ser inadequado para pessoas com problemas de fígado ou estômago.' },
            { type: 'paragraph', text: 'Vinagre: É uma opção para quem não pode ingerir álcool, seja por problemas de saúde, convicção religiosa ou pessoal. O vinagre tem um poder de extração menor que o vinho e, por isso, é menos eficiente.' },
            { type: 'paragraph', text: 'Glicerina: É outra opção para quem não pode ingerir álcool e, também para crianças. Assim como o vinagre, a glicerina tem menor poder de extração que o álcool.' },
            { type: 'paragraph', text: 'Água: Também é possível fazer a garrafada apenas com água, que é uma opção para quem não pode ou não quer ingerir álcool, vinagre ou glicerina. Porém, as garrafadas com água requerem alguns cuidados adicionais. Ela precisa ser feita por decocção (ferver as ervas na água por alguns minutos). Essa fervura elimina bactérias e fungos. Depois, precisa ser guardada bem fechada na geladeira e consumida em até no máximo 10 dias. A durabilidade é menor porque a água não possui propriedade conservantes. Eu, pessoalmente, evito fazer garrafadas com água por questão de praticidade, durabilidade e segurança.' }
        ]
    },
    {
        id: 'as-ervas-medicinais',
        title: 'As Ervas Medicinais',
        icon: LeafIcon,
        content: [
            { type: 'paragraph', text: 'As ervas são escolhidas de acordo com o objetivo terapêutico desejado. Eu já vi pessoas fazerem garrafadas com dezenas de ervas e justificando que assim a garrafada trata de várias coisas ao mesmo tempo. Eu sou contra essa ideia!' },
            { type: 'paragraph', text: 'Primeiro, porque com dezenas de ervas é muito fácil de perder o controle sobre as interações que podem ocorrer entre as ervas. E, em segundo, o líquido extrator tem uma capacidade limitada de extrair os compostos. Uma vez que ele atinja a saturação, o processo de extração é interrompido. Ou seja, a garrafada terá menos poder terapêutico do que se fosse feita usando poucas ervas.'},
            { type: 'paragraph', text: 'Eu gosto de fazer as garrafadas com simples, com apenas uma erva ou, compostas, com no máximo 4 ervas. E sempre escolho ervas cujos efeitos terapêuticos se complementem ou que ajam sobre o mesmo problema, mas de maneira diferente. Além disso, sempre procuro usar ervas secas (desidratadas) para que a água existente dentro da própria planta não interfira com o processo de extração.'}
        ]
    },
    {
        id: 'tempo-de-maceracao',
        title: 'Tempo de Maceração, Recipiente e Agitação',
        icon: ClockIcon,
        content: [
            { type: 'paragraph', text: 'Maceração é o termo usado para quando a erva é deixada dentro do solvente para que ocorra a extração dos princípios ativos. Informalmente, as pessoas se referem a esse processo como "deixar repousar” ou “deixar descansar".' },
            { type: 'list', items: [
                'Para ervas folhosas, flores e outras estruturas finas: 3 a 4 semanas é suficiente.',
                'Raízes, cascas e sementes: 4 a 6 semanas por serem mais densas e duras.',
                'Resinas e gomas: podem levar até 8 semanas.'
            ]},
            { type: 'paragraph', text: 'Durante esse tempo de maceração, agite suavemente a misture a cada 2 ou 3 dias. Eu simplesmente viro o recipiente de cabeça para baixo e para cima umas três ou quatro vezes para que a bolha de ar que fica dentro do vidro faça a agitação.' },
            { type: 'paragraph', text: 'Eu prefiro usar um vidro de boca larga, no qual acomodo as ervas e despejo o líquido extrator por cima. Depois, quando terminar o tempo de maceração e com a mistura já filtrada, retorno o líquido para a garrafa limpa, tampando-a bem. Por fim, coloco uma etiqueta ou anoto no rótulo da garrafa as ervas que foram usadas e a data de fabricação da garrafada.' }
        ]
    },
    {
        id: 'filtragem',
        title: 'Filtragem',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Quando o tempo de maceração acabar, é necessário filtrar a mistura e descartar as ervas que foram usadas, sobrando apenas a parte líquida. Quando a mistura contém ervas trituradas em pó, deixo a mistura decantar por 30 a 60 minutos e despejo com cuidado a parte líquida em outro recipiente. Em seguida, passo o líquido por um coador de pano ou de papel. Quando a mistura contém pedaços maiores (folhas, casca), passo antes por uma peneira e depois pelo coador.' }
        ]
    },
    {
        id: 'armazenamento',
        title: 'Armazenamento da Garrafada',
        icon: FlaskIcon,
        content: [
            { type: 'paragraph', text: 'O recipiente em que a garrafada ficará guardada deve ser de cor escura, preferencialmente âmbar, evitando que a luz degrade os princípios ativos. Pelo mesmo motivo, guarde em um local fresco e escuro. Mantenha a garrafada sempre bem fechada (vedada) evitando a entrada de ar e umidade. Sempre observe o líquido a procura de sinais de deterioração (mudanças de cor, cheiro, mofo). Se perceber algo suspeito, descarte-a e prepare uma nova.' }
        ]
    },
    {
        id: 'receitas-geral',
        title: 'Sobre as Receitas',
        icon: BookOpenIcon,
        content: [
            { type: 'paragraph', text: 'Na maioria das receitas eu vou usar o vinho como solvente, por ser o mais indicado. Se você desejar substituir por vinagre ou glicerina, pode manter as quantidades. Se escolher usar água, lembre-se de cozinhar as ervas por 5 minutos e guardar na geladeira por no máximo 7 dias. O modo de preparo se repete, isso é proposital para que o material sirva para consulta rápida, direto ao que interessa. A seguir, deixarei várias receitas já testadas.' }
        ]
    },
    {
        id: 'garrafada-problemas-respiratorios-guaco-gengibre',
        title: 'Garrafada para problemas respiratórios (guaco e gengibre)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Alivia os sintomas de problemas respiratórios, como tosse de resfriados e bronquite. O guaco possui propriedades expectorantes e o gengibre, propriedades anti-inflamatórias.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['50 gramas de folhas secas de guaco (Mikania glomerata)', '50 gramas de gengibre fresco picado (Zingiber officinale)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'list', ordered: true, items: ['Em um recipiente de vidro limpo com capacidade de aproximadamente 1 litro adicione as ervas secas.', 'Despeje o vinho sobre as ervas, garantindo que haja vinho suficiente para que as ervas fiquem submersas.', 'Feche o recipiente de forma hermética para que não entre ar.', 'Agite a mistura.', 'Guarde-o em um local fresco e seco por cerca de 20 a 30 dias.', 'Agite suavemente a cada dois ou três dias.', 'Terminado o tempo de maceração, filtre a mistura para remover todos os resíduos das ervas.', 'Transfira o líquido (garrafada pronta) para uma garrafa de vidro limpa e guarde em um local fresco, seco e escuro.'] },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 4 vezes ao dia.' }
        ]
    },
    {
        id: 'garrafada-ansiedade-insonia',
        title: 'Garrafada para ansiedade e insônia (erva-doce, camomila e melissa)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Usada para aliviar sintomas de ansiedade e insônia. Ajuda nos casos de flatulência (gases). A erva-doce atua no sistema hormonal, reduzindo o estresse. A camomila é um calmante e a melissa reduz a ansiedade e contribui para um sono reparador.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['30 gramas de sementes de erva-doce (Pimpinella anisum)', '30 gramas de flores secas de camomila (Matricaria chamomilla)', '30 gramas de folhas secas de melissa (Melissa officinalis)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da receita anterior.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é 1 colher de sopa (15 ml) até 2 vezes ao dia. Para insônia, experimente tomar uma colher de sopa antes de deitar-se.' }
        ]
    },
    {
        id: 'garrafada-figado-colesterol-emagrecimento',
        title: 'Garrafada para saúde do fígado, colesterol e emagrecimento (alcachofra, boldo e dente-de-leão)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Promove a saúde do fígado, auxilia nos processos digestivos, reduz o colesterol ruim (LDL) e pode ajudar no emagrecimento. A alcachofra é um tônico para o fígado. O dente-de-leão atua limitando a absorção de gorduras no intestino e reduz a produção de colesterol.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['30 gramas de folhas secas de alcachofra (Cynara cardunculus)', '30 gramas de folhas secas de boldo (Plectranthus barbatus)', '30 gramas de folhas secas de dente-de-leão (Taraxacum officinale)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 2 vezes ao dia. Caso perceba algum desconforto intestinal anormal, suspenda o uso.' },
            { type: 'note', text: 'Advertências: Pessoas com condição inflamatória crônica nos intestinos ou doença hemorroidal devem evitar o uso do dente-de-leão.' }
        ]
    },
    {
        id: 'garrafada-gastrite-nervosa',
        title: 'Garrafada para gastrite nervosa (espinheira-santa, camomila e maracujá)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Auxilia na digestão, combate úlceras, gastrite e tem efeito calmante. A camomila e o maracujá reduzem a produção de ácido gástrico em casos de ansiedade. A espinheira-santa promove a produção do muco que protege a parede do estômago.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['30 gramas de folhas secas de espinheira-santa (Maytenus ilicifolia)', '30 gramas de flores secas de camomila (Matricaria chamomilla)', '30 gramas de folhas secas de maracujá (Passiflora edulis)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 3 vezes ao dia.' }
        ]
    },
    {
        id: 'garrafada-gases-digestao',
        title: 'Garrafada para gases e digestão (boldo e hortelã)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Alivia sintomas de gases e melhora a digestão. O boldo melhora as funções do fígado, melhorando a digestão. A hortelã combate a produção de gases.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['40 gramas de folhas secas de boldo (Plectranthus barbatus)', '40 gramas de folhas secas de hortelã (Mentha spicata)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 3 vezes ao dia.' }
        ]
    },
     {
        id: 'garrafada-estresse-ansiedade-sono',
        title: 'Garrafada para estresse, ansiedade e sono (melissa, capim-limão e camomila)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Indicada para promover relaxamento, aliviar sintomas de ansiedade, reduzir o estresse e induzir o sono. A melissa reduz a ansiedade, o capim-limão ajuda no sono e a camomila age nos neurotransmissores do cérebro, trazendo calma.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['30 gramas de folhas secas de melissa (Melissa officinalis)', '30 gramas de folhas secas de capim-limão (Cymbopogon citratus)', '30 gramas de flores secas de camomila (Matricaria chamomilla)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 3 vezes ao dia.' }
        ]
    },
    {
        id: 'garrafada-libido-desempenho-sexual',
        title: 'Garrafada para libido e desempenho sexual (catuaba e marapuama)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Estimular a libido e melhorar o desempenho sexual. A catuaba e a marapuama possuem propriedades afrodisíacas e estimulantes que aumentam a libido e a disposição.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['50 gramas de casca de catuaba (Erythroxylum vaccinifolium)', '50 gramas de raiz de marapuama (Ptychopetalum olacoides)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) diariamente.' }
        ]
    },
    {
        id: 'garrafada-contusoes-dores-musculares',
        title: 'Garrafada para contusões, dores musculares e articulares',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Apenas para uso externo, no tratamento de contusões, luxações, articulações doloridas e dores musculares. A arnica possui propriedades analgésicas e anti-inflamatórias.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['100 gramas de flores secas de arnica (Arnica montana)', '1 litro de álcool comum a 70% de concentração'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Similar à primeira receita, mas usando álcool. Ao despejar o álcool, as ervas podem boiar, mas afundarão em 1 ou 2 dias. O tempo de maceração é de 20 a 30 dias.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'Aplique a preparação sobre a área do corpo afetada e faça massagens suaves. Pode usar de 3 a 5 vezes por dia.' },
            { type: 'note', text: 'Advertências: Não deve ser ingerida. Apenas para uso externo. Teste em uma pequena área da pele antes de usar amplamente.' }
        ]
    },
    {
        id: 'garrafada-infeccoes-urinarias-ginecologicas',
        title: 'Garrafada para infecções urinárias e ginecológica (aroeira-vermelha e chapéu-de-couro)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Indicada para tratar infecções urinárias e ginecológicas. A aroeira possui propriedades anti-inflamatórias e antimicrobianas. O chapéu-de-couro é um excelente anti-inflamatório para infecções do sistema urinário.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['100 gramas de casca de aroeira-vermelha (Schinus terebinthifolia)', '50 gramas de chapéu-de-couro (Echinodorus grandiflorus)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 3 vezes ao dia.' }
        ]
    },
    {
        id: 'garrafada-pedra-rins',
        title: 'Garrafada para Pedra nos Rins (quebra-pedra e chapéu-de-couro)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Usada para tratar problemas renais, especialmente na eliminação de pedras nos rins. A erva quebra-pedra é conhecida por "desmanchar” as pedras. O chapéu-de-couro reduz a dor e o edema das vias urinárias.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['100 gramas de folhas secas de quebra-pedra (Phyllanthus niruri)', '100 gramas de chapéu-de-couro (Echinodorus grandiflorus)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 3 vezes ao dia.' }
        ]
    },
    {
        id: 'garrafada-desintoxicacao-figado',
        title: 'Garrafada para desintoxicação e problemas no fígado (dente-de-leão e abacate)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Usada para desintoxicação do organismo, como diurético, no tratamento de problemas do fígado, redução do colesterol ruim e emagrecimento. O dente-de-leão tem múltiplas formas de ação, como reduzir a absorção de gorduras.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['100 gramas de folhas de dente-de-leão (Taraxacum officinale)', '100 gramas de folhas de abacate (Persea americana)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 2 vezes ao dia.' },
            { type: 'note', text: 'Advertências: Por ter propriedades diuréticas, é importante ingerir bastante água. Cuidado se já usa medicamentos para pressão. Evitar em caso de sensibilidade intestinal ou hemorroidas.' }
        ]
    },
    {
        id: 'garrafada-artrite-artrose',
        title: 'Garrafada para artrite e artrose (canela-de-velho, gengibre e cúrcuma)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Indicada para o tratamento de dores articulares, como as causadas por artrite e artrose. Tem potentes propriedades analgésicas e anti-inflamatórias.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['100 gramas de folhas secas de canela-de-velho (Miconia albicans)', '30 gramas de gengibre picado (Gengiber officinale)', '30 gramas de cúrcuma em pó (Curcuma longa)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) até 3 vezes ao dia.' },
            { type: 'note', text: 'Advertências: A cúrcuma pode prejudicar a coagulação do sangue se usada com medicamentos anticoagulantes ou antitrombóticos.' }
        ]
    },
    {
        id: 'garrafada-memoria-concentracao',
        title: 'Garrafada para memória e concentração (alecrim e ginkgo-biloba)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Indicada para melhorar a memória, concentração e raciocínio. O alecrim é um estimulante cerebral e o ginkgo-biloba atua aumentando a oxigenação do cérebro.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['20 gramas de folhas secas de alecrim (Salvia rosmarinus)', '20 gramas de folhas secas de ginkgo-biloba (Ginkgo biloba)', '1 garrafa de vinho tinto (750 ml)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'O modo de preparo é o mesmo da primeira receita.' },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'A dosagem recomendada é de 1 colher de sopa (15 ml) uma vez por dia.' },
            { type: 'note', text: 'Advertências: evitar o ginkgo-biloba se estiver em alguma condição que reduza a coagulação do sangue, como uso de medicamentos anticoagulantes.' }
        ]
    },
    {
        id: 'garrafada-problemas-respiratorios-tanchagem-malva',
        title: 'Garrafada para problemas respiratórios (tanchagem e malva)',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Indicada para aliviar problemas respiratórios como tosse, congestão e catarro. A tanchagem possui propriedades expetorantes, emolientes e anti-inflamatórias. A malva, além de expectorante e emoliente, é antisséptica e suaviza os tecidos das mucosas.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['20 gramas de folhas secas de tanchagem (Plantago major)', '20 gramas de folhas secas de malva (Malva sylvestris)', '1 litro de água', 'Mel para adoçar (opcional)'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'list', ordered: true, items: ['Em um recipiente adicione as ervas.', 'Separadamente, em uma panela, ferva a água e despeje sobre as ervas.', 'Tampe o recipiente e aguarde esfriar.', 'Filtre a mistura para remover todos os resíduos das ervas.', 'Adicione mel se desejar adoçar.', 'Transfira o líquido para uma garrafa de vidro limpa e guarde na geladeira por até 7 dias.'] },
            { type: 'subheading', text: 'Forma de uso e dosagem' },
            { type: 'paragraph', text: 'Beba 1 xícara (150 ml) da garrafada morna até 3 vezes por dia.' }
        ]
    },
    {
        id: 'recomendacoes-finais',
        title: 'Recomendações Finais',
        icon: ClipboardCheckIcon,
        content: [
            { type: 'paragraph', text: 'Terminamos este livreto com 18 receitas prontas e testadas. Para todas as ervas usadas, eu me dediquei a confirmar os efeitos alegados na sabedoria popular com os artigos científicos publicados nos últimos anos.' },
            { type: 'paragraph', text: 'Se você adquiriu este livro, adquiriu também a “Bíblia Perdida dos Remédios Naturais", com 97 ervas que, combinadas, resultam em mais de 600 remédios naturais. E, com ela, podes criar suas próprias garrafadas medicinais, seguindo as seguintes recomendações:'},
            { type: 'list', items: ['Use no máximo 3 ervas por garrafada. Mais que isso requer um conhecimento e uma pesquisa aprofundada de fitoterapia.', 'Dê preferência para o vinho tinto, que além de ser um melhor extrator dos princípios ativos, é um excelente conservante natural.', 'Se ficar na dúvida sobre a quantidade de erva, use 30 gramas. Essa quantidade é suficiente para a maioria dos casos e garante um uso seguro.'] },
            { type: 'paragraph', text: 'E, se precisar de algum esclarecimento, sinta-se à vontade para me contactar. Estarei a sua disposição. Abraços, Prof. Dr. Jaime Figueiredo' }
        ]
    }
];