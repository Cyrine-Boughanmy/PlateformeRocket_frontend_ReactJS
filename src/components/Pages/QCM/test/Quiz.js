// import { Box, Button, Container, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import PrimarySearchAppBar from "../../../Dashboard/Default/Navbar.js";
// import questions from "./QuestionData.js";
// function quiz() {

//     const [option, setOption] = useState("");
//     const [quiz, setQuiz] = useState("");
//     const handleOption = (e) => {
//         setOption(e.target.value);
//     };
//     function deSelect() {
//         var ele = document.getElementsByClassName("option");
//         for (var i = 0; i < ele.length; i++) {
//             if (ele[i].type === "radio")
//                 ele[i].checked = false;
//         }
//     }

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [showScore, setShowScore] = useState(false);
//     const [score, setScore] = useState(0);

//     const handleAnswerOptionClick = (isCorrect) => {
//         if (isCorrect) {
//             setScore(score + 1);
//         }

//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < questions.length) {
//             setCurrentQuestion(nextQuestion);
//         } else {
//             setShowScore(true);
//         }
//     };

//     const selectOption = (indexSelected, indexOptionSelected) => {
//         setQuiz(
//             questions.map((item, index) => index === indexSelected
//                 ? {
//                     ...item,
//                     selected: true,
//                     options: questions.answerOptions.map((item, index) => index === indexOptionSelected
//                         ? { ...item, selected: true }
//                         : { ...item, selected: false }
//                     )
//                 }
//                 : item
//             )
//         );
//     };
//     return (
//         <>
//         <PrimarySearchAppBar />
//       <Container maxWidth="sm">
//         <Box textAlign="center" mt={5}>
//         <Box textAlign="left" mt={5}>
//       <Typography variant="h4">Catégorie : Développement web</Typography>
//       <Typography variant="h5">Cours : HTML</Typography>
//       <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
//       </Box>
//       <Box textAlign="left" mt={5}>
//       <Typography variant="h6">Question  : Cochez la bonne réponse :</Typography>
//       </Box>
//       <Box textAlign="left" mt={5}>
//       <form >
//       <FormControl textAlign="left" >
//       {/* <FormLabel >Catégorie :</FormLabel>
//       <FormLabel >Cours :</FormLabel>
//       <FormLabel >Question  :</FormLabel> */}
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         value={value}
//         onClick={() => selectOption(currentQuestion)}
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
//         </>
//     );
// }

// export default quiz
