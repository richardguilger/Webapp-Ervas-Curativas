import { Herb } from '../types';

// This is a subset of the herbs from the PDF for demonstration purposes.
// A full implementation would include all herbs listed.
export const HERBS: Herb[] = [
  {
    "id": 1,
    "nomePopular": "Picão",
    "nomeCientifico": "Bidens pilosa",
    "parteUsada": "Folhas, planta inteira",
    "formaDeUsoPrincipal": "Chá, Tintura, Compressa, Banho de assento",
    "usosPrincipais": [
      "Antioxidante",
      "Câncer",
      "Anti-inflamatório",
      "Antialérgico (bronquite, asma)",
      "Antibacteriano",
      "Herpes",
      "Malária",
      "Leishmaniose",
      "Febre e Dor",
      "Úlceras Estomacais e Controle de Acidez",
      "Diarreia",
      "Pressão Alta e Angina",
      "Dor de Dente",
      "Aftas e Lesões Bucais",
      "Hepatite e Proteção do Fígado",
      "Diabetes, Insulina e Glicemia",
      "Cicatrizante",
      "Furúnculos e Hemorroidas",
      "Parto e Pós-parto"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Picão para uso interno (Adultos)",
        "descricao": "1 colher de sobremesa da erva seca para 1 xícara de água (150 ml). Coloque as ervas em recipiente, derrame a água fervente sobre as ervas e tampe. Aguarde esfriar e tome 3 xícaras por dia."
      },
      {
        "titulo": "Chá de Picão para uso interno (Crianças)",
        "descricao": "3 a 7 anos: tomar 35 ml do chá de 3 a 4 vezes ao dia.\n7 a 12 anos: a dose indicada é de 75 ml, 3 a 4 vezes ao dia."
      },
      {
        "titulo": "Uso externo (Banhos e Compressas)",
        "descricao": "Faça um chá forte na proporção de 4 colheres de sopa da erva seca para 300 ml de água. Use no banho de assento (2x ao dia) ou aplique sobre a lesão com um pano (3 a 4 vezes por dia)."
      }
    ],
    "cuidadosEContraindicacoes": "Se tiver alergia a plantas da família Asteraceae, não faça uso. Devido a suas propriedades que promovem o aumento do hormônio oxitocina, não deve ser usado durante a gravidez.",
    "imagemUrl": "https://i.imgur.com/vHq1YDB.jpeg"
  },
  {
    "id": 2,
    "nomePopular": "Ulmária",
    "nomeCientifico": "Filipendula ulmaria",
    "parteUsada": "Flores, folhas e raízes",
    "formaDeUsoPrincipal": "Chá, Decocção, Compressa",
    "usosPrincipais": [
      "Artrite e Reumatismo",
      "Febre",
      "Infecções do Trato Urinário",
      "Gripe e Resfriado",
      "Dores de Cabeça",
      "Retenção de Líquidos",
      "Problemas Respiratórios (bronquite, tosse)",
      "Problemas de Pele (feridas, erupções)",
      "Gota",
      "Diarreia",
      "Úlceras Bucais"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Ulmária para Uso Interno",
        "descricao": "1 colher de sobremesa das flores secas para 1 xícara de água (150 ml). Se usar as folhas, dobre a quantidade. Despeje água fervente, tampe e aguarde. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Decocção de Raiz de Ulmária",
        "descricao": "1 colher de sobremesa da raiz seca e picada para 1 xícara de água (150 ml). Cozinhar por 5 minutos, desligar o fogo, aguardar esfriar e coar."
      }
    ],
    "cuidadosEContraindicacoes": "Não deve ser usada por pessoas com alergia a ácido acetilsalicílico (aspirina). Por conter derivados do ácido salicílico, não deve ser usada por pessoas com dificuldades de coagulação sanguínea.",
    "imagemUrl": "https://i.imgur.com/W2bAAnY.jpeg"
  },
  {
    "id": 3,
    "nomePopular": "Abacateiro",
    "nomeCientifico": "Persea americana",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Tintura",
    "usosPrincipais": [
      "Colesterol (total e LDL)",
      "Claudicação Intermitente (DAOP)",
      "Antiviral (Herpes, Gripes)",
      "Antimicrobiano",
      "Diabetes",
      "Pressão Arterial Alta",
      "Perda de Peso",
      "Epilepsia",
      "Úlcera gástrica e duodenal",
      "Proteção do fígado",
      "Cálculos renais"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Folha de Abacate",
        "descricao": "1 colher de sobremesa de folhas secas e picadas para 1 xícara de chá de água (150 ml). Despeje a água fervente sobre as ervas, aguarde esfriar e coe. Beba 3 xícaras distribuídas ao longo do dia."
      },
      {
        "titulo": "Chá Forte para Uso Externo",
        "descricao": "Use o dobro da quantidade de ervas para fazer um chá forte. Use para tratar ferimentos e infecções genitais. Beba o chá normal em conjunto para tratar o problema de dentro para fora."
      }
    ],
    "cuidadosEContraindicacoes": "Deve ser evitado por pessoas que sofrem de pressão arterial baixa, que tem insuficiência renal e mulheres que estejam grávidas ou amamentando.",
    "imagemUrl": "https://i.imgur.com/YQ8xJ1d.jpeg"
  },
  {
    "id": 4,
    "nomePopular": "Fel da Terra",
    "nomeCientifico": "Erythraea centaurium",
    "parteUsada": "Folhas, Flores",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
      "Diabetes tipo 2",
      "Proteção do Fígado e Gordura no Fígado (esteatose hepática)",
      "Pressão Arterial Alta e Melhora da Circulação",
      "Reduz Colesterol",
      "Antimicrobiano",
      "Anti-inflamatório e Febre"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Folhas ou Flores",
        "descricao": "1 colher de sobremesa de folhas ou flores secas para 1 xícara de água (150 ml). Despeje a água fervente, tampe, espere esfriar e coe. Beba 3 xícaras ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "Evitar o uso em mulheres grávidas e amamentando. Pessoas com pressão arterial baixa não devem fazer uso.",
    "imagemUrl": "https://i.imgur.com/5uX7g8m.jpeg"
  },
  {
    "id": 5,
    "nomePopular": "Calêndula",
    "nomeCientifico": "Calendula officinalis",
    "parteUsada": "Folhas, Flores",
    "formaDeUsoPrincipal": "Chá, óleo infundido, pomada, compressa, cataplasma",
    "usosPrincipais": [
      "Doenças do Estômago e Intestinais",
      "Sistema Imunológico e Linfático",
      "Doenças de Pele (cortes, queimaduras, herpes)",
      "Antienvelhecimento e Produção de Colágeno",
      "Alivia Espasmos Musculares",
      "Úlceras, Feridas e Hemorroidas",
      "Menstruação e TPM",
      "Saúde Bucal",
      "Inibe o Câncer",
      "Desintoxicação do Fígado e Vesícula Biliar"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Calêndula",
        "descricao": "1 colher de sobremesa de Calêndula picada para 1 xícara de água. Coloque as folhas num recipiente e despeje a água fervente. Tampe e aguarde esfriar."
      }
    ],
    "cuidadosEContraindicacoes": "Não usar se for alérgico a plantas da família Asteraceae. Não usar internamente se estiver grávida ou amamentando. Não ingerir com outros medicamentos sem consultar um médico.",
    "imagemUrl": "https://i.imgur.com/T5r1q0B.jpeg"
  },
  {
    "id": 6,
    "nomePopular": "Tribulus",
    "nomeCientifico": "Tribulus terrestris",
    "parteUsada": "Fruto, folhas, raízes",
    "formaDeUsoPrincipal": "Chá, Decocção, Cápsulas",
    "usosPrincipais": [
      "Disfunção Erétil e Infertilidade Masculina",
      "Problemas Cardíacos",
      "Dor e Inflamação",
      "Desequilíbrios Hormonais e Menopausa",
      "Infecções Urinárias e Pedras nos Rins",
      "Atividade Imunomoduladora",
      "Diabetes",
      "Colesterol e Triglicerídeos",
      "Ansiedade e Depressão",
      "Proteção do Fígado",
      "Cólicas Intestinais",
      "Câncer",
      "Antibacteriana",
      "Parasitas",
      "Cáries dentárias"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Frutos de Tribulus",
        "descricao": "1 colher de sobremesa de frutos secos e triturados para 1 xícara de água (150 ml). Despeje a água fervente, tampe, espere esfriar e coe. Beba 3 xícaras ao longo do dia."
      },
      {
        "titulo": "Chá de Folhas de Tribulus",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Mesmo preparo. Beba 3 xícaras ao longo do dia."
      },
      {
        "titulo": "Decocção de Raízes de Tribulus",
        "descricao": "½ colher de raízes secas para 1 xícara de água (150 ml). Ferver em fogo baixo por 5 minutos. Desligue, espere esfriar, coe e beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Usar com cautela em casos de desequilíbrios hormonais (câncer de mama/próstata). Pode interagir com medicamentos hormonais ou para pressão arterial. Pode causar desconforto gastrointestinal.",
    "imagemUrl": "https://i.imgur.com/OqJ9m6z.jpeg"
  },
  {
    "id": 7,
    "nomePopular": "Papoula da Califórnia",
    "nomeCientifico": "Eschscholzia californica",
    "parteUsada": "Toda a planta, principalmente a raiz",
    "formaDeUsoPrincipal": "Infusão (Chá)",
    "usosPrincipais": [
      "Diurética",
      "Relaxante muscular",
      "Analgésica",
      "Sedativa",
      "Normaliza a Função Psicológica (TEPT, Ansiedade)",
      "Antiespasmódica (incontinência)",
      "Suprime a Produção de Leite"
    ],
    "receitasRapidas": [
      {
        "titulo": "Infusão de Papoula da Califórnia",
        "descricao": "1 colher de chá de folhas ou raiz secas para 1 xícara de água. Despeje a água fervente, tampe, aguarde esfriar e coe. Beba de 1 a 2 xícaras por dia. Para dormir melhor, beba antes de deitar."
      }
    ],
    "cuidadosEContraindicacoes": "É um sedativo, não opere máquinas pesadas após o uso. Mulheres grávidas e lactantes devem evitar.",
    "imagemUrl": "https://i.imgur.com/rP3iE6S.jpeg"
  },
  {
    "id": 8,
    "nomePopular": "Castanha da Índia",
    "nomeCientifico": "Aesculus hippocastanum",
    "parteUsada": "Sementes",
    "formaDeUsoPrincipal": "Cápsulas, Pomada",
    "usosPrincipais": [
      "Insuficiência Circulatória Venosa Crônica",
      "Varizes",
      "Hematomas",
      "Inchaço e Retenção de Líquidos",
      "Artrite e Artrose",
      "Cansaço e Peso nas Pernas",
      "Dores nas Pernas",
      "Hemorroidas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Principal Forma de Uso",
        "descricao": "A maneira mais eficiente é na forma de cápsulas feitas com as sementes. Outra opção é o uso tópico na forma de pomada."
      }
    ],
    "cuidadosEContraindicacoes": "Pessoas com doenças renais ou hepáticas crônicas devem ter cuidado. Pode interagir com medicamentos anticoagulantes.",
    "imagemUrl": "https://i.imgur.com/XqT2J1v.jpeg"
  },
  {
    "id": 9,
    "nomePopular": "Alamanda",
    "nomeCientifico": "Geranium carolinianum",
    "parteUsada": "Raiz, folhas",
    "formaDeUsoPrincipal": "Chá, Decocção, Cataplasma",
    "usosPrincipais": [
      "Dores de Garganta",
      "Hepatite B",
      "Estancar Sangramentos",
      "Secar Tecidos",
      "Diarreia e Desconforto Estomacal",
      "Aftas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Folhas de Alamanda",
        "descricao": "1 colher de sobremesa de folhas e caules secos para 1 xícara de água (150 ml). Despeje a água fervente, tampe, aguarde esfriar e coe. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Decocção de Raiz de Alamanda",
        "descricao": "1 colher de sobremesa de raízes secas e picadas para 1 xícara de água (150 ml). Ferver por 5 minutos em fogo brando. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Consulte um profissional de saúde antes de usar, especialmente se estiver grávida, amamentando ou tomando outros medicamentos.",
    "imagemUrl": "https://i.imgur.com/8d9zF2H.jpeg"
  },
  {
    "id": 10,
    "nomePopular": "Camomila",
    "nomeCientifico": "Matricaria chamomilla",
    "parteUsada": "Flores secas",
    "formaDeUsoPrincipal": "Chá, Óleo Essencial, Inalação a vapor",
    "usosPrincipais": [
      "Alergias e Eczema",
      "Asma, Bronquite, Coqueluche e Congestão",
      "Problemas Digestivos (gases, cólicas, gastrite, inchaço)",
      "Dores Musculares",
      "Insônia e Ansiedade",
      "Cólicas infantis",
      "Problemas oculares (Conjuntivite)"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá calmante",
        "descricao": "1 a 2 colheres de sobremesa de flores secas para 1 xícara de água (150 ml). Despeje água fervente, tampe, espere esfriar e coe. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Compressa para olhos",
        "descricao": "Fazer um chá forte, esperar esfriar, coar bem. Umedecer gaze ou algodão e aplicar sobre os olhos fechados por 5–10 min."
      },
      {
        "titulo": "Inalação para congestão",
        "descricao": "Adicione duas colheres de chá de pétalas a uma panela de água fervente. Inale o vapor até que o catarro seja liberado."
      }
    ],
    "cuidadosEContraindicacoes": "Evitar uso em caso de alergia a plantas da família Asteraceae (margarida, crisântemo, arnica). Pode potencializar efeito de sedativos.",
    "imagemUrl": "https://i.imgur.com/L1b5eAg.jpeg"
  },
  {
    "id": 11,
    "nomePopular": "Gengibre",
    "nomeCientifico": "Zingiber officinale",
    "parteUsada": "Rizoma (raiz)",
    "formaDeUsoPrincipal": "Decocção, Chá",
    "usosPrincipais": [
      "Náuseas e Vômitos",
      "Indigestão, Gases, Acidez e Síndrome do Intestino Irritável",
      "Dor de Garganta e Infecções Respiratórias",
      "Artrite, Artrite Psoriática e Fibromialgia",
      "Dores Musculares",
      "Resfriados e Gripes",
      "Problemas Menstruais e TPM",
      "Diabetes e Controle da Glicemia",
      "Colesterol Alto e Circulação Sanguínea"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Raízes de Gengibre",
        "descricao": "1 colher de sobremesa de raízes picadas para 1 xícara de água (150 ml). Ferver em fogo brando por 5 minutos. Beba 3 xícaras por dia. Para problemas digestivos, beba 1 xícara antes das refeições."
      }
    ],
    "cuidadosEContraindicacoes": "O uso medicinal deve ser feito com cautela, especialmente em casos de úlceras gástricas, problemas cardíacos, ou diabetes. Evite doses elevadas para prevenir efeitos como azia e desconforto gastrointestinal.",
    "imagemUrl": "https://i.imgur.com/8aJ5m6S.jpeg"
  },
  {
    "id": 12,
    "nomePopular": "Morugem",
    "nomeCientifico": "Stellaria media",
    "parteUsada": "Folhas (frescas ou secas)",
    "formaDeUsoPrincipal": "Chá, Cataplasma, Pomada, Banho",
    "usosPrincipais": [
      "Dor Nervosa",
      "Artrite",
      "Erupções Cutâneas",
      "Constipação e Problemas Digestivos",
      "Irritações Cutâneas (Dermatite, Eczema, Urticária)",
      "Herpes e Varizes",
      "Furúnculos e Doenças Venéreas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Morugem",
        "descricao": "1 colher de chá de folhas secas ou 2 de folhas frescas para 1 xícara de água (150 ml). Despeje água fervente, tampe, aguarde esfriar e coe. Beba 3 xícaras por dia. Para uso externo, lave a área ou faça compressas."
      }
    ],
    "cuidadosEContraindicacoes": "Algumas pessoas são alérgicas. A erva é considerada segura, mas não deve ser usada por mulheres grávidas ou lactantes sem a aprovação de um profissional de saúde.",
    "imagemUrl": "https://i.imgur.com/BvL5g4x.jpeg"
  },
  {
    "id": 13,
    "nomePopular": "Agrimônia",
    "nomeCientifico": "Agrimonia eupatoria",
    "parteUsada": "Folhas e sementes",
    "formaDeUsoPrincipal": "Chá, Cataplasma, Compressa",
    "usosPrincipais": [
      "Pedras nos Rins",
      "Problemas Digestivos",
      "Cuidados com Feridas e Pele",
      "Diarreia"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Agrimônia",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas trituradas para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Chá Forte para Uso Externo",
        "descricao": "Use 3 colheres de sopa de folhas secas para 1 xícara de água (150 ml). Use para lavar feridas ou fazer compressas."
      },
      {
        "titulo": "Cataplasma",
        "descricao": "Esmague uma quantidade adequada de folhas frescas e aplique sobre a área afetada. Mantenha no local com uma bandagem ou pano limpo. Aplique de 2 a 3 vezes por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Por ter propriedades fotossensibilizantes, pode causar reações adversas ao se expor ao sol. A ingestão exagerada pode causar prisão de ventre. Mulheres grávidas, lactantes e pacientes que fazem uso de medicamento anticoagulantes não devem usar.",
    "imagemUrl": "https://i.imgur.com/Yw9v0uO.jpeg"
  },
  {
    "id": 14,
    "nomePopular": "Ginkgo",
    "nomeCientifico": "Ginkgo biloba",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Extratos, Cápsulas",
    "usosPrincipais": [
      "Circulação Sanguínea e Antioxidante",
      "Demência e Doença de Alzheimer",
      "Tontura e Vertigem",
      "Zumbido no Ouvido",
      "Síndrome das Pernas Inquietas",
      "Claudicação Intermitente",
      "Ansiedade e Depressão",
      "Problemas Cognitivos Associados ao Envelhecimento"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Ginkgo",
        "descricao": "1 colher de chá de folhas secas (ou 2 de frescas) para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Cápsulas de Extrato Seco",
        "descricao": "Nas lojas especializadas em produtos fitoterápicos podem ser adquiridas cápsulas do extrato seco padronizado. A dosagem varia conforme o fabricante."
      }
    ],
    "cuidadosEContraindicacoes": "Pode causar dor de cabeça, distúrbios gastrointestinais e reações alérgicas. Evitar uso excessivo, especialmente em pessoas com distúrbios hemorrágicos ou que tomam anticoagulantes. Consulte um profissional de saúde antes do uso.",
    "imagemUrl": "https://i.imgur.com/0Fw9m3S.jpeg"
  },
  {
    "id": 15,
    "nomePopular": "Babosa",
    "nomeCientifico": "Aloe vera",
    "parteUsada": "Gel da folha",
    "formaDeUsoPrincipal": "Gel tópico, Suco",
    "usosPrincipais": [
      "Cuidados com a Pele, Queimaduras, Eczema",
      "Azia e Síndrome do Intestino Irritável",
      "Redução dos Níveis de Açúcar no Sangue em Diabéticos",
      "Laxante"
    ],
    "receitasRapidas": [
      {
        "titulo": "Uso Externo do Gel",
        "descricao": "Colha as folhas, coloque na vertical em água por 24h para remover a aloína. Corte a folha ao meio e raspe o gel. Use como bálsamo calmante diretamente na pele."
      },
      {
        "titulo": "Uso Interno do Gel",
        "descricao": "Após remover a aloína, adicione 28 a 85 gramas do gel a um suco de frutas. O gel puro é desagradável e amargo."
      }
    ],
    "cuidadosEContraindicacoes": "O gel contém aloína, que é irritante para o intestino e deve ser removida antes do uso interno. Não use internamente durante a gravidez e se tiver hemorroidas ou problemas nos rins.",
    "imagemUrl": "https://i.imgur.com/kY7hF2w.jpeg"
  },
  {
    "id": 16,
    "nomePopular": "Agastache",
    "nomeCientifico": "Agastache foeniculum",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Óleo essencial, Compressa",
    "usosPrincipais": [
      "Resfriados, Gripe, Congestão Bronquial",
      "Herpes",
      "Saúde cardíaca e Angina",
      "Feridas, Cortes e Queimaduras",
      "Facilita a Digestão",
      "Diarreia",
      "Infecções Fúngicas na Pele"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Agastache",
        "descricao": "1 colher de sobremesa de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje a água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Chá forte para imersão ou compressa",
        "descricao": "Aumente a quantidade de erva para 4 ou 6 colheres de sobremesa para uso externo."
      }
    ],
    "cuidadosEContraindicacoes": "Consulte um profissional de saúde antes de usar, especialmente durante a gravidez ou amamentação.",
    "imagemUrl": "https://i.imgur.com/f7jYf8q.jpeg"
  },
  {
    "id": 17,
    "nomePopular": "Salsa",
    "nomeCientifico": "Petroselinum crispum",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Alimento",
    "usosPrincipais": [
      "Problemas Digestivos, Indigestão e Gases",
      "Infecções Urinárias, Cistite e Uretrite",
      "Anemia",
      "Tosse, Bronquite, Sinusite",
      "Artrite, Tendinite e Inflamações Crônicas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Salsa",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje a água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Pessoas com problemas renais, grávidas, lactantes ou em uso de anticoagulantes devem usar com cautela.",
    "imagemUrl": "https://i.imgur.com/KzX5W1o.jpeg"
  },
  {
    "id": 18,
    "nomePopular": "Capuchinha",
    "nomeCientifico": "Tropaeolum majus",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
      "Infecções do Trato Urinário",
      "Infecções Respiratórias, Gripes, Resfriados",
      "Cortes, Feridas, Infecções de Pele",
      "Alopecia e Queda de Cabelo",
      "Depressão, Fadiga e Astenia"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Capuchinha",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje a água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Não deve ser usada por gestantes ou lactantes. Pessoas com alergia a plantas da família Brassicaceae devem evitar seu uso. Pode causar irritação na pele em algumas pessoas.",
    "imagemUrl": "https://i.imgur.com/C9G1b8h.jpeg"
  },
  {
    "id": 19,
    "nomePopular": "Ashwagandha",
    "nomeCientifico": "Withania somnifera",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Pó, Cápsulas",
    "usosPrincipais": [
      "Adaptógeno (estresse, fadiga)",
      "Ansiedade e Depressão",
      "Melhora da função cognitiva e memória",
      "Aumento da força e massa muscular",
      "Saúde sexual e fertilidade",
      "Anti-inflamatório (artrite)",
      "Redução do cortisol",
      "Melhora do sono"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Raiz de Ashwagandha",
        "descricao": "1 colher de chá de raiz seca e picada para 1 xícara de água (150 ml). Ferver por 10-15 minutos em fogo baixo. Coar e beber 1 a 2 vezes por dia."
      },
      {
        "titulo": "Leite Dourado com Ashwagandha",
        "descricao": "Misture 1 colher de chá de pó de ashwagandha em um copo de leite morno com uma pitada de cúrcuma e mel. Beba antes de dormir para um sono reparador."
      }
    ],
    "cuidadosEContraindicacoes": "Evitar durante a gravidez. Pode interagir com sedativos e medicamentos para tireoide. Pessoas com doenças autoimunes devem consultar um profissional de saúde antes do uso.",
    "imagemUrl": "https://i.imgur.com/7gK5c3m.jpeg"
  },
  {
    "id": 20,
    "nomePopular": "Hibisco",
    "nomeCientifico": "Hibiscus sabdariffa",
    "parteUsada": "Cálices das flores",
    "formaDeUsoPrincipal": "Chá (infusão)",
    "usosPrincipais": [
      "Controle da pressão arterial",
      "Redução do colesterol LDL",
      "Diurético e auxílio na perda de peso",
      "Saúde do fígado",
      "Antioxidante",
      "Propriedades antibacterianas",
      "Alívio de cólicas menstruais"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Hibisco",
        "descricao": "1 colher de sopa de cálices secos para 1 litro de água. Ferva a água, desligue o fogo e adicione o hibisco. Deixe em infusão por 5 a 10 minutos. Coe e beba quente ou frio."
      }
    ],
    "cuidadosEContraindicacoes": "Pode interferir com medicamentos para pressão alta e diabetes. Não recomendado para gestantes ou lactantes, pois pode afetar os níveis hormonais.",
    "imagemUrl": "https://i.imgur.com/2m2T3Z1.jpeg"
  },
  {
    "id": 21,
    "nomePopular": "Erva de Cobra",
    "nomeCientifico": "Eupatorium rugosum (Ageratina altissima)",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Cataplasma (uso externo)",
    "usosPrincipais": [
      "Febre e suor excessivo (diaforético)",
      "Malária",
      "Picadas de cobra (uso tópico tradicional)",
      "Dores reumáticas",
      "Gripes e resfriados"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção para Febre",
        "descricao": "1 colher de chá de raiz seca para 2 xícaras de água. Ferver em fogo baixo até reduzir pela metade. Tomar em pequenas doses ao longo do dia."
      },
      {
        "titulo": "Cataplasma para Picadas (Uso Externo)",
        "descricao": "Esmagar a raiz fresca e aplicar sobre a área da picada de inseto ou cobra (como primeiros socorros, procurar ajuda médica imediatamente)."
      }
    ],
    "cuidadosEContraindicacoes": "Planta tóxica se usada incorretamente. Contém tremetol, que pode causar 'doença do leite'. O uso interno deve ser feito com extrema cautela e sob supervisão de um profissional experiente. Não usar durante a gravidez ou amamentação.",
    "imagemUrl": "https://i.imgur.com/kS9w0yv.jpeg"
  },
  {
    "id": 22,
    "nomePopular": "Salgueiro Branco",
    "nomeCientifico": "Salix alba",
    "parteUsada": "Casca",
    "formaDeUsoPrincipal": "Decocção, Tintura, Cápsulas",
    "usosPrincipais": [
      "Analgésico (dores de cabeça, dores musculares)",
      "Anti-inflamatório (artrite, reumatismo)",
      "Antipirético (redução da febre)",
      "Alívio de dores nas costas",
      "Dores menstruais"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Casca de Salgueiro",
        "descricao": "1-2 colheres de chá de casca seca para 1 xícara de água (150 ml). Ferver em fogo baixo por 10-15 minutos. Deixe em infusão por mais 30 minutos, coe e beba 3-4 vezes ao dia."
      }
    ],
    "cuidadosEContraindicacoes": "Contém salicina, precursora da aspirina. Não deve ser usado por pessoas com alergia a aspirina, distúrbios de coagulação, úlceras ou problemas renais/hepáticos. Não recomendado para crianças, gestantes ou lactantes.",
    "imagemUrl": "https://i.imgur.com/d8p1Q4D.jpeg"
  },
  {
    "id": 23,
    "nomePopular": "Borragem",
    "nomeCientifico": "Borago officinalis",
    "parteUsada": "Folhas, flores, óleo das sementes",
    "formaDeUsoPrincipal": "Chá, Óleo (cápsulas)",
    "usosPrincipais": [
      "Anti-inflamatório (artrite reumatoide)",
      "Saúde da pele (eczema, psoríase)",
      "Redução do estresse e suporte adrenal",
      "Sintomas da TPM e menopausa",
      "Problemas respiratórios (tosse, bronquite)",
      "Diurético leve"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Borragem",
        "descricao": "1 colher de sopa de folhas e flores frescas (ou 1 de chá secas) para 1 xícara de água fervente. Deixe em infusão por 10 minutos. Beba 2-3 vezes ao dia."
      }
    ],
    "cuidadosEContraindicacoes": "As folhas contêm alcaloides pirrolizidínicos que podem ser tóxicos para o fígado em uso prolongado ou altas doses. Prefira o óleo das sementes, que é livre desses alcaloides. Evitar durante a gravidez e amamentação.",
    "imagemUrl": "https://i.imgur.com/x0r4qfB.jpeg"
  },
  {
    "id": 24,
    "nomePopular": "Amor do Hortelão",
    "nomeCientifico": "Galium aparine",
    "parteUsada": "Partes aéreas",
    "formaDeUsoPrincipal": "Chá, Suco fresco, Tintura",
    "usosPrincipais": [
      "Tônico linfático (linfonodos inchados)",
      "Diurético (cistite, pedras nos rins)",
      "Problemas de pele (psoríase, eczema)",
      "Limpeza e desintoxicação do corpo",
      "Úlceras e feridas (uso externo)"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Amor do Hortelão",
        "descricao": "2-3 colheres de chá da erva fresca (ou 1 seca) por xícara de água fervente. Infusão por 10-15 minutos. Beba 3 vezes ao dia."
      },
      {
        "titulo": "Suco Fresco",
        "descricao": "Bata um punhado da planta fresca com um pouco de água no liquidificador e coe. Tomar em pequenas doses."
      }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro. Pessoas com diabetes devem usar com cautela devido ao efeito diurético. Evitar durante a gravidez por falta de estudos.",
    "imagemUrl": "https://i.imgur.com/z4b0mNq.jpeg"
  },
  {
    "id": 25,
    "nomePopular": "Poejo",
    "nomeCientifico": "Mentha pulegium",
    "parteUsada": "Folhas e flores",
    "formaDeUsoPrincipal": "Chá, Xarope",
    "usosPrincipais": [
      "Expectorante (gripes, resfriados, bronquite)",
      "Digestivo (gases, indigestão)",
      "Repelente de insetos",
      "Alívio de cólicas menstruais (emenagogo)",
      "Febre (diaforético)"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Poejo",
        "descricao": "1 colher de chá de folhas secas por xícara de água fervente. Infusão por 5-10 minutos. Beba até 3 vezes ao dia."
      }
    ],
    "cuidadosEContraindicacoes": "Contém pulegona, uma substância tóxica para o fígado e que pode induzir o aborto. NÃO DEVE SER CONSUMIDO POR GESTANTES. Usar com moderação e por curtos períodos. O óleo essencial é altamente tóxico e não deve ser ingerido.",
    "imagemUrl": "https://i.imgur.com/5lR3s1P.jpeg"
  },
  {
    "id": 26,
    "nomePopular": "Licopódio",
    "nomeCientifico": "Lycopodium clavatum",
    "parteUsada": "Esporos (pó), Folhas (chá)",
    "formaDeUsoPrincipal": "Pó, Decocção",
    "usosPrincipais": [
      "Problemas no Sistema Urinário e Pedras nos Rins",
      "Problemas de Pele (alergias, psoríase, eczema)",
      "Tratamento de Feridas",
      "Artrite Reumatoide"
    ],
    "receitasRapidas": [
      {
        "titulo": "Pó de Esporos para Pele",
        "descricao": "Esfregue o pó formado pelos esporos na área afetada para tratar alergias, queimaduras, eczema, infecções fúngicas e outras dermatites."
      },
      {
        "titulo": "Decocção para Uso Interno",
        "descricao": "1 colher de sobremesa de raízes secas para 1 xícara de água (150 ml). Ferver em fogo brando por 5 minutos. Beba 3 xícaras por dia para problemas urinários."
      }
    ],
    "cuidadosEContraindicacoes": "Contém pequenas quantidades de alcaloides, que são uma substância tóxica e podem causar paralisia nos nervos motores se consumidos em grandes quantidades.",
    "imagemUrl": "https://i.imgur.com/3s1Hj5e.jpeg"
  },
  {
    "id": 27,
    "nomePopular": "Tussilagem",
    "nomeCientifico": "Tussilago farfara",
    "parteUsada": "Folhas, Flores",
    "formaDeUsoPrincipal": "Decocção, Óleo medicado, Cataplasma",
    "usosPrincipais": [
      "Asma, Tosse Convulsa, Laringite, Tosse, Enfisema e Bronquite",
      "Expectorante",
      "Emoliente e Demulcente",
      "Diurética",
      "Sistema Imunológico",
      "Eczema, Feridas e Irritações na pele"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Tussilagem",
        "descricao": "1 colher de sobremesa de raízes secas para 1 xícara de água (150 ml). Ferver em fogo brando por 5 minutos. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "As folhas contêm pequenas quantidades de compostos tóxicos quando ingeridos. Para eliminar, basta deixar a decocção cozinhar por 4 ou 5 minutos. Para uso externo, não há risco.",
    "imagemUrl": "https://i.imgur.com/p1Q2v5j.jpeg"
  },
  {
    "id": 28,
    "nomePopular": "Erva Botão",
    "nomeCientifico": "Eclipta prostrata",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Óleo infundido",
    "usosPrincipais": [
      "Doenças Hepáticas, Hepatite, Cirrose",
      "Previne e Trata Queda de Cabelos",
      "Artrite, Dores Musculares e Inflamações",
      "Problemas Respiratórios, Asma, Bronquite",
      "Diabetes",
      "Cicatrizante, Dermatites, Eczema, Ferida, Furúnculos",
      "Distúrbios Digestivos",
      "Transtornos Cognitivos",
      "Doenças Cardiovasculares",
      "Distúrbios Reprodutivos"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Erva Botão",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Óleo Infundido de Erva Botão",
        "descricao": "Para uso nos cabelos ou aplicação externa na pele, pode ser feito o óleo infundido com as folhas."
      }
    ],
    "cuidadosEContraindicacoes": "Evitar por grávidas e lactantes. Pode reduzir a pressão arterial, exigindo cautela. Pode interagir com medicamentos metabolizados pelo fígado.",
    "imagemUrl": "https://i.imgur.com/eun02sC.jpeg"
  },
  {
    "id": 29,
    "nomePopular": "Equisetum",
    "nomeCientifico": "Equisetum arvense",
    "parteUsada": "Caules, Folhas",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
      "Problemas ósseos, Artrite, Tendinite, Bursite e Dores Musculares",
      "Contenção de Sangramentos",
      "Cálculos Renais, Infecção Urinária, Inchaço e Gota",
      "Infecções",
      "Fungos nos Pés e nas Unhas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Equisetum",
        "descricao": "1 colher de chá de caules e folhas secas para 1 xícara de água (150 ml). Se usar frescos, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "O uso contínuo ou excessivo pode sobrecarregar o fígado e causar problemas hepáticos. Por ser diurética, pode causar desequilíbrio eletrolítico. Não use por períodos superiores a 30 dias.",
    "imagemUrl": "https://i.imgur.com/lM5z6fK.jpeg"
  },
  {
    "id": 30,
    "nomePopular": "Genciana",
    "nomeCientifico": "Gentiana lutea",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção",
    "usosPrincipais": [
      "Indigestão",
      "Flatulência",
      "Falta de apetite",
      "Anemia Ferropriva",
      "Infecções por Micro-organismos",
      "Doenças do fígado e Pedras na Vesícula Biliar",
      "Problemas circulatórios",
      "Inflamações"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Raiz de Genciana",
        "descricao": "1 colher de sobremesa da raiz seca e picada para 1 xícara de água (150 ml). Ferver por 5 minutos em fogo brando. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Evitar por pessoas com úlceras gástricas ou duodenais. Não recomendada durante a gravidez e amamentação. Pode interagir com medicamentos digestivos.",
    "imagemUrl": "https://i.imgur.com/XqT2J1v.jpeg"
  },
  {
    "id": 31,
    "nomePopular": "Purungo",
    "nomeCientifico": "Lagenaria siceraria",
    "parteUsada": "Fruto, Folhas, Sementes",
    "formaDeUsoPrincipal": "Chá, Cataplasma",
    "usosPrincipais": [
      "Diabetes",
      "Antioxidante",
      "Diurético, Eliminação de Toxinas e Problemas Renais",
      "Cicatrização e Furúnculos",
      "Asma e Bronquite"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Purungo",
        "descricao": "1 colher de chá de folhas secas para uma 1 xícara de água (150 ml). Se usar folhas frescas, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Usar com moderação, pois o consumo excessivo pode causar desconforto gastrointestinal.",
    "imagemUrl": "https://i.imgur.com/Y3w4r5Z.jpeg"
  },
  {
    "id": 32,
    "nomePopular": "Hamamelis",
    "nomeCientifico": "Hamamelis virginiana",
    "parteUsada": "Folhas, Casca",
    "formaDeUsoPrincipal": "Chá, Pomada, Compressa",
    "usosPrincipais": [
      "Varizes",
      "Hemorroidas",
      "Problemas Oculares",
      "Doença da Pele, Dermatose, Eczemas",
      "Pele Ressecada",
      "Menopausa",
      "Hemorragia"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Folhas de Hamamelis",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Não usar internamente por grávidas, lactantes ou menores de 12 anos. Não usar em caso de lesões do trato digestivo. A ingestão exagerada pode causar náuseas e vômitos.",
    "imagemUrl": "https://i.imgur.com/d7K9gLp.jpeg"
  },
  {
    "id": 33,
    "nomePopular": "Confrei",
    "nomeCientifico": "Symphytum officinale",
    "parteUsada": "Raiz e folhas",
    "formaDeUsoPrincipal": "Cataplasma, Pomada, Compressa (Uso externo)",
    "usosPrincipais": [
      "Cicatrizante de feridas e ossos (fraturas)",
      "Contusões, entorses e distensões musculares",
      "Anti-inflamatório para articulações",
      "Queimaduras e irritações na pele",
      "Úlceras de pele"
    ],
    "receitasRapidas": [
      {
        "titulo": "Cataplasma de Folhas Frescas",
        "descricao": "Esmague folhas frescas de confrei até formar uma pasta. Aplique diretamente sobre a área afetada (fratura, contusão) e cubra com uma gaze. Troque a cada poucas horas."
      },
      {
        "titulo": "Óleo Infuso de Confrei (para pomadas)",
        "descricao": "Pique a raiz seca e coloque em um frasco com azeite de oliva. Deixe em local aquecido por 2 a 4 semanas, coe e use para fazer pomadas."
      }
    ],
    "cuidadosEContraindicacoes": "NÃO USAR INTERNAMENTE. Contém alcaloides pirrolizidínicos que são tóxicos para o fígado. O uso deve ser estritamente externo e em pele intacta (não aplicar em feridas abertas e profundas).",
    "imagemUrl": "https://i.imgur.com/9vJ8B2K.jpeg"
  },
  {
    "id": 34,
    "nomePopular": "Grama de Ponta",
    "nomeCientifico": "Agropyron repens",
    "parteUsada": "Raízes",
    "formaDeUsoPrincipal": "Decocção",
    "usosPrincipais": [
      "Gota",
      "Artrite Reumatoide",
      "Problemas do Trato Urinário, Pedras nos Rins",
      "Próstata Inchada",
      "Icterícia"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Grama de Ponta",
        "descricao": "1 colher de sobremesa de raízes secas para 1 xícara de água (150 ml). Ferver por 5 minutos em fogo brando. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro, mas o uso excessivo pode causar desconforto gastrointestinal. Consultar profissional de saúde se estiver grávida ou amamentando.",
    "imagemUrl": "https://i.imgur.com/a5r2z9L.jpeg"
  },
  {
    "id": 35,
    "nomePopular": "Dente-de-leão",
    "nomeCientifico": "Taraxacum officinale",
    "parteUsada": "Folhas, raízes, flores",
    "formaDeUsoPrincipal": "Chá, Decocção, Salada (folhas frescas)",
    "usosPrincipais": [
      "Tônico para o fígado e vesícula biliar",
      "Diurético (sem perda de potássio)",
      "Melhora a digestão e estimula o apetite",
      "Fonte de vitaminas e minerais (A, C, K, Ferro)",
      "Problemas de pele (acne, eczema)",
      "Purificador do sangue"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá das Folhas (Diurético)",
        "descricao": "1-2 colheres de chá de folhas secas por xícara de água fervente. Infusão por 10 minutos."
      },
      {
        "titulo": "Decocção da Raiz (Fígado)",
        "descricao": "1 colher de chá de raiz seca e picada por xícara de água. Ferver em fogo baixo por 10-15 minutos. Beba antes das refeições."
      }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro. Evitar em caso de obstrução dos ductos biliares ou alergia a plantas da família Asteraceae.",
    "imagemUrl": "https://i.imgur.com/p5M0w8p.jpeg"
  },
  {
    "id": 36,
    "nomePopular": "Língua-de-vaca",
    "nomeCientifico": "Rumex crispus",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Tintura",
    "usosPrincipais": [
        "Alterativo (limpador do sangue)",
        "Laxante suave (em doses baixas, é adstringente)",
        "Tônico para o fígado",
        "Tratamento de problemas de pele crônicos (associados a toxinas)",
        "Fonte de ferro (para anemia)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Decocção de Raiz de Língua-de-vaca",
            "descricao": "1-2 colheres de chá de raiz seca picada por xícara de água. Ferver em fogo baixo por 10-15 minutos. Tomar 1-2 vezes ao dia."
        }
    ],
    "cuidadosEContraindicacoes": "Contém oxalatos, evitar o uso prolongado ou em altas doses por pessoas com tendência a pedras nos rins. Não usar em caso de irritação intestinal.",
    "imagemUrl": "https://i.imgur.com/v8R4s7D.jpeg"
  },
  {
    "id": 37,
    "nomePopular": "Ênula",
    "nomeCientifico": "Inula helenium",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Xarope, Tintura",
    "usosPrincipais": [
        "Expectorante potente (bronquite crônica, asma, tosse com catarro espesso)",
        "Antisséptico pulmonar",
        "Tônico digestivo (estimula a digestão)",
        "Antiparasitário (vermífugo)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Decocção de Raiz de Ênula",
            "descricao": "1 colher de chá de raiz seca picada por xícara de água. Ferver em fogo baixo por 10-15 minutos. Beba 3 vezes ao dia."
        }
    ],
    "cuidadosEContraindicacoes": "Evitar em doses altas, pode causar náuseas e vômitos. Não usar na gravidez. Pessoas alérgicas a plantas da família Asteraceae podem ter reações.",
    "imagemUrl": "https://i.imgur.com/f9L8g7s.jpeg"
  },
  {
    "id": 38,
    "nomePopular": "Funcho",
    "nomeCientifico": "Foeniculum vulgare",
    "parteUsada": "Sementes, folhas, raiz",
    "formaDeUsoPrincipal": "Chá, Decocção, Alimento",
    "usosPrincipais": [
        "Alívio de gases e cólicas (carminativo)",
        "Melhora a digestão",
        "Expectorante para tosse e resfriados",
        "Promove a produção de leite (galactagogo)",
        "Alívio de dores menstruais",
        "Anti-inflamatório para os olhos (compressa)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá de Sementes de Funcho",
            "descricao": "1 colher de chá de sementes levemente esmagadas por xícara de água fervente. Deixar em infusão por 10 minutos."
        },
        {
            "titulo": "Decocção da Raiz",
            "descricao": "Ferver 1 colher de chá de raiz picada em uma xícara de água por 10 minutos. Útil para problemas urinários."
        }
    ],
    "cuidadosEContraindicacoes": "Evitar em altas doses durante a gravidez. O óleo essencial não deve ser ingerido e pode causar reações na pele.",
    "imagemUrl": "https://i.imgur.com/3sF3n5R.jpeg"
  },
  {
    "id": 39,
    "nomePopular": "Tanaceto",
    "nomeCientifico": "Tanacetum vulgare",
    "parteUsada": "Folhas e flores",
    "formaDeUsoPrincipal": "Chá, Tintura (uso cuidadoso)",
    "usosPrincipais": [
        "Expulsão de vermes intestinais",
        "Estimulante menstrual (emenagogo)",
        "Alívio de enxaquecas e febre",
        "Repelente de insetos (uso externo)",
        "Tratamento de contusões e reumatismo (uso tópico)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá para Uso Externo",
            "descricao": "Fazer uma infusão forte com 2 colheres de sopa da erva seca para 250ml de água. Usar como compressa em áreas doloridas."
        }
    ],
    "cuidadosEContraindicacoes": "Planta tóxica. Contém tujona, que pode causar convulsões e danos ao sistema nervoso. NÃO DEVE SER USADA POR GESTANTES (é abortiva). O uso interno deve ser feito apenas sob estrita supervisão de um profissional experiente.",
    "imagemUrl": "https://i.imgur.com/K7p9e4G.jpeg"
  },
  {
    "id": 40,
    "nomePopular": "Arnica-brasileira",
    "nomeCientifico": "Solidago microglossa",
    "parteUsada": "Flores e folhas",
    "formaDeUsoPrincipal": "Compressa, Pomada (uso externo)",
    "usosPrincipais": [
        "Anti-inflamatório e analgésico",
        "Tratamento de contusões, hematomas e dores musculares",
        "Alívio de dores articulares e reumatismo",
        "Cicatrizante para ferimentos superficiais"
    ],
    "receitasRapidas": [
        {
            "titulo": "Compressa para Contusões",
            "descricao": "Fazer um chá forte com 2 colheres de sopa da erva para 250ml de água. Coar, esperar amornar e aplicar com um pano sobre a área afetada."
        }
    ],
    "cuidadosEContraindicacoes": "Uso estritamente externo. Não ingerir, pois é tóxica. Não aplicar sobre feridas abertas. Pode causar dermatite em pessoas sensíveis.",
    "imagemUrl": "https://i.imgur.com/C9r8m3Q.jpeg"
  },
  {
    "id": 41,
    "nomePopular": "Cúrcuma",
    "nomeCientifico": "Curcuma longa",
    "parteUsada": "Rizoma",
    "formaDeUsoPrincipal": "Pó, Chá",
    "usosPrincipais": [
      "Anti-Inflamatório",
      "Antioxidante",
      "Artrite, Artrite Reumatoide e Osteoartrite",
      "Propriedades Antimicrobianas e Cicatrização",
      "Função Cerebral e Prevenção de Doenças Neurodegenerativas",
      "Câncer",
      "Doenças Cardíacas",
      "Trombose",
      "Reduz os Níveis de Colesterol e Triglicerídeos"
    ],
    "receitasRapidas": [
      {
        "titulo": "Água de Cúrcuma",
        "descricao": "Adicionar 1 colher de chá do rizoma em um pouco de água e beber. Repita de 2 a 3 vezes por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Pode retardar a coagulação do sangue. Usar com cautela com anticoagulantes. Suspender o uso uma semana antes de cirurgias. Evitar na gravidez.",
    "imagemUrl": "https://i.imgur.com/v8R4s7D.jpeg"
  },
  {
    "id": 42,
    "nomePopular": "Lúpulo",
    "nomeCientifico": "Humulus lupulus",
    "parteUsada": "Flores femininas (cones)",
    "formaDeUsoPrincipal": "Chá, Tintura, Travesseiro aromático",
    "usosPrincipais": [
        "Sedativo e indutor do sono (insônia)",
        "Alívio da ansiedade, tensão e nervosismo",
        "Tônico amargo para estimular a digestão",
        "Antiespasmódico (cólicas digestivas e menstruais)",
        "Alívio de sintomas da menopausa (contém fitoestrógenos)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá para Dormir",
            "descricao": "Infundir 1-2 cones de lúpulo em uma xícara de água fervente por 10-15 minutos. Beber antes de deitar."
        },
        {
            "titulo": "Travesseiro de Ervas",
            "descricao": "Encher uma pequena almofada com cones de lúpulo secos para inalar o aroma relaxante durante a noite."
        }
    ],
    "cuidadosEContraindicacoes": "Pode causar sonolência, evitar antes de dirigir. Não recomendado para pessoas com depressão. O uso de longo prazo não é aconselhado devido aos efeitos hormonais.",
    "imagemUrl": "https://i.imgur.com/x5v8p9B.jpeg"
  },
  {
    "id": 43,
    "nomePopular": "Raiz Forte",
    "nomeCientifico": "Armoracia rusticana",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Cataplasma, Chá, Vinagre",
    "usosPrincipais": [
      "Feridas Infectadas",
      "Problemas Respiratórios, Gripe, Febres",
      "Infecções do Trato Urinário",
      "Artrite e Inflamações da Pele"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Raiz Forte",
        "descricao": "1 colher de sobremesa de raiz seca picada ou ralada para 150 ml de água. Ferver em fogo baixo por 5 minutos. Beba 3 vezes por dia (50 ml por vez)."
      }
    ],
    "cuidadosEContraindicacoes": "Não usar em caso de úlceras estomacais, doença hemorroidal e problemas de tireoide. Pode causar irritação na pele em aplicação direta.",
    "imagemUrl": "https://i.imgur.com/rS2a8Vf.jpeg"
  },
  {
    "id": 44,
    "nomePopular": "Tupinambur",
    "nomeCientifico": "Helianthus tuberosus",
    "parteUsada": "Tubérculos",
    "formaDeUsoPrincipal": "Suco, Alimento",
    "usosPrincipais": [
      "Controle do Colesterol",
      "Diabetes",
      "Problemas Digestivos"
    ],
    "receitasRapidas": [
      {
        "titulo": "Suco de Tupinambur",
        "descricao": "1 xícara de Tupinambur picado e 1 copo de água. Misture no liquidificador e beba 1 copo por dia logo ao acordar."
      }
    ],
    "cuidadosEContraindicacoes": "Pode causar desconforto digestivo e gases excessivos em algumas pessoas.",
    "imagemUrl": "https://i.imgur.com/k9b8R7t.jpeg"
  },
  {
    "id": 45,
    "nomePopular": "Ançarinha-branca",
    "nomeCientifico": "Chenopodium album",
    "parteUsada": "Folhas e sementes",
    "formaDeUsoPrincipal": "Alimento (cozido), Cataplasma",
    "usosPrincipais": [
        "Altamente nutritiva (rica em vitaminas A, C, e minerais)",
        "Laxante suave",
        "Anti-inflamatório (cataplasma para picadas de insetos e dores articulares)",
        "Alívio de dores de dente (mascar as folhas)",
        "Vermífugo (sementes)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Consumo Alimentar",
            "descricao": "Cozinhar as folhas como espinafre para remover oxalatos e saponinas. Podem ser adicionadas a sopas e refogados."
        },
        {
            "titulo": "Cataplasma",
            "descricao": "Esmagar as folhas frescas e aplicar sobre a área inflamada."
        }
    ],
    "cuidadosEContraindicacoes": "Contém oxalatos e saponinas; o cozimento é recomendado. Pessoas com tendência a pedras nos rins devem consumir com moderação.",
    "imagemUrl": "https://i.imgur.com/F3u2o1M.jpeg"
  },
  {
    "id": 46,
    "nomePopular": "Lavanda",
    "nomeCientifico": "Lavandula angustifolia",
    "parteUsada": "Flores",
    "formaDeUsoPrincipal": "Chá, Óleo essencial, Tintura",
    "usosPrincipais": [
        "Calmante para ansiedade, estresse e insônia",
        "Alívio de dores de cabeça tensionais",
        "Antisséptico e cicatrizante para queimaduras, cortes e picadas de insetos",
        "Relaxante muscular",
        "Alívio de problemas digestivos de origem nervosa"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá de Lavanda",
            "descricao": "Infundir 1 colher de chá de flores secas em uma xícara de água fervente por 5-10 minutos."
        },
        {
            "titulo": "Óleo Essencial para Relaxamento",
            "descricao": "Adicionar algumas gotas a um difusor, banho quente ou a um óleo carreador para massagem."
        }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro. O óleo essencial não deve ser ingerido e deve ser diluído para aplicação na pele para evitar irritação.",
    "imagemUrl": "https://i.imgur.com/g7a8s9C.jpeg"
  },
  {
    "id": 47,
    "nomePopular": "Alho-poró",
    "nomeCientifico": "Allium porrum",
    "parteUsada": "Planta inteira",
    "formaDeUsoPrincipal": "Alimento (cozido)",
    "usosPrincipais": [
        "Diurético",
        "Laxante suave",
        "Antisséptico para o trato respiratório e intestinal",
        "Fonte de vitaminas A, C e K",
        "Apoio à saúde cardiovascular"
    ],
    "receitasRapidas": [
        {
            "titulo": "Sopa de Alho-poró",
            "descricao": "Cozinhar o alho-poró em sopas e caldos para extrair seus benefícios, especialmente para o sistema respiratório."
        }
    ],
    "cuidadosEContraindicacoes": "Como outros membros da família Allium, pode causar gases em pessoas sensíveis. Contém oxalatos, consumir com moderação em caso de problemas renais.",
    "imagemUrl": "https://i.imgur.com/t3g4h5S.jpeg"
  },
  {
    "id": 48,
    "nomePopular": "Louro",
    "nomeCientifico": "Laurus nobilis",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Tempero",
    "usosPrincipais": [
      "Bronquite, Asma e Infecções Respiratórias",
      "Contusão, Hematomas e Lesões Traumáticas",
      "Acne, Eczema e Problemas de Pele",
      "Feridas, Lesões e Irritações na Pele",
      "Desregulação Menstrual, Cólicas e Síndrome Pré-Menstrual",
      "Alopecia, Queda de Cabelo e Problemas no Couro Cabeludo",
      "Tontura, Vertigem e Enxaquecas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Louro",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje a água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Pode causar reações alérgicas. O uso excessivo pode levar a distúrbios gastrointestinais. Evite o uso durante a gravidez e a amamentação.",
    "imagemUrl": "https://i.imgur.com/9nF7s5B.jpeg"
  },
  {
    "id": 49,
    "nomePopular": "Tomilho Limão",
    "nomeCientifico": "Thymus citriodorus",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Aromaterapia",
    "usosPrincipais": [
      "Problemas Respiratórios, Asma e Alívio da Congestão",
      "Infecções Virais, Bacterianas e Fúngicas",
      "Função Imunológica",
      "Aromaterapia para Asma"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Tomilho Limão",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Se usar folhas frescas, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Pode causar reações em pessoas altamente alérgicas. Não use durante a gravidez ou amamentação.",
    "imagemUrl": "https://i.imgur.com/6X2h8vj.jpeg"
  },
  {
    "id": 50,
    "nomePopular": "Erva-cidreira",
    "nomeCientifico": "Lippia alba",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
        "Calmante, sedativo e ansiolítico",
        "Alívio de problemas digestivos e cólicas (antiespasmódico)",
        "Combate a gripes e resfriados",
        "Redução da pressão arterial",
        "Analgésico suave"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá Calmante",
            "descricao": "Infundir um punhado de folhas frescas ou 1 colher de sopa de folhas secas em uma xícara de água fervente por 5-10 minutos."
        }
    ],
    "cuidadosEContraindicacoes": "Pode causar sonolência e potencializar o efeito de outros sedativos. Usar com cautela em pessoas com pressão arterial baixa.",
    "imagemUrl": "https://i.imgur.com/L9p8m7N.jpeg"
  },
  {
    "id": 51,
    "nomePopular": "Alcaçuz",
    "nomeCientifico": "Glycyrrhiza glabra",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Tintura, Pastilhas",
    "usosPrincipais": [
        "Expectorante e emoliente para tosse e dor de garganta",
        "Anti-inflamatório para úlceras gástricas e gastrite",
        "Suporte para a glândula adrenal (fadiga, estresse)",
        "Ação antiviral e imunoestimulante",
        "Alívio de sintomas da menopausa"
    ],
    "receitasRapidas": [
        {
            "titulo": "Decocção da Raiz",
            "descricao": "Ferver 1 colher de chá de raiz picada em uma xícara de água por 10-15 minutos em fogo baixo."
        }
    ],
    "cuidadosEContraindicacoes": "O uso prolongado (mais de 4-6 semanas) ou em altas doses pode causar aumento da pressão arterial, retenção de líquidos e perda de potássio. Evitar na gravidez, amamentação, doenças cardíacas, renais ou hepáticas.",
    "imagemUrl": "https://i.imgur.com/d2j3k4F.jpeg"
  },
  {
    "id": 52,
    "nomePopular": "Melão de São Caetano",
    "nomeCientifico": "Momordica charantia",
    "parteUsada": "Fruto, Folhas, Sementes",
    "formaDeUsoPrincipal": "Chá, Suco",
    "usosPrincipais": [
      "Diabetes",
      "Infecções por Bactérias e Vírus",
      "Melhora a Digestão e a Constipação",
      "Protege e Regenera o Fígado",
      "Tratar Obesidade e Promover a Perda de Peso",
      "Reduz o Colesterol, Vasodilatadora e Reduz a Pressão Arterial",
      "Câncer",
      "Inflamações Crônicas",
      "Doenças Autoimunes e Aumento da Imunidade",
      "Vermes e Parasitas",
      "Feridas e Infecções da Pele",
      "Asma, Bronquite, Tosse e Outros Problemas Respiratórios",
      "Regula o Ciclo Menstrual, Alivia Cólicas e Contraceptivo",
      "Aumento de Plaquetas e Dengue"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Melão de São Caetano",
        "descricao": "1 colher de chá de folhas secas ou 2 de frescas para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      },
      {
        "titulo": "Suco dos Frutos",
        "descricao": "Use 2 frutos maduros para 1 copo de água. Misture os frutos e a água com um liquidificador. Coe e beba 2 copos por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Pode causar distúrbios gastrointestinais. Evitar o uso durante a gravidez e a amamentação. Pode interagir com medicamentos para diabetes e anticoagulantes.",
    "imagemUrl": "https://i.imgur.com/tX2eJt2.jpeg"
  },
  {
    "id": 53,
    "nomePopular": "Levístico",
    "nomeCientifico": "Levisticum officinale",
    "parteUsada": "Raízes, Folhas",
    "formaDeUsoPrincipal": "Chá, Decocção",
    "usosPrincipais": [
      "Doenças do Trato Urinário, Cistite, Uretrite",
      "Indigestão, Flatulência, Cólicas Intestinais",
      "Distúrbios Menstruais e Tensão Pré-Menstrual (TPM)",
      "Bronquite, Tosse Persistente, Resfriados e Outras Condições Respiratórias",
      "Artrite e Reumatismo",
      "Desordens Cardiovasculares",
      "Estresse e Ansiedade"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Levístico",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Se usar folhas frescas, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "O uso excessivo pode causar sensibilidade ao sol. Evitar o uso durante a gravidez e em pessoas com problemas renais agudos.",
    "imagemUrl": "https://i.imgur.com/a9k9Y8r.jpeg"
  },
  {
    "id": 54,
    "nomePopular": "Pulmonária",
    "nomeCientifico": "Pulmonaria officinalis",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Xarope",
    "usosPrincipais": [
        "Expectorante e emoliente (para tosse, bronquite, asma)",
        "Tratamento de problemas respiratórios",
        "Adstringente suave (para diarreia e hemorroidas)",
        "Cicatrizante para pequenas feridas"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá de Pulmonária",
            "descricao": "1-2 colheres de chá de folhas secas por xícara de água fervente. Infusão por 10-15 minutos. Beba até 3 vezes ao dia."
        }
    ],
    "cuidadosEContraindicacoes": "Contém pequenas quantidades de alcaloides pirrolizidínicos. O uso deve ser de curto prazo e evitado na gravidez, amamentação e em pessoas com doenças hepáticas.",
    "imagemUrl": "https://i.imgur.com/c6F8s9b.jpeg"
  },
  {
    "id": 55,
    "nomePopular": "Malva",
    "nomeCientifico": "Malva sylvestris",
    "parteUsada": "Folhas e flores",
    "formaDeUsoPrincipal": "Chá, Cataplasma",
    "usosPrincipais": [
        "Emoliente (suaviza tecidos irritados)",
        "Anti-inflamatório (garganta, estômago, intestinos)",
        "Expectorante suave para tosse seca",
        "Laxante suave",
        "Cicatrizante para irritações de pele"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá para Dor de Garganta",
            "descricao": "Infundir 1 colher de sopa de flores e folhas secas em 1 xícara de água fervente por 10 minutos. Usar para beber ou gargarejar."
        },
        {
            "titulo": "Cataplasma para Pele Irritada",
            "descricao": "Amassar folhas frescas com um pouco de água morna e aplicar sobre a área afetada."
        }
    ],
    "cuidadosEContraindicacoes": "Geralmente considerada segura. O consumo excessivo pode ter um efeito laxante. Evitar colher em locais poluídos.",
    "imagemUrl": "https://i.imgur.com/1sF2G3t.jpeg"
  },
  {
    "id": 56,
    "nomePopular": "Malva Branca",
    "nomeCientifico": "Althea officinalis",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Pomada, Cataplasma",
    "usosPrincipais": [
      "Úlceras na Pele, Ferimentos e Remoção de Objetos Estranhos",
      "Irritações de Pele, Inflamações e Inchaços",
      "Infecções do Trato Urinário e Cistite",
      "Azia, Úlceras Pépticas, Intestino Permeável e Problemas Digestivos",
      "Tosse Seca, Bronquite, Asma Brônquica, Congestão e Pleurisia"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Raiz de Malva Branca",
        "descricao": "1 colher de sobremesa de raízes secas e picadas para 1 xícara de água (150 ml). Ferver por 5 minutos em fogo baixo. Beba 3 xícaras ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "Geralmente segura. O consumo excessivo pode causar desconforto gastrointestinal. Consultar profissional de saúde se estiver grávida ou amamentando.",
    "imagemUrl": "https://i.imgur.com/J3y5p6s.jpeg"
  },
  {
    "id": 57,
    "nomePopular": "Cardo Mariano",
    "nomeCientifico": "Silybum marianum",
    "parteUsada": "Sementes",
    "formaDeUsoPrincipal": "Cápsulas de extrato padronizado, Tintura",
    "usosPrincipais": [
      "Proteção e regeneração do fígado (hepatoprotetor)",
      "Desintoxicação hepática (álcool, toxinas)",
      "Tratamento de hepatite, cirrose e gordura no fígado",
      "Melhora da digestão (produção de bile)",
      "Antioxidante",
      "Redução do colesterol"
    ],
    "receitasRapidas": [
      {
        "titulo": "Uso do Extrato",
        "descricao": "A forma mais eficaz é o extrato padronizado em silimarina, encontrado em cápsulas. Seguir a dosagem do fabricante. O chá das sementes não extrai bem os princípios ativos."
      }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro. Pode ter um leve efeito laxativo. Pessoas alérgicas a plantas da família Asteraceae devem evitar. Pode interagir com alguns medicamentos metabolizados pelo fígado.",
    "imagemUrl": "https://i.imgur.com/b5R6s8T.jpeg"
  },
  {
    "id": 58,
    "nomePopular": "Rubim",
    "nomeCientifico": "Leonurus sibiricus",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
      "Parto, Menstruação Atrasada, TPM",
      "Hipertireoidismo",
      "Trombose",
      "Saúde do Coração",
      "Ansiedade e Depressão",
      "Insônia e Problemas de Sono",
      "Transtorno do Déficit de Atenção com Hiperatividade (TDAH)"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Rubim",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Se usar folhas frescas, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras por dia."
      }
    ],
    "cuidadosEContraindicacoes": "Deve ser usada com cautela por pessoas que estejam fazendo uso de medicamentos sintéticos para problemas cardíacos.",
    "imagemUrl": "https://i.imgur.com/q3S9n0Y.jpeg"
  },
  {
    "id": 59,
    "nomePopular": "Verbasco",
    "nomeCientifico": "Verbascum thapsus",
    "parteUsada": "Folhas e flores",
    "formaDeUsoPrincipal": "Chá, Óleo infuso",
    "usosPrincipais": [
        "Tônico pulmonar e expectorante",
        "Alívio de tosse seca e espasmódica",
        "Emoliente para o trato respiratório",
        "Analgésico para dor de ouvido (óleo das flores)",
        "Anti-inflamatório"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá de Folhas para Tosse",
            "descricao": "Infundir 1-2 colheres de chá de folhas secas em 1 xícara de água fervente por 15 minutos. Coar muito bem em um pano fino para remover os pelos irritantes."
        },
        {
            "titulo": "Óleo de Flores para Dor de Ouvido",
            "descricao": "Encher um pequeno frasco com flores frescas de verbasco e cobrir com azeite de oliva. Deixar ao sol por 2-3 semanas. Coar e aplicar 1-2 gotas mornas no ouvido."
        }
    ],
    "cuidadosEContraindicacoes": "É crucial coar o chá das folhas para remover os pelos finos, que podem irritar a garganta. O óleo não deve ser usado se houver perfuração do tímpano.",
    "imagemUrl": "https://i.imgur.com/d0bFv9n.jpeg"
  },
  {
    "id": 60,
    "nomePopular": "Orégano",
    "nomeCientifico": "Origanum vulgare",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Óleo, Tempero",
    "usosPrincipais": [
        "Antimicrobiano de amplo espectro (bactérias, fungos, vírus)",
        "Antioxidante potente",
        "Expectorante e antiespasmódico",
        "Digestivo (alivia gases)",
        "Anti-inflamatório"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá para Resfriado",
            "descricao": "Infundir 1 colher de chá de orégano seco em 1 xícara de água fervente por 10 minutos."
        },
        {
            "titulo": "Óleo de Orégano (Uso Cuidadoso)",
            "descricao": "O óleo essencial é muito forte. Para infecções fúngicas, diluir 1-2 gotas em uma colher de chá de óleo de coco e aplicar topicamente."
        }
    ],
    "cuidadosEContraindicacoes": "O óleo essencial é extremamente potente e pode causar irritação na pele e mucosas se não for bem diluído. Não deve ser ingerido puro. Evitar o uso terapêutico na gravidez.",
    "imagemUrl": "https://i.imgur.com/kS9w0yw.jpeg"
  },
  {
    "id": 61,
    "nomePopular": "Margarida",
    "nomeCientifico": "Leucanthemum vulgare",
    "parteUsada": "Folhas, Flores, Caules",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
      "Artrite, Dermatite, Úlceras Gástricas e Inflamações",
      "Problemas Digestivos",
      "Feridas e Cortes",
      "Dores de Cabeça, Enxaquecas",
      "Sintomas de Resfriado e Gripe"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Margarida",
        "descricao": "1 colher de sobremesa das folhas, flores e caules secos para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "Pessoas com alergia a plantas da família Asteraceae devem evitar o uso. Consultar profissional de saúde se estiver grávida ou amamentando.",
    "imagemUrl": "https://i.imgur.com/L5B7n6C.jpeg"
  },
  {
    "id": 62,
    "nomePopular": "Hortelã-pimenta",
    "nomeCientifico": "Mentha x piperita",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Óleo essencial",
    "usosPrincipais": [
        "Alívio de problemas digestivos (gases, indigestão, náuseas, SII)",
        "Analgésico tópico (dores de cabeça, dores musculares)",
        "Descongestionante (inalação)",
        "Refrescante e estimulante mental"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá Digestivo",
            "descricao": "Infundir 1 colher de sopa de folhas frescas (ou 1 de chá secas) em 1 xícara de água fervente por 5-10 minutos. Tomar após as refeições."
        },
        {
            "titulo": "Alívio para Dor de Cabeça",
            "descricao": "Diluir 1 gota de óleo essencial em uma colher de chá de óleo vegetal e massagear nas têmporas, testa e nuca (evitar os olhos)."
        }
    ],
    "cuidadosEContraindicacoes": "Pode piorar o refluxo ácido em algumas pessoas, pois relaxa o esfíncter esofágico. O óleo essencial não deve ser ingerido e deve ser evitado em crianças pequenas.",
    "imagemUrl": "https://i.imgur.com/x0r4qfC.jpeg"
  },
  {
    "id": 63,
    "nomePopular": "Tanchagem",
    "nomeCientifico": "Plantago major",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Cataplasma, Chá, Tintura",
    "usosPrincipais": [
        "Cicatrizante e adstringente (para cortes e feridas)",
        "Alívio de picadas de insetos e irritações na pele",
        "Anti-inflamatório",
        "Expectorante e emoliente (problemas respiratórios)",
        "Suaviza o trato digestivo (gastrite)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Cataplasma Rápido para Picadas",
            "descricao": "Mascar uma folha fresca e aplicar diretamente sobre a picada de inseto para aliviar a dor e o inchaço."
        },
        {
            "titulo": "Chá para Uso Interno",
            "descricao": "Infundir 1 colher de sopa de folhas frescas (ou 1 de chá secas) em 1 xícara de água fervente por 10 minutos."
        }
    ],
    "cuidadosEContraindicacoes": "Extremamente segura para uso interno e externo. Considerada uma das plantas medicinais mais seguras e versáteis.",
    "imagemUrl": "https://i.imgur.com/9v8B2kC.jpeg"
  },
  {
    "id": 64,
    "nomePopular": "Figo da Índia",
    "nomeCientifico": "Opuntia ficus-indica",
    "parteUsada": "Fruto",
    "formaDeUsoPrincipal": "Suco, Fruto fresco",
    "usosPrincipais": [
      "Doenças Inflamatórias",
      "Doença Cardíaca, Colesterol e Circulação",
      "Artrite e Dores nas Articulações",
      "Diabetes",
      "Dores Musculares e Fadiga"
    ],
    "receitasRapidas": [
      {
        "titulo": "Consumo do Fruto",
        "descricao": "O suco do fruto fresco é a forma mais comum de uso. Pode ser consumido diariamente para aliviar inflamações e dores articulares."
      }
    ],
    "cuidadosEContraindicacoes": "A colheita deve ser feita com cuidado para evitar os pequenos espinhos. O consumo excessivo pode ter efeito laxante.",
    "imagemUrl": "https://i.imgur.com/uT3gS2B.jpeg"
  },
  {
    "id": 65,
    "nomePopular": "Prunela",
    "nomeCientifico": "Prunella vulgaris",
    "parteUsada": "Planta inteira",
    "formaDeUsoPrincipal": "Chá, Suco, Cataplasma",
    "usosPrincipais": [
      "Diabetes",
      "Cicatrização de Feridas, Infecções na Pele e Furúnculos",
      "Infecções Virais (Herpes Labial e Genital)",
      "Infecções Respiratórias",
      "Alergias, Doenças Autoimunes e Inflamações Crônica",
      "Câncer",
      "Picadas de Insetos e Mordidas",
      "Problemas Renais e Hipertensão",
      "Problemas no Fígado",
      "Hemorragias",
      "Problemas Digestivos, Cólicas, Doença de Crohn, Gastroenterite, Úlceras e Colite Ulcerosa",
      "Hemorroidas"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Prunela para Uso Interno",
        "descricao": "1 colher de sobremesa das folhas secas para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba de 2 a 3 xícaras ao longo do dia."
      },
      {
        "titulo": "Chá Forte para Uso Externo",
        "descricao": "4 colheres de sobremesa das folhas secas para 1 xícara de água (150 ml). Usar como compressa ou lavagem."
      }
    ],
    "cuidadosEContraindicacoes": "O uso a longo prazo, em doses altas, pode afetar o fígado e os rins. Usar com moderação.",
    "imagemUrl": "https://i.imgur.com/rS2a8Vf.jpeg"
  },
  {
    "id": 66,
    "nomePopular": "Beldroega",
    "nomeCientifico": "Portulaca oleracea",
    "parteUsada": "Folhas, Sementes",
    "formaDeUsoPrincipal": "Chá, Suco",
    "usosPrincipais": [
      "Sangramento Uterino",
      "Infecções Fúngicas",
      "Diabetes",
      "Redução do Colesterol",
      "Asma e Problemas Brônquicos",
      "Câncer"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Folhas de Beldroega",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Se usar a planta fresca, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "Considerada segura para consumo em grandes quantidades, sem efeitos colaterais.",
    "imagemUrl": "https://i.imgur.com/N5i3G3q.jpeg"
  },
  {
    "id": 67,
    "nomePopular": "Trevo Vermelho",
    "nomeCientifico": "Trifolium pratense",
    "parteUsada": "Flores",
    "formaDeUsoPrincipal": "Chá, Tintura",
    "usosPrincipais": [
        "Fonte de fitoestrógenos (alívio dos sintomas da menopausa)",
        "Alterativo (purificador do sangue e da linfa)",
        "Expectorante para tosses espasmódicas",
        "Tônico nutritivo (rico em minerais)",
        "Auxiliar em problemas de pele crônicos (eczema, psoríase)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá de Flores de Trevo Vermelho",
            "descricao": "Infundir 1 colher de sopa de flores secas em 1 xícara de água fervente por 15 minutos. Beber 2-3 vezes ao dia."
        }
    ],
    "cuidadosEContraindicacoes": "Contém cumarinas, que podem afinar o sangue; evitar o uso com medicamentos anticoagulantes. Devido à sua atividade estrogênica, não é recomendado para gestantes, lactantes ou em casos de cânceres sensíveis a hormônios.",
    "imagemUrl": "https://i.imgur.com/p5M0w8q.jpeg"
  },
  {
    "id": 68,
    "nomePopular": "Alecrim",
    "nomeCientifico": "Salvia rosmarinus",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Óleo essencial, Tempero",
    "usosPrincipais": [
        "Estimulante circulatório e cerebral",
        "Melhora a memória e a concentração",
        "Digestivo (carminativo)",
        "Antioxidante e anti-inflamatório",
        "Antisséptico",
        "Alivia dores de cabeça"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá Estimulante",
            "descricao": "Infundir 1 colher de chá de folhas secas em 1 xícara de água fervente por 5-10 minutos. Ideal para tomar pela manhã ou durante os estudos."
        },
        {
            "titulo": "Inalação para Congestão",
            "descricao": "Adicionar algumas gotas de óleo essencial de alecrim ou um ramo fresco a uma tigela de água quente e inalar o vapor."
        }
    ],
    "cuidadosEContraindicacoes": "Evitar o uso terapêutico em altas doses durante a gravidez e em pessoas com hipertensão ou epilepsia. O óleo essencial não deve ser ingerido.",
    "imagemUrl": "https://i.imgur.com/d2j3k4F.jpeg"
  },
  {
    "id": 69,
    "nomePopular": "Sálvia",
    "nomeCientifico": "Salvia officinalis",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Gargarejo, Tintura",
    "usosPrincipais": [
        "Reduz sudorese excessiva e ondas de calor (menopausa)",
        "Antisséptico e adstringente para boca e garganta",
        "Auxilia na digestão de gorduras",
        "Melhora a memória e a função cognitiva",
        "Seca a produção de leite materno"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá para Ondas de Calor",
            "descricao": "Infundir 1 colher de chá de folhas secas em 1 xícara de água fervente. Deixar esfriar e beber ao longo do dia."
        },
        {
            "titulo": "Gargarejo para Dor de Garganta",
            "descricao": "Fazer um chá forte, deixar amornar e gargarejar várias vezes ao dia."
        }
    ],
    "cuidadosEContraindicacoes": "Contém tujona, que pode ser tóxica em altas doses ou com uso prolongado. Não usar durante a gravidez (pode estimular o útero) ou amamentação (seca o leite).",
    "imagemUrl": "https://i.imgur.com/7gK5c3d.jpeg"
  },
  {
    "id": 70,
    "nomePopular": "Azedinha",
    "nomeCientifico": "Rumex acetosella",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Suco, Pó, Cápsulas",
    "usosPrincipais": [
      "Resfriados, Gripe e Sinusite",
      "Desintoxicação",
      "Parasitas Intestinais e Vermes"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Azedinha",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Se usar folhas frescas, dobre a quantidade. Despeje água fervente e aguarde esfriar."
      }
    ],
    "cuidadosEContraindicacoes": "Devido ao seu alto teor de oxalato, pessoas com pedras nos rins, artrite ou hiperacidez não devem usar a azedinha.",
    "imagemUrl": "https://i.imgur.com/i9z7R6s.jpeg"
  },
  {
    "id": 71,
    "nomePopular": "Urtiga",
    "nomeCientifico": "Urtica dioica",
    "parteUsada": "Folhas (partes aéreas)",
    "formaDeUsoPrincipal": "Chá, Alimento (cozida), Tintura",
    "usosPrincipais": [
        "Tônico nutritivo profundo (rica em ferro, cálcio e minerais)",
        "Anti-histamínico natural (alergias sazonais)",
        "Anti-inflamatório (artrite, gota)",
        "Diurético e tônico para os rins",
        "Fortalece cabelos e unhas"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá Nutritivo (Infusão Longa)",
            "descricao": "Colocar 30g de urtiga seca em um frasco de 1 litro. Encher com água fervente, tampar e deixar em infusão por 4-8 horas. Coar e beber ao longo do dia."
        },
        {
            "titulo": "Urtiga Cozida",
            "descricao": "Cozinhar as folhas frescas no vapor como se fosse espinafre. O cozimento remove a ardência. Pode ser usada em sopas e refogados."
        }
    ],
    "cuidadosEContraindicacoes": "Manusear a planta fresca com luvas para evitar a irritação dos pelos urticantes. Após seca ou cozida, ela perde a capacidade de arder. Usar com cautela com medicamentos diuréticos ou para pressão baixa.",
    "imagemUrl": "https://i.imgur.com/d8p1Q4E.jpeg"
  },
  {
    "id": 72,
    "nomePopular": "Erva de Cheiro",
    "nomeCientifico": "Anthoxanthum nitens",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá",
    "usosPrincipais": [
      "Anticoagulante",
      "Anti-inflamatória",
      "Antimicrobiana",
      "Diurética, Pedra nos Rins e Infecção Urinária",
      "Antioxidante"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Erva de Cheiro",
        "descricao": "1 colher de sobremesa de folhas secas para 1 xícara de água (150 ml). Se usar folhas frescas, dobre a quantidade. Despeje água fervente, tampe e aguarde esfriar. Beba 2 xícaras distribuídas ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "Não usar com medicação anticoagulante. Suspender o uso uma semana antes de qualquer cirurgia.",
    "imagemUrl": "https://i.imgur.com/w8N5m3n.jpeg"
  },
  {
    "id": 73,
    "nomePopular": "Tomilho",
    "nomeCientifico": "Thymus vulgaris",
    "parteUsada": "Folhas e flores",
    "formaDeUsoPrincipal": "Chá, Xarope, Inalação de vapor",
    "usosPrincipais": [
        "Antisséptico potente (especialmente para o sistema respiratório)",
        "Expectorante e antiespasmódico (tosse, bronquite)",
        "Antimicrobiano e antifúngico",
        "Digestivo (ajuda a digerir alimentos gordurosos)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Xarope de Tomilho para Tosse",
            "descricao": "Fazer um chá forte com tomilho, coar e dissolver mel em partes iguais. Guardar na geladeira e tomar 1 colher de chá conforme necessário."
        },
        {
            "titulo": "Chá para Digestão",
            "descricao": "Infundir 1 colher de chá de tomilho seco em 1 xícara de água fervente por 10 minutos."
        }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro em quantidades culinárias e como chá. O óleo essencial é muito potente e não deve ser ingerido; deve ser diluído para uso na pele.",
    "imagemUrl": "https://i.imgur.com/2m2T3Z2.jpeg"
  },
  {
    "id": 74,
    "nomePopular": "Valeriana",
    "nomeCientifico": "Valeriana officinalis",
    "parteUsada": "Raiz",
    "formaDeUsoPrincipal": "Decocção, Tintura, Cápsulas",
    "usosPrincipais": [
        "Insônia e distúrbios do sono",
        "Ansiedade e estresse",
        "Tensão muscular e espasmos",
        "Dores de cabeça tensionais",
        "Cólicas menstruais"
    ],
    "receitasRapidas": [
        {
            "titulo": "Decocção de Raiz de Valeriana",
            "descricao": "1 colher de chá de raiz seca picada para 1 xícara de água. Ferver em fogo baixo por 5 minutos e deixar em infusão por mais 10. Beba 30-60 minutos antes de dormir."
        }
    ],
    "cuidadosEContraindicacoes": "Pode causar sonolência; não opere máquinas pesadas. Não combine com álcool ou outros sedativos. O uso prolongado pode causar dor de cabeça ou inquietação. O cheiro é forte e desagradável para alguns.",
    "imagemUrl": "https://i.imgur.com/uT3gS2B.jpeg"
  },
  {
    "id": 75,
    "nomePopular": "Mostarda Branca",
    "nomeCientifico": "Sinapis alba",
    "parteUsada": "Sementes",
    "formaDeUsoPrincipal": "Decocção, Cataplasma",
    "usosPrincipais": [
      "Indigestão, Flatulência e Dispepsia",
      "Problemas Respiratórios, Expectorante, Tosse, Bronquite, Sinusite",
      "Infecções da Pele, Feridas e Abscessos",
      "Anti-inflamatório, Artrite, Tendinite E Miosite",
      "Dores Musculares, Dores Articulares, Dor nas Costas, Analgésico",
      "Gases",
      "Fadiga, Falta de Energia e Exaustão Física",
      "Diurética, Retenção de Líquidos, Edemas e Desintoxicação"
    ],
    "receitasRapidas": [
      {
        "titulo": "Decocção de Semente de Mostarda Branca",
        "descricao": "1 colher de sobremesa de sementes para 1 xícara de água (150ml). Esmague as sementes, coloque em uma panela com água e ferva em fogo baixo por 5 minutos. Beba de 2 a 3 xícaras distribuídas ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "O uso tópico prolongado pode irritar a pele. Consumir com moderação, pois em excesso pode causar irritação gastrointestinal.",
    "imagemUrl": "https://i.imgur.com/uFkSrg2.jpeg"
  },
  {
    "id": 76,
    "nomePopular": "Alface Selvagem",
    "nomeCientifico": "Lactuca virosa",
    "parteUsada": "Látex seco (lactucarium), folhas",
    "formaDeUsoPrincipal": "Chá, Tintura",
    "usosPrincipais": [
        "Analgésico (semelhante ao ópio, mas mais suave)",
        "Sedativo e calmante",
        "Tratamento da tosse (coqueluche)",
        "Indutor do sono (insônia)",
        "Alívio de cólicas"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá de Alface Selvagem",
            "descricao": "1-2 colheres de chá de folhas secas por xícara de água fervente. Infusão por 10-15 minutos. Beba antes de dormir."
        }
    ],
    "cuidadosEContraindicacoes": "Em doses altas, pode causar tonturas, náuseas e vômitos. Não deve ser usado por gestantes ou pessoas com glaucoma. Pode potencializar o efeito de outros sedativos.",
    "imagemUrl": "https://i.imgur.com/rS2a8Vf.jpeg"
  },
  {
    "id": 77,
    "nomePopular": "Peixinho",
    "nomeCientifico": "Stachys byzantina",
    "parteUsada": "Folhas",
    "formaDeUsoPrincipal": "Chá, Compressa",
    "usosPrincipais": [
      "Feridas, Cortes e Abrasões",
      "Dermatite, Eczema e Artrite",
      "Antioxidante",
      "Estresse, Ansiedade e Insônia",
      "Indigestão e Desconforto Abdominal"
    ],
    "receitasRapidas": [
      {
        "titulo": "Chá de Peixinho",
        "descricao": "1 colher de sobremesa de folhas secas ou 2 de frescas picadas para 1 xícara de água (150 ml). Despeje água fervente, tampe e aguarde esfriar. Beba 3 xícaras distribuídas ao longo do dia."
      }
    ],
    "cuidadosEContraindicacoes": "Geralmente seguro. Consultar profissional de saúde se estiver grávida ou amamentando.",
    "imagemUrl": "https://i.imgur.com/7vj7V0c.jpeg"
  },
  {
    "id": 78,
    "nomePopular": "Losna (Absinto)",
    "nomeCientifico": "Artemisia absinthium",
    "parteUsada": "Folhas e flores",
    "formaDeUsoPrincipal": "Chá (infusão fraca), Tintura (baixa dose)",
    "usosPrincipais": [
        "Tônico amargo potente (estimula a secreção gástrica e biliar)",
        "Vermífugo (elimina parasitas intestinais)",
        "Antimicrobiano e antimalárico",
        "Emenagogo (estimula a menstruação)",
        "Febrífugo (reduz a febre)"
    ],
    "receitasRapidas": [
        {
            "titulo": "Chá Amargo para Digestão",
            "descricao": "Infundir 1/2 colher de chá (ou menos) de losna seca em 1 xícara de água fervente por no máximo 5 minutos. Tomar em pequenos goles antes das refeições."
        }
    ],
    "cuidadosEContraindicacoes": "Planta potente que contém tujona, uma neurotoxina. O uso deve ser de curto prazo (não mais que 2 semanas), em doses baixas e APENAS SOB SUPERVISÃO PROFISSIONAL. É abortiva e NÃO DEVE SER USADA NA GRAVIDEZ. Proibida para lactantes, pessoas com úlceras, problemas renais ou epilepsia.",
    "imagemUrl": "https://i.imgur.com/O6LdMbv.jpeg"
  }
];