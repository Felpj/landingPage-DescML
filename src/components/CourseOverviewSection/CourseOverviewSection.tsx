// src/components/CourseOverviewSection.tsx
import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import './CourseOverviewSection.css';

const { Title, Paragraph } = Typography;

const CourseOverviewSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.background, padding: '40px 20px', color: colors.text }}>
      <Title level={2} style={{ color: colors.primary, textAlign: 'center', marginBottom: '40px' }}>
        O que Você Vai Aprender
      </Title>
      <Paragraph style={{ color: colors.text, textAlign: 'center', marginBottom: '20px' }}>
        Detalhe do conteúdo do curso para que você saiba exatamente o que está sendo oferecido e como isso pode beneficiar suas necessidades.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Módulo 1: Fundamentos do Mercado Livre</Title>
            <Paragraph>Configurando sua conta profissional.</Paragraph>
            <Paragraph>Entendendo as políticas e regras da plataforma.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Módulo 2: Estratégias Avançadas de Vendas</Title>
            <Paragraph>Otimização de anúncios para maior visibilidade.</Paragraph>
            <Paragraph>Técnicas de precificação competitiva.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Módulo 3: Marketing e Divulgação</Title>
            <Paragraph>Utilizando as redes sociais para impulsionar vendas.</Paragraph>
            <Paragraph>Programas de fidelização de clientes.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Módulo 4: Gestão e Logística</Title>
            <Paragraph>Gerenciamento de estoque eficiente.</Paragraph>
            <Paragraph>Processamento rápido de pedidos e envios.</Paragraph>
          </Card>
        </Col>
      </Row>
      <Title level={3} style={{ color: colors.primary, textAlign: 'center', marginTop: '40px' }}>Recursos Adicionais</Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Materiais Complementares</Title>
            <Paragraph>E-books, planilhas de controle, checklists para apoio aos estudos.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Acesso a Comunidades</Title>
            <Paragraph>Grupo exclusivo no Facebook ou WhatsApp para networking e suporte.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Title level={4} style={{ color: colors.primary }}>Suporte Personalizado</Title>
            <Paragraph>Sessões de perguntas e respostas. Atendimento via e-mail ou chat.</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CourseOverviewSection;