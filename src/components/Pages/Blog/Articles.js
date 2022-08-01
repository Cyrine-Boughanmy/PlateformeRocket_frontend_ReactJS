import { Container } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DaysJS from 'react-dayjs';
import './Articles.css';


const Articles = () => {
    const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    articles();
  }, []);

  const articles = async () => {
    const response = await axios.get(
      `http://localhost:8000/blogs/blog/${id}`
    );
    setArticle(response.data);
    console.log("response details of something", response.data);
  };
  const history = useNavigate();
  return (
    <div className="actualite-page__container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="go-back-link__actualites" onClick={history.goBack}>
        Retour
      </button>

      <div className="actualite-details__container">
        
          <Fragment>
          {articles.map((item) => ( 

            <div className="actualite__Page-content">
              <h4 className="center-actualite__Page">
                <b> {item.titre} </b>
              </h4>
              <p className="center-actualite__Page">
                <b>
                  {" "}
                  Publié le 
                    <DaysJS element="span" format ="DD MM YYYY" asString={ true }>{item.date}</DaysJS>
                  
                </b>
              </p>
              <img
                src={item.image_Blog}
                alt='image blog'
              ></img>
              ``
              <br></br>
              <div><p className="news-text"> {item.body}</p> </div>
              <div className="actualite-Download">
                <a >
                  <i className="fas fa-file-pdf fa-3x"></i>
                  <br></br>
                  <p className="actualite-text-Download">
                    <u>
                      <a
                        href={item.ficher_blog}
                        target="-blank"
                        className="center-actualite__Page"
                      >
                        Télécharger le document
                      </a>
                    </u>
                  </p>
                </a>
              </div>
              
            </div>
          ))}
          </Fragment>
      </div>
    </div>
  );
};




export default Articles;
