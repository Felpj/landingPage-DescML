import React from 'react';
import { createRoot } from 'react-dom/client'; // Nova API de root do React 18
import App from './App';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import './index.css';
import { ThemeProvider } from './theme/ThemeContext';

// Obtém o contêiner onde o App será montado
const container = document.getElementById('root');

// Cria a root com a nova API do React 18
const root = createRoot(container!); // O "!" garante que o container não é null no TypeScript

// Renderiza o App com os provedores de contexto
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
