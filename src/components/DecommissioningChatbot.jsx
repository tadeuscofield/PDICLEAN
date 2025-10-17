import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Send,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Save,
  Search,
  Filter,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  AlertCircle,
  CheckCircle,
  Info,
  Sparkles,
  Brain,
  Target,
  Code,
  Moon,
  Sun
} from 'lucide-react';
import DOMPurify from 'dompurify';
import NLPProcessor from '../utils/nlpProcessor';
import knowledgeBase from '../data/knowledgeBase';
import knowledgeBaseData from '../data/knowledgeBaseData';

const DecommissioningChatbot = () => {
  // Estados principais
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Bem-vindo ao PDIDESCOM! Sou seu assistente especializado em descomissionamento de instalações de petróleo e gás. Consulte informações sobre Resolução ANP 817/2020, NR 30, Convenção de Hong Kong, prazos, custos, documentação e muito mais. Como posso ajudá-lo?',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPDIButton, setShowPDIButton] = useState(false);
  const [savedMessages, setSavedMessages] = useState([]);

  // Estados da sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat', 'saved', 'search'

  // Estados de busca
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Estados de debug/desenvolvedor
  const [devMode, setDevMode] = useState(false);
  const [lastAnalysis, setLastAnalysis] = useState(null);

  // Estado de tema (dark mode)
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica preferência salva ou preferência do sistema
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Refs
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Inicializar NLP Processor com dados puros (sem componentes React) - Memoizado para evitar re-criação
  const nlpProcessor = useMemo(() => new NLPProcessor(knowledgeBaseData), []);

  // Auto-scroll para última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Salvar preferência de tema
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Processar mensagem do usuário
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular tempo de processamento
    setTimeout(() => {
      processMessage(inputMessage);
    }, 500);
  };

  // Processar com NLP
  const processMessage = (query) => {
    try {
      // Extrair entidades e classificar intenção
      const entities = nlpProcessor.extractEntities(query);
      const intent = nlpProcessor.classifyIntent(query);

      // Busca semântica
      const searchResults = nlpProcessor.semanticSearch(query, 3);

      // Verificar se deve sugerir PDIDESCOM
      const pdiSuggestion = nlpProcessor.shouldSuggestPDIDESCOM(query, searchResults);

      // Salvar análise para modo desenvolvedor
      setLastAnalysis({
        query,
        entities,
        intent,
        searchResults,
        pdiSuggestion,
        timestamp: new Date()
      });

      // Gerar resposta
      let botResponse = '';

      if (searchResults.length > 0 && searchResults[0].score > 0.2) { // Threshold otimizado para 20%
        const topResult = searchResults[0];

        // Resposta principal
        botResponse = topResult.answer;

        // Adicionar contexto de categoria
        botResponse += `\n\n📁 **Categoria:** ${topResult.category}`;

        // Adicionar informações sobre entidades detectadas
        if (entities.documentos.length > 0) {
          botResponse += `\n\n📄 **Documentos identificados:** ${entities.documentos.join(', ')}`;
        }

        if (entities.prazos.length > 0) {
          botResponse += `\n\n⏱️ **Prazos mencionados:** ${entities.prazos.join(', ')}`;
        }

        // Adicionar referências legais
        if (topResult.relatedLaws && topResult.relatedLaws.length > 0) {
          botResponse += `\n\n⚖️ **Base Legal:**\n${topResult.relatedLaws.map(law => `• ${law}`).join('\n')}`;
        }

        // Adicionar outras respostas relevantes
        if (searchResults.length > 1) {
          botResponse += `\n\n💡 **Informações relacionadas:**`;
          for (let i = 1; i < Math.min(searchResults.length, 3); i++) {
            botResponse += `\n\n**${searchResults[i].category}**\n${searchResults[i].answer.substring(0, 150)}...`;
          }
        }

        // Score de confiança
        const confidenceLevel = topResult.score > 0.7 ? 'Alta' :
                               topResult.score > 0.4 ? 'Média' : 'Baixa';
        botResponse += `\n\n✅ **Confiança da resposta:** ${confidenceLevel} (${(topResult.score * 100).toFixed(1)}%)`;

      } else {
        // Resposta padrão quando não encontra correspondência
        botResponse = `Desculpe, não encontrei uma resposta específica para sua pergunta.

Aqui estão algumas sugestões:

1. **Reformule sua pergunta** usando termos como: PDI, EJD, RDI, prazos, custos, instalações marítimas/terrestres
2. **Tente perguntas mais específicas** sobre documentação, prazos ou processos
3. **Use a busca avançada** para explorar nossa base de conhecimento

💡 **Exemplos de perguntas:**
• "Qual o prazo para apresentar o PDI conceitual marítimo?"
• "O que deve conter o EJD?"
• "Quanto custa um descomissionamento offshore?"`;
      }

      // Criar mensagem do bot
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
        confidence: searchResults.length > 0 ? searchResults[0].score : 0,
        entities: entities,
        intent: intent,
        sources: searchResults.slice(0, 3)
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Mostrar botão PDIDESCOM se sugerido
      if (pdiSuggestion.should && pdiSuggestion.confidence > 0.6) {
        setShowPDIButton(true);

        // Adicionar mensagem de sugestão
        setTimeout(() => {
          const suggestionMessage = {
            id: Date.now() + 2,
            type: 'suggestion',
            content: `🔱 **NEPTUNO - Sistema de Geração de PDI:** Para elaborar seu PDI de forma automatizada e profissional, utilize o NEPTUNO. Ele gera documentação completa em conformidade com a ANP 817/2020 em 48 horas, com Machine Learning e precisão de 92%!`,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, suggestionMessage]);
        }, 1000);
      }

    } catch (error) {
      console.error('Erro ao processar mensagem:', error);

      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  // Feedback de mensagem
  const handleFeedback = (messageId, feedbackType) => {
    setMessages(prev => prev.map(msg =>
      msg.id === messageId
        ? { ...msg, feedback: feedbackType }
        : msg
    ));

    // Analytics: feedback salvo no estado, pode ser enviado para servidor se necessário
  };

  // Salvar mensagem
  const handleSaveMessage = (message) => {
    if (!savedMessages.find(m => m.id === message.id)) {
      setSavedMessages(prev => [...prev, message]);

      // Feedback visual
      alert('Mensagem salva com sucesso!');
    }
  };

  // Busca avançada
  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const results = nlpProcessor.semanticSearch(searchQuery, 10);

    // Filtrar por categoria se selecionada
    const filteredResults = selectedCategory === 'all'
      ? results
      : results.filter(r => {
          const categoryKey = Object.keys(knowledgeBase).find(
            key => knowledgeBase[key].title === r.category
          );
          return categoryKey === selectedCategory;
        });

    setSearchResults(filteredResults);
  };

  // Adicionar resultado de busca ao chat
  const addSearchResultToChat = (result) => {
    const message = {
      id: Date.now(),
      type: 'bot',
      content: `📌 **${result.category}**\n\n**Pergunta:** ${result.question}\n\n**Resposta:** ${result.answer}\n\n⚖️ **Base Legal:**\n${result.relatedLaws.map(law => `• ${law}`).join('\n')}`,
      timestamp: new Date(),
      confidence: result.score,
    };

    setMessages(prev => [...prev, message]);
    setActiveTab('chat');
    setIsSidebarOpen(false);
  };

  // Atalhos de teclado
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Obter categorias para filtro
  const categories = Object.entries(knowledgeBase).map(([key, value]) => ({
    key,
    title: value.title,
    icon: value.icon
  }));

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-green-50'}`}>
      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-30
        w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header da Sidebar */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-1 hover:bg-white/20 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                  activeTab === 'chat'
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <MessageCircle size={16} className="inline mr-1" />
                Chat
              </button>
              <button
                onClick={() => setActiveTab('search')}
                className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                  activeTab === 'search'
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <Search size={16} className="inline mr-1" />
                Busca
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                  activeTab === 'saved'
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <Save size={16} className="inline mr-1" />
                Salvos
              </button>
            </div>
          </div>

          {/* Conteúdo da Sidebar */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Tab: Chat / Categorias */}
            {activeTab === 'chat' && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 mb-3">Categorias</h3>
                {categories.map(({ key, title, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSearchQuery(title);
                      setSelectedCategory(key);
                      setActiveTab('search');
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-left group"
                  >
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-200">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{title}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Tab: Busca */}
            {activeTab === 'search' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesquisar
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="Digite sua busca..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSearch}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filtrar por categoria
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Todas as categorias</option>
                    {categories.map(({ key, title }) => (
                      <option key={key} value={key}>{title}</option>
                    ))}
                  </select>
                </div>

                {/* Resultados da busca */}
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                        onClick={() => addSearchResultToChat(result)}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-xs font-semibold text-blue-600">
                            {result.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {(result.score * 100).toFixed(0)}%
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-800 mb-1">
                          {result.question}
                        </p>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {result.answer.substring(0, 100)}...
                        </p>
                      </div>
                    ))
                  ) : searchQuery ? (
                    <div className="text-center py-8 text-gray-500">
                      <Search size={40} className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Nenhum resultado encontrado</p>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Info size={40} className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Digite algo para pesquisar</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab: Mensagens Salvas */}
            {activeTab === 'saved' && (
              <div className="space-y-2">
                {savedMessages.length > 0 ? (
                  savedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-yellow-700 font-medium">
                          {new Date(msg.timestamp).toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-3">
                        {msg.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Save size={40} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Nenhuma mensagem salva</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer da Sidebar - Modo Desenvolvedor */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => setDevMode(!devMode)}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                devMode ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Code size={16} />
                <span className="text-sm font-medium">Modo Desenvolvedor</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors ${
                devMode ? 'bg-purple-600' : 'bg-gray-400'
              }`}>
                <div className={`w-4 h-4 bg-white rounded-full m-0.5 transition-transform ${
                  devMode ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay para mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md p-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg">
                <Brain size={24} className="text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  PDIDESCOM
                </h1>
                <p className={`text-xs flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Sparkles size={12} />
                  Portal de Consultas sobre Descomissionamento
                </p>
              </div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex items-center gap-2">
            {/* Botão Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {showPDIButton && (
              <a
                href="https://neptuno.pdidescom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                title="Crie seu PDI com o Sistema NEPTUNO"
              >
                <span className="text-lg">🔱</span>
                Crie seu PDI no NEPTUNO
                <ExternalLink size={14} />
              </a>
            )}

            <a
              href="https://wa.me/5521964462281"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              title="Fale conosco no WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">(21) 96446-2281</span>
            </a>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              {/* Mensagem */}
              <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3xl ${message.type === 'user' ? 'w-auto' : 'w-full'}`}>
                  <div className={`rounded-2xl p-4 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white ml-auto max-w-md'
                      : message.type === 'suggestion'
                      ? darkMode
                        ? 'bg-gradient-to-r from-purple-900 to-blue-900 border-2 border-purple-600 text-gray-100'
                        : 'bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300'
                      : darkMode
                      ? 'bg-gray-700 shadow-md text-gray-100'
                      : 'bg-white shadow-md'
                  }`}>
                    {/* Timestamp e confiança */}
                    <div className="flex items-center justify-between mb-2 text-xs opacity-70">
                      <span>
                        {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                      {message.type === 'bot' && message.confidence !== undefined && (
                        <span className="flex items-center gap-1">
                          <Target size={12} />
                          {(message.confidence * 100).toFixed(0)}%
                        </span>
                      )}
                    </div>

                    {/* Conteúdo */}
                    <div className="prose prose-sm max-w-none">
                      {message.content.split('\n').map((line, i) => {
                        // Renderizar markdown básico
                        let processedLine = line;

                        // Bold
                        processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                        // Itálico
                        processedLine = processedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');

                        // Emojis e ícones especiais
                        const hasIcon = /^[📁📄⏱️⚖️💡✅🎯📌]/.test(line);

                        return (
                          <p
                            key={i}
                            className={`${hasIcon ? 'font-semibold' : ''} ${i > 0 ? 'mt-2' : ''}`}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(processedLine) }}
                          />
                        );
                      })}
                    </div>

                    {/* Ações da mensagem (somente bot) */}
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                        <button
                          onClick={() => handleFeedback(message.id, 'up')}
                          className={`p-1.5 rounded-lg transition-colors ${
                            message.feedback === 'up'
                              ? 'bg-green-100 text-green-600'
                              : 'hover:bg-gray-100 text-gray-500'
                          }`}
                          title="Útil"
                        >
                          <ThumbsUp size={14} />
                        </button>

                        <button
                          onClick={() => handleFeedback(message.id, 'down')}
                          className={`p-1.5 rounded-lg transition-colors ${
                            message.feedback === 'down'
                              ? 'bg-red-100 text-red-600'
                              : 'hover:bg-gray-100 text-gray-500'
                          }`}
                          title="Não útil"
                        >
                          <ThumbsDown size={14} />
                        </button>

                        <button
                          onClick={() => handleSaveMessage(message)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                          title="Salvar mensagem"
                        >
                          <Save size={14} />
                        </button>

                        {message.feedback && (
                          <span className="ml-auto text-xs text-gray-500">
                            Obrigado pelo feedback!
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Debug Info - Modo Desenvolvedor */}
                  {devMode && message.type === 'bot' && message.entities && (
                    <div className="mt-2 p-3 bg-purple-50 border border-purple-200 rounded-lg text-xs">
                      <div className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        <Code size={14} />
                        Debug Info
                      </div>

                      {/* Entidades */}
                      {message.entities && (
                        <div className="mb-2">
                          <strong className="text-purple-600">Entidades:</strong>
                          <pre className="bg-white p-2 rounded mt-1 overflow-x-auto">
                            {JSON.stringify(message.entities, null, 2)}
                          </pre>
                        </div>
                      )}

                      {/* Intenção */}
                      {message.intent && (
                        <div className="mb-2">
                          <strong className="text-purple-600">Intenção:</strong>
                          <pre className="bg-white p-2 rounded mt-1">
                            {JSON.stringify(message.intent, null, 2)}
                          </pre>
                        </div>
                      )}

                      {/* Fontes */}
                      {message.sources && message.sources.length > 0 && (
                        <div>
                          <strong className="text-purple-600">Fontes ({message.sources.length}):</strong>
                          {message.sources.map((source, idx) => (
                            <div key={idx} className="bg-white p-2 rounded mt-1">
                              <div className="flex justify-between">
                                <span className="font-medium">{source.category}</span>
                                <span className="text-purple-600">
                                  Score: {(source.score * 100).toFixed(1)}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white shadow-md rounded-2xl p-4 max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-sm text-gray-500">Analisando...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className={`${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'} p-4`}>
          {/* Sugestões rápidas */}
          <div className="mb-3 flex flex-wrap gap-2">
            <button
              onClick={() => setInputMessage('Qual o prazo para apresentar o PDI conceitual marítimo?')}
              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors"
            >
              Prazos PDI
            </button>
            <button
              onClick={() => setInputMessage('O que é o EJD?')}
              className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors"
            >
              Sobre EJD
            </button>
            <button
              onClick={() => setInputMessage('Quanto custa um descomissionamento offshore?')}
              className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full hover:bg-purple-100 transition-colors"
            >
              Custos
            </button>
            <button
              onClick={() => setInputMessage('Como fazer arrasamento de poços?')}
              className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm rounded-full hover:bg-orange-100 transition-colors"
            >
              Procedimentos
            </button>
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta sobre descomissionamento..."
              className={`flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
            >
              <Send size={20} />
              <span className="hidden sm:inline">Enviar</span>
            </button>
          </div>

          {/* Info */}
          <div className="mt-2 text-xs text-gray-500 text-center">
            Baseado na Resolução ANP 817/2020 e melhores práticas internacionais
          </div>
        </div>
      </div>

      {/* Botão flutuante NEPTUNO (mobile) */}
      {showPDIButton && (
        <a
          href="https://neptuno.pdidescom.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden fixed bottom-20 right-4 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full shadow-2xl hover:shadow-xl transition-all animate-bounce"
          title="Crie seu PDI no Sistema NEPTUNO"
        >
          <span className="text-xl">🔱</span>
          NEPTUNO
        </a>
      )}
    </div>
  );
};

export default DecommissioningChatbot;
