import React, { useState } from 'react';
import {
  Clock,
  FileText,
  DollarSign,
  Anchor,
  Scale,
  Leaf,
  Wrench,
  BookOpen,
  Ship,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
  Phone,
  Home
} from 'lucide-react';
import knowledgeBaseData from '../data/knowledgeBaseData';

const DecommissioningGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Mapeamento de categorias com ícones e cores
  const categoryConfig = {
    conceitos: {
      icon: BookOpen,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-600'
    },
    prazos: {
      icon: Clock,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      iconColor: 'text-purple-600'
    },
    documentacao: {
      icon: FileText,
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconColor: 'text-indigo-600'
    },
    responsabilidades: {
      icon: Users,
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      iconColor: 'text-orange-600'
    },
    tecnicoMaritimo: {
      icon: Anchor,
      color: 'cyan',
      gradient: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      iconColor: 'text-cyan-600'
    },
    tecnicoTerrestre: {
      icon: Home,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      iconColor: 'text-green-600'
    },
    ambiental: {
      icon: Leaf,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      iconColor: 'text-emerald-600'
    },
    internacional: {
      icon: Globe,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-600'
    },
    hongKong: {
      icon: Ship,
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-600',
      iconColor: 'text-teal-600'
    },
    custosFinanceiro: {
      icon: DollarSign,
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      iconColor: 'text-yellow-600'
    },
    profissionaisTecnicos: {
      icon: Wrench,
      color: 'gray',
      gradient: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600',
      iconColor: 'text-gray-600'
    },
    nr30: {
      icon: Scale,
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      iconColor: 'text-red-600'
    }
  };

  const toggleQuestion = (questionIndex) => {
    setExpandedQuestion(expandedQuestion === questionIndex ? null : questionIndex);
  };

  const CategoryCard = ({ categoryKey, categoryData, config }) => {
    const Icon = config.icon;
    const isSelected = selectedCategory === categoryKey;

    return (
      <button
        onClick={() => setSelectedCategory(isSelected ? null : categoryKey)}
        className={`
          w-full p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105
          ${isSelected
            ? `bg-gradient-to-br ${config.gradient} text-white`
            : 'bg-white hover:shadow-xl border border-gray-200'
          }
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`
              p-3 rounded-lg
              ${isSelected ? 'bg-white/20' : config.bgColor}
            `}>
              <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : config.iconColor}`} />
            </div>
            <div className="text-left">
              <h3 className={`font-bold text-lg ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                {categoryData.title}
              </h3>
              <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                {categoryData.questions.length} perguntas
              </p>
            </div>
          </div>
          {isSelected ? (
            <ChevronUp className="w-5 h-5 text-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
    );
  };

  const QuestionAccordion = ({ question, index, categoryIconColor }) => {
    const isExpanded = expandedQuestion === index;

    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
        <button
          onClick={() => toggleQuestion(index)}
          className="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-start gap-4"
        >
          <span className="font-medium text-gray-800 flex-1">{question.q}</span>
          {isExpanded ? (
            <ChevronUp className={`w-5 h-5 ${categoryIconColor} flex-shrink-0 mt-0.5`} />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          )}
        </button>

        {isExpanded && (
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
              {question.a}
            </p>

            {question.relatedLaws && question.relatedLaws.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm font-semibold text-blue-900 mb-2">📚 Base Legal:</p>
                <ul className="space-y-1">
                  {question.relatedLaws.map((law, idx) => (
                    <li key={idx} className="text-sm text-blue-800">
                      • {law}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
              PDIDESCOM
            </h1>
            <p className="text-blue-200 text-lg">
              Portal de Consultas sobre Descomissionamento | ANP 817/2020 + NR 30
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {!selectedCategory ? (
          // Grid de Categorias
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Selecione uma categoria
              </h2>
              <p className="text-gray-600">
                Encontre rapidamente as informações que você precisa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(knowledgeBaseData).map(([key, data]) => (
                <CategoryCard
                  key={key}
                  categoryKey={key}
                  categoryData={data}
                  config={categoryConfig[key]}
                />
              ))}
            </div>
          </div>
        ) : (
          // Lista de Perguntas da Categoria Selecionada
          <div>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setExpandedQuestion(null);
              }}
              className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors flex items-center gap-2"
            >
              ← Voltar para categorias
            </button>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                {React.createElement(categoryConfig[selectedCategory].icon, {
                  className: `w-8 h-8 ${categoryConfig[selectedCategory].iconColor}`
                })}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {knowledgeBaseData[selectedCategory].title}
                  </h2>
                  <p className="text-gray-500">
                    {knowledgeBaseData[selectedCategory].questions.length} perguntas disponíveis
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-0">
              {knowledgeBaseData[selectedCategory].questions.map((question, idx) => (
                <QuestionAccordion
                  key={idx}
                  question={question}
                  index={idx}
                  categoryIconColor={categoryConfig[selectedCategory].iconColor}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer com WhatsApp */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-4">Precisa de ajuda especializada?</h3>
            <a
              href="https://wa.me/5521964462281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Fale conosco no WhatsApp
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-700">
            {/* Lado Esquerdo - Desenvolvedor */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/tadeu-santana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors group"
                title="LinkedIn do Eng. Tadeu Santana"
              >
                <span className="text-2xl">👷</span>
                <span className="text-sm font-medium group-hover:text-white">
                  Desenvolvido por Eng. Tadeu Santana
                </span>
              </a>
            </div>

            {/* Centro/Direita - Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2025 PDIDESCOM | Base legal: Resolução ANP nº 817/2020
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante NEPTUNO */}
      <a
        href="https://neptuno.pdidescom.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-bold text-lg animate-pulse"
        title="Crie seu PDI com o Sistema NEPTUNO"
      >
        <span className="text-2xl">🔱</span>
        <span>Crie seu PDI no NEPTUNO</span>
      </a>
    </div>
  );
};

export default DecommissioningGuide;
