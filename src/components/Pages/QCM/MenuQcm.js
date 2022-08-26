// import { Box, Button } from '@mui/material';
// import React from 'react';
// import SelectField from '../hooks/SelectField';
// import {Container} from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const MenuQcm = () => {

  
//     const handleSubmit = ()=>{};
//     const history = useNavigate();
//   return (
//     <Container maxWidth="sm">
//         <Box textAlign="center" mt={5}>
//       <form onSubmit={handleSubmit}>
//       <SelectField label="Categorie" />
//       <SelectField  label="Cours" />
//       <SelectField  label="QCM" />
     
//       <Box mt={3} width="100%">
//         <Button fullWidth variant="contained" type="submit" 
//         sx={{backgroundColor:" #014AAD"}}
//         onClick={() => history("/pageqcm")}
//         >
//           Get Started
//         </Button>
//       </Box>
//     </form>
//     </Box>
//     </Container>
//   );
// }

// export default MenuQcm;



// import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import React from 'react';
// import {Data} from './MenuQcmList';
// class MenuQcm extends React.Component {

// constructor(props) {
//   super(props);
//   this.state = {
//       catégories : Data,
//       cours : [],
//       qcm : [],
//       selectedCatégorie : 'Catégorie',
//       selectedCours : 'Cours'
//   };
//   this.changeCatégorie = this.changeCatégorie.bind(this);
//   this.changeCours = this.changeCours.bind(this);
// }

// // componentDidMount() { //https://reactjs.org/docs/react-component.html#componentdidmount
// //   this.setState( 
// //     {
// //       catégories : [
// //           { name: 'Dev web', cours: [ 
// //               {name: 'html', qcm: ['qcm 1', 'qcm 2', 'qcm 3']},
// //               {name: 'css', qcm: ['qcm 1', 'qcm 2', 'qcm 3']},
// //           ]},
// //           { name: 'DevOps', cours: [ 
// //             {name: 'devops1', qcm: ['qcmdevops 1', 'qcmdevops 2', 'qcmdevops 3']},
// //             {name: 'devops2', qcm: ['qcmdevops 1', 'qcmdevops 2', 'qcmdevops 3']},
// //             {name: 'html', qcm: ['qcm 1', 'qcm 2', 'qcm 3']},
// //             {name: 'css', qcm: ['qcm 1', 'qcm 2', 'qcm 3']},
// //           ]},
               
// //       ]
// //   }
// //   );
// // } 

// changeCatégorie (event) {
//   this.setState({selectedCatégorie: event.target.value});
//   this.setState({cours : this.state.catégories.find(cat => cat.name === event.target.value).cours});
// }

// changeCours(event) {
//   this.setState({selectedCours: event.target.value});
//   const stats = this.state.catégories.find(cat => cat.name === this.state.selectedCatégorie).cours;
//   this.setState({qcm : stats.find(stat => stat.name === event.target.value).qcm});
// };



// render() {
//   return (
//     <Container maxWidth="sm">
//           <Box textAlign="center" mt={5}>
//           {/* <h2>ReactJS Dependent Dropdown - Country, State and City</h2> */}

//           <form >
//           <Box mt={3} width="100%">
//           <FormControl size="small" fullWidth>
//           <InputLabel>Catégorie</InputLabel>
//           <Select value={this.state.selectedCatégorie} onChange={this.changeCatégorie} label="Catégorie" >
//           {this.state.catégories.map((e, key) => {
//                       return <MenuItem value={e.name}>{e.name}</MenuItem>;
//                   })}
//           </Select>

//               {/* <select  placeholder="Country" value={this.state.selectedCatégorie} onChange={this.changeCatégorie}>
//                   <option>Country</option>
//                   {this.state.catégories.map((e, key) => {
//                       return <option >{e.name}</option>;
//                   })}
//               </select> */}
//               </FormControl>
//               </Box>
//               <Box mt={3} width="100%">
//             <FormControl size="small" fullWidth>
//           <InputLabel>Cours</InputLabel>
//           <Select value={this.state.selectedCours} onChange={this.changeCours} label="Cours" >
//           {this.state.cours.map((e, key) => {
//                       return <MenuItem value={e.name}>{e.name}</MenuItem>;
//                   })}
//           </Select>
//               </FormControl>
//               </Box>

