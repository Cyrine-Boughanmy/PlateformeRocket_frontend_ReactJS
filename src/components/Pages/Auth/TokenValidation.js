import React, { Fragment, useContext, useState } from "react";
import { Form, FormGroup, Input, Label, Container, Col, Row } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import loginlogo from "../../../assets/images/login/logo1.png";
import { Box } from "@mui/material";

const TokenValidation = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const { token_validation } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    token_validation(token, password);
    console.log("test", token_validation);
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
                <H4>Réinitialiser Votre Mot de Passe</H4>
                <FormGroup>
                  <Label>Entrer le code que vous venez de recevez</Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-email"></i>
                    </span>
                    <Input
                      id="token"
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Token"
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-email"></i>
                    </span>
                    <Input
                      id="password"
                      className="form-control"
                      type="password"
                      required=""
                      placeholder="New Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                </FormGroup>

                <FormGroup>
                  <Btn
                    attrBtn={{
                      // className: "btn-block",
                      color: "#014AAD",
                      type: "submit",
                    }}
                  >
                    Valider
                  </Btn>
                </FormGroup>

                <P>
                  Vous Avez Déjà Un Mot De Passe?{" "}
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

export default TokenValidation;
