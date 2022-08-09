import React from "react";
import AllExercices from "../../Pages/Exercices/AllExercices";
import PrimarySearchAppBar from "./Navbar";

const Exercices = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <AllExercices/>
    </div>
  );
};

export default Exercices;
