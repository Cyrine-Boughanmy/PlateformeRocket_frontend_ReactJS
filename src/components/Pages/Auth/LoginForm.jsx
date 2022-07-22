import React, { Fragment } from "react";
import { Btn, H4, H6 } from "../../../AbstractElements";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Fragment>
      <div className="login-card">
        <Form className="theme-form login-form">
          <H4>Se Connecter</H4>
          <H6>Hello ! Connectez-vous à votre compte Rocket Coding.</H6>

          <FormGroup>
            <Label>Adresse Email</Label>
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

          <FormGroup className="position-relative">
            <Label>Mot de passe</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-lock"></i>
              </span>
              <Input
                className="form-control"
                type="password"
                name="login[password]"
                required=""
                placeholder="*********"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="checkbox">
              <Input id="checkbox1" type="checkbox" required />
              <Label className="text-muted" for="checkbox1">
                J'ai lu et j'accepte les termes et conditions
              </Label>
            </div>

            <Link to="/login/reset_pwd">Mot de passe oublié?</Link>
          </FormGroup>
          <FormGroup>
            <Btn
              attrBtn={{
                className: "btn-block",
                color: "primary",
                type: "submit",
              }}
            >
              Se Connecter
            </Btn>
          </FormGroup>
        </Form>
      </div>
    </Fragment>
  );
};

export default LoginForm;
