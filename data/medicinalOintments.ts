
import { PreparationSection } from '../types';
import { ShieldIcon, BookOpenIcon, BeakerIcon, LeafIcon, FireIcon, ClipboardCheckIcon, ClipboardListIcon } from '../components/Icon';

export const MEDICINAL_OINTMENTS_DATA: PreparationSection[] = [
    {
        id: 'introducao',
        title: 'Introdução',
        icon: BookOpenIcon,
        content: [
            { type: 'paragraph', text: 'Neste guia você vai aprender como fazer pomadas medicinais naturais para cuidar da sua saúde e, depois, vou deixar várias receitas práticas. Mas, antes, eu acredito que é importante que você entenda o processo. Assim, você terá autonomia para criar suas próprias pomadas ao invés de ficar preso em receitas prontas.' },
            { type: 'paragraph', text: 'Afinal, uma pomada nada mais é que os princípios ativos das plantas na forma pastosa, facilitando o uso. A minha proposta é de uma vida mais natural, com menos aditivos químicos artificiais. Como evitaremos o uso de conservantes, nosso primeiro tópico é sobre os cuidados que precisamos ter para aumentar a durabilidade e estabilidade das pomadas.' }
        ]
    },
    {
        id: 'cuidados-higiene',
        title: 'Cuidados com Higiene e Conservação',
        icon: ShieldIcon,
        content: [
            { type: 'paragraph', text: 'Esporos de bactérias e fungos estão em todos os lugares. Para reduzir ao máximo a contaminação de nossas preparações, precisamos de alguns cuidados.' },
            { type: 'subheading', text: 'Higiene das mãos' },
            { type: 'paragraph', text: 'Antes de começar, lave as mãos com água e sabão. Dê atenção especial as unhas. Se você for uma pessoa verdadeiramente cuidadosa, depois de lavar as mãos, esterilize as mãos com álcool 70%. Não enxugue as mãos após passar o álcool. Deixe-as secar sozinhas.' },
            { type: 'subheading', text: 'Higiene com os utensílios' },
            { type: 'paragraph', text: 'Lave os utensílios com água e detergente e deixe secar virados com a abertura para baixo. Após a lavagem mantenha seus utensílios virados para baixo ou cubra-os com um pano limpo.' },
            { type: 'subheading', text: 'Esterilizando recipientes' },
            { type: 'paragraph', text: 'Após a preparação, as pomadas deverão ser acondicionadas em recipientes. Recomendo o uso de recipientes de vidro. Lave-os com água e sabão e coloque-os em uma panela de pressão. Após pegar pressão, deixe por 5 a 10 minutos. Desligue o fogo e espere esfriar para pegá-los com segurança. Coloque para secar com a abertura virada para baixo, sobre um pano limpo.' }
        ]
    },
    {
        id: 'equipamentos-utensilios',
        title: 'Equipamentos e Utensílios',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Panela dupla para banho-maria ou fogão elétrico' },
            { type: 'paragraph', text: 'Você não pode preparar a sua pomada com a panela diretamente sobre o fogo. As altas temperaturas irão degradar os princípios ativos. Você pode usar uma panela dupla ou adaptar com duas panelas comuns. Uma alternativa é usar um fogão elétrico com controle de temperatura.' },
            { type: 'subheading', text: 'Sobre o material da panela' },
            { type: 'paragraph', text: 'Sempre que possível, dê preferência para panelas de vidro, aço inoxidável ou esmaltadas. Evite panelas de ferro ou recobertas com teflon e jamais use panelas de cobre ou bronze.' },
            { type: 'subheading', text: 'Colheres, espátulas e outros itens' },
            { type: 'paragraph', text: 'O normal que existem em qualquer cozinha. Eventualmente, uma balança com escala em gramas e um copo medidor pode ajudar.' },
            { type: 'subheading', text: 'Recipientes' },
            { type: 'paragraph', text: 'Prefira recipientes de vidro com tampa hermética. Um vidro com selo de borracha na tampa evitará que o ar entre. A luz também reduz a durabilidade, então você pode usar vidros de cor escura (âmbar) ou guardar suas pomadas abrigadas da luz.' },
        ]
    },
    {
        id: 'ingredientes',
        title: 'Ingredientes Principais',
        icon: LeafIcon,
        content: [
            { type: 'subheading', text: 'Óleo carreador' },
            { type: 'paragraph', text: 'A função do óleo carreador é diluir os compostos medicinais e servir de base para a pomada. Existem várias opções como óleo de amêndoas doce, abacate, semente de uva, azeite de oliva e óleo de girassol.' },
            { type: 'subheading', text: 'Endurecedor' },
            { type: 'paragraph', text: 'Para dar a consistência de pomada, precisamos de um endurecedor. O mais popular é a cera de abelha. Temos também a cera de carnaúba, uma opção vegana. A quantidade de cera pode mudar de acordo com a marca, então faça testes com pequenas quantidades para acertar a consistência.' },
            { type: 'note', text: 'Importante: Não use ceras para outras finalidades (móveis, couro), pois contêm aditivos prejudiciais à saúde.' },
            { type: 'subheading', text: 'Vitamina E' },
            { type: 'paragraph', text: 'Para evitar a oxidação da pomada pelo oxigênio (que causa o "ranço"), usaremos a vitamina E. Bastam algumas poucas gotas. Use a vitamina E oleosa, que se mistura facilmente aos óleos e ceras.' },
            { type: 'subheading', text: 'Manteigas' },
            { type: 'paragraph', text: 'O uso é opcional e sua função é dar uma textura mais macia e agradável. Você pode usar manteiga de karité, cacau ou manga. Elas são ricas em vitaminas, minerais e ácidos graxos, com propriedades hidratantes e anti-inflamatórias.' }
        ]
    },
    {
        id: 'principios-ativos',
        title: 'Princípios Ativos das Ervas',
        icon: FireIcon,
        content: [
            { type: 'paragraph', text: 'Chegamos ao ponto que mais interessa. Como tornar nossa pomada ativa medicinalmente. Para isso há duas opções: óleos essenciais ou óleo medicado.' },
            { type: 'subheading', text: 'Óleos Essenciais' },
            { type: 'paragraph', text: 'São obtidos pela destilação a vapor de partes das plantas. A concentração de princípios ativos é muito grande, então poucas gotas são suficientes. A desvantagem é que podem ser caros e nem sempre é fácil encontrar o óleo da erva que você deseja.' },
            { type: 'subheading', text: 'Óleo Medicado (Oleatos)' },
            { type: 'paragraph', text: 'É o óleo carreador infundido com as ervas medicinais. Durante o processo, os princípios ativos das plantas passam para o óleo. Existem duas maneiras de fazer: "à frio" e "à quente".' },
            { type: 'note', text: 'Sempre use ervas secas, pois as frescas contêm água e podem comprometer a durabilidade e qualidade da infusão.' },
            { type: 'subheading', text: 'Infusão em óleo "à frio"' },
            { type: 'list', ordered: true, items: ['Rasgue ou esmague as ervas secas e coloque-as em um frasco de vidro limpo (1/3 do frasco).', 'Despeje o óleo sobre as ervas, preenchendo o frasco. Misture bem e remova bolhas de ar. Tampe e rotule.', 'Armazene por 6 a 8 semanas. Não ultrapasse 10 semanas para não ficar rançoso.', 'Após o período, coe as ervas. Este óleo pode ser usado diretamente ou para fazer pomadas. Dura de 1 a 2 anos.'] },
            { type: 'subheading', text: 'Infusão em óleo "à quente"' },
            { type: 'list', ordered: true, items: ['Pique ou triture as ervas secas e coloque-as em um frasco de vidro (1/3 do frasco).', 'Despeje o óleo sobre as ervas, garantindo que fiquem submersas. Misture bem, tampe e rotule.', 'Coloque os frascos em banho-maria ou panela elétrica em fogo baixo (65-75 °C) por 30 a 40 minutos (ou 2 horas para partes lenhosas).', 'Desligue o fogo, deixe esfriar e coe as ervas.'] }
        ]
    },
    {
        id: 'receitas-intro',
        title: 'Receitas de Pomadas',
        icon: ClipboardListIcon,
        content: [
            { type: 'paragraph', text: 'Abaixo você terá várias receitas já testadas. Sugiro que comece com elas para obter habilidade. Mas, não se limite. Quando se sentir confiante, experimente fazer suas próprias receitas.' },
            { type: 'note', text: 'Recomendo sempre testar uma pequena quantidade na parte externa do antebraço para verificar se há alguma reação alérgica a algum componente.' }
        ]
    },
    {
        id: 'pomada-assadura',
        title: 'Pomada para Assadura',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['250 ml de óleo de coco prensado a frio', '250 ml de calêndula', '50 g de cera de carnaúba', '10 gotas de óleo essencial de lavanda', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Prepare o óleo de coco medicado por infusão com a calêndula. Derreta a cera de carnaúba e acrescente o óleo de coco medicado. Retire do fogo e acrescente o óleo essencial de lavanda e a vitamina E. Misture bem, despeje nos recipientes e espere esfriar.' }
        ]
    },
    {
        id: 'pomada-colicas',
        title: 'Pomada para Cólicas Menstruais',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['6 gr de manteiga de karité', '2 colheres de sopa de cera de abelha', '4 gr de óleo de amêndoas doce', '15 gotas de óleo essencial de Sálvia', '10 gotas de óleo essencial de manjerona', '5 gotas de óleo gerânio', '3 gotas vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera e a manteiga de karité. Retire do fogo e acrescente o óleo de amêndoas, o óleo essencial e a vitamina E. Misture bem, despeje nos recipientes e aguarde esfriar.' }
        ]
    },
    {
        id: 'pomada-dor-de-cabeca',
        title: 'Pomada para Dor de Cabeça',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1 colher de cera de carnaúba', '7 gramas de óleo de jojoba', '20 gotas de óleo essencial de hortelã-pimenta', '15 gotas de óleo essencial de alecrim', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera, retire do fogo e acrescente o óleo de jojoba, os óleos essenciais e a vitamina E. Misture bem e despeje nos recipientes e espere esfriar. Massageia a testa e inale seus vapores para aliviar a dor de cabeça.' }
        ]
    },
    {
        id: 'pomada-barbatimao',
        title: 'Pomada Cicatrizante de Barbatimão',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Anti-inflamatória, cicatrizante e antisséptica.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['2 colheres de cera de abelha', '1/2 xícara (75 ml) de óleo de coco', '1/4 de xícara de manteiga de karité', '2 colheres de óleo de jojoba', '2 colheres de sopa de barbatimão em pó', '10 gotas de óleo essencial de melaleuca', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera, a manteiga de karité e o óleo de coco. Retire do fogo e acrescente os demais ingredientes. Misture bem e despeje nos recipientes. Espere esfriar.' }
        ]
    },
    {
        id: 'pomada-copaiba',
        title: 'Pomada Cicatrizante de Óleo de Copaíba',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['2 colheres de cera de abelha', '1/2 xícara (75 ml) de óleo de coco', '3 colheres de óleo de copaíba', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera e o óleo de coco. Retire do fogo e acrescente os demais ingredientes. Misture bem, despeje nos recipientes e aguarde esfriar.' }
        ]
    },
    {
        id: 'pomada-calendula',
        title: 'Pomada de Calêndula',
        icon: BeakerIcon,
        content: [
            { type: 'paragraph', text: 'Para tratar de acnes, verrugas, coceira, ardor, assaduras, erupções, psoríase e outras inflamações na pele.' },
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1/2 colher de sopa de cera de abelha', '1/2 colher de sopa manteiga de karité', '1 colher de sopa de óleo de abacate', '1/2 colher de sopa de óleo de jojoba', '9 gotas de óleo essencial de calêndula', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera e a manteiga de karité. Retire do fogo e acrescente o óleo essencial de calêndula, o óleo de abacate, o óleo de jojoba e a vitamina E. Misture bem, despeje nos recipientes e aguarde esfriar.' }
        ]
    },
    {
        id: 'pomada-micose',
        title: 'Pomada para Micose',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['2 colheres de sopa de cera de abelha', '1/4 de xícara de óleo de abacate', '2 colheres de sopa de óleo de copaíba', '2 colheres de manteiga de karité', '10 gotas de óleo essencial de melaleuca', '10 gotas de óleo essencial de orégano', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha, o óleo de abacate e a manteiga de karité. Retire do fogo e acrescente os demais ingredientes. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-tosse',
        title: 'Pomada para Tosse',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1/4 de xícara de óleo de coco', '1/4 de xícara de manteiga de cacau', '2 colheres de sopa de cera de abelha', '10 gotas de óleo essencial de eucalipto', '10 gotas de óleo essencial de hortelã-pimenta', '10 gotas de óleo essencial de limão', '10 gotas de óleo essencial de cravo', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha, a manteiga de cacau e o óleo de coco. Retire do fogo, acrescente os demais ingredientes. Misture bem, despeje nos recipientes e aguarde esfriar. Massageie o peito e as costas. Evite exposição a luz solar, pois o óleo essencial de limão pode manchar a pele.' }
        ]
    },
    {
        id: 'pomada-antisseptica-antioxidante',
        title: 'Pomada Antisséptica e Antioxidante',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['19 gramas manteiga de karité', '8 gramas lanolina vegetal', '1,5 gramas de cera de candelila', '0,6 gramas de gel de Aloe vera', '5 gotas de óleo essencial de mirra', '5 gotas de óleo essencial de aroeira', '2 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de candelila, a manteiga de karité e a lanolina. Retire do fogo e adicione os demais ingredientes. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-tatuagens',
        title: 'Pomada Cicatrizante para Tatuagens',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1/2 colher de sopa de cera de candelila', '1 colher de sopa de manteiga de cacau', '1 colher de sopa de manteiga de karité', '1 colher de sopa de óleo de amêndoas doce', '1 colher de gel de Aloe vera', '2 colheres de sopa de própolis', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera, a manteiga de cacau e a manteiga de karité. Retire do fogo e acrescente os demais ingredientes. Misture bem, despeje nos recipientes e aguarde esfriar.' }
        ]
    },
    {
        id: 'pomada-clareadora',
        title: 'Pomada Clareadora para a Pele',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['4 gramas de cera de candelila', '10 gramas de manteiga de karité', '10 gramas de óleo vegetal de semente de uva', '8 gotas de óleo essencial de gerânio', '8 gotas de óleo essencial de vetiver', '7 gotas de óleo essencial de rosa mosqueta', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera, a manteiga junto com o óleo de semente de uva. Retire do fogo e acrescente os óleos essenciais e a vitamina E. Misture bem e despeje nos recipientes.' }
        ]
    },
    {
        id: 'pomada-melasma',
        title: 'Pomada para Melasma',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['4 gramas de cera de abelha', '10 gramas de manteiga de cacau', '10 gramas de óleo de copaíba', '7 gotas de óleo essencial de olíbano', '7 gotas de óleo essencial de vetiver', '5 gotas de óleo essencial de rosa mosqueta', '6 gotas de óleo essencial de melaleuca', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera e as manteigas. Acrescente o óleo de copaíba, os óleos essenciais e a vitamina E. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-dermatite',
        title: 'Pomada para Dermatite',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['4 gramas de cera de abelha', '10 gramas de manteiga de karité', '10 gramas de óleo de jojoba', '7 gotas de óleo essencial de lavanda', '7 gotas de óleo essencial de immortelle', '6 gotas de óleo essencial de melaleuca', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera, a manteiga e o óleo de jojoba. Retire do fogo e acrescente os óleos essenciais e a vitamina E. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-foliculite',
        title: 'Pomada para Foliculite',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['4 gramas de cera de abelha', '10 gramas de manteiga de karité', '10 gramas de óleo de amêndoas', '7 gotas de óleo essencial de melaleuca', '7 gotas de óleo essencial de lavanda', '8 gotas de óleo essencial de palmarosa', '4 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera e manteiga junto com o óleo de amêndoas. Retire do fogo e acrescente os óleos essenciais e a vitamina E. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-varizes',
        title: 'Pomada para Varizes',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['100 gramas de gel da Aloe vera', '1 colher de sopa de cera de abelha', 'folhas de alecrim e arruda a gosto', '100 gramas de óleo de coco', '1 colher de sopa de azeite de oliva', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Triture as folhas de alecrim e arruda até que elas se tornem um pó fino. Misture as folhas trituradas com o gel de Aloe vera e o azeite de oliva. Leve ao fogo e adicione o óleo de coco e a cera de abelha. Mexa continuamente até que a cera de abelha derreta completamente e se misture. Retire do fogo e acrescente a vitamina E. Despeje nos recipientes e aguarde esfriar.' },
            { type: 'note', text: 'Algumas pessoas se incomodam com as folhas na pomada. Neste caso, você pode coar em uma peneira de metal para retirar os pedacinhos de folhas.' }
        ]
    },
    {
        id: 'pomada-pes-rachados',
        title: 'Pomada para Pés Rachados',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['2 colheres de chá de cera de carnaúba', '1 colher de chá de óleo vegetal de rícino', '1 colher de chá de óleo vegetal de cânhamo', '1 colher de chá de óleo vegetal de girassol', '1 colher de sopa de óleo vegetal de jojoba', '5 gotas de óleo essencial de mirra', '4 gotas de óleo essencial de lavanda', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta cera de carnaúba junto com os óleos de rícino, cânhamo, girassol e jojoba. Retire do fogo e acrescente os óleos essenciais e a vitamina E. Despeje nos recipientes e aguarde esfriar.' }
        ]
    },
    {
        id: 'pomada-anti-inflamatoria',
        title: 'Pomada Anti-inflamatória',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['10 gramas de óleo de jojoba', '40 gramas de manteiga de karité', '50 ml de óleo vegetal de girassol', '5 gramas de cera de carnaúba', '3 gotas de óleo essencial de limão', '3 gotas de óleo essencial de sálvia', '10 gotas de óleo essencial de lavanda', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de carnaúba junto com o óleo de jojoba, o óleo de girassol e a manteiga de karité. Retire do fogo e acrescente os demais ingredientes. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-eczema',
        title: 'Pomada para Eczema',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1/4 xícara de manteiga de karité', '1/4 xícara de óleo de coco', '1/4 de cera de carnaúba', '10 gotas de óleo essencial de camomila', '10 gotas de óleo essencial de immortelle', '10 gotas de óleo essencial de Olíbano', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta o óleo de coco, a manteiga de karité e a cera de carnaúba. Retire do fogo, acrescente os demais ingredientes e misture bem. Despeje a mistura nos recipientes e espere esfriar.' }
        ]
    },
    {
        id: 'pomada-antibacteriana',
        title: 'Pomada Antibacteriana',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1/2 xícara de azeite', '1/2 xícara de óleo de coco', '1/4 xícara de calêndula desidratada', '1/4 xícara de lavanda desidratada', '4 colheres de sopa de cera de abelha', '1 colher de sopa de mel', '10 gotas de óleo essencial de melaleuca', '10 gotas de óleo essencial de lavanda'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Coloque as ervas, o azeite de oliva e o óleo de coco para esquentar em banho-maria em temperatura baixa por 20 minutos. Coe e deixe reservado. Derreta a cera de abelha e acrescente os óleos da etapa anterior. Retire do fogo e acrescente os demais ingredientes. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-labios-rachados',
        title: 'Pomada para Lábios Rachados',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['4 gramas de cera de candelila', '10 gramas de manteiga de karite', '10 gramas de óleo de coco', '1/4 de extrato de baunilha', '7 gotas de óleo essencial de laranja', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera juntamente com a manteiga de karité, o óleo de coco e o extrato de baunilha. Retire do fogo e acrescente o óleo essencial de laranja e a vitamina E. Despeje nos frascos e aguarde esfriar.' }
        ]
    },
    {
        id: 'pomada-descongestionante',
        title: 'Pomada Descongestionante',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['50 ml de óleo de azeite', '5 gramas de cera de abelha', '8 gotas de óleo essencial de eucalipto', '8 gotas de óleo essencial de hortelã-pimenta', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha com o óleo de azeite. Retire do fogo e adicione os óleos essenciais de eucalipto e hortelã-pimenta. Acrescente a vitamina E e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-dor-muscular',
        title: 'Pomada para Dor Muscular',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['11 gramas de manteiga de karité', '11 de gramas de cera de abelha branca', '10 gramas de cristais de mentol', '10 gramas de canfora de natural', '3 gotas de vitamina E', '20 gotas de óleo essencial de cajeput', '17 gotas de óleo essencial de lavanda', '13 gotas de óleo essencial de canela', '9 gotas de óleo essencial de cravo'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha e a manteiga de karité. Retire do fogo e adicione a cânfora e o mentol. Misture bem e adicione os óleos essenciais e a vitamina E. Volte a misturar bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-herpes-labial',
        title: 'Pomada para Herpes Labial',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['30 ml de óleo medicado de erva-cidreira', '10 ml de óleo de copaíba', '8 gramas de cera abelha', '8 gramas de manteiga de cacau', '10 gotas de óleo essencial de erva cidreira', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha e a manteiga de cacau junto com o óleo medicado de erva-cidreira. Retire do fogo e acrescente o óleo de copaíba, o óleo essencial de erva-cidreira e a vitamina E. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-machucaduras',
        title: 'Pomada para Machucaduras',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['2 xícaras de óleo medicado de calêndula', '1/4 xícaras de cera de abelha', '6 gotas de óleo essencial de lavanda', '5 gotas de óleo essencial de tea tree', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha no óleo medicado de calêndula. Retire do fogo e acrescente o óleo essencial de lavanda e o óleo essencial de tea tree. Misture bem e despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'pomada-queimaduras',
        title: 'Pomada para Queimaduras',
        icon: BeakerIcon,
        content: [
            { type: 'subheading', text: 'Ingredientes' },
            { type: 'list', items: ['1/2 xícaras de óleo de coco', '2 colheres de sopa de cera de abelha', '2 colheres de sopa de gel de Aloe vera', '10 gotas de óleo essencial de lavanda', '3 gotas de vitamina E'] },
            { type: 'subheading', text: 'Modo de preparo' },
            { type: 'paragraph', text: 'Derreta a cera de abelha junto com o óleo de coco e o gel de Aloe vera. Retire do fogo e acrescente o óleo essencial de lavanda e a vitamina E. Misture bem e em seguida despeje nos recipientes para esfriar.' }
        ]
    },
    {
        id: 'orientacoes-finais',
        title: 'Orientações Finais',
        icon: ClipboardCheckIcon,
        content: [
            { type: 'paragraph', text: 'Agora você já tem a disposição receitas de pomadas para as mais variadas situações. Mas, você não precisa se limitar a elas. Pode criar suas próprias formulações.' },
            { type: 'paragraph', text: 'Preste atenção aos ingredientes que são sensíveis a luz solar, como os óleos essenciais de limão. Em contato com a luz solar eles mancham a pele.' },
            { type: 'paragraph', text: 'Assim que terminar suas preparações, lave seus utensílios usando água quente e sabão, pois, a cera após esfriar, torna a limpeza difícil.' },
            { type: 'paragraph', text: 'Agora, só resta colocar as mãos na massa e produzir suas primeiras pomadas. Comece pelas mais simples e baratas até ganhar habilidade. Depois, continue para as mais elaboradas.' }
        ]
    }
];