//           {/* <div className="form-group">
//               <label >State</label>
//               <select className="form-select" placeholder="State" value={this.state.selectedCours} onChange={this.changeCours}>
//                   <option>State</option>
//                   {this.state.cours.map((e, key) => {
//                       return <option key={key}>{e.name}</option>;
//                   })}
//               </select>
//           </div> */}
//               <Box mt={3} width="100%">
//             <FormControl size="small" fullWidth>
//           <InputLabel>Qcm</InputLabel>
//           <Select  label="Qcm" onChange={() => {}}>
//           {this.state.qcm.map((e, key) => {
//                       return <MenuItem value={e.name}>{e.name}</MenuItem>;
//                   })}
//           </Select>
//               </FormControl>
//               </Box>
//           {/* <div className="form-group">
//               <label >City</label>
//               <select className="form-select" placeholder="City">
//                   <option>City</option>
//                   {this.state.qcm.map((e, key) => {
//                       return <option key={key}>{e}</option>;
//                   })}
//               </select>
//           </div> */}
//           {/* <button type="submit" className="btn btn-success" >Submit</button> */}
//           <Box mt={3} width="100%">
//         <Button fullWidth variant="contained" type="submit" 
//          sx={{backgroundColor:" #014AAD"}}
//          >
//           Commencer
//          </Button>
//        </Box>
//           </form>
//           </Box>
//           </Container>
//   )
// }
// }
// export default MenuQcm;






import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Data} from './MenuQcmList';
class MenuQcm extends React.Component {

constructor(props) {
  super(props);
  this.state = {
      catégories : Data,
      cours : [],
      qcm : [],
      selectedCatégorie : 'Catégorie',
      selectedCours : 'Cours',
      selectedQcm : 'Qcm'
  };
  this.changeCatégorie = this.changeCatégorie.bind(this);
  this.changeCours = this.changeCours.bind(this);
  this.changeQcm = this.changeQcm.bind(this);
}



changeCatégorie (event) {
  this.setState({selectedCatégorie : event.target.value});
  this.setState({cours : this.state.catégories.find(cat => cat.name === event.target.value).cours});
  // console.log("cat : ",event.target.value);
 
}
// componentDidUpdate() {
//   console.log("componentDidUpdate cat ********");
//   console.log("cat : ",this.state.selectedCatégorie);
  
// }
changeCours(event) {
  this.setState({selectedCours: event.target.value});
  const stats = this.state.catégories.find(cat => cat.name === this.state.selectedCatégorie).cours;
  this.setState({qcm : stats.find(stat => stat.name === event.target.value).qcm});
  
}
// componentDidUpdate() {
//   console.log("componentDidUpdate cours ********");
//   console.log("cours : ",this.state.selectedCours);
  
// }

changeQcm ( event) {
  this.setState({selectedQcm : event.target.value});
  // const quest = this.state.cours.find(course => course.name ===this.state.selectedCatégorie).qcm;
  // this.setState({questions : quest.find(question => question.name === event.target.value).qestions});
}

componentDidUpdate() {
  console.log("componentDidUpdate qcm ********");
  console.log("qcm : ",this.state.selectedQcm);
  
}

render() {

  return (
    <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
          {/* <h2>ReactJS Dependent Dropdown - Country, State and City</h2> */}

          <form >
          <Box mt={3} width="100%">
          <FormControl size="small" fullWidth>
          <InputLabel>Catégorie</InputLabel>
          <Select value={this.state.selectedCatégorie} onChange={this.changeCatégorie} label="Catégorie" >
          {this.state.catégories.map((e, key) => {
                      return <MenuItem value={e.name}>{e.name}</MenuItem>;
                  })}
          </Select>

              {/* <select  placeholder="Country" value={this.state.selectedCatégorie} onChange={this.changeCatégorie}>
                  <option>Country</option>
                  {this.state.catégories.map((e, key) => {
                      return <option >{e.name}</option>;
                  })}
              </select> */}
              </FormControl>
              </Box>
              <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
          <InputLabel>Cours</InputLabel>
          <Select value={this.state.selectedCours} onChange={this.changeCours} label="Cours" >
          {this.state.cours.map((e, key) => {
                      return <MenuItem value={e.name}>{e.name}</MenuItem>;
                  })}
          </Select>
              </FormControl>
              </Box>

          {/* <div className="form-group">
              <label >State</label>
              <select className="form-select" placeholder="State" value={this.state.selectedCours} onChange={this.changeCours}>
                  <option>State</option>
                  {this.state.cours.map((e, key) => {
                      return <option key={key}>{e.name}</option>;
                  })}
              </select>
          </div> */}
              <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
          <InputLabel>Qcm</InputLabel>
          <Select  label="Qcm" value={this.state.selectedQcm}  onChange={this.changeQcm}>
          {this.state.qcm.map((e, key) => {
                      return <MenuItem value={e.name}>{e.name}</MenuItem>;
                  })}
          </Select>
              </FormControl>
              </Box>
          {/* <div className="form-group">
              <label >City</label>
              <select className="form-select" placeholder="City">
                  <option>City</option>
                  {this.state.qcm.map((e, key) => {
                      return <option key={key}>{e}</option>;
                  })}
              </select>
          </div> */}
          {/* <button type="submit" className="btn btn-success" >Submit</button> */}
          <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit" onClick={() => useNavigate("/profile")}
         sx={{backgroundColor:" #014AAD"}}
        
         >
          Commencer
         </Button>
       </Box>
          </form>
          </Box>
          </Container>
  )
}
}
export default MenuQcm;

