
import { PreparationSection } from '../types';
import { AlertTriangleIcon, BookOpenIcon, BeakerIcon, ClipboardCheckIcon, FireIcon } from '../components/Icon';


export const CURATIVE_JUICES_DATA: PreparationSection[] = [
    {
        id: 'aviso',
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
            { type: 'paragraph', text: 'Caro leitor, Uma das características mais marcantes da humanidade é a nossa capacidade de classificar as coisas para facilitar o entendimento. Com as plantas, não é diferente. Assim, costumamos diferenciar as plantas para fins alimentares das plantas com fins medicinais.' },
            { type: 'paragraph', text: 'Mas, todas as plantas produzem diversos compostos com a finalidade de crescer, se reproduzir, se defender de predadores e parasitas, resistir aos tempos de frio e de seca, se comunicar com outras plantas através de óleos essenciais voláteis. Produzem, inclusive, substâncias que a ciência ainda não foi capaz de descobrir a função.' },
            { type: 'paragraph', text: 'E, ainda que as classifiquemos algumas plantas como alimentícias, elas também propriedades curativas que costumamos subestimar. Esse é o caso da beterraba e do chuchu, ambas excelentes para abaixar a pressão arterial. Ou, o limão, que “limpa” as artérias, prevenindo e reduzindo a formação das placas de gordura (ateromas). Ou da alface, um leve sedativo que nos ajuda a ter um sono reparador.' },
            { type: 'paragraph', text: 'O que eu quero dizer a você, amigo leitor, é que a cura para muitos dos males que afligem as pessoas pode estar bem mais perto do que pensamos. Logo ali. Dentro da sua geladeira ou nas gôndolas do supermercado.' },
            { type: 'paragraph', text: 'Neste livro, eu fiz uma revisão dos artigos científicos em busca das propriedades medicinais de alimentos vegetais encontrados facilmente em qualquer lugar. Mais que isso, criei combinações de sucos, que podem ser feitos rapidamente, a um custo extremamente baixo, na cozinha da sua casa.' },
            { type: 'paragraph', text: 'Espero que estas receitas te ajudem a ter uma melhor saúde, reduzir os remédios químicos e, até mesmo, eliminá-los completamente da sua vida.' },
        ]
    },
    {
        id: 'orientacoes-gerais',
        title: 'Orientações Gerais',
        icon: ClipboardCheckIcon,
        content: [
            { type: 'paragraph', text: 'Eu preparo os ingredientes com antecedência, coloco as quantidades necessárias para fazer uma receita, coloco em sacos de plásticos e congelo. Toda a manhã, antes de iniciar meu trabalho, retiro um ou dois sacos do freezer e preparo rapidamente no liquidificador. Simples, rápido e prático.' },
            { type: 'paragraph', text: 'Eu recomendo que os sucos sempre sejam tomados o mais breve possível após a preparação. Após um tempo que pode variar de 6 a 24 horas, mesmo se guardados na geladeira, o oxigênio presente no ar causará a oxidação dos compostos.' },
            { type: 'paragraph', text: 'Em quanto tempo os efeitos curativos dos sucos serão percebidos? E a resposta é... depende. Depende do problema, da condição de saúde de cada pessoa, das comorbidades, da idade, etc. Problemas de pressão arterial alta, eu tenho visto os resultados variando de uma semana a um mês. Colesterol sendo diminuído em 30 dias. Artrite e artrose, geralmente demoram mais.' },
            { type: 'paragraph', text: 'A boa notícia é que os sucos, por serem feitos com alimentos comuns do dia a dia, se usados sem exagero, raramente causarão algum efeito adverso. A exceção são as pessoas que são alérgicas a algum dos ingredientes. E, neste caso, a recomendação é óbvia: não tome.' },
            { type: 'note', text: 'Salvo orientação em contrário, todos os sucos são feitos com os vegetais crus para evitar a degradação dos compostos terapêuticos devido ao calor do cozimento.' }
        ]
    },
    {
        id: 'suco-para-hipertensao-opcao-1',
        title: 'Suco para Hipertensão (opção 1)',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 xícara de beterraba picada', '1 xícara de chuchu picado', 'Suco de 1 limão espremido'] },
            { type: 'paragraph', text: 'Bata no liquidificador. Se desejar, pode acrescentar água ou água de coco. Tome 1 vez por dia, ao acordar, em jejum.' },
            { type: 'paragraph', text: 'A Beterraba é rica em nitratos, que são transformados em óxido nítrico, um potente vaso dilatador. O Chuchu é rico em potássio, um vasodilatador natural. O Limão atua “limpando” as artérias ao remover o acumulo de colesterol LDL.' }
        ]
    },
    {
        id: 'suco-para-hipertensao-opcao-2',
        title: 'Suco para Hipertensão (opção 2)',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 beterraba crua', 'Suco de 1 limão', '1 maça média sem casca e sem sementes', '1 cenoura pequena', '1/2 copo de suco de uva integral (escura)'] },
            { type: 'paragraph', text: 'Bata todos os ingredientes no liquidificador e tome imediatamente após fazer. Tome de manhã, logo ao acordar.' }
        ]
    },
    {
        id: 'suco-para-baixar-o-colesterol-e-a-glicemia',
        title: 'Suco para Baixar o Colesterol e a Glicemia',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 xícara de abacaxi com casca', '1 colher de sobremesa de gengibre', 'Suco de 1 limão', '1 copo de água'] },
            { type: 'paragraph', text: 'Bata tudo no liquidificador. Coe se desejar. Tome 1 vez por dia, durante 30 dias e faça o exame. Atua na diminuição da glicemia e protege as artérias.' }
        ]
    },
    {
        id: 'suco-para-reduzir-o-colesterol',
        title: 'Suco para Reduzir o Colesterol',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1/2 beringela', '200 ml de água ou água de coco', 'Suco de 1 limão', '2 colheres de sopa de farinha de aveia'] },
            { type: 'paragraph', text: 'Coloque a beringela com casca de molho em água fria por 6 horas. Depois, bata no liquidificador, juntamente com os demais ingredientes. Tome 1 vez por dia em jejum.' }
        ]
    },
    {
        id: 'suco-para-reduzir-triglicerideos',
        title: 'Suco para Reduzir Triglicerídeos',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1/2 xícara de aveia', '200 ml de água', '1 colher de café de canela em pó'] },
            { type: 'paragraph', text: 'Misture os ingredientes e beba 1 vez ao dia, em jejum. Se preferir, pode adicionar mais água. A aveia e a canela apresentam efeitos significativos na melhora do perfil lipídico.' }
        ]
    },
    {
        id: 'suco-para-gordura-no-figado',
        title: 'Suco para Gordura no Fígado',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 xícara de talos e folhas de salsão (aipo)', 'Suco de 1 limão espremido', '1 xícara de água de coco'] },
            { type: 'paragraph', text: 'Bata os ingredientes no liquidificador e beba imediatamente. Tome antes de dormir, por 15 dias, dê um intervalo de 1 semana e repita.' }
        ]
    },
    {
        id: 'suco-para-gastrite',
        title: 'Suco para Gastrite',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 batata crua', '1 copo de água'] },
            { type: 'paragraph', text: 'Descasque a batata e corte em pedaços. Acrescente a água e bata no liquidificador. A batata possui um polissacarídeo que demonstrou redução de 84% no índice de úlcera gastrita.' }
        ]
    },
    {
        id: 'suco-para-gastrite-e-azia',
        title: 'Suco para Gastrite e Azia',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 xícara de batata-doce', '1 copo de água'] },
            { type: 'paragraph', text: 'Descasque a batata-doce e corte em pedaços. Bata no liquidificador com 1 copo de água. Tome de 1 a 2 vezes por dia. A batata-doce tem compostos que reduzem a acidez estomacal.' }
        ]
    },
    {
        id: 'suco-para-gastrite-e-refluxo',
        title: 'Suco para Gastrite e Refluxo',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1/5 xícara de batata-doce', '1/5 de xícara de maçã', '1 colher de sobremesa de gengibre', '1 copo de água'] },
            { type: 'paragraph', text: 'Bata tudo no liquidificador e coe. Tome 2 vezes no dia. Protege o estômago, reduz a produção de ácido e estimula a regeneração da mucosa.' }
        ]
    },
    {
        id: 'suco-para-diarreia',
        title: 'Suco para Diarreia',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['2 goiabas', '200 ml de água ou de água de coco'] },
            { type: 'paragraph', text: 'Bata os ingredientes no liquidificador e tome 2 vezes por dia. A goiaba é rica em flavonóides e taninos com propriedades antidiarréicas.' }
        ]
    },
    {
        id: 'suco-para-o-intestino-funcionar-opcao-1',
        title: 'Suco para o Intestino Funcionar (opção 1)',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1/2 mamão papaya', '3 ameixas secas sem o caroço', 'Suco de 1 laranja', '200 ml de água'] },
            { type: 'paragraph', text: 'Bata todos os ingredientes no liquidificador. Não coe e tome 1 vez por dia em jejum. Possuem propriedades laxantes.' }
        ]
    },
    {
        id: 'suco-para-o-intestino-funcionar-opcao-2',
        title: 'Suco para o Intestino Funcionar (opção 2)',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1/2 xícara de inhame', '1/2 xicara de abacaxi com casca', '1 colher de chá rasa de Cúrcuma', '1 copo de água'] },
            { type: 'paragraph', text: 'Bata tudo no liquidificador e coe se desejar. Tome 2 vezes por dia, antes das principais refeições. O inhame e o abacaxi são ricos em fibras que favorecem o trânsito intestinal.' }
        ]
    },
    {
        id: 'suco-para-depressao',
        title: 'Suco para Depressão',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['4 fatias de melão', '1 banana', '1 manga sem casca', '100 ml de água'] },
            { type: 'paragraph', text: 'Bata os ingredientes no liquidificador, coe e tome 1 vez por dia. O melão, a banana e a manga são ricos em triptofano, precursor do neurotransmissor serotonina (que produz a sensação de bem-estar e felicidade).' }
        ]
    },
    {
        id: 'suco-para-insonia',
        title: 'Suco para Insônia',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['5 folhas de alface', '1 colher de sopa de salsa', 'Polpa de 1 maracujá'] },
            { type: 'paragraph', text: 'Acrescente água se desejar e bata todos os ingredientes no liquidificador. Tome 1 copo antes de dormir. Possui atividade calmante e induz o sono.' }
        ]
    },
    {
        id: 'suco-para-ansiedade',
        title: 'Suco para Ansiedade',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 copo de água de coco', '10 amêndoas', '1 banana'] },
            { type: 'paragraph', text: 'Bata tudo no liquidificador e tome 1 vez por dia no início da noite. As amêndoas e a banana são ricas em triptofano, essencial para a produção de serotonina.' }
        ]
    },
    {
        id: 'suco-para-estresse',
        title: 'Suco para Estresse',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['Polpa de 1 maracujá', '1 folha de alface', '1 copo de iogurte natural', '1 colher de levedo de cerveja', '1 colher de lecitina de soja', '1 colher de mel'] },
            { type: 'paragraph', text: 'Bata todos os ingredientes no liquidificador a tome 1 vez por dia, de preferência ao anoitecer. Contém calmantes leves e nutrientes que combatem o estresse.' }
        ]
    },
    {
        id: 'osteoporose-e-perda-de-densidade-ossea',
        title: 'Osteoporose e Perda de Densidade Óssea',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['200 ml de leite', '2 colheres de sopa de farinha de aveia', '1 mamão médio'] },
            { type: 'paragraph', text: 'É só bater os ingredientes no liquidificador e, se desejar, coar. O leite é rico em cálcio, a aveia possui avenantramidas que protegem os tecidos ósseos, e o mamão possui papaína, que ajuda a manter a densidade dos ossos.' }
        ]
    },
    {
        id: 'suco-anti-inflamatorio',
        title: 'Suco Anti-inflamatório',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['Suco de 1 laranja', '1 cenoura média', '1 fatia de abacaxi', '1 colher de sopa de gengibre picado'] },
            { type: 'paragraph', text: 'Descasque e bata no liquidificador com um pouco de água ou água de coco. Todas as plantas acima possuem propriedades anti-inflamatórias e antioxidantes.' }
        ]
    },
    {
        id: 'suco-para-menopausa',
        title: 'Suco para Menopausa',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 xícara de amora negra', '2 xícaras de água de coco'] },
            { type: 'paragraph', text: 'Coloque os ingredientes no liquidificador e bata. Tome 2 vezes ao dia, após as refeições. A amora negra possui fitoestrógenos com efeitos comprovados na redução dos sintomas da menopausa.' }
        ]
    },
    {
        id: 'suco-para-anemia-por-dificiencia-de-ferro',
        title: 'Suco para Anemia por Dificiência de Ferro',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['20 acerolas', '3 folhas médias de couve', '1 litro de água'] },
            { type: 'paragraph', text: 'Bata os ingredientes no liquidificador e tome ao longo do dia. A acerola é rica em vitamina C, essencial para a absorção do ferro da couve.' }
        ]
    },
    {
        id: 'suco-para-ressaca-alcoolica',
        title: 'Suco para Ressaca Alcoólica',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 fatia generosa de melancia', '2 colheres de aipo picado', '10 folhas de hortelã', '100 ml de água de coco'] },
            { type: 'paragraph', text: 'Bata todos os ingredientes no liquidificador e tome sem coar, 2 vezes ao dia. Hidrata e ajuda na regeneração dos tecidos do fígado.' }
        ]
    },
    {
        id: 'suco-para-gripe-e-resfriado',
        title: 'Suco para Gripe e Resfriado',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['Suco de 2 laranjas', 'Suco 1/2 limão', '1 xícara de abacaxi picado', '1 colher de mel', '2 gotas de própolis'] },
            { type: 'paragraph', text: 'Misturar bem os ingredientes e tomar 1 vez ao dia, de preferência antes de ir dormir. Aumenta a imunidade e facilita a respiração.' }
        ]
    },
    {
        id: 'suco-para-tpm',
        title: 'Suco para TPM',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 beterraba média', '1 inhame médio', '2 laranjas', '100 ml de água ou de água de coco'] },
            { type: 'paragraph', text: 'Bata tudo no liquidificador e tome 1 vez por dia, logo de manhã. Ajuda a aumentar a circulação sanguínea e na regulação da menstruação.' }
        ]
    },
    {
        id: 'suco-para-diabetes-tipo-2',
        title: 'Suco para Diabetes Tipo 2',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1 xícara de batata yacon', '1 copo de água ou água de coco'] },
            { type: 'paragraph', text: 'Bata os ingredientes no liquidificador e tome 1 vez por dia antes da primeira refeição do dia. A batata yacon demonstrou eficácia em reduzir a glicemia.' }
        ]
    },
    {
        id: 'suco-para-retencao-de-liquidos',
        title: 'Suco para Retenção de Líquidos',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['Suco de 2 limões', '1 fatia de melancia', '2 fatias de abacaxi', '1 fatia de melão'] },
            { type: 'paragraph', text: 'Bata os ingredientes (sem as sementes) no liquidificador. Acrescente água se desejar. Tome 1 vez por dia à tarde, devido a suas propriedades diuréticas.' }
        ]
    },
    {
        id: 'suco-para-acido-urico-e-gota',
        title: 'Suco para Ácido Úrico e Gota',
        icon: BeakerIcon,
        content: [
            { type: 'list', items: ['1/2 pepino médio', '1/2 cenoura média', '1 copo de água ou água de coco'] },
            { type: 'paragraph', text: 'Pique os ingredientes, bata no liquidificador e tome 2x por dia. Melhoram a função dos rins e do fígado, reduzindo o ácido úrico que causa a gota.' }
        ]
    },
    {
        id: 'palavras-finais',
        title: 'Palavras Finais',
        icon: ClipboardCheckIcon,
        content: [
            { type: 'paragraph', text: 'Se tomados com regularidade, os sucos curativos cumprirão seus objetivos. Caso contrário, não. É preciso ter constância.' },
            { type: 'paragraph', text: 'Outra coisa importante é ter hábitos de alimentação mais saudáveis e equilibrados. Não adianta tomar um suco para abaixar o colesterol e exagerar no consumo de carboidratos e gorduras.' },
            { type: 'paragraph', text: 'Comece devagar e vá avançando um pouco de cada vez. Foi assim que eu abaixei meu colesterol, triglicerídeos, pressão arterial e me recuperei de uma Obstrução Arterial Periférica.' },
            { type: 'note', text: 'Anote para não esquecer: “O segredo não é a força. É a constância.”' },
        ]
    }
];