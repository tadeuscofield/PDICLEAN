// Base de Conhecimento - APENAS DADOS (sem componentes React)
// Para uso no NLPProcessor

const knowledgeBaseData = {
  conceitos: {
    title: "Conceitos Básicos",
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
      }
    ]
  },

  responsabilidades: {
    title: "Responsabilidades e Obrigações",
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
      }
    ]
  },

  tecnicoMaritimo: {
    title: "Aspectos Técnicos Marítimos",
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
        q: "Quais são as principais bacias offshore do Brasil?",
        a: "As principais bacias sedimentares offshore brasileiras são: Bacia de Campos (maior produtora, pré-sal), Bacia de Santos (pré-sal gigante, Libra, Mero), Bacia do Espírito Santo, Bacia de Sergipe-Alagoas, Bacia Potiguar, Bacia do Ceará, Bacia de Pelotas e Bacia de Camamu-Almada. A Bacia de Santos e Campos concentram mais de 80% da produção nacional.",
        relatedLaws: ["ANP - Atlas das Bacias Sedimentares", "Plano Decenal de Expansão de Energia"]
      },
      {
        q: "O que são unidades flutuantes de produção (FPSOs)?",
        a: "FPSO (Floating Production, Storage and Offloading) são navios-plataforma que produzem, processam, armazenam e transferem petróleo e gás. São fundamentais no pré-sal brasileiro. Principais características: capacidade de armazenamento de 1-2 milhões de barris, sistemas de ancoragem complexos, vida útil de 20-30 anos. Brasil tem mais de 50 FPSOs operando.",
        relatedLaws: ["Resolução ANP nº 817/2020", "NORMAM-01", "Convenção de Hong Kong"]
      },
      {
        q: "Quais os desafios específicos do descomissionamento offshore no Brasil?",
        a: "Principais desafios: 1) Profundidades extremas (pré-sal >2.000m), 2) Condições oceanográficas severas, 3) Logística complexa e custosa, 4) Falta de infraestrutura especializada no Brasil, 5) Destinação de grandes volumes de aço (100.000+ toneladas/FPSO), 6) Materiais perigosos (amianto, NORM, PCB), 7) Custos elevados (R$ 200M-R$ 1B por unidade), 8) Necessidade de tecnologia especializada.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Experiência do Setor"]
      },
      {
        q: "O que são linhas de ancoragem e como são descomissionadas?",
        a: "Sistemas de ancoragem (mooring) mantêm unidades flutuantes posicionadas. Tipos: amarras em catenária, turret interno/externo, spread mooring. Descomissionamento: 1) Desconexão controlada, 2) Recuperação das linhas (amarras, cabos, correntes), 3) Remoção de âncoras (50-150 toneladas cada), 4) Inspeção ROV do leito marinho, 5) Limpeza da área. Custos: R$ 20-80 milhões dependendo da profundidade e configuração.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "NORMAM-01"]
      },
      {
        q: "O que é o pré-sal e quais suas implicações para descomissionamento?",
        a: "O pré-sal é uma sequência de rochas reservatórios localizada abaixo de espessa camada de sal (>2.000m), em profundidades de 5.000-7.000m abaixo do nível do mar. Implicações: 1) Reservatórios gigantes (vida útil 30-50 anos), 2) Pressões e temperaturas extremas, 3) Alto teor de CO2 (requer injeção), 4) Tecnologia de ponta, 5) Custos de descomissionamento superiores (R$ 1-3 bilhões/campo), 6) Desafios logísticos únicos, 7) Primeiros descomissionamentos apenas pós-2050.",
        relatedLaws: ["Lei nº 12.351/2010 - Lei do Pré-Sal", "Resolução ANP nº 817/2020"]
      }
    ]
  },

  tecnicoTerrestre: {
    title: "Aspectos Técnicos Terrestres",
    questions: [
      {
        q: "Como deve ser feito o arrasamento de poços terrestres?",
        a: "Deve contemplar: a) remoção da cabeça do poço e corte dos revestimentos ao nível da base do antepoço; b) demolição das paredes do antepoço e aterramento até o nível do terreno circundante; c) compactação adequada do solo; d) documentação fotográfica completa.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "ABNT NBR 15847"]
      }
    ]
  },

  ambiental: {
    title: "Questões Ambientais",
    questions: [
      {
        q: "Como tratar material radioativo natural (NORM)?",
        a: "O contratado deve dispor de plano de gerenciamento adequado incluindo: levantamento radiológico completo, classificação dos materiais, plano de proteção radiológica, licenciamento para transporte, destinação em repositórios autorizados pela CNEN e documentação completa no PDI.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Norma CNEN NN 4.01", "Norma CNEN NN 8.01"]
      },
      {
        q: "Qual o raio de limpeza exigido no leito marinho?",
        a: "100 metros ou metade da lâmina d'água, o que for maior, limitado a 500 metros ao redor de plataformas e poços. Para dutos e umbilicais, 10 metros de cada lado da linha. Todos os detritos devem ser removidos desta área.",
        relatedLaws: ["Resolução ANP nº 817/2020 - Anexo I", "Resolução CONAMA nº 398/2008"]
      }
    ]
  },

  internacional: {
    title: "Normas Internacionais e Convenções",
    questions: [
      {
        q: "O que é a Resolução IMO A.672(16)?",
        a: "Diretrizes da Organização Marítima Internacional (IMO) para remoção de instalações offshore. Estabelece critérios para: análise de remoção total vs. parcial, profundidade mínima de corte, requisitos de sinalização, considerações ambientais e de segurança. É reconhecida pela ANP como base técnica.",
        relatedLaws: ["Resolução IMO A.672(16)", "Resolução ANP nº 817/2020"]
      }
    ]
  },

  hongKong: {
    title: "Convenção de Hong Kong",
    icon: "Ship",
    questions: [
      {
        q: "O que é a Convenção de Hong Kong?",
        a: "A Convenção Internacional de Hong Kong para a Reciclagem Segura e Ambientalmente Adequada de Navios (2009) é um tratado internacional que garante que navios ao serem reciclados não representem riscos desnecessários à saúde humana, segurança ou meio ambiente. Foi adotada em 15 de maio de 2009 e entrou em vigor em 26 de junho de 2025.",
        relatedLaws: ["Convenção de Hong Kong 2009", "IMO", "Convenção da Basileia"]
      },
      {
        q: "Qual o objetivo da Convenção de Hong Kong?",
        a: "Abordar todas as questões relacionadas à reciclagem de navios, incluindo o fato de que navios vendidos para sucata podem conter materiais ambientalmente perigosos (amianto, metais pesados, hidrocarbonetos, substâncias que destroem a camada de ozônio). Estabelece requisitos para design, construção, operação e preparação de navios para reciclagem segura.",
        relatedLaws: ["Convenção de Hong Kong 2009 - Art. 1"]
      },
      {
        q: "O que é o IHM (Inventory of Hazardous Materials)?",
        a: "Inventário de Materiais Perigosos - documento obrigatório que lista todos os materiais perigosos presentes a bordo de uma embarcação. É o principal instrumento de controle da Convenção de Hong Kong e deve ser mantido atualizado durante toda a vida útil do navio.",
        relatedLaws: ["Convenção de Hong Kong 2009 - Regulation 5", "IMO MEPC.269(68)"]
      },
      {
        q: "Quem precisa do Certificado IHM (ICIHM)?",
        a: "Todas as embarcações internacionais com mais de 500 GT (toneladas brutas) devem obter o Certificado Internacional de Inventário de Materiais Perigosos (ICIHM). O certificado deve ser obtido até 26 de junho de 2030 para navios existentes.",
        relatedLaws: ["Convenção de Hong Kong 2009", "IMO Resolution MEPC.269(68)"]
      },
      {
        q: "Quais materiais perigosos são controlados pelo IHM?",
        a: "O IHM deve documentar: amianto, PCBs (bifenilas policloradas), substâncias que destroem a camada de ozônio (CFCs, halons), hidrocarbonetos e óleos persistentes, metais pesados (chumbo, mercúrio, cádmio, cromo hexavalente), materiais radioativos, resíduos tóxicos e outras substâncias listadas no Anexo I da Convenção.",
        relatedLaws: ["Convenção de Hong Kong 2009 - Anexo I", "Lista de materiais perigosos IMO"]
      },
      {
        q: "Quais são os documentos obrigatórios da Convenção de Hong Kong?",
        a: "1) Inventário de Materiais Perigosos (IHM/ICIHM) - obrigatório para cada navio\n2) Plano de Reciclagem do Navio - específico para cada embarcação\n3) Certificados de Inspeção: inspeção inicial, inspeções periódicas (a cada 5 anos) e inspeção final antes da reciclagem\n4) Certificado de Conformidade da Instalação de Reciclagem",
        relatedLaws: ["Convenção de Hong Kong 2009 - Regulações 10-12"]
      },
      {
        q: "Como a Convenção de Hong Kong se aplica ao descomissionamento offshore?",
        a: "Embora a Convenção seja focada em navios, seus princípios são fundamentais para FPSOs (Floating Production Storage and Offloading) e FSOs (Floating Storage and Offloading) que são considerados 'ship-shaped units'. Aplica-se: gestão de materiais perigosos, inventário IHM, requisitos de reciclagem segura, certificações e destinação ambientalmente adequada.",
        relatedLaws: ["Convenção de Hong Kong 2009", "IMO Guidelines", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Qual a relação entre Convenção de Hong Kong e Resolução ANP 817/2020?",
        a: "A Resolução ANP 817/2020 incorpora princípios da Convenção de Hong Kong para descomissionamento de unidades flutuantes brasileiras. Ambas exigem: inventário completo de materiais perigosos, gestão adequada de substâncias tóxicas, plano de descomissionamento/reciclagem detalhado, certificações técnicas e ambientais, e monitoramento pós-operação.",
        relatedLaws: ["Resolução ANP nº 817/2020", "Convenção de Hong Kong 2009", "Legislação brasileira complementar"]
      },
      {
        q: "Quais instalações de reciclagem são aprovadas pela Convenção?",
        a: "Instalações de reciclagem devem ser autorizadas pela autoridade competente do país e atender requisitos: Sistema de Gestão Ambiental, equipamentos adequados de contenção e tratamento de materiais perigosos, plano de emergência, capacitação de trabalhadores, e conformidade com padrões de saúde e segurança ocupacional estabelecidos pela IMO e OIT.",
        relatedLaws: ["Convenção de Hong Kong 2009 - Regulation 15-18", "Diretrizes IMO/OIT"]
      },
      {
        q: "Quando devo iniciar o processo de certificação IHM?",
        a: "Para navios novos: o IHM Parte I deve ser desenvolvido durante a construção. Para navios existentes: imediatamente, pois o prazo final é 26 de junho de 2030. O processo inclui: inspeção visual, análise de documentação, amostragem de materiais suspeitos, elaboração do inventário e certificação por sociedade classificadora reconhecida.",
        relatedLaws: ["Convenção de Hong Kong 2009", "IMO Resolution MEPC.379(80)"]
      }
    ]
  },

  custosFinanceiro: {
    title: "Custos e Aspectos Financeiros",
    questions: [
      {
        q: "Qual o custo típico de descomissionamento no Brasil?",
        a: "Custos variam amplamente:\n• Estudos (EJD+PDI): R$ 250 mil - R$ 1 milhão\n• Instalações terrestres: R$ 5-30 milhões\n• Plataformas fixas: R$ 50-500 milhões\n• FPSOs: R$ 200 milhões - R$ 1 bilhão\n• Campos completos: R$ 500 milhões - R$ 3 bilhões\n\nFatores: tamanho, localização, profundidade, contaminação, logística.",
        relatedLaws: ["Experiência do Setor", "Resolução ANP nº 817/2020"]
      }
    ]
  },

  profissionaisTecnicos: {
    title: "Profissionais e Aspectos Técnicos",
    questions: [
      {
        q: "Quais profissionais podem elaborar o PDI?",
        a: "Responsável Técnico: Engenheiro de Petróleo, Ambiental ou Geólogo (CREA). Equipe multidisciplinar: Engenheiro de Segurança, Biólogo, Oceanógrafo, Engenheiro Civil, Químico. Requisitos: registro profissional, experiência mínima 5 anos, especialização em petróleo/meio ambiente, ART/RRT.",
        relatedLaws: ["Lei nº 5.194/1966 - CONFEA", "Resolução ANP nº 817/2020"]
      }
    ]
  },

  nr30: {
    title: "NR 30 - Segurança e Saúde no Trabalho Aquaviário",
    questions: [
      {
        q: "O que é a NR 30?",
        a: "A Norma Regulamentadora 30 (NR 30) estabelece os princípios fundamentais para proteção da segurança e saúde dos trabalhadores aquaviários. Aplica-se a embarcações comerciais utilizadas no transporte de mercadorias ou passageiros, incluindo plataformas offshore e embarcações de apoio. Foi aprovada pela Portaria MTb nº 3.214/1978 e atualizada regularmente.",
        relatedLaws: ["NR 30 - Portaria MTb nº 3.214/1978", "CLT - Consolidação das Leis do Trabalho"]
      },
      {
        q: "A NR 30 se aplica ao descomissionamento offshore?",
        a: "Sim! A NR 30 é fundamental no descomissionamento de instalações offshore. Aplica-se a: 1) Trabalhadores em plataformas durante o descomissionamento, 2) Equipes de remoção e corte de estruturas, 3) Operações com embarcações de apoio, 4) Transporte de pessoal e equipamentos, 5) Mergulhadores e ROVs. Requisitos: treinamento específico, EPIs adequados, procedimentos de emergência, exames médicos periódicos.",
        relatedLaws: ["NR 30", "NR 37 (Plataformas)", "Resolução ANP nº 817/2020"]
      },
      {
        q: "Quais são as principais exigências da NR 30 para plataformas offshore?",
        a: "Principais requisitos: 1) SESMT - Serviço Especializado em Segurança e Medicina do Trabalho, 2) CIPA embarcada, 3) Programa de Controle Médico de Saúde Ocupacional (PCMSO), 4) Treinamentos obrigatórios (NR 30.3, NR 37), 5) EPIs específicos para trabalhos em altura e espaços confinados, 6) Plano de Emergência Individual (PEI), 7) Procedimentos para evacuação e abandono, 8) Sinalização de segurança, 9) Equipamentos de combate a incêndio.",
        relatedLaws: ["NR 30", "NR 37", "NORMAM-01"]
      },
      {
        q: "Quais treinamentos são obrigatórios pela NR 30?",
        a: "Treinamentos obrigatórios para trabalho offshore: 1) Curso Básico de Segurança em Instalações Offshore (NR 37) - 16 horas, reciclagem a cada 2 anos, 2) HUET (Helicopter Underwater Escape Training), 3) Primeiros Socorros, 4) Combate a Incêndio, 5) EPI e EPC específicos, 6) Espaços Confinados (NR 33), 7) Trabalho em Altura (NR 35), 8) Operação de equipamentos específicos. Certificados devem estar atualizados.",
        relatedLaws: ["NR 30.3", "NR 37.10", "NR 33", "NR 35"]
      },
      {
        q: "O que é o Certificado de Proficiência (COP) e quem precisa?",
        a: "O Certificado de Proficiência é documento obrigatório para tripulantes de embarcações, emitido pela Marinha do Brasil conforme Convenção STCW (Standards of Training, Certification and Watchkeeping). Necessário para: oficiais de náutica, máquinas, rádio-operadores, aquaviários certificados. Tipos: COP básico, COP avançado. Validade: 5 anos, renovável mediante revalidação de exames médicos e cursos de atualização.",
        relatedLaws: ["NORMAM-01", "NORMAM-13", "Convenção STCW 1978/2010", "NR 30"]
      },
      {
        q: "Quais EPIs são obrigatórios para trabalho offshore?",
        a: "EPIs essenciais offshore: 1) Capacete classe B (isolamento elétrico), 2) Óculos de segurança com proteção lateral, 3) Protetor auricular (ruído >85 dB), 4) Luvas anticorte/antichama, 5) Calçado de segurança com biqueira de aço, 6) Vestimenta antichama (Nomex/Indura), 7) Cinto de segurança tipo paraquedista (trabalho em altura), 8) Colete salva-vidas (abandono), 9) Roupa de imersão/sobrevivência (águas frias), 10) Detector de H2S portátil (ambientes confinados).",
        relatedLaws: ["NR 30", "NR 35", "NR 37", "NR 06 - EPIs"]
      },
      {
        q: "Como funcionam as inspeções de segurança offshore?",
        a: "Inspeções de segurança são realizadas por: 1) ANP - Agência Nacional do Petróleo (fiscalização regulatória), 2) Marinha do Brasil - NORMAM (navegação e poluição), 3) Ministério do Trabalho - Auditores Fiscais (NRs), 4) IBAMA (licenças ambientais). Frequência: inspeções programadas anuais + inspeções por demanda. Não conformidades geram: notificações, autos de infração, interdições, multas de R$ 1.000 a R$ 50 milhões.",
        relatedLaws: ["NR 30", "Lei nº 9.966/2000", "Lei nº 9.847/1999"]
      }
    ]
  }
};

export default knowledgeBaseData;
