// src/components/QuestionSection.tsx
import React from 'react';
import { Collapse, Typography } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import './QuestionSection.css';

const { Title } = Typography;
const { Panel } = Collapse;

const QuestionSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="faq-section" style={{ backgroundColor: colors.background, padding: '40px 20px', color: colors.text }}>
      <Title level={2} className="faq-title" style={{ color: colors.primary, textAlign: 'center', marginBottom: '40px' }}>
        Perguntas Frequentes (FAQ)
      </Title>
      <Collapse accordion bordered={false} className="faq-collapse">
        <Panel header="O curso é adequado para iniciantes?" key="1" className="faq-panel">
          <p>Sim, o curso é adequado tanto para iniciantes quanto para vendedores experientes. Ele foi estruturado para ser acessível a todos os níveis de conhecimento.</p>
        </Panel>
        <Panel header="Quanto tempo terei acesso ao conteúdo?" key="2" className="faq-panel">
          <p>Você terá acesso a todo conteúdo ja disponivel e suas futuras atualizações durante o periodo de 1 ano, podendo assistir às aulas no seu próprio ritmo, quando e onde quiser.</p>
        </Panel>
        <Panel header="As aulas são ao vivo ou gravadas?" key="3" className="faq-panel">
          <p>As aulas são gravadas para que você possa assisti-las no seu próprio ritmo. Além disso, teremos sessões ao vivo para tirar dúvidas e oferecer suporte.</p>
        </Panel>
        <Panel header="Que tipo de suporte receberei como aluno?" key="4" className="faq-panel">
          <p>Você terá acesso ao suporte via WhatsApp e também ao nosso grupo exclusivo, onde poderá interagir com outros alunos e tirar dúvidas diretamente com o mentor.</p>
        </Panel>
        <Panel header="Receberei um certificado ao finalizar o curso?" key="5" className="faq-panel">
          <p>Sim, ao concluir o curso, você receberá um certificado de participação, reconhecendo seu esforço e o aprendizado adquirido.</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default QuestionSection;