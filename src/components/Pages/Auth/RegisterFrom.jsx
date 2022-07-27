import React, { Fragment, useContext, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, H6, Btn } from "../../../AbstractElements";
import { Link } from "react-router-dom";

import axios from "axios";
import AuthContext from "../../../context/AuthContext";

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

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(
      username,
      password,
      email,
      nom,
      prenom,
      dateNaissance,
      adresse,
      ville,
      codePostal,
      numTel
    );
  };
  // const registerUser = (event) => {
  //   const formdata = {
  //     nom: nom,
  //     prenom: prenom,
  //     username: username,
  //     email: email,
  //     password: password,
  //     dateNaissance: dateNaissance,
  //     adresse: adresse,
  //     ville: ville,
  //     codePostal: codePostal,
  //     numTel: numTel,
  //   };
  //   axios.post(`http://localhost:8000/super-user/user/`, formdata);
  // };
  return (
    <Fragment>
      <div className="login-card">
        <Form className="theme-form login-form" onSubmit={handleSubmit}>
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
                  id="nom"
                  className="form-control"
                  type="text"
                  required=""
                  placeholder="Nom"
                  // value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="icon-user"></i>
                </span>
                <Input
                  id="prenom"
                  className="form-control"
                  type="text"
                  required=""
                  placeholder="Prénom"
                  // value={prenom}
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
                id="dateNaissance"
                className="form-control"
                type="date"
                required=""
                placeholder="Date de Naissance"
                // value={dateNaissance}
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
                id="numTel"
                className="form-control"
                type="text"
                required=""
                placeholder="Téléphone"
                // value={numTel}
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
                id="adresse"
                className="form-control"
                type="text"
                required=""
                placeholder="Adresse"
                // value={adresse}
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
                id="ville"
                className="form-control"
                type="text"
                required=""
                placeholder="Ville"
                // value={ville}
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
                id="codePostal"
                className="form-control"
                type="number"
                required=""
                placeholder="Code Postal"
                // value={codePostal}
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
                id="username"
                className="form-control"
                type="text"
                required=""
                placeholder="Username"
                // value={username}
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
                id="email"
                className="form-control"
                type="email"
                required=""
                placeholder="Test@gmail.com"
                // value={email}
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
                id="password"
                className="form-control"
                type="password"
                name="login[password]"
                required=""
                placeholder="*********"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="show-hide">
                <span className="show"> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="checkbox">
              <Input id="checkbox1" type="checkbox" required />
              <Label className="text-muted" for="checkbox1">
                Agree with <span>Privacy Policy</span>
              </Label>
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
              Create Account
            </Btn>
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
