import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle, SellOutlined } from "@mui/icons-material";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import { Form, FormGroup, Input, Label } from "reactstrap";
import jwt_decode from "jwt-decode";
import { Btn, H4, P } from "../../../AbstractElements";

const ConnexionPage = () => {
  const history = useNavigate();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const { user, authTokens, change_password } = useContext(AuthContext);
  // const [old_password, setOldPassword] = useState("");
  // const [new_password, setNewPassword] = useState("");

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  // const old_password = e.target.old_password.value;
  // const new_password = e.target.new_password.value;
  // change_password(old_password, new_password);
  // console.log(change_password);

  // history("/dashboard");
  // };
  const getID = jwt_decode(
    "Bearer " + localStorage.getItem("authTokens")
  ).user_id;

  console.log("ID", getID);
  // const { authTokens } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    change_password(username, password);
    window.location.reload(false);
  };

  // const changePassword = (event) => {
  //   const formdata = {
  //     username: username,
  //     password: password,
  //   };
  //   axios.put(
  //     "http://localhost:8000/simple-user/change_password/",
  //     formdata,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${authTokens?.access}`,
  //       },
  //     }
  //   );
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/simple-user/change_password/")
  //     .then((res) => {
  //       setUsername(res.data.old_password);
  //       setPassword(res.data.new_password);
  //     }, []);
  // });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <PrimarySearchAppBar />
      <br />
      <br />
      <Box textAlign="left">
        <button
          className="go-back-link__actualites"
          onClick={() => history("/exercices")}
        >
          Retour
        </button>
      </Box>
      <Container>
        <Form className="theme-form login-form" onSubmit={handleSubmit}>
          <p
            style={{
              fontSize: "70px",
              marginBottom: "40px",
              color: "#014AAD",
              fontStyle: "normal",
              fontW: "800",
              lineHeight: "116px",
              textAlign: "center",
            }}
          >
            Connexion
          </p>
          <H4>CHANGER VOTRE MOT DE PASSE</H4>
          <Box textAlign="center" mt={5}>
            <FormGroup>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="icon-email"></i>
                </span>
                <Input
                  id="username"
                  className="form-control"
                  type="text"
                  // required=""
                  placeholder="Entrer votre username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-text">
                  <i className="icon-lock"></i>
                </span>
                <Input
                  id="password"
                  className="form-control"
                  type="password"
                  // required=""
                  placeholder="Entrer un Nouveau Mot de Passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
            </FormGroup>
            <Box
              textAlign="center"
              mt={5}
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 5,
                width: 200,
                height: 50,
              }}
              maxWidth="sm"
            >
              <button
                className="btn-se-connecter"
                style={{
                  fontSize: "18px",
                  borderShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Valider
              </button>
            </Box>
          </Box>
        </Form>
      </Container>
    </>
  );
};

export default ConnexionPage;
