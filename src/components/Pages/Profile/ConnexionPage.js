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
const ConnexionPage = () => {
  const history = useNavigate();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const { user, authTokens } = useContext(AuthContext);
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const changePassword = (event) => {
    const formdata = {
      old_password: old_password,
      new_password: new_password,
    };
    axios.put("http://localhost:8000/simple-user/change_password/", formdata, {
      headers: {
        Authorization: `Bearer ${authTokens?.access}`,
      },
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/simple-user/change_password/")
      .then((res) => {
        setOldPassword(res.data.old_password);
        setNewPassword(res.data.new_password);
      }, []);
  });
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
      <Container>
        <p
          style={{
            fontSize: "60px",
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
        <Box textAlign="left">
          <button
            className="go-back-link__actualites"
            onClick={() => history("/exercices")}
          >
            Retour
          </button>
        </Box>
        <Box textAlign="center" mt={5}>
          <Box
            textAlign="center"
            mt={5}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: 400,
              height: 50,
            }}
            maxWidth="sm"
          >
            <TextField
              sx={{ m: 1, width: "400px" }}
              id="input-with-icon-textfield"
              label="ADRESSE MAIL"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>
          <Box
            textAlign="center"
            mt={5}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: 400,
              height: 50,
            }}
          >
            <FormControl sx={{ m: 1, width: "400px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                ANCIEN MOT DE PASSE
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="password"
                value={old_password}
                onChange={(e) => setOldPassword(e.target.value)}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //       edge="end"
                //     >
                //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                label="MOT DE PASSE"
              />
            </FormControl>
          </Box>
          <Box
            textAlign="center"
            mt={5}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: 400,
              height: 50,
            }}
            maxWidth="sm"
          >
            <FormControl sx={{ m: 1, width: "400px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                NOUVEAU MOT DE PASSE
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="password"
                value={new_password}
                onChange={(e) => setOldPassword(e.target.value)}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //       edge="end"
                //     >
                //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                label="NOUVEAU MOT DE PASSE"
              />
            </FormControl>
          </Box>
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
      </Container>
    </>
  );
};
export default ConnexionPage;