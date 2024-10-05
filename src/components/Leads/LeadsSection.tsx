// src/components/LeadsSection.tsx
import React from 'react';
import { Form, Input, Button, Typography, Row, Col } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import './LeadsSection.css';

const { Title, Paragraph } = Typography;

const LeadsSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="leads-section" style={{ backgroundColor: colors.secondary, padding: '40px 20px', color: colors.text }}>
      {/* Headline (Título Principal) */}
      <Title level={2} className="leads-title" style={{ color: colors.primary, textAlign: 'center', marginBottom: '20px' }}>
        Entre para o nosso grupo exclusivo e baixe o e-book com as melhores dicas para dominar as vendas online!
      </Title>

      {/* Subheadline (Subtítulo) */}
      <Paragraph className="leads-subtitle" style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.2rem' }}>
        Cadastre-se agora e tenha acesso ao nosso grupo exclusivo de tira-dúvidas no WhatsApp, além de um e-book com estratégias de venda comprovadas.
      </Paragraph>

      {/* Imagem de Suporte */}
      <div className="leads-image" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src="/path/to/ebook-image.png" alt="E-book e grupo tira-dúvidas" className="leads-ebook-image" style={{ maxWidth: '300px' }} />
      </div>

      {/* Formulário de Captura */}
      <Form layout="vertical" className="leads-form" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Form.Item label="Nome (opcional)" name="name">
          <Input placeholder="Seu nome" />
        </Form.Item>
        <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}>
          <Input type="email" placeholder="Seu e-mail" />
        </Form.Item>
        <Form.Item label="Telefone (necessário para entrar no grupo)" name="phone">
          <Input placeholder="Seu telefone" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="leads-button" style={{ backgroundColor: colors.primary, borderColor: colors.primary, color: colors.black }}>
            Acessar Grupo e Baixar E-book
          </Button>
        </Form.Item>
      </Form>

      {/* Descrição dos Benefícios */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '40px' }}>
        <Col xs={24} md={12} lg={10}>
          <div className="leads-benefit">
            <img src="/path/to/group-icon.png" alt="Ícone de grupo" className="leads-benefit-icon" />
            <Paragraph style={{ fontSize: '1rem' }}>
              <strong>Acesso ao Grupo Tira-Dúvidas:</strong> Participe de um grupo exclusivo onde você pode tirar todas as suas dúvidas sobre vendas online diretamente com especialistas e outros empreendedores.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12} lg={10}>
          <div className="leads-benefit">
            <img src="/path/to/ebook-icon.png" alt="Ícone de e-book" className="leads-benefit-icon" />
            <Paragraph style={{ fontSize: '1rem' }}>
              <strong>E-book Exclusivo:</strong> Baixe o e-book "Como Dobrar suas Vendas Online", com estratégias práticas e exemplos reais para escalar seu negócio no Mercado Livre e Amazon.
            </Paragraph>
          </div>
        </Col>
      </Row>

      {/* Garantia de Segurança e Privacidade */}
      <Paragraph style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9rem' }}>
        <img src="/path/to/security-icon.png" alt="Ícone de segurança" className="leads-security-icon" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
        Prometemos não compartilhar suas informações. Sua privacidade está 100% protegida.
      </Paragraph>

      {/* Declaração de Urgência */}
      <Paragraph style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: colors.secondary }}>
        Apenas 50 vagas no grupo tira-dúvidas disponíveis! Baixe agora – E-book gratuito por tempo limitado!
      </Paragraph>
    </div>
  );
};

export default LeadsSection;