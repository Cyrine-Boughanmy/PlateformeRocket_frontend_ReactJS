// import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import {Container} from '@mui/material';
// import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
// import { useNavigate } from 'react-router-dom';
// import {QuestionsList} from './QuestionsList';
// const PageQcm = () => {
//     const history = useNavigate();
// const [currentQuestion , setCurrentQuestion] = useState([]);
// const [score , setScore] = useState("");
  
      
// // console.log(QuestionsList.question);

//   const [value, setValue] = React.useState('');
//   const [error, setError] = React.useState(false);
//   const [helperText, setHelperText] = React.useState('');

//   const handleRadioChange = (event) => {
//     setValue(event.target.value);
//     setHelperText(' ');
//     setError(false);
//   };
  

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (value === 'réponse 2') {
//       setHelperText('réponse correcte !');
//       setError(false);
//     } else if (value === 'réponse 1') {
//       setHelperText('réponse incorrecte!');
//       setError(true);
//     }else if (value === 'réponse 3') {
//       setHelperText('réponse incorrecte!');
//       setError(true);
//     } else if (value === 'réponse 4') {
//       setHelperText('réponse incorrecte!');
//       setError(true);
//     }  
//     else {
//       setHelperText('Veuillez choisir une réponse.');
//       setError(true);
//     }
//   };
//   return (
//     <>
//      <PrimarySearchAppBar />
//       <Container maxWidth="sm">
//         <Box textAlign="center" mt={5}>
//         <Box textAlign="left" mt={5}>
//       <Typography variant="h4">Catégorie : Développement web</Typography>
//       <Typography variant="h5">Cours : HTML</Typography>
//       <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
//       </Box>
//       <Box textAlign="left" mt={5}>
//       <Typography variant="h6">Question {currentQuestion + 1 } of {QuestionsList.length}: {QuestionsList[currentQuestion]?.question} </Typography>
      
//       </Box>
//       <Box textAlign="left" mt={5}>
//       <form onSubmit={handleSubmit}>
//       <FormControl textAlign="left" error={error} variant="standard">
//       {/* <FormLabel >Catégorie :</FormLabel>
//       <FormLabel >Cours :</FormLabel>
//       <FormLabel >Question  :</FormLabel> */}
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         value={value}
//         onChange={handleRadioChange}
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="réponse 1" control={<Radio />} label="réponse 1" />
//         <FormControlLabel value="réponse 2" control={<Radio />} label="réponse 2" />
//         <FormControlLabel value="réponse 3" control={<Radio />} label="réponse 3" />
//         <FormControlLabel value="réponse 4" control={<Radio />} label="réponse 4" />

//       </RadioGroup>
//       <FormHelperText>{helperText}</FormHelperText>

//       <Box mt={3} width="100%">
//         <Button fullWidth variant="contained" type="submit" 
//         sx={{backgroundColor:" #014AAD"}}
//         onClick={() => history("/pageqcm")}
//         >
//           Suivant
//         </Button>
//       </Box>
//     </FormControl>
//     </form>
//     </Box>
//       </Box>
//       </Container>   
//     </>
//   );
// }

// export default PageQcm;



import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";
import { quizData } from "./QuestionsList";
class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    console.log(quizData[0])
    this.setState(() => {
      return {
        qcm_name : quizData[this.state.currentQuestion],
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    
    if (isEnd) {
      return (
        <>
        <PrimarySearchAppBar />
        <Container maxWidth="md">
        <Box textAlign="center" mt={10}>
        <Box textAlign="center" mt={10}>
        <Typography variant="h4">Game Over your Final score is {this.state.score} points </Typography>
        <Box textAlign="center" mt={10}>
        <Typography variant="h5">The correct answers for the questions :</Typography>
        </Box>
          <ul>
          {quizData.map((item, index) => (
            <li key={index}>
             <Typography variant="h5">{item.answer}</Typography></li>
          ))}
          </ul>
        </Box>
          
        </Box>
        </Container>
      </>);
    } else {
      return (
        <>
        <PrimarySearchAppBar />
        <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Box textAlign="left" mt={5}>
        <Typography variant="h4">Catégorie : Développement web</Typography>
      <Typography variant="h5">Cours : HTML</Typography>
      <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
       </Box>
       <Box textAlign="left" mt={5}>
       <Typography variant="h6">{`Question ${currentQuestion}  out of ${quizData.length -
            1} :`} {this.state.questions} </Typography>
       </Box>
       <Box textAlign="left" mt={5}>
       <form >
       <FormControl textAlign="left" >
       <RadioGroup
       aria-labelledby="demo-radio-buttons-group-label"
       name="radio-buttons-group"
       >
        {options.map(option => (
        <FormControlLabel key={option.id} value={option} control={<Radio />} label={option} className={`ui floating message options
        ${myAnswer === option ? "selected" : null}
        `} onClick={() => this.checkAnswer(option)} /> ))}
       </RadioGroup>
          
            {/* <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              
            </p> */}
         
          {currentQuestion < quizData.length - 1 && (
            <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit" 
              sx={{backgroundColor:" #014AAD"}}
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
             Suivant
             </Button>
            </Box>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit" 
            sx={{backgroundColor:" #014AAD"}}
            disabled={this.state.disabled} 
            onClick={this.finishHandler}>
              Valider
              </Button>
              </Box>
          )}
          </FormControl>
          </form>
          </Box>
        </Box>
        </Container>
      </>
      );
    }
  }
}

export default MainQuiz;

// import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
// import React from "react";
// import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";
// // import { quizData } from "./QuestionsList";
// import {Data} from './MenuQcmList';
// class MainQuiz extends React.Component {
//   state = {
//     currentQuestion: 0,
//     myAnswer: null,
//     options: Data.cours.qcm.contenu.options,
//     score: 0,
//     disabled: true,
//     isEnd: false
//   };

//   loadQuizData = () => {
//     // console.log(quizData[0].question)
//     this.setState(() => {
//       return {
//         questions: Data.cours.qcm.contenu.question[this.state.currentQuestion].question,
//         answer: Data.cours.qcm.contenu.answer[this.state.currentQuestion].answer,
//         options: Data.cours.qcm.contenu.options[this.state.currentQuestion].options
//       };
//     });
//   };

//   componentDidMount() {
//     this.loadQuizData();
//   }
//   nextQuestionHandler = () => {
//     // console.log('test')
//     const { myAnswer, answer, score } = this.state;

//     if (myAnswer === answer) {
//       this.setState({
//         score: score + 1
//       });
//     }

//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1
//     });
//     console.log(this.state.currentQuestion);
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.currentQuestion !== prevState.currentQuestion) {
//       this.setState(() => {
//         return {
//           disabled: true,
//           questions: Data.cours.qcm.contenu.question[this.state.currentQuestion].question,
//           options: Data.cours.qcm.contenu.options[this.state.currentQuestion].options,
//           answer: Data.cours.qcm.contenu.answer[this.state.currentQuestion].answer
//         };
//       });
//     }
//   }
//   //check answer
//   checkAnswer = answer => {
//     this.setState({ myAnswer: answer, disabled: false });
//   };
//   finishHandler = () => {
//     if (this.state.currentQuestion === Data.cours.qcm.contenu.length - 1) {
//       this.setState({
//         isEnd: true
//       });
//     }
//     if (this.state.myAnswer === this.state.answer) {
//       this.setState({
//         score: this.state.score + 1
//       });
//     }
//   };
//   render() {
//     const { options, myAnswer, currentQuestion, isEnd } = this.state;
    
//     if (isEnd) {
//       return (
//         <>
//         <PrimarySearchAppBar />
//         <Container maxWidth="md">
//         <Box textAlign="center" mt={10}>
//         <Box textAlign="center" mt={10}>
//         <Typography variant="h4">Game Over your Final score is {this.state.score} points </Typography>
//         <Box textAlign="center" mt={10}>
//         <Typography variant="h5">The correct answers for the questions :</Typography>
//         </Box>
//           <ul>
//           {Data.cours.qcm.contenu.map((item, index) => (
//             <li key={index}>
//              <Typography variant="h5">{item.answer}</Typography></li>
//           ))}
//           </ul>
//         </Box>
          
//         </Box>
//         </Container>
//       </>);
//     } else {
//       return (
//         <>
//         <PrimarySearchAppBar />
//         <Container maxWidth="sm">
//         <Box textAlign="center" mt={5}>
//         <Box textAlign="left" mt={5}>
//         <Typography variant="h4">Catégorie : Développement web</Typography>
//       <Typography variant="h5">Cours : HTML</Typography>
//       <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
//        </Box>
//        <Box textAlign="left" mt={5}>
//        <Typography variant="h6">{`Question ${currentQuestion}  out of ${Data.cours.qcm.contenu.length -
//             1} :`} {this.state.questions} </Typography>
//        </Box>
//        <Box textAlign="left" mt={5}>
//        <form >
//        <FormControl textAlign="left" >
//        <RadioGroup
//        aria-labelledby="demo-radio-buttons-group-label"
//        name="radio-buttons-group"
//        >
//         {options.map(option => (
//         <FormControlLabel key={option.id} value={option} control={<Radio />} label={option} className={`ui floating message options
//         ${myAnswer === option ? "selected" : null}
//         `} onClick={() => this.checkAnswer(option)} /> ))}
//        </RadioGroup>
          
//             {/* <p
//               key={option.id}
//               className={`ui floating message options
//          ${myAnswer === option ? "selected" : null}
//          `}
//               onClick={() => this.checkAnswer(option)}
//             >
              
//             </p> */}
         
//           {currentQuestion < Data.cours.qcm.contenu.length - 1 && (
//             <Box mt={3} width="100%">
//             <Button fullWidth variant="contained" type="submit" 
//               sx={{backgroundColor:" #014AAD"}}
//               disabled={this.state.disabled}
//               onClick={this.nextQuestionHandler}
//             >
//              Suivant
//              </Button>
//             </Box>
//           )}
//           {/* //adding a finish button */}
//           {currentQuestion === Data.cours.qcm.contenu.length - 1 && (
//             <Box mt={3} width="100%">
//             <Button fullWidth variant="contained" type="submit" 
//             sx={{backgroundColor:" #014AAD"}}
//             disabled={this.state.disabled} 
//             onClick={this.finishHandler}>
//               Valider
//               </Button>
//               </Box>
//           )}
//           </FormControl>
//           </form>
//           </Box>
//         </Box>
//         </Container>
//       </>
//       );
//     }
//   }
// }

// export default MainQuiz;