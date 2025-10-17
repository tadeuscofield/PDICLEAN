import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

/**
 * UserCounter - Componente discreto e profissional para contar visitantes únicos
 * Armazena contagem no localStorage para persistência
 */
const UserCounter = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    // Chave única para este chatbot
    const STORAGE_KEY = 'chatbot_descom_users';
    const USER_SESSION_KEY = 'chatbot_descom_session';

    // Verificar se é primeira visita (sessão única)
    const hasVisited = localStorage.getItem(USER_SESSION_KEY);

    if (!hasVisited) {
      // Novo usuário - incrementar contador
      const currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      const newCount = currentCount + 1;

      localStorage.setItem(STORAGE_KEY, newCount.toString());
      localStorage.setItem(USER_SESSION_KEY, new Date().toISOString());

      setTotalUsers(newCount);
      setIsNewUser(true);

      // Animação de boas-vindas
      setTimeout(() => setIsNewUser(false), 3000);
    } else {
      // Usuário retornante - apenas mostrar contador
      const currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      setTotalUsers(currentCount);
    }
  }, []);

  // Formatar número com separadores de milhar
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div
        className={`
          bg-white shadow-lg rounded-lg px-4 py-2 border border-gray-200
          flex items-center gap-2 transition-all duration-300
          ${isNewUser ? 'scale-110 shadow-xl border-blue-400' : 'scale-100'}
        `}
        title="Contador de usuários únicos - PDIDESCOM"
      >
        <Users className={`w-4 h-4 ${isNewUser ? 'text-blue-600' : 'text-gray-600'}`} />
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium leading-tight">
            Usuários
          </span>
          <span className={`text-lg font-bold leading-tight ${isNewUser ? 'text-blue-600' : 'text-gray-800'}`}>
            {formatNumber(totalUsers)}
          </span>
        </div>

        {isNewUser && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2
                          bg-blue-600 text-white text-xs px-3 py-1 rounded-full
                          whitespace-nowrap animate-bounce">
            Bem-vindo! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCounter;
