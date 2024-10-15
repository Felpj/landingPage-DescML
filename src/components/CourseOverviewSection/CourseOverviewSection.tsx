// src/components/CourseOverviewSection.tsx
import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { useTheme } from "../../theme/ThemeContext";
import "./CourseOverviewSection.css";

const { Title, Paragraph } = Typography;

const CourseOverviewSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.background,
        padding: "40px 20px",
        color: colors.text,
      }}
    >
      <Title
        level={2}
        style={{
          color: colors.primary,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        O que Você Vai Aprender
      </Title>
      <Paragraph
        style={{
          color: colors.text,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Detalhe do conteúdo do curso para que você saiba exatamente o que está
        sendo oferecido e como isso pode beneficiar suas necessidades.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Módulo 1: Introdução ao Mercado Livre
            </Title>
            <Paragraph>
              O Módulo de Introdução ao Mercado Livre ensina os primeiros passos
              para começar a vender com sucesso na plataforma. As aulas abordam
              desde a criação da conta, preenchimento de dados e gestão de
              reputação, até a criação estratégica de anúncios e navegação pelo
              painel de controle. O módulo também oferece uma prévia do conteúdo
              avançado que será explorado em etapas posteriores, proporcionando
              uma base sólida para quem deseja iniciar e crescer suas vendas no
              Mercado Livre.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Módulo 2: Dominando a Pesquisa de Produtos: Encontre Itens de Alta
              Demanda no Mercado Livre
            </Title>
            <Paragraph>
              Neste módulo, você vai aprender as técnicas poderosas para
              identificar produtos com alta demanda no Mercado Livre. Descubra
              como realizar pesquisas estratégicas, utilizando as melhores
              ferramentas e métodos para encontrar oportunidades de venda que
              vão impulsionar seus resultados. Através de dicas práticas, você
              será capaz de antecipar tendências, escolher produtos competitivos
              e posicionar seus anúncios no topo das buscas, garantindo mais
              visibilidade e sucesso nas vendas.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Módulo 3: Anúncios Inteligentes: Potencialize suas Vendas com a
              Criação de Anúncios usando IA
            </Title>
            <Paragraph>
              Neste módulo inovador, você aprenderá a utilizar Inteligência
              Artificial para criar anúncios irresistíveis que capturam a
              atenção e convertem mais clientes. Descubra como a IA pode
              otimizar descrições, títulos, imagens e até precificação,
              economizando tempo e maximizando resultados. Com técnicas
              avançadas e ferramentas inteligentes, você estará à frente da
              concorrência, criando anúncios altamente eficazes que se destacam
              no Mercado Livre e aumentam suas chances de sucesso.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Módulo 4: Envio Full: Agilize Suas Entregas e Aumente a Satisfação
              dos Clientes
            </Title>
            <Paragraph>
              No quarto módulo, você aprenderá a configurar o Envio Full no
              Mercado Livre, garantindo que seus produtos cheguem mais rápido
              aos clientes e com total segurança. Descubra como esse método de
              logística otimiza o processo de envio, melhora sua reputação e
              aumenta suas chances de vendas. Com um passo a passo claro, você
              verá como cadastrar produtos no sistema de envio Full e aproveitar
              ao máximo essa vantagem competitiva, oferecendo uma experiência de
              compra excepcional.
            </Paragraph>
          </Card>
        </Col>
      </Row>
      <Title
        level={3}
        style={{
          color: colors.primary,
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Recursos Adicionais
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Materiais Complementares
            </Title>
            <Paragraph>
              E-books, planilhas de controle.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Acesso a Comunidades
            </Title>
            <Paragraph>
              Grupo exclusivo no WhatsApp para networking e suporte.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={4} style={{ color: colors.primary }}>
              Suporte Personalizado
            </Title>
            <Paragraph>
              Sessões de perguntas e respostas. Atendimento via e-mail ou chat.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CourseOverviewSection;
