import React, { Fragment, useContext, useState } from "react";
import { Form, FormGroup, Input, Label, Container, Col, Row } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import loginlogo from "../../../assets/images/login/logo1.png";
import { Box } from "@mui/material";

const ForgetPwd = () => {
  const [email, setEmail] = useState("");

  const { reset_passsword } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset_passsword(email);
  };
  return (
    <Fragment>
      <Container
        fluid={true}
        className="p-0"
        style={{ backgroundColor: "#014AAD" }}
      >
        <Row>
          <Col>
            <Box
              textAlign="center"
              sx={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                transform: "translate(-50%,-50%)",
                top: "8%",
                left: "50%",
              }}
            >
              <img
                style={{
                  width: 80,
                }}
                src={loginlogo}
                alt="logo"
              />
            </Box>
            <div className="login-card">
              <Form className="theme-form login-form" onSubmit={handleSubmit}>
                <H4>RĂ©initialiser Votre Mot de Passe</H4>
                <FormGroup>
                  <Label>Entrer Votre Adresse Email</Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-email"></i>
                    </span>
                    <Input
                      id="email"
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="adresse@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </FormGroup>

                <FormGroup>
                  <Btn
                    attrBtn={{
                      // className: "btn-block",
                      color: "#014AAD",
                      type: "submit",
                    }}
                  >
                    Envoyer
                  </Btn>
                </FormGroup>

                <P>
                  Vous Avez DĂ©jĂ  Un Mot De Passe?{" "}
                  <Link to="/">Se Connecter</Link>
                </P>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ForgetPwd;
