import React, { Fragment } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { Link } from "react-router-dom";

const ForgetPwd = () => {
  return (
    <Fragment>
      <div className="login-card">
        <Form className="theme-form login-form">
          <H4>Réinitialiser Votre Mot de Passe</H4>
          <FormGroup>
            <Label>Entrer Votre Adresse Email</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="email"
                required=""
                placeholder="adresse@gmail.com"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Btn
              attrBtn={{
                className: "btn-block",
                color: "primary",
                type: "submit",
              }}
            >
              Envoyer
            </Btn>
          </FormGroup>

          <P>
            Vous Avez Déjà Un Mot De Passe?{" "}
            <Link to="/Login">Se Connecter</Link>
          </P>
        </Form>
      </div>
    </Fragment>
  );
};

export default ForgetPwd;
