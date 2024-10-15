// src/components/SectionSobreJoao.tsx
import React from "react";
import { Typography, Row, Col, Card, Avatar } from "antd";
import "./SectionSobreJoao.css";
import { useTheme } from "../../theme/colorConfig";

const { Title, Paragraph } = Typography;

const SectionSobreJoao: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div
      id="sobreJoao"
      className="section-sobre-joao"
      style={{
        backgroundColor: colors.background,
        padding: "40px 20px",
        color: colors.text,
      }}
    >
      {/* Quem é o Mentor */}
      <Row justify="center" align="middle" className="mentor-info">
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Avatar
            size={150}
            src="./assets/imgJoao.jpeg"
            alt="João, fundador do Descomplica ML"
            className="mentor-avatar"
          />
        </Col>
        <Col xs={24} md={14} style={{ marginTop: "20px" }}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              color: colors.text,
            }}
          >
            <Title level={2} style={{ color: colors.primary }}>
              João Eduardo
            </Title>
            <Paragraph>
              João Eduardo é o fundador do <strong>Descomplica ML</strong> e
              possui mais de 10 anos de experiência vendendo com sucesso no
              Mercado Livre. João se destaca por sua paixão em ajudar outros
              empreendedores a descomplicar suas vendas online.
            </Paragraph>
            <Paragraph>
              Ao longo de sua carreira, ele ajudou mais de 200 vendedores a
              dobrar suas vendas e trabalhou com clientes notáveis que
              conseguiram atingir resultados expressivos, graças às suas
              estratégias.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Depoimentos sobre o Mentor */}
      {/* <Title
        level={3}
        style={{
          color: colors.primary,
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Depoimentos sobre o Mentor
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            className="mentor-testimonial-card"
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Paragraph>
              "Boa tarde, pessoal! Passando aqui para agradecer ao @João
              Eduardo. Tem dois meses que procurei alguma indicação aqui no
              grupo para mentoria em marketplace. O João começou a me ajudar,
              dando dicas valiosas, e no mês passado já fechei com quase o dobro
              de vendas e faturamento em relação ao mês anterior. Então, se
              alguém precisar, chamem ele! 🎉👏🏻 Na outra conta que tenho, os
              resultados positivos também subiram 100%." {" "}
              <strong>Ana Souza</strong>, Empreendedora.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            className="mentor-testimonial-card"
            style={{ backgroundColor: colors.black, color: colors.text }}
          >
            <Paragraph>
              "Suas dicas são práticas e realmente funcionam. Recomendo a
              todos." – <strong>Marcos Lima</strong>, Loja Online.
            </Paragraph>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default SectionSobreJoao;
