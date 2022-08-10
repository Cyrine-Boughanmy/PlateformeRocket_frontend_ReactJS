import React, { Fragment, useContext, useEffect, useState } from "react";
import { Btn, H4, H6 } from "../../../AbstractElements";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import {DotLoader} from 'react-spinners';
import PageLoader from "../hooks/PageLoader";
import { Box } from "@mui/material";
import loginlogo from '../../../assets/images/login/logo1.png';



const LoginForm = () => {
  const history = useNavigate();
  let [loading , setLoading]=useState(false);
 
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    
    console.log(loginUser);
    console.log(loading);
    
    // history("/dashboard");
  };
  
  return (
    <>
      {
        loading ?
        <PageLoader/>
        :
      <Fragment>
      <Box textAlign="center" 
                    sx={{
                        width:80,
                        height:80,
                        margin:"auto",backgroundColor: "#014AAD"
                    }}>
                      <img 
                       style={{
                        width:80,
                        height:80,
                    }}
                         src={loginlogo} alt='logo'/>
                    </Box>
      <div className="login-card">
        <Form className="theme-form login-form" onSubmit={handleSubmit}>
          <H4 >Se Connecter</H4>
          <H6>Hello ! Connectez-vous à votre compte Rocket Coding.</H6>

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
                placeholder="username"
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
                id="password"
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
                color: "#014AAD",
                type: "submit",
              }}
            >
              {/* <Link to="/dashboard" /> */}
              Se Connecter
            </Btn>
          </FormGroup>
        </Form>
      </div>
      </Fragment>
      }
    </>
  );
};

export default LoginForm;
