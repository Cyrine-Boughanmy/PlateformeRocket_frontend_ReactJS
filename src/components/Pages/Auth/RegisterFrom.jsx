import React, { Fragment, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, H6 } from "../../../AbstractElements";
import { Link } from "react-router-dom";

import axios from "axios";

const RegisterFrom = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [numTel, setNumTel] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (event) => {
    const formdata = {
      nom: nom,
      prenom: prenom,
      username: username,
      email: email,
      password: password,
      dateNaissance: dateNaissance,
      adresse: adresse,
      ville: ville,
      codePostal: codePostal,
      numTel: numTel,
    };
    axios.post(`http://localhost:8000/super-user/user/`, formdata);
  };
  return (
    <Fragment>
      <div className="login-card">
        <Form className="theme-form login-form">
          <H4>Create your account</H4>
          <H6>Enter your personal details to create account</H6>
          <FormGroup>
            <Label className="col-form-label">Ton Nom</Label>
            <div className="small-group">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="icon-user"></i>
                </span>
                <Input
                  className="form-control"
                  type="text"
                  required=""
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="icon-user"></i>
                </span>
                <Input
                  className="form-control"
                  type="text"
                  required=""
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Date de Naissance</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="date"
                required=""
                placeholder="Date de Naissance"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Numéro de Téléphone</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="text"
                required=""
                placeholder="Téléphone"
                value={numTel}
                onChange={(e) => setNumTel(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Adresse</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="text"
                required=""
                placeholder="Adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Ville</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="text"
                required=""
                placeholder="Ville"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Code Postal</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="number"
                required=""
                placeholder="Code Postal"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input
                className="form-control"
                type="text"
                required=""
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </FormGroup>
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
                placeholder="Test@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup className="position-relative">
            <Label>Mot de Passe</Label>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="show-hide">
                <span className="show"> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="checkbox">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" for="checkbox1">
                Agree with <span>Privacy Policy</span>
              </Label>
            </div>
          </FormGroup>
          <FormGroup>
            <button type="text" class="submit" onClick={() => registerUser()}>
              Create Account
            </button>
          </FormGroup>

          <p>
            Already have an account?
            <Link to="/login">Sign in</Link>
          </p>
        </Form>
      </div>
    </Fragment>
  );
};

export default RegisterFrom;
