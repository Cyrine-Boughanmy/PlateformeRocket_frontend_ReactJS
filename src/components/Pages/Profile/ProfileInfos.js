import { Container } from '@material-ui/core';
import { Box, Grid, div, Button } from '@mui/material';
import AuthContext from "../../../context/AuthContext";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState, useContext } from "react";
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
import userimg from '../../../assets/images/user-profile/userprofile.jpg';
import './ProfileInfos.css';
import {  useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { saveAs } from 'file-saver';


const PageProfil = () => {
  const [user, setUser] = useState([]);
  // const { id } = useParams();
  // const { id } = useContext(AuthContext);
  const tokenToServer = localStorage.getItem("authTokens");
  const tokenDecoded = jwt_decode(tokenToServer);
  const { authTokens } = useContext(AuthContext);
  console.log("TOKEEEEEEEEEEEEN", tokenToServer);
  console.log("AMAAAAAAAAAN", tokenDecoded.user_id);
  const history = useNavigate();
  const fetchData = async () => {
    const res = await axios
      .get(
        // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
        // `http://localhost:8000/simple-user/profile/${id} `,
        "http://localhost:8000/simple-user/profile/" + tokenDecoded.user_id,
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
      .then((res) => {
        setUser(res.data);
        console.log("DATAAAAAAA", res.data);
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

  return (

    <>
    
    <Container 
    key={tokenDecoded.user_id}
    sx={{padding:"10px"}}>
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
          PROFIL
        </p>
        <Grid
        sx="auto"
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
                width:"100%",
                borderRadius:"50px"
              }} 
              src={user.profile_image} 
              alt='user profile '/>
             </Box>
             <br></br>
             <Button type='submit' 
             style={{fontFamily:'Arimo'}}onClick={()=>{
              saveAs(user.profile_image, 'image.jpg')
             }}>Télécharger photo</Button>
      
            </Grid>
            <Grid item xs="auto"
            >
            <Box
            
                sx={{
                  width: 400,
                  
                  padding: "20px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
              <div className="text-cordonnées">
                    Nom : {user.nom}
              </div>
              <div className="text-cordonnées">
                    Prénom : {user.prenom}
              </div>
              <div className="text-cordonnées">
                    Adresse : {user.adresse}
              </div>
              <div className="text-cordonnées">
                    Code Postale : {user.code_postal}
              </div>
              <div className="text-cordonnées">
                    Ville : {user.ville}
              </div>
              <div className="text-cordonnées">
                    Mail : {user.email}
              </div>
              <div className="text-cordonnées">
                    Numéro de téléphone : {user.num_tel}
              </div>
             </Box>
      
            </Grid>
            <Grid item xs="auto">
            <Box
           
                sx={{
                  width: 400,
                  height: 340,
                  padding: "20px",
                  backgroundColor: '#014AAD',
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                  
                }}
             >
              <div className="titre-présentation">Présentation</div>
              <p className="text-présentation">{user.presentation}</p>
             </Box>
      
            </Grid>
            
        </Grid>
        <br></br>
         <button className='btn-download' type='submit' onClick={()=>{
              saveAs(user.resume, 'resume.pdf',{type: "text/plain;charset=utf-8"})
             }}>Télécharger mon cv</button>
            <br></br>
            <br></br>
           
            <button className='btn-update'>MODIFIER MES INFOS</button>

    </Container>
    </>

  );
}

export default PageProfil;