// import React from "react";
// import ReactDOM from "react-dom";
// import Data from './MenuQcmList';


// class MenuQcm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countryList: [],
//       stateList: [],
//       cityList: [],
//       selectedCountry: "",
//       selectedState: "",
//       selectedCity: "",
      
//     };

//     this.changeCountry = this.changeCountry.bind(this);
//     this.changeState = this.changeState.bind(this);
//     this.changeCity = this.changeCity.bind(this);
//   }
//   componentDidMount() {
//     const { data } = Data;
//     // Get all countries from data object which exists as keys
//     // and set to the countrylist state
//     const countryList = Object.keys(data);
//     this.setState({
//       countryList
//     });
//   }

//   changeCountry(e) {
//     // Based on country selection change options for state dropdown
//     // and show it in result as well
//     const { data } = Data;
//     const selectedCountry = e && e.target && e.target.value;
//     if (selectedCountry) {
//       const stateList = Object.keys(data[selectedCountry].cours);
//       this.setState({
//         stateList,
//         selectedCountry,
//         cityList: []
//       });
//     } else {
//       this.setState({
//         stateList: [],
//         cityList: [],
//         selectedCountry: "",
//         selectedState: "",
//         selectedCity: ""
//       });
//     }
//   }

//   changeState(e) {
//     // Based on state selection change options for city dropdown
//     // and show it in result as well
//     const { data } = Data;
//     const selectedState = e && e.target && e.target.value;
//     if (selectedState) {
//       const cityList =
//         data[this.state.selectedCountry].cours[selectedState].qcm;
//       this.setState({
//         cityList,
//         selectedState
//       });
//     } else {
//       this.setState({
//         cityList: [],
//         selectedState: "",
//         selectedCity: "",
//       });
//     }
//   }

//   changeCity(e) {
//     // Based on city selection show it in result as well
//     const selectedCity = e && e.target && e.target.value;
//     this.setState({
//       selectedCity
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Dynamic Select dropdown - ReactJS</h1>
//         <div className="dynamic-dropdown">
//           <select
//             value={this.state.selectedCountry}
//             onChange={this.changeCountry}
//           >
//             <option value="">Please select Country</option>
//             {this.state.countryList.map((x, i) => {
//               return <option key={i}>{x}</option>;
//             })}
//           </select>
//           <br />
//           <select value={this.state.selectedState} onChange={this.changeState}>
//             <option value="">Please select State/Province</option>
//             {this.state.stateList.map((x, i) => {
//               return <option key={i}>{x}</option>;
//             })}
//           </select>
//           <br />
//           <select value={this.state.selectedCity} onChange={this.changeCity}>
//             <option value="">Please select City</option>
//             {this.state.cityList.map((x, i) => {
//               return <option key={i}>{x}</option>;
//             })}
//           </select>
//         </div>
//         <div className="dynamic-dropdown-result">
//           <h3>Selected Result:</h3>
//           {this.state.selectedCountry}
//           {this.state.selectedState ? ` | ${this.state.selectedState}` : ``}
//           {this.state.selectedCity ? ` | ${this.state.selectedCity}` : ``}
//         </div>
//       </div>
//     );
//   }
// }
// export default MenuQcm;