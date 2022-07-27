import React, { Fragment, useContext, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const ForgetPwd = () => {
  const [email, setEmail] = useState("");

  const { reset_passsword } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset_passsword(email);
  };
  return (
    <Fragment>
      <div className="login-card">
        <Form className="theme-form login-form" onSubmit={handleSubmit}>
          <H4>Réinitialiser Votre Mot de Passe</H4>
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
