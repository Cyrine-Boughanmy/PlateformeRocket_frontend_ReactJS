import React from "react";
import PrimarySearchAppBar from "./Navbar";
import AnnoncesP from '../../Pages/Annonces/Annonces';
const Annonces = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <AnnoncesP/>
    </div>
  );
};

export default Annonces;
