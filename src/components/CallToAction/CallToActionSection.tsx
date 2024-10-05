// src/components/CallToActionSection.tsx
import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import './CallToActionSection.css';

const { Title, Paragraph } = Typography;

const CallToActionSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div  className="call-to-action-section" style={{ backgroundColor: colors.primary, padding: '60px 20px', textAlign: 'center', color: colors.black }}>
      {/* Headline (Título Principal) */}
      <Title level={2} className="cta-headline" style={{ color: colors.black }}>
        Comece sua transformação agora!
      </Title>

      {/* Subheadline (Subtítulo) */}
      <Paragraph className="cta-subheadline" style={{ fontSize: '1.5rem', color: colors.black }}>
        Aprenda com os melhores e escale seu negócio para o próximo nível. Aproveite com 50% de desconto e tenha 7 dias para experimentar sem compromisso.
      </Paragraph>

      {/* Botão de CTA */}
      <Button
        type="primary"
        className="cta-button"
        style={{ backgroundColor: colors.secondary, borderColor: colors.secondary, color: colors.black, padding: '15px 40px', fontSize: '1.2rem' }}
        size="large"
      >
        Quero Aumentar Minhas Vendas!
      </Button>

      {/* Urgência ou Escassez */}
      <Row justify="center" className="cta-urgency" style={{ marginTop: '30px' }}>
        <Col>
          <Paragraph style={{ color: colors.text, fontWeight: 'bold' }}>
            Apenas 5 vagas restantes! Oferta limitada, expire em 24h.
          </Paragraph>
        </Col>
      </Row>

      {/* Garantia */}
      <Row justify="center" className="cta-guarantee" style={{ marginTop: '20px' }}>
        <Col>
          <Paragraph style={{ color: colors.text, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/path/to/guarantee-icon.png" alt="Selo de Garantia" className="cta-guarantee-icon" style={{ marginRight: '10px', width: '24px', height: '24px' }} />
            Garantia incondicional de 7 dias. Se você não gostar, devolvemos seu dinheiro.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default CallToActionSection;