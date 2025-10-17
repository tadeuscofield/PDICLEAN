// NLP Processor com Machine Learning para Chatbot Descomissionamento
// Utiliza Fuse.js para fuzzy search e algoritmos de similaridade

class NLPProcessor {
  constructor(knowledgeBase) {
    this.knowledgeBase = knowledgeBase;
    this.stopWords = new Set([
      'o', 'a', 'os', 'as', 'um', 'uma', 'de', 'do', 'da', 'dos', 'das',
      'em', 'no', 'na', 'nos', 'nas', 'por', 'para', 'com', 'sem',
      'é', 'são', 'foi', 'ser', 'ter', 'que', 'qual', 'quais'
    ]);

    // Mapa de correções ortográficas comuns
    this.typoMap = {
      'decomissionamento': 'descomissionamento',
      'decomissionar': 'descomissionar',
      'descomicionar': 'descomissionar',
      'descomicao': 'descomissionamento',
      'pdi executivo': 'pdi executivo',
      'pdi conceitual': 'pdi conceitual',
      'fpso': 'fpso',
      'fso': 'fso',
      'ejd': 'ejd',
      'rdi': 'rdi',
      'maritimo': 'marítimo',
      'maritima': 'marítima',
      'maritimos': 'marítimos',
      'maritimas': 'marítimas',
      'petroleo': 'petróleo',
      'gas': 'gás',
      'residuos': 'resíduos',
      'rejeitos': 'rejeitos',
      'instalacao': 'instalação',
      'instalacoes': 'instalações',
      'execucao': 'execução',
      'relatorio': 'relatório',
      'monitoramento': 'monitoramento',
      'remocao': 'remoção',
      'tecnico': 'técnico',
      'tecnica': 'técnica',
      'ambiental': 'ambiental',
      'nr 30': 'nr30',
      'nr-30': 'nr30',
      'hong kong': 'hong kong',
      'hongkong': 'hong kong'
    };
  }

  // Correção ortográfica automática
  correctSpelling(text) {
    let correctedText = text.toLowerCase();

    // Aplica correções do mapa
    for (const [typo, correct] of Object.entries(this.typoMap)) {
      const regex = new RegExp('\\b' + typo + '\\b', 'gi');
      correctedText = correctedText.replace(regex, correct);
    }

    return correctedText;
  }

