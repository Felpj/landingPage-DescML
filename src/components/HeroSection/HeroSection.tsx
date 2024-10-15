// src/components/HeroSection.tsx
import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import './HeroSection.css';

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="hero-section" style={{ backgroundColor: colors.background, color: colors.text, padding: '80px 20px', textAlign: 'center' }}>
      {/* Título Principal (Headline) */}
      <Title level={1} className="hero-title" style={{ color: colors.primary }}>
        Domine os Marketplaces e Escale Seu Negócio Agora!
      </Title>

      {/* Subtítulo (Subheadline) */}
      <Paragraph className="hero-subtitle" style={{ fontSize: '1.5rem', color: colors.text, marginBottom: '40px' }}>
        Entre para o grupo dos melhores vendedores online e aprenda como dominar os maiores marketplaces do Brasil.
      </Paragraph>

      {/* Botão de Ação (Call to Action – CTA) */}
      <Button
        type="primary"
        className="hero-cta-button"
        style={{ backgroundColor: colors.primary, borderColor: colors.secondary, color: colors.black, padding: '15px 40px', fontSize: '1.2rem' }}
        size="large"
      >
        Quero Destravar Minhas Vendas!
      </Button>

      {/* Imagem de Suporte */}
      <div className="hero-image" style={{ marginTop: '40px' }}>
        <img src="/path/to/hero-image.png" alt="Transforme Suas Vendas" className="hero-support-image" />
      </div>

      {/* Benefícios Chave em Destaque */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '60px' }}>
        <Col xs={24} md={8}>
          <div className="hero-benefit">
            <img src="/path/to/benefit-icon1.png" alt="Icone de Aumento de Faturamento" className="hero-benefit-icon" />
            <Paragraph className="hero-benefit-text">
              <strong>Aumente o Faturamento:</strong> Aumente suas vendas em até 3x com nossas estratégias comprovadas.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="hero-benefit">
            <img src="/path/to/benefit-icon2.png" alt="Icone de Estratégias Avançadas" className="hero-benefit-icon" />
            <Paragraph className="hero-benefit-text">
              <strong>Estratégias Avançadas:</strong> Aprenda táticas para dominar Mercado Livre.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="hero-benefit">
            <img src="/path/to/benefit-icon3.png" alt="Icone de Comunidade Exclusiva" className="hero-benefit-icon" />
            <Paragraph className="hero-benefit-text">
              <strong>Acesso a Grupo Exclusivo:</strong> Junte-se a outros empreendedores de sucesso e compartilhe experiências.
            </Paragraph>
          </div>
        </Col>
      </Row>

      {/* Declaração de Confiança ou Garantia */}
      <Paragraph style={{ textAlign: 'center', marginTop: '40px', fontSize: '1rem', color: colors.text }}>
        Garantia de satisfação: se não gostar, devolvemos seu dinheiro em 7 dias.
      </Paragraph>
    </div>
  );
};

export default HeroSection;