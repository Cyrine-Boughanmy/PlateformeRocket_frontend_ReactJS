import { Container } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AnnoncePage.css";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";

const AnnoncePage = () => {
  const [annonce, setAnnonce] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    annonces();
  }, []);

  const annonces = async () => {
    const response = await axios.get(
      // `http://localhost:8000/annonces/annonce/${id}`
      `https://rocketcoding-plateform-back.herokuapp.com/annonces/annonce/${id}`
    );
    setAnnonce(response.data);
    console.log("response details of something", response.data);
  };
  const history = useNavigate();

  const getDate = (date) => {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString("fr-FR", options);
  };

  return (
    <>
    <PrimarySearchAppBar />
    <div className="actualite-page__container">
      <br></br>
      <button
        className="go-back-link__actualites"
        onClick={() => history("/annonces")}
      >
        Retour
      </button>

      <div className="actualite-details__container">
        <Fragment>
          <div className="actualite__Page-content">
            <h4 className="center-actualite__Page">
              <b
                style={{
                  color: "#3243E0",
                }}
              >
                {" "}
                {annonce.titre}{" "}
              </b>
            </h4>

            <img src={annonce.image_annonce} alt="image blog"></img>
            <br></br>
            <p className="center-actualite__Page">
              <b> {getDate(annonce.date_annonce)}</b>
            </p>
            <p className="center-actualite__Page">
              <b>{annonce.publie_par}</b>
            </p>
            <br></br>
            <div>
              <p className="news-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: annonce.description,
                  }}
                ></div>
              </p>{" "}
            </div>

            <br></br>
            <p className="actualite-text-Download">
              <u>
                <a
                  href={annonce.fichier_pdf}
                  target="-blank"
                  className="center-actualite__Page"
                >
                  Télécharger le document
                </a>
              </u>
            </p>
          </div>
        </Fragment>
      </div>
    </div>
    </>
  );
};

export default AnnoncePage;
