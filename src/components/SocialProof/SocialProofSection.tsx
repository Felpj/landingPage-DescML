// src/components/SocialProofSection.tsx
import React from 'react';
import { Typography, Row, Col, Card, Avatar, Statistic } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import './SocialProofSection.css';

const { Title, Paragraph } = Typography;

const SocialProofSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.secondary, padding: '40px 20px', color: colors.text }}>
      <Title level={2} style={{ color: colors.primary, textAlign: 'center', marginBottom: '40px' }}>
        Depoimentos e Prova Social
      </Title>

      {/* Depoimentos de Alunos */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Avatar size={64} src="/path/to/student1.jpg" alt="Foto do Aluno 1" />
            <Title level={4} style={{ color: colors.primary, marginTop: '20px' }}>João Silva</Title>
            <Paragraph>
              "Antes do curso, eu não conseguia vender de forma consistente no Mercado Livre. Após aplicar as estratégias ensinadas, minhas vendas aumentaram em 200%!"
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Avatar size={64} src="/path/to/student2.jpg" alt="Foto do Aluno 2" />
            <Title level={4} style={{ color: colors.primary, marginTop: '20px' }}>Maria Oliveira</Title>
            <Paragraph>
              "O curso foi essencial para entender como otimizar meus anúncios e alcançar mais clientes. Hoje, minhas vendas cresceram 150%!"
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text }}>
            <Avatar size={64} src="/path/to/student3.jpg" alt="Foto do Aluno 3" />
            <Title level={4} style={{ color: colors.primary, marginTop: '20px' }}>Carlos Souza</Title>
            <Paragraph>
              "Graças ao curso, consegui estruturar minha logística de maneira eficiente e reduzir meus custos em 30%. Recomendo a todos!"
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Estatísticas de Sucesso */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '40px' }}>
        <Col xs={24} md={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text, textAlign: 'center' }}>
            <Statistic title="Alunos Formados" value={1000} valueStyle={{ color: colors.primary }} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text, textAlign: 'center' }}>
            <Statistic title="Aumento Médio de Vendas" value="150%" valueStyle={{ color: colors.primary }} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} style={{ backgroundColor: colors.black, color: colors.text, textAlign: 'center' }}>
            <Statistic title="Satisfação dos Alunos" value="97%" valueStyle={{ color: colors.primary }} />
          </Card>
        </Col>
      </Row>

      {/* Logos de Empresas */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '40px' }}>
        <Col xs={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <img src="/path/to/company1.png" alt="Empresa 1" style={{ maxWidth: '100%' }} />
        </Col>
        <Col xs={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <img src="/path/to/company2.png" alt="Empresa 2" style={{ maxWidth: '100%' }} />
        </Col>
        <Col xs={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <img src="/path/to/company3.png" alt="Empresa 3" style={{ maxWidth: '100%' }} />
        </Col>
        <Col xs={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <img src="/path/to/company4.png" alt="Empresa 4" style={{ maxWidth: '100%' }} />
        </Col>
      </Row>
    </div>
  );
};

export default SocialProofSection;