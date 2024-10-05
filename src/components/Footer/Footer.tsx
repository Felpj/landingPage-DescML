// src/components/Footer.tsx
import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useTheme } from '../../theme/ThemeContext';
import './Footer.css';

const { Text, Title } = Typography;

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="footer-section" style={{ backgroundColor: colors.black, color: colors.text, padding: '40px 20px' }}>
      <Row gutter={[16, 16]} justify="space-between">
        {/* Links Rápidos */}
        <Col xs={24} md={8} className="footer-links">
          <Title level={4} style={{ color: colors.primary }}>Links Rápidos</Title>
          <Space direction="vertical">
            <a href="#sobre-nos" style={{ color: colors.text }}>Sobre Nós</a>
            <a href="#termos-servico" style={{ color: colors.text }}>Termos de Serviço</a>
            <a href="#politica-privacidade" style={{ color: colors.text }}>Política de Privacidade</a>
            <a href="#faq" style={{ color: colors.text }}>FAQ (Perguntas Frequentes)</a>
            <a href="#suporte" style={{ color: colors.text }}>Suporte</a>
            <a href="#contato" style={{ color: colors.text }}>Contato</a>
          </Space>
        </Col>

        {/* Informação de Contato */}
        <Col xs={24} md={8} className="footer-contact">
          <Title level={4} style={{ color: colors.primary }}>Contato</Title>
          <Space direction="vertical">
            <Text style={{ color: colors.text }}><MailOutlined /> suporte@seudominio.com</Text>
            <Text style={{ color: colors.text }}><PhoneOutlined /> (11) 1234-5678</Text>
            <Text style={{ color: colors.text }}><WhatsAppOutlined /> WhatsApp: (11) 98765-4321</Text>
            <Text style={{ color: colors.text }}>Atendimento: Seg. a Sex. – 9h às 18h</Text>
          </Space>
        </Col>

        {/* Redes Sociais */}
        <Col xs={24} md={8} className="footer-social">
          <Title level={4} style={{ color: colors.primary }}>Redes Sociais</Title>
          <Space size="large">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-icon.png" alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-icon.png" alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/youtube-icon.png" alt="YouTube" className="footer-social-icon" />
            </a>
          </Space>
        </Col>
      </Row>

      {/* Declaração de Direitos Autorais */}
      <div className="footer-copyright" style={{ textAlign: 'center', marginTop: '40px', color: colors.text }}>
        <Text>© 2024 Nome da Empresa. Todos os direitos reservados. Desenvolvido por Nome da Agência/Desenvolvedor.</Text>
      </div>
    </div>
  );
};

export default Footer;