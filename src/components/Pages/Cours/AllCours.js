import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CoursPage from "./CoursPage";
import { Card, Grid } from "@material-ui/core";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import PageLoader from "../hooks/PageLoader";
// import Select from "react-select";

const AllCours = () => {
  const [cours, setCours] = useState([]);
  const [filteredCours, setFilteredCours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modules, setModules] = useState([]);
  const [category,setCategories]=useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    // if (isLoading) {
      getCourses();
    // }
  }, []);
// }, [isLoading]);
  const getCourses = async () => {
    // const response = await axios.get("http://localhost:8000/cours/liste/");
    const response = await axios.get(
      // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
      "http://localhost:8000/cours/liste/"
      // ,
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + String(authTokens.access),
      //   },
      // }
      // "http://localhost:8000/cours/liste/"
    );
    // const data = await response.json();
    // if (response.status === 200) {
    //   setCours(data);
    // } else if (response.statusText === "Unauthorized") {
    //   logoutUser();
    // }

    console.log("reponsee", response.data);
    setCours(response.data);
  };

  useEffect(() => {
    getModules();
  }, []);

  const getModules = async () => {
    const response = await axios.get(
      // "https://rocketcoding-plateform-back.herokuapp.com/cours/listeModule/"
      "http://localhost:8000/cours/listeModule/"
    );
    console.log("reponsee", response.data);
    setModules(response.data);
  };




  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get(
      // "https://rocketcoding-plateform-back.herokuapp.com/cours/listeModule/"
      "http://localhost:8000/categorie/liste/"
    );
    console.log("reponsee cat", response.data);
    setCategories(response.data);
  };


  const history = useNavigate();
  
  
  // function filterPokemon(pokeType) {
  //   let filtredPokemon = getCourses().filter(type => type.categorie === pokeType);
  //   return filtredPokemon;
  // }
  // const [filtredPokemon, setFiltredPokemon] = useState(null);
  // useEffect(() => {
  //   setFiltredPokemon(getCourses());
  // }, []);

  // function handlePokemon(e) {
  //   let typePokemon = e.target.value;
  //   typePokemon !== "all"
  //     ? setFiltredPokemon(filterPokemon(typePokemon))
  //     : setFiltredPokemon(getCourses());
  // }


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log("event.target.value",event.target.value);
  };
  
  const filterItem = (cat) => {
    
    const updatedItems = cours.filter((curElem) => {
      return curElem.categorie === cat
    }) ;
    console.log("updatedItems", updatedItems);
    setCours(updatedItems);
    
    console.log("cours", cours);

  }

  return (
    <Container>
      <p style={{ fontSize: "60px", color: "#014AAD" }}>Cours</p> 
      <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
>
        <Grid item ><p>Filter tab</p>
        <br></br>
        <Box sx={{ minWidth: 120 }}>
          {/* <select name="catégorie :" onChange={handleChange}>
          {category.map((cat, index) => (
            <option key={index} value={cat.nom}>
                 {cat.nom}
            </option>
          ))}
          </select> */}
        {/* <Select
        value={category}
        onChange={(item) => {
          console.log("item",item);
          setAge(item);
        }}
        options={category.map((cat, index) => {
          return {
            label: cat.nom,
            value: cat.nom,
            key: index,
         
          };
          
          
        })}
      /> */}
     
    
     <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">categorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Categorie"
          onChange={(e) => {
            console.log("item",e);
            handleChange(e);
          }}
        >
          <MenuItem
            onClick={() => {
              getCourses();
            }}
            value="all"
          >
            Toutes les catégories
          </MenuItem>
          {category.map((categ, id) => (
            <MenuItem
              key={id}
              onClick={() => {
                filterItem(categ.nom);
              }}
              value={categ.nom}
            >
              {categ.nom}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Box>
        {/* <button onClick={()=> setCours(cours)}>toutes les catégories</button>

        {category.map((categ,id )=> ( 
          <button
          key={id}
          onClick={()=>{
            filterItem(categ.nom);
        }}
          >{categ.nom}</button>
         ))} */}
       
        </Grid>
        </Grid>

        <Grid container spacing={3}>
        
        {cours.map((courses,id) => (
          <Grid item key={id} xs={12} md={6} lg={4}>
            <Card elevation={3}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    gutterBottom
                    variant="h5"
                    fontFamily="Arimo"
                  >
                    <strong>Catégorie :</strong> {courses.categorie}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="180"
                  image={courses.image_cours}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily="Arimo"
                  >
                    {courses.nom_cours}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily="Arimo"
                  >
                    {courses.description_cours}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider />
              <IconButton onClick={() => history(`/modules/${courses.id}`)}>
                <h5 style={{ fontFamily: "Arimo" }}>
                  {" "}
                  <strong>Ouvrir Cours</strong>
                </h5>{" "}
                <ArrowForwardIosIcon />
              </IconButton>
            </Card>
            {/* <Paper>{courses.nom}</Paper> */}
            {/* <CoursCard cours={courses} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllCours;
