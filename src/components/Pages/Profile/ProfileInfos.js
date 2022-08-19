import { Container } from "@material-ui/core";
import { Box, Grid, div, Button } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";
import userimg from "../../../assets/images/user-profile/userprofile.jpg";
import "./ProfileInfos.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";
import AuthContext from "../../../context/AuthContext";
import jwt_decode from "jwt-decode";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Btn, H4, H6 } from "../../../AbstractElements";
import { Form, FormGroup, Input, Label } from "reactstrap";

const PageProfil = () => {
  const [users, setUser] = useState([]);
  // const { id } = useParams();
  // const { id } = useContext(AuthContext);
  const tokenToServer = localStorage.getItem("authTokens");

  const tokenDecoded = jwt_decode(
    "Bearer " + localStorage.getItem("authTokens")
  ).email;
  const { authTokens, user } = useContext(AuthContext);

  console.log("TOKEEEEEEEEEEEEEEN", tokenToServer);
  console.log("AMAaaaAAAAAaAAAAAN", tokenDecoded);
  const email = window.$email;
  const token = window.$token_access;
  console.log("wllh heedha", token);

  const history = useNavigate();

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  // const id = jwt_decode("Bearer " + localStorage.getItem("jwtToken")).user_id;
  // console.log("HADHA ID", id);
  const fetchData = async () => {
    const response = await axios.get(
      // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
      // `http://localhost:8000/simple-user/profile/${id} `,
      "http://localhost:8000/simple-user/profile/",
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxNjA0OTAwLCJpYXQiOjE2NjAzMDg5MDAsImp0aSI6IjdiNGIyNmE2Mjc0NDQ3YzY5NDVhN2U2NTRkZWViNGUyIiwidXNlcl9pZCI6MX0.8y-xHXUDTCA9pP-8RabFjHVkZ2oEVnuV7qH7qpof3KI ",
          Authorization: `Bearer ${authTokens?.access}`,
        },
      }
      // ,
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `JWT ${localStorage.getItem("authTokens")}`,
      //     Accept: "application/json",
      //   },
      // }
    );
    setUser(response);
    console.log("AAAAAAAAAAAAAAAAA HEDHAA AAAAA", response);
    // .then((res) => {
    //   setUser(res.data);
    //   console.log("DATAAAAAAAAAAAA", res.data);
    // })
    // .catch((Error) => {
    //   console.log(Error);
    // });

    // console.log("reponsee", response.data);

    // console.log("reponseeeeeeeeeee", res.data);
  };
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  console.log("TEEEEEEEEST", parseJwt(tokenToServer));
  useEffect(() => {
    fetchData();
  }, []);

  // Dialog Update Profile
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  // Handle Update Profile

  return (
    <>
      <Container sx={{ padding: "10px" }}>
        <p
          style={{
            fontSize: "60px",
            marginBottom: "40px",
            color: "#014AAD",

            fontStyle: "normal",
            fontW: "800",
            fontSize: "96px",
            lineHeight: "116px",
            textAlign: "center",
          }}
        >
          PROFIL
        </p>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs="auto">
            <button
              className="go-back-link__actualites"
              onClick={() => history("/profile")}
            >
              Retour
            </button>
            <br></br>
          </Grid>

          <Grid item xs="auto">
            <Box
              sx={{
                width: 215,
              }}
            >
              <img
                style={{
                  width: "100%",
                  borderRadius: "50px",
                }}
                src={user?.profile_image}
                alt="user profile "
              />
            </Box>
            <br></br>
            <Button
              type="submit"
              style={{ fontFamily: "Arimo" }}
              onClick={() => {
                saveAs(user?.profile_image, "image.jpg");
              }}
            >
              Télécharger photo
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Box
              sx={{
                width: 400,

                padding: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <div className="text-cordonnées">Nom : {user?.first_name}</div>
              <div className="text-cordonnées">Prénom : {user?.last_name}</div>
              <div className="text-cordonnées">Adresse : {user?.adresse}</div>
              <div className="text-cordonnées">
                Code Postale : {user?.code_postal}
              </div>
              <div className="text-cordonnées">Ville : {user?.ville}</div>
              <div className="text-cordonnées">Mail : {user?.email}</div>
              <div className="text-cordonnées">
                Numéro de téléphone : {user?.num_tel}
              </div>
            </Box>
          </Grid>
          <Grid item xs="auto">
            <Box
              sx={{
                width: 400,
                height: 340,
                padding: "20px",
                backgroundColor: "#014AAD",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <div className="titre-présentation">Présentation</div>
              <p className="text-présentation">{user?.presentation}</p>
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <button
          className="btn-download"
          type="submit"
          onClick={() => {
            saveAs(user?.resume, "resume.pdf", {
              type: "text/plain;charset=utf-8",
            });
          }}
        >
          Télécharger mon cv
        </button>
        <br></br>
        <br></br>

        <button className="btn-update" onClick={handleClickOpen}>
          MODIFIER MES INFOS
        </button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Update Your Profile
          </BootstrapDialogTitle>
          <DialogContent dividers>
            {/* <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography> */}
            <Form className="theme-form login-form">
              <FormGroup>
                <Label>Nom</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-email"></i>
                  </span>
                  <Input
                    id="nom"
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="nom"
                  />
                </div>
              </FormGroup>

              <FormGroup className="position-relative">
                <Label>Prénom</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="prenom"
                    className="form-control"
                    type="text"
                    name="prenom"
                    required=""
                    placeholder="Prénom"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Adresse Email</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="email"
                    className="form-control"
                    type="text"
                    name="email"
                    required=""
                    placeholder="Adresse Email"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Date de Naissance</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="date_de_naissance"
                    className="form-control"
                    type="date"
                    name="date_de_naissance"
                    required=""
                    placeholder="Date de Naissance"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Adresse</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="adresse"
                    className="form-control"
                    type="text"
                    name="adresse"
                    required=""
                    placeholder="Adresse"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Ville</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="ville"
                    className="form-control"
                    type="text"
                    name="ville"
                    required=""
                    placeholder="Ville"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Code Postal</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="code_postal"
                    className="form-control"
                    type="text"
                    name="code_postal"
                    required=""
                    placeholder="Code Postal"
                  />
                </div>
              </FormGroup>

              <FormGroup className="position-relative">
                <Label>Numéro de Téléphone</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="num_tel"
                    className="form-control"
                    type="phone"
                    name="num_tel"
                    required=""
                    placeholder="Numéro de Téléphone"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Présentation</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="presentation"
                    className="form-control"
                    type="text"
                    name="presentation"
                    required=""
                    placeholder="Une description"
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>Photo de Profil</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="num_tel"
                    className="form-control"
                    type="file"
                    name="num_tel"
                    required=""
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label>CV</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
                  <Input
                    id="resume"
                    className="form-control"
                    type="file"
                    name="resume"
                    required=""
                  />
                </div>
              </FormGroup>

              <FormGroup>
                <Btn
                  attrBtn={{
                    color: "#014AAD",
                    type: "submit",
                  }}
                >
                  {/* <Link to="/dashboard" /> */}
                  Update
                </Btn>
              </FormGroup>
            </Form>
          </DialogContent>
          {/* <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions> */}
        </BootstrapDialog>
      </Container>
    </>
  );
};

export default PageProfil;