  // Tokenização e limpeza - MANTÉM palavras importantes
  tokenize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 1 && !this.stopWords.has(word)); // MUDOU: > 1 (não > 2)
  }

  // Cálculo de similaridade usando Jaccard
  jaccardSimilarity(set1, set2) {
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
  }

  // Extração de entidades nomeadas
  extractEntities(text) {
    const entities = {
      documentos: [],
      prazos: [],
      instalacoes: [],
      normas: []
    };

    const docPatterns = /\b(ejd|pdi|rdi|tld|spa|ihm|icihm)\b/gi;
    const prazoPatterns = /\b(\d+\s*(anos?|meses|dias))\b/gi;
    const instalacaoPatterns = /\b(marítim[ao]s?|terrestres?|offshore|onshore|fpso|fso|plataforma|bacia|pre-sal|pré-sal)\b/gi;
    const normaPatterns = /\b(anp|817|resolução|lei|conama|ibama|nr\s?30|nr\s?37|nr\s?33|nr\s?35|stcw|normam)\b/gi;

    const docMatches = text.match(docPatterns);
    const prazoMatches = text.match(prazoPatterns);
    const instalacaoMatches = text.match(instalacaoPatterns);
    const normaMatches = text.match(normaPatterns);

    if (docMatches) entities.documentos = [...new Set(docMatches.map(m => m.toUpperCase()))];
    if (prazoMatches) entities.prazos = [...new Set(prazoMatches)];
    if (instalacaoMatches) entities.instalacoes = [...new Set(instalacaoMatches)];
    if (normaMatches) entities.normas = [...new Set(normaMatches)];

    return entities;
  }

  // Classificação de intenção
  classifyIntent(text) {
    const tokens = this.tokenize(text);
    const intents = {
      pergunta: ['o que', 'qual', 'quais', 'como', 'quando', 'onde', 'por que', 'porque'],
      prazo: ['prazo', 'tempo', 'quando', 'dias', 'meses', 'anos', 'cronograma'],
      custo: ['custo', 'preço', 'valor', 'quanto custa', 'orçamento'],
      processo: ['como fazer', 'procedimento', 'etapas', 'passo a passo', 'processo'],
      normativo: ['lei', 'resolução', 'norma', 'anp', 'legislação'],
      tecnico: ['tecnic', 'equipamento', 'instalação', 'remoção']
    };

    let maxScore = 0;
    let detectedIntent = 'geral';

    for (const [intent, keywords] of Object.entries(intents)) {
      const score = keywords.reduce((acc, keyword) => {
        return acc + (text.toLowerCase().includes(keyword) ? 1 : 0);
      }, 0);

      if (score > maxScore) {
        maxScore = score;
        detectedIntent = intent;
      }
    }

    return { intent: detectedIntent, confidence: maxScore / 10 };
  }

  // Busca semântica com scoring MELHORADO
  semanticSearch(query, limit = 5) {
    // NOVO: Aplica correção ortográfica antes de processar
    const correctedQuery = this.correctSpelling(query);

    const queryTokens = new Set(this.tokenize(correctedQuery));
    const entities = this.extractEntities(correctedQuery);
    const intent = this.classifyIntent(correctedQuery);
    const queryLower = correctedQuery.toLowerCase().replace(/[?!.,]/g, ''); // Remove pontuação

    const results = [];

    // Busca em todas as categorias da base de conhecimento
    for (const [categoryKey, category] of Object.entries(this.knowledgeBase)) {
      if (!category.questions) continue;

      for (const item of category.questions) {
        const questionTokens = new Set(this.tokenize(item.q));
        const answerTokens = new Set(this.tokenize(item.a));
        const questionLower = item.q.toLowerCase();

        // Cálculo de score multifatorial MELHORADO
        let score = 0;

        // 1. Similaridade com a pergunta (peso 50% - AUMENTADO)
        const questionSimilarity = this.jaccardSimilarity(queryTokens, questionTokens);
        score += questionSimilarity * 0.5;

        // 2. Similaridade com a resposta (peso 15% - reduzido)
        score += this.jaccardSimilarity(queryTokens, answerTokens) * 0.15;

        // 3. NOVO: Bonus por palavras-chave exatas (peso 25%)
        const keywordMatches = [...queryTokens].filter(token =>
          questionLower.includes(token) || answerTokens.has(token)
        ).length;
        score += (keywordMatches / Math.max(queryTokens.size, 1)) * 0.25;

        // 4. Bonus por entidades encontradas (peso 20%)
        if (entities.documentos.length > 0) {
          const hasDoc = entities.documentos.some(doc =>
            questionLower.includes(doc.toLowerCase()) ||
            item.a.toLowerCase().includes(doc.toLowerCase())
          );
          if (hasDoc) score += 0.10;
        }

        if (entities.instalacoes.length > 0) {
          const hasInstalacao = entities.instalacoes.some(inst =>
            questionLower.includes(inst.toLowerCase()) ||
            item.a.toLowerCase().includes(inst.toLowerCase())
          );
          if (hasInstalacao) score += 0.10;

          // BONUS EXTRA: Se a pergunta especifica marítimo/terrestre,
          // a resposta DEVE conter a mesma palavra
          entities.instalacoes.forEach(inst => {
            const instLower = inst.toLowerCase();
            if ((instLower.includes('maritim') || instLower.includes('terrestre')) &&
                questionLower.includes(instLower)) {
              score += 0.30; // BONUS GIGANTE para match exato!
            }
          });
        }

        // 5. Bonus por categoria relevante (peso 10%)
        if (intent.intent === 'prazo' && categoryKey === 'prazos') score += 0.15;
        if (intent.intent === 'normativo' && categoryKey === 'internacional') score += 0.10;
        if (intent.intent === 'tecnico' && (categoryKey === 'tecnicoMaritimo' || categoryKey === 'tecnicoTerrestre')) score += 0.10;

        // NOVO: Bonus extra se a pergunta é muito similar (quase igual)
        if (questionSimilarity > 0.6) {
          score += 0.20; // Boost significativo
        }

        // Threshold MUITO baixo para capturar mais resultados
        if (score > 0.05) {
          results.push({
            question: item.q,
            answer: item.a,
            category: category.title,
            relatedLaws: item.relatedLaws || [],
            score: score,
            entities: entities,
            intent: intent
          });
        }
      }
    }

    // Ordena por score e retorna os top resultados
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  // Sugestão de uso da plataforma PDIDESCOM
  shouldSuggestPDIDESCOM(query, searchResults) {
    const pdiTriggers = [
      'elaborar pdi', 'fazer pdi', 'criar pdi', 'desenvolver pdi',
      'plataforma', 'software', 'sistema', 'automação',
      'calcular', 'estimar custo', 'orçamento detalhado',
      'cronograma detalhado', 'planejamento completo'
    ];

    const hasTrigger = pdiTriggers.some(trigger =>
      query.toLowerCase().includes(trigger)
    );

    const hasLowConfidence = searchResults.length === 0 ||
      (searchResults[0] && searchResults[0].score < 0.3);

    const entities = this.extractEntities(query);
    const hasPDIEntity = entities.documentos.includes('PDI');

    return {
      should: hasTrigger || (hasPDIEntity && hasLowConfidence),
      reason: hasTrigger ? 'trigger_detected' :
              hasPDIEntity ? 'pdi_entity_detected' :
              hasLowConfidence ? 'low_confidence' : 'none',
      confidence: hasTrigger ? 0.9 : hasPDIEntity ? 0.7 : 0.5
    };
  }
}

export default NLPProcessor;
