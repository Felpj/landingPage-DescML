import React from "react";
import { Row, Col, Anchor, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { useTheme } from "../theme/colorConfig";

const HeaderSection: React.FC = () => {
  const { colors } = useTheme();

  const items = [
    {
      key: 'sobreJoao',
      href: '#sobreJoao',
      title: 'Sobre',
    },
  ];

  const theme = useTheme();

  return (
    <Header style={{ backgroundColor: theme.colors.black, padding: "0 20px" }}>
      <Row justify="space-between" align="middle">
        <Col>
          <div
            style={{
              color: theme.colors.primary,
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Descomplica ML
          </div>
        </Col>
        <Col>
          <Button type="primary"
            href="sobreJoao"
            style={{color: theme.colors.black}}
          >
        <Anchor items={items} affix={true} />
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderSection;
