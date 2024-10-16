// src/components/OfferSection.tsx
import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { useTheme } from "../../theme/ThemeContext";
import "./OfferSection.css";

const { Title, Paragraph, Text } = Typography;

const OfferSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div
      className="offer-section"
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
        Transforme suas vendas online com o curso mais direto e objetivo do
        mercado!
      </Title>
      <Paragraph style={{ textAlign: "center", marginBottom: "40px" }}>
        Dê o próximo passo no e-commerce e alcance resultados reais. No nosso
        curso, você terá conteúdos práticos e sem enrolação, com foco nas
        estratégias que funcionam. Além disso, aproveite: Plantão tira-dúvidas
        semanal em chamadas de vídeo em grupo para acelerar seu aprendizado.
        Acesso exclusivo a um catálogo de fornecedores selecionados para te
        ajudar a escolher os melhores produtos. E, se você for um dos primeiros
        a garantir sua vaga, vai ganhar uma consultoria individual especial,
        onde nossos especialistas vão analisar seu negócio e criar um plano de
        ação personalizado!
      </Paragraph>

      {/* Detalhes da Oferta */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={10}>
          <Card
            bordered={false}
            className="offer-card"
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={3} style={{ color: colors.primary }}>
              Preço Especial
            </Title>
            <Text delete style={{ fontSize: "1.5rem", color: colors.text }}>
              De R$497
            </Text>
            <Title level={2} style={{ color: colors.primary }}>
              Por apenas R$297!
            </Title>
            <Paragraph>
              Economize 50% e invista em seu futuro com um valor acessível.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={10}>
          <Card
            bordered={false}
            className="offer-card"
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Title level={3} style={{ color: colors.primary }}>
              Bônus Exclusivos
            </Title>
            <ul className="offer-bonus-list">
              <li>
                Acesso a catalogo: acesso exclusivo a catalogo de forncedores.
              </li>
              <li>
                E-books e Materiais Complementares: Recursos exclusivos para
                enriquecer sua experiência.
              </li>
              <li>
                Sessão de Mentoria: Participe de sessões individuais ou em grupo
                com nossos especialistas.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Garantias */}
      <Title
        level={3}
        style={{
          color: colors.primary,
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Garantia Sem Riscos
      </Title>
      <Paragraph style={{ textAlign: "center", marginBottom: "40px" }}>
        "Se em 7 dias você não estiver satisfeito, devolvemos 100% do seu
        dinheiro." Processo simples e transparente: basta entrar em contato
        conosco e realizaremos o reembolso imediatamente.
      </Paragraph>

      {/* Urgência e Escassez */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        <Col xs={24} md={12} lg={10}>
          <Card
            bordered={false}
            className="offer-card"
            style={{
              backgroundColor: colors.black,
              color: colors.text,
              textAlign: "center",
            }}
          >
            <Title level={3} style={{ color: colors.primary }}>
              Vagas Limitadas
            </Title>
            <Paragraph>
              "Desconto válido para as primeiras 50 inscrições. Oferta termina
              em [inserir contagem regressiva]. Não deixe para depois!"
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.primary,
                color: colors.black,
              }}
            >
              Junte-se a Nós Agora
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OfferSection;
