// import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import PrimarySearchAppBar from '../../../Dashboard/Default/Navbar';
// import { GameStateContext } from "../helpers/Contexts";
// import { Questions } from './helpers/Question';

//     const QuestionPage = () => {
//     // const [selected, setSelected] = useState('');
//     // const [error, setError] = useState('');
//     // const radiosWrapper = useRef();

//     // useEffect(() => {
//     //     const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
//     //     if(findCheckedInput) {
//     //       findCheckedInput.checked = false;
//     //     }
//     //   }, [data]);
    
//     //   const changeHandler = (e) => {
//     //     setSelected(e.target.value);
//     //     if(error) {
//     //       setError('');
//     //     }
//     //   }
      
//     //   const nextClickHandler = (e) => {
//     //     if(selected === '') {
//     //       return setError('Please select one option!');
//     //     }
//     //     onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
//     //     setSelected('');
//     //     if(activeQuestion < numberOfQuestions - 1) {
//     //       onSetActiveQuestion(activeQuestion + 1);
//     //     }else {
//     //       onSetStep(3);
//     //     }
//     //   }


//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [optionChosen, setOptionChosen] = useState("");
  
//     const { score, setScore, gameState, setGameState } = useContext(
//       GameStateContext
//     );
  
//     const chooseOption = (option) => {
//       setOptionChosen(option);
//     };
  
//     const nextQuestion = () => {
//       if (Questions[currentQuestion].asnwer == optionChosen) {
//         setScore(score + 1);
//       }
//       setCurrentQuestion(currentQuestion + 1);
//     };
  
//     const finishQuiz = () => {
//       if (Questions[currentQuestion].asnwer == optionChosen) {
//         setScore(score + 1);
//       }
//       setGameState("finished");
//     };
//   return (
//     <>
//     <PrimarySearchAppBar />
//     {/* <Container maxWidth="sm">
//     <Box textAlign="center" mt={5}>
//     <Box textAlign="left" mt={5}>
//     <Typography variant="h4">Catégorie : Développement web</Typography>
//       <Typography variant="h5">Cours : HTML</Typography>
//       <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
//         </Box>
//         <Box textAlign="left" mt={5}>
//       <Typography variant="h6">{data.question}</Typography>
//       </Box>
//         <Box textAlign="left" mt={5}>
//         <form>
//         <FormControl textAlign="left">
//         {data.choices.map((choice, i) => (
//         <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         // value={choice}
//         onChange={changeHandler}
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value={choice} control={<Radio />} label={choice} />
//       </RadioGroup>
//        ))}
//        <Box mt={3} width="100%">
//         <Button fullWidth variant="contained" type="submit" 
//         sx={{backgroundColor:" #014AAD"}}
//         onClick={nextClickHandler}
//         >
//           Suivant
//         </Button>
//       </Box>
//         </FormControl>

//         </form>
//             </Box> 
//     </Box>
//     </Container>
//        */}
//     </>
//   )
// }

// export default QuestionPage
