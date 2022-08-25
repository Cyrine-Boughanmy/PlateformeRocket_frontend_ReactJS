import { Container } from "@material-ui/core";
import { Box, Grid, div, Button, InputLabel } from "@mui/material";
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
import { fontSize } from "@mui/system";
import PageLoader from "../hooks/PageLoader";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import { upload } from "@testing-library/user-event/dist/upload";
const PageProfil = () => {
  const [users, setUser] = useState([]);
  // const { id } = useParams();
  // const { id } = useContext(AuthContext);
  const tokenToServer = localStorage.getItem("authTokens");

  const tokenDecoded = jwt_decode(
    "Bearer " + localStorage.getItem("authTokens")
  ).user_id;
  const { authTokens, user } = useContext(AuthContext);

  console.log("TOKEEEEEEEEEEEEEEN", tokenToServer);
  console.log("AMAaaaAAAAAaAAAAAN", tokenDecoded);
  // const email = window.$email;
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
    const response = await axios
      .get(
        // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
        // `http://localhost:8000/simple-user/profile/${id} `,
        // `http://localhost:8000/simple-user/profile/${tokenDecoded}/`,
        `https://rocketcoding-plateform-back.herokuapp.com/simple-user/profile/${tokenDecoded}/`,

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
      )
      // setUser(response);
      // console.log("AAAAAAAAAAAAAAAAA HEDHAA AAAAA", response);
      .then((res) => {
        setUser(res.data);
        console.log("DATAAAAAAAAAAAAAA", res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });

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
  const [loading, setLoading] = useState(false);

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
  const [username, setUsername] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [date_de_naissance, setDateDeNaissance] = useState("");
  const [adresse, setAdresse] = useState("");
  const [code_postal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [num_tel, setNumTel] = useState("");
  const [profile_image, setProfileImage] = useState("");
  const [resume, setResume] = useState("");
  const [presentation, setPresentation] = useState("");

  const onChangeImage = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const onChangeFile = (e) => {
    setResume(e.target.files[0]);
  };

  const updateProfile = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("email", email);
    formdata.append("date_de_naissance", date_de_naissance);
    formdata.append("adresse", adresse);
    formdata.append("code_postal", code_postal);
    formdata.append("ville", ville);
    formdata.append("num_tel", num_tel);
    formdata.append("profile_image", profile_image);
    formdata.append("resume", resume);
    formdata.append("presentation", presentation);

    await axios.put(
      // `http://localhost:8000/simple-user/profile/${tokenDecoded}/`,
      `https://rocketcoding-plateform-back.herokuapp.com/simple-user/profile/${tokenDecoded}/`,

      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authTokens?.access}`,
        },
      }
    );
    window.location.reload(false);
  };
  useEffect(() => {
    axios
      // .get(`http://localhost:8000/simple-user/profile/${tokenDecoded}`)
      .get(
        `https://rocketcoding-plateform-back.herokuapp.com/simple-user/profile/${tokenDecoded}`
      )

      .then((res) => {
        setUsername(res.data.username);
        setFirstname(res.data.first_name);
        setLastname(res.data.last_name);
        setEmail(res.data.email);
        setDateDeNaissance(res.data.date_de_naissance);
        setAdresse(res.data.adresse);
        setCodePostal(res.data.code_postal);
        setVille(res.data.ville);
        setNumTel(res.data.num_tel);
        setProfileImage(res.data.profile_image);
        setResume(res.data.resume);
        setPresentation(res.data.presentation);
        // console.log("wlh fadit", res.data.first_name);
      });
  }, []);

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
                src={users.profile_image}
                alt="user profile "
              />
            </Box>
            <br></br>

            <Button
              type="submit"
              style={{ fontFamily: "Arimo" }}
              onChange={onChangeImage}
              onClick={() => {
                saveAs(users.profile_image, "image.jpg");
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
              <div className="text-cordonnées">Nom : {users.first_name}</div>
              <div className="text-cordonnées">Prénom : {users.last_name}</div>
              <div className="text-cordonnées">Adresse : {users.adresse}</div>
              <div className="text-cordonnées">
                Code Postale : {user?.code_postal}
              </div>
              <div className="text-cordonnées">Ville : {users.ville}</div>
              <div className="text-cordonnées">Mail : {users.email}</div>
              <div className="text-cordonnées">
                Numéro de téléphone : {users.num_tel}
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
              <p className="text-présentation">{users.presentation}</p>
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <button
          className="btn-download"
          type="submit"
          onClick={() => {
            saveAs(users.resume, "resume.pdf", {
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
        <Dialog open={open}>
          <Box>
            {loading && <PageLoader />}
            <Form
              encType="multipart/form-data"
              className="theme-form login-form"
              onSubmit={updateProfile}
            >
              <DialogTitle>
                <Grid container justify="center" alignItems="center">
                  <Typography variant="div">Update Your Profile</Typography>
                  <div style={{ float: "right" }}>
                    <IconButton onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                </Grid>
              </DialogTitle>
              <DialogContent dividers>
                <H6>Enter Your Profile Data</H6>
                <FormGroup>
                  <Label>My Username</Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-email"></i>
                    </span>
                    <Input
                      id="username"
                      className="form-control"
                      type="text"
                      required=""
                      readOnly
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                    />
                  </div>
                </FormGroup>
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
                      // required=""
                      value={first_name}
                      onChange={(e) => setFirstname(e.target.value)}
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
                      // required=""
                      value={last_name}
                      onChange={(e) => setLastname(e.target.value)}
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
                      // required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      // required=""
                      value={date_de_naissance}
                      onChange={(e) => setDateDeNaissance(e.target.value)}
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
                      // required=""
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
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
                      // required=""
                      value={ville}
                      onChange={(e) => setVille(e.target.value)}
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
                      // required=""
                      value={code_postal}
                      onChange={(e) => setCodePostal(e.target.value)}
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
                      // required=""
                      value={num_tel}
                      onChange={(e) => setNumTel(e.target.value)}
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
                      // required=""
                      value={presentation}
                      onChange={(e) => setPresentation(e.target.value)}
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
                      name="profile_image"
                      // required=""
                      filename="profile_image"
                      onChange={onChangeImage}
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
                      // required=""
                      filename="resume"
                      onChange={onChangeFile}
                    />
                  </div>
                </FormGroup>

                {/* <DialogActions> */}
                <FormGroup>
                  <Btn
                    // onClick={() => updateProfile()}
                    attrBtn={{
                      color: "#014AAD",
                      type: "submit",
                    }}
                  >
                    {/* <Link to="/dashboard" /> */}
                    Update
                  </Btn>
                </FormGroup>

                {/* </DialogActions> */}
              </DialogContent>
            </Form>
          </Box>
        </Dialog>
      </Container>
    </>
  );
};

export default PageProfil;
