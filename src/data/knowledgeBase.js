import { Book, AlertCircle, FileText, Scale, Shield, HelpCircle, Globe, Leaf, DollarSign, Users } from 'lucide-react';

// Base de Conhecimento Expandida - Chatbot Descomissionamento 2.0
// Inclui 100+ perguntas e respostas sobre Resolução ANP 817/2020

const knowledgeBase = {
  conceitos: {
    title: "Conceitos Básicos",
    icon: Book,
    questions: [
      {
        q: "O que é descomissionamento de instalações de petróleo e gás?",
        a: "Conforme a Resolução ANP nº 817/2020, é o conjunto de atividades associadas à interrupção definitiva da operação das instalações, ao abandono permanente e arrasamento de poços, à remoção de instalações, à destinação adequada de materiais, resíduos e rejeitos e à recuperação ambiental da área.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 2º", "Lei nº 9.478/1997"]
      },
      {
        q: "Quais tipos de instalações estão sujeitas ao descomissionamento?",
        a: "Instalações de exploração e produção, incluindo: poços, linhas, equipamentos submarinos, unidades de produção (plataformas, FPSOs), dutos, umbilicais, manifolds e demais estruturas utilizadas nas atividades de E&P.",
        relatedLaws: ["Resolução ANP nº 817/2020"]
      },
      {
        q: "Qual a diferença entre bens reversíveis e não reversíveis?",
        a: "Bens reversíveis são móveis ou imóveis de propriedade do contratado que, a critério da ANP, sejam necessários para permitir a continuidade das operações ou sejam passíveis de utilização por interesse público, podendo passar à propriedade da União. Bens não reversíveis permanecem com o contratado.",
        relatedLaws: ["Lei nº 9.478/1997 - Art. 28", "Lei nº 9.636/1998", "Resolução ANP nº 817/2020 - Arts. 52-55"]
      },
      {
        q: "O que é alijamento e por que é proibido?",
        a: "Alijamento é o abandono ou tombamento intencional não autorizado de instalações no mar. É expressamente proibido pela Resolução ANP nº 817/2020 e pelas convenções internacionais (IMO, Convenção de Londres) por causar graves impactos ambientais e riscos à navegação.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "Convenção de Londres", "Resolução IMO A.672(16)"]
      },
      {
        q: "Qual é o ciclo de vida de uma instalação de petróleo e gás?",
        a: "O ciclo completo inclui: 1) Exploração, 2) Desenvolvimento e Produção, 3) Declínio da Produção, 4) Descomissionamento e 5) Monitoramento Pós-Descomissionamento. O planejamento do descomissionamento deve iniciar desde a fase de desenvolvimento.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Boas Práticas Internacionais"]
      }
    ]
  },

  prazos: {
    title: "Prazos e Procedimentos",
    icon: AlertCircle,
    questions: [
      {
        q: "Quanto tempo antes do término da produção deve ser apresentado o PDI conceitual para instalações marítimas?",
        a: "5 anos antes da data prevista para o término da produção, conforme Art. 11, inciso I da Resolução ANP nº 817/2020.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 11, I"]
      },
      {
        q: "Qual o prazo para apresentar o PDI conceitual de instalações terrestres?",
        a: "2 anos antes da data prevista para o término da produção, conforme Art. 11, inciso II da Resolução ANP nº 817/2020.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 11, II"]
      },
      {
        q: "Em quanto tempo o RDI deve ser submetido após a conclusão do descomissionamento?",
        a: "180 dias após a conclusão da execução do PDI, conforme Art. 34 da Resolução ANP nº 817/2020.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 34"]
      },
      {
        q: "Qual o prazo para apresentação do PDI Executivo após aprovação do Conceitual?",
        a: "O PDI Executivo deve ser apresentado até 6 meses após a aprovação do PDI Conceitual para instalações marítimas. Para instalações terrestres, deve ser apresentado com antecedência suficiente para análise antes do início das atividades.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 13"]
      },
      {
        q: "Quanto tempo dura tipicamente todo o processo de descomissionamento?",
        a: "O processo completo pode levar de 7 a 15 anos: Planejamento (2-3 anos), Execução (3-7 anos) e Monitoramento Pós-Descomissionamento (5-10 anos). Instalações marítimas complexas podem levar mais tempo.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Experiência Internacional"]
      }
    ]
  },

  documentacao: {
    title: "Documentação Obrigatória",
    icon: FileText,
    questions: [
      {
        q: "O que é o EJD (Estudo de Justificativas para o Descomissionamento)?",
        a: "Documento que contém a descrição da área a ser devolvida considerando aspectos de reservatório, poços e instalações, acompanhada das justificativas sobre a decisão pelo descomissionamento. Deve demonstrar que foram analisadas todas as alternativas para maximizar o fator de recuperação.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 7º e Anexo II"]
      },
      {
        q: "Quais são os principais documentos exigidos no processo?",
        a: "1) EJD - Estudo de Justificativas para o Descomissionamento\n2) PDI Conceitual - versão preliminar do programa\n3) PDI Executivo - versão detalhada para execução\n4) RDI - Relatório de Descomissionamento de Instalações\n5) Relatórios parciais de acompanhamento",
        relatedLaws: ["Resolução ANP nº 817/2020"]
      },
      {
        q: "O que deve conter o memorial descritivo do projeto de auxílios à navegação no PDI?",
        a: "O memorial descritivo deve seguir as normas da Autoridade Marítima Brasileira e incluir: tipo e características dos auxílios, posicionamento geográfico, alcance luminoso (se aplicável), período de operação, responsável pela manutenção e plano de sinalização para estruturas remanescentes.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo III", "NORMAM-17"]
      },
      {
        q: "É obrigatório apresentar plano de monitoramento pós-descomissionamento no PDI?",
        a: "Sim, para instalações marítimas. O PDI deve incorporar um plano de monitoramento pós-descomissionamento baseado em risco. O plano deve atender exigências de outras autoridades e pode incluir relatórios de progresso. Para instalações terrestres, é exigido quando determinado pelo órgão ambiental.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I, item 3.12"]
      },
      {
        q: "Quais as diferenças entre o RDI e os relatórios parciais?",
        a: "O RDI é o documento final completo apresentado 180 dias após conclusão de todas as atividades. Os relatórios parciais são apresentados durante a execução (mínimo 180 dias entre cada) e contêm apenas informações dos itens 1 a 4 do Anexo V. O RDI inclui todos os itens, comprovações de alienações e representação em carta náutica.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 15 §3º e §4º", "Anexo V"]
      },
      {
        q: "Como comprovar as alienações realizadas no RDI?",
        a: "Deve-se apresentar: a) Instrumento jurídico das alienações contendo especificação do uso futuro informado pelo comprador; b) Autorizações das autoridades competentes. Para alienação a proprietários de terra, o instrumento deve especificar o uso pretendido do bem.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo V, item 6", "Art. 49"]
      },
      {
        q: "O que é o RDI (Relatório de Dados de Instalação)?",
        a: "É um relatório detalhado contendo: histórico operacional da instalação, inventário de equipamentos e estruturas, registro de acidentes ambientais, caracterização de passivos ambientais e dados técnicos completos. Serve como base fundamental para elaboração do PDI.",
        relatedLaws: ["Resolução ANP nº 817/2020"]
      }
    ]
  },

  responsabilidades: {
    title: "Responsabilidades e Obrigações",
    icon: Shield,
    questions: [
      {
        q: "Quem é responsável pelos custos do descomissionamento?",
        a: "A execução das atividades de descomissionamento e os custos associados são de responsabilidade exclusiva do contratado, conforme Art. 6º da Resolução ANP nº 817/2020. Isso inclui todos os custos de planejamento, execução e monitoramento pós-descomissionamento.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 6º"]
      },
      {
        q: "O que acontece se o contratado não cumprir o PDI aprovado?",
        a: "A ANP poderá executar as garantias vinculadas ao descomissionamento previstas no contrato, sem prejuízo das sanções previstas na Lei nº 9.847/1999. As penalidades podem incluir multas de R$ 5.000 a R$ 50.000.000, além de advertência, embargo e até revogação de autorização.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 36", "Lei nº 9.847/1999"]
      },
      {
        q: "Quais são as garantias financeiras exigidas para o descomissionamento?",
        a: "São aceitos: carta de fiança bancária, seguro garantia, títulos da dívida pública ou fundo específico. Valores: 25% do custo estimado na fase conceitual e 100% na fase executiva, com atualização anual e revisão a cada 5 anos.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Contrato de Concessão"]
      },
      {
        q: "O que são obrigações remanescentes após o descomissionamento?",
        a: "São obrigações que persistem após conclusão do descomissionamento: monitoramento ambiental contínuo, manutenção de seguros ambientais, relatórios periódicos à ANP, responsabilidade por passivos futuros e cumprimento de condicionantes ambientais. O prazo é definido caso a caso pela ANP.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Arts. 40-41"]
      },
      {
        q: "Como funciona a responsabilidade em instalações compartilhadas?",
        a: "Em instalações compartilhadas por múltiplos operadores, deve haver: acordo entre operadores sobre responsabilidades, cronograma coordenado, divisão proporcional de custos, aprovação conjunta dos PDI e garantias solidárias quando aplicável.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Art. 2º, XIII e Arts. 53-54"]
      }
    ]
  },

  tecnicoMaritimo: {
    title: "Aspectos Técnicos Marítimos",
    icon: Scale,
    questions: [
      {
        q: "É permitido o alijamento de instalações no mar?",
        a: "Não. O alijamento (abandono ou tombamento intencional não autorizado) de instalações no mar é expressamente proibido pelo item 3.1.1 do Anexo I da Resolução ANP nº 817/2020.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Resolução IMO A.672(16)", "Convenção de Londres"]
      },
      {
        q: "Qual a profundidade mínima de corte de estruturas submarinas?",
        a: "Para instalações em profundidade batimétrica igual ou menor que 100 metros, as estruturas devem ser cortadas a 3 metros abaixo do leito marinho. Para profundidades maiores, pode-se avaliar alternativas desde que aprovadas pela ANP, IBAMA e Marinha.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "NORMAM-11"]
      },
      {
        q: "Como devem ser sinalizadas as instalações que permanecerem in situ?",
        a: "Devem ser cartografadas e sinalizadas conforme normas da Autoridade Marítima Brasileira (NORMAM-17). Para instalações a menos de 55m da superfície, devem ser instalados sinais náuticos flutuantes cegos ou luminosos. Todas devem estar representadas em cartas náuticas oficiais.",
        relatedLaws: ["NORMAM-17", "Resolução ANP nº 817/2020", "Despacho ANP 3/2021/SSM"]
      },
      {
        q: "Qual o raio de limpeza exigido no leito marinho?",
        a: "100 metros ou metade da lâmina d'água, o que for maior, limitado a 500 metros ao redor de plataformas e poços. Para dutos e umbilicais, 10 metros de cada lado da linha. Todos os detritos devem ser removidos desta área.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "Resolução CONAMA nº 398/2008"]
      },
      {
        q: "Em quais casos a permanência in situ pode ser autorizada?",
        a: "A permanência in situ pode ser aceita mediante: justificativa técnica robusta, análise comparativa de alternativas (remoção vs. permanência), aprovação da ANP, IBAMA e Marinha, atendimento à Resolução IMO A.672(16), cartografia náutica, coluna d'água mínima de 55m e plano de monitoramento.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Despacho ANP 3/2021/SSM", "Resolução IMO A.672(16)"]
      },
      {
        q: "Como deve ser feito o abandono de poços submarinos?",
        a: "Procedimentos obrigatórios: remoção de equipamentos de superfície e subsuperfície, isolamento permanente com cimento das zonas produtoras, tamponamento conforme normas ANP, corte da cabeça do poço e condutor abaixo do leito marinho, nivelamento com o fundo e documentação completa.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Resolução ANP nº 699/2017"]
      }
    ]
  },

  tecnicoTerrestre: {
    title: "Aspectos Técnicos Terrestres",
    icon: HelpCircle,
    questions: [
      {
        q: "Como deve ser feito o arrasamento de poços terrestres?",
        a: "Deve contemplar: a) remoção da cabeça do poço e corte dos revestimentos ao nível da base do antepoço; b) demolição das paredes do antepoço e aterramento até o nível do terreno circundante; c) compactação adequada do solo; d) documentação fotográfica completa.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "ABNT NBR 15847"]
      },
      {
        q: "Edificações podem permanecer após o descomissionamento?",
        a: "Sim, a permanência de edificações, instalações elétricas e de telecomunicações pode ser admitida, desde que devidamente justificada no PDI, com comprovação de utilidade pública ou interesse do proprietário da terra, e com anuência do órgão ambiental.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo IV"]
      },
      {
        q: "Como deve ser feita a recuperação de áreas degradadas em terra?",
        a: "Conforme PRAD (Plano de Recuperação de Áreas Degradadas): recomposição topográfica, descompactação do solo, plantio de espécies nativas, recuperação de habitats, restabelecimento de drenagem natural, controle de erosão e monitoramento da revegetação por período mínimo de 2 anos.",
        relatedLaws: ["Resolução ANP nº 817/2020", "CONAMA nº 237/1997"]
      },
      {
        q: "Como proceder com dutos terrestres no descomissionamento?",
        a: "Opções: 1) Remoção completa do duto, 2) Limpeza, tamponamento das extremidades e abandono no local (com justificativa), 3) Transferência para terceiros. Em todos os casos, deve-se garantir limpeza interna, teste de estanqueidade e monitoramento pós-abandono.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo IV"]
      }
    ]
  },

  ambiental: {
    title: "Questões Ambientais",
    icon: Leaf,
    questions: [
      {
        q: "Como tratar material radioativo natural (NORM)?",
        a: "O contratado deve dispor de plano de gerenciamento adequado incluindo: levantamento radiológico completo, classificação dos materiais, plano de proteção radiológica, licenciamento para transporte, destinação em repositórios autorizados pela CNEN e documentação completa no PDI.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Norma CNEN NN 4.01", "Norma CNEN NN 8.01"]
      },
      {
        q: "Quais contaminantes devem ser analisados no solo e água?",
        a: "Principais parâmetros: TPH (hidrocarbonetos totais de petróleo), BTEX (benzeno, tolueno, etilbenzeno, xilenos), PAHs (hidrocarbonetos policíclicos aromáticos), metais pesados (chumbo, mercúrio, cádmio, cromo), PCBs e NORM. Os níveis devem atender Resolução CONAMA 420/2009.",
        relatedLaws: ["Resolução CONAMA nº 420/2009", "Resolução ANP nº 817/2020"]
      },
      {
        q: "O que é a Política Nacional de Resíduos Sólidos (PNRS) e como se aplica?",
        a: "Lei 12.305/2010 estabelece princípios de: responsabilidade compartilhada, logística reversa, hierarquia de gestão (não geração, redução, reutilização, reciclagem, tratamento e disposição final). No descomissionamento, exige classificação de resíduos, destinação adequada e documentação completa.",
        relatedLaws: ["Lei nº 12.305/2010", "Decreto nº 7.404/2010"]
      },
      {
        q: "Quais técnicas de remediação ambiental são aplicáveis?",
        a: "Principais técnicas: Bioestimulação e bioaumentação, Oxidação química in-situ (ISCO), Extração de vapores do solo (SVE), Lavagem de solo (soil washing), Air sparging, Pump and treat, Barreira reativa permeável, Fitorremediação. A escolha depende do tipo de contaminante e características do solo.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Resolução CONAMA nº 420/2009"]
      },
      {
        q: "Como funciona o monitoramento pós-descomissionamento?",
        a: "Inclui: rede de poços de monitoramento, análises periódicas (semestral/anual) de solo e água, acompanhamento da revegetação, verificação de estabilidade geotécnica, monitoramento de fauna, relatórios à ANP e órgãos ambientais. Duração típica: 5-10 anos ou até alcançar metas de qualidade.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I, item 3.12"]
      }
    ]
  },

  internacional: {
    title: "Normas Internacionais e Convenções",
    icon: Globe,
    questions: [
      {
        q: "O que é a Convenção de Hong Kong?",
        a: "A Convenção Internacional de Hong Kong para a Reciclagem Segura e Ambientalmente Adequada de Navios (2009) estabelece padrões globais para o desmantelamento de embarcações. Embora focada em navios, seus princípios influenciam o descomissionamento de plataformas flutuantes (FPSOs, FSOs) quanto à gestão de materiais perigosos, inventário de substâncias e certificações.",
        relatedLaws: ["Convenção de Hong Kong 2009", "Resolução MEPC.269(68) da IMO"]
      },
      {
        q: "Qual a importância da Convenção de Hong Kong para o descomissionamento offshore?",
        a: "Estabelece padrões para: 1) Inventário de Materiais Perigosos (IHM) obrigatório; 2) Certificação de instalações de reciclagem; 3) Plano de reciclagem específico; 4) Rastreabilidade de materiais; 5) Proteção de trabalhadores e meio ambiente. Para FPSOs e plataformas flutuantes convertidas de navios, pode ser aplicável integralmente.",
        relatedLaws: ["Convenção de Hong Kong", "Regulamento EU 1257/2013"]
      },
      {
        q: "A Convenção de Hong Kong já está em vigor no Brasil?",
        a: "A Convenção entrará em vigor internacionalmente em junho de 2025. O Brasil ainda não ratificou, mas as melhores práticas já influenciam o setor. Empresas internacionais operando no Brasil frequentemente adotam seus padrões voluntariamente, especialmente para unidades flutuantes que podem ser recicladas em estaleiros certificados.",
        relatedLaws: ["Convenção de Hong Kong", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Quais materiais perigosos devem ser inventariados segundo padrões internacionais?",
        a: "Principais materiais: Amianto/asbesto, PCBs (bifenilos policlorados), tintas antifouling com TBT, materiais radioativos (NORM), mercúrio, chumbo, cádmio, cromo hexavalente, CFCs/HCFCs, halons. O inventário deve incluir localização, quantidade estimada e condição do material.",
        relatedLaws: ["Convenção de Hong Kong - Anexo 1", "Resolução MEPC.269(68)"]
      },
      {
        q: "O que é a Resolução IMO A.672(16)?",
        a: "Diretrizes da Organização Marítima Internacional (IMO) para remoção de instalações offshore. Estabelece critérios para: análise de remoção total vs. parcial, profundidade mínima de corte, requisitos de sinalização, considerações ambientais e de segurança. É reconhecida pela ANP como base técnica.",
        relatedLaws: ["Resolução IMO A.672(16)", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Como a economia circular se aplica ao descomissionamento?",
        a: "Princípios aplicáveis: maximizar reutilização de equipamentos, reciclagem de materiais (aço, metais não-ferrosos), remanufatura de componentes, valorização energética de resíduos, minimização de descarte em aterros. Meta: atingir >95% de taxa de reciclagem conforme boas práticas internacionais.",
        relatedLaws: ["Economia Circular", "Lei nº 12.305/2010 - PNRS"]
      },
      {
        q: "O que é o conceito de rigs-to-reefs?",
        a: "Conceito onde plataformas descomissionadas são convertidas em recifes artificiais para conservação marinha. Aplicado em países como EUA (Golfo do México) e Malásia. No Brasil, requer aprovação rigorosa da ANP, IBAMA e Marinha, com estudos ambientais demonstrando benefícios ecológicos superiores à remoção total.",
        relatedLaws: ["Experiência Internacional", "Despacho ANP 3/2021/SSM"]
      }
    ]
  },

  custosFinanceiro: {
    title: "Custos e Aspectos Financeiros",
    icon: DollarSign,
    questions: [
      {
        q: "Qual o custo típico de descomissionamento no Brasil?",
        a: "Custos variam amplamente:\n• Estudos (EJD+PDI): R$ 250 mil - R$ 1 milhão\n• Instalações terrestres: R$ 5-30 milhões\n• Plataformas fixas: R$ 50-500 milhões\n• FPSOs: R$ 200 milhões - R$ 1 bilhão\n• Campos completos: R$ 500 milhões - R$ 3 bilhões\n\nFatores: tamanho, localização, profundidade, contaminação, logística.",
        relatedLaws: ["Experiência do Setor", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Como calcular a provisão financeira para descomissionamento?",
        a: "Metodologia: 1) Estimar custos detalhados (bottom-up), 2) Aplicar fator de contingência (15-25%), 3) Considerar inflação e valor presente líquido, 4) Atualizar anualmente, 5) Revisar a cada 5 anos ou mudança significativa. Deve estar em linha com normas contábeis (IFRS, IAS 37).",
        relatedLaws: ["IAS 37", "IFRS", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Quais são as alternativas de garantia financeira aceitas?",
        a: "Instrumentos aceitos: 1) Carta de fiança bancária, 2) Seguro garantia, 3) Títulos da dívida pública federal, 4) Fundo específico de descomissionamento (trust fund), 5) Garantia corporativa (casos especiais, com aprovação ANP). Valores: 25% (fase conceitual) a 100% (fase executiva).",
        relatedLaws: ["Resolução ANP nº 817/2020", "Contrato de Concessão"]
      },
      {
        q: "Como otimizar custos de descomissionamento?",
        a: "Estratégias: 1) Planejamento antecipado desde o projeto, 2) Uso de tecnologias modulares, 3) Compartilhamento de infraestrutura logística, 4) Maximizar reutilização/reciclagem, 5) Campanhas integradas (múltiplas instalações), 6) Aproveitamento de janelas climáticas favoráveis, 7) Sinergias com novos projetos.",
        relatedLaws: ["Boas Práticas Internacionais"]
      }
    ]
  },

  profissionaisTecnicos: {
    title: "Profissionais e Aspectos Técnicos",
    icon: Users,
    questions: [
      {
        q: "Quais profissionais podem elaborar o PDI?",
        a: "Responsável Técnico: Engenheiro de Petróleo, Ambiental ou Geólogo (CREA). Equipe multidisciplinar: Engenheiro de Segurança, Biólogo, Oceanógrafo, Engenheiro Civil, Químico. Requisitos: registro profissional, experiência mínima 5 anos, especialização em petróleo/meio ambiente, ART/RRT.",
        relatedLaws: ["Lei nº 5.194/1966 - CONFEA", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Como contratar consultoria para descomissionamento?",
        a: "Critérios de seleção: 1) Registro CREA ativo, 2) Portfolio em descomissionamento, 3) Equipe multidisciplinar, 4) Experiência com ANP, 5) Certificações (ISO 14001, OHSAS 18001). Documentação: proposta técnica, cronograma, orçamento discriminado, currículo da equipe, certificados.",
        relatedLaws: ["Lei nº 8.666/1993 - Licitações"]
      },
      {
        q: "Quais certificações são relevantes para empresas de descomissionamento?",
        a: "Certificações importantes: ISO 14001 (Gestão Ambiental), ISO 9001 (Qualidade), OHSAS 18001/ISO 45001 (Saúde e Segurança), ISO 31000 (Gestão de Riscos), PBQP-H (construção civil), SASSMAQ (transporte de resíduos perigosos). Para offshore: certificações de mergulho (IMCA), ROV, heavy lifting.",
        relatedLaws: ["Normas ISO", "ANP - Certificação SGSS"]
      },
      {
        q: "Que tecnologias são usadas no descomissionamento offshore?",
        a: "Principais tecnologias: 1) ROVs para inspeção e corte subaquático, 2) Mergulho saturado (profundidades >50m), 3) Guindastes pesados (floating cranes), 4) Corte diamantado e abrasivo, 5) Jet cutting, 6) Heavy lift vessels, 7) Barcaças de transporte, 8) Sistemas de monitoramento remoto.",
        relatedLaws: ["Boas Práticas Internacionais"]
      }
    ]
  },

  sustentabilidadeESG: {
    title: "Sustentabilidade e ESG",
    icon: Leaf,
    questions: [
      {
        q: "Como o descomissionamento se relaciona com ESG?",
        a: "Aspectos ESG no descomissionamento:\n**Ambiental (E)**: Restauração ecológica, gestão de resíduos, emissões de carbono\n**Social (S)**: Empregos locais, comunidades impactadas, segurança\n**Governança (G)**: Compliance regulatório, transparência, ética empresarial\n\nEmpresa bem governada planeja descomissionamento desde início do projeto.",
        relatedLaws: ["Princípios ESG", "ODS - ONU", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Como reduzir pegada de carbono no descomissionamento?",
        a: "Medidas: 1) Otimização logística (reduzir viagens), 2) Uso de embarcações eficientes ou híbridas, 3) Maximizar reciclagem local, 4) Corte com tecnologias de baixa emissão, 5) Aproveitamento energético de resíduos, 6) Compensação de carbono em projetos certificados. Meta: neutralidade carbono.",
        relatedLaws: ["Acordo de Paris", "Inventário GHG Protocol"]
      },
      {
        q: "Quais são os Objetivos de Desenvolvimento Sustentável (ODS) relacionados?",
        a: "ODS prioritários:\n• ODS 14 - Vida na Água (proteção marinha)\n• ODS 12 - Consumo Responsável (economia circular)\n• ODS 8 - Trabalho Decente (empregos qualificados)\n• ODS 13 - Ação Climática (redução emissões)\n• ODS 15 - Vida Terrestre (restauração ecossistemas)\n• ODS 17 - Parcerias (cooperação internacional)",
        relatedLaws: ["Agenda 2030 - ONU"]
      },
      {
        q: "Como engajar comunidades locais no descomissionamento?",
        a: "Boas práticas: 1) Audiências públicas desde planejamento, 2) Contratação de mão de obra local, 3) Capacitação profissional, 4) Mitigação de impactos socioeconômicos, 5) Comunicação transparente, 6) Programas de desenvolvimento local, 7) Participação em conselhos consultivos.",
        relatedLaws: ["Resolução CONAMA nº 237/1997 - Participação Social"]
      }
    ]
  }
};

export default knowledgeBase;
