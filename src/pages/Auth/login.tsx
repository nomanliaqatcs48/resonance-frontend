import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import {
  Section,
  Card,
  Text,
  LogoText,
  Description,
  LoginButton,
} from '../../styles';
import Logo from '../../assets/img/logo.svg';

export default function Login() {
  return (
    <Section>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card>
              <div className="d-flex">
                <img src={Logo as string} alt="logo" />
                <LogoText>RESONACE</LogoText>
              </div>
              <Text className="mt-4">Log In</Text>
              <Description className="mt-5">
                Please login by entering the secret keyword to continue with
                Resonance.
              </Description>
              <div className="mt-5">
                <Form.Label className="content">Secret Keyword</Form.Label>
                <InputGroup className="mb-4">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    size="lg"
                    required
                  />
                  <InputGroup.Text>
                    {/* <i class="bi bi-eye"></i> */}
                    <i className="bi bi-eye-slash" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <LoginButton>Login</LoginButton>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
