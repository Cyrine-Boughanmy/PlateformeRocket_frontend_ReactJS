import React from "react";
import MenuQcm from "../../Pages/QCM/MenuQcm";
import SetupForm from "../../Pages/QCM/testqcm/SetupForm";
import PrimarySearchAppBar from "./Navbar";

const Qcm = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <MenuQcm/>
      {/* <SetupForm/> */}
    </div>
  );
};

export default Qcm;
