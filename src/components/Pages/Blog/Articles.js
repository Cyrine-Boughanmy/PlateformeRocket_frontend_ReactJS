import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Articles.css";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";

const Articles = () => {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    articles();
  }, []);

  const articles = async () => {
    const response = await axios.get(
      // `http://localhost:8000/blogs/blog/${id}`
      `https://rocketcoding-plateform-back.herokuapp.com/blogs/blog/${id}`
    );
    setArticle(response.data);
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
          onClick={() => history("/blog")}
        >
          Retour
        </button>

        <div className="actualite-details__container">
          <Fragment>
            <div className="actualite__Page-content">
              <h4 className="center-actualite__Page">
                <b
                  style={{
                    color: "#014AAD",
                  }}
                >
                  {" "}
                  {article.titre}{" "}
                </b>
              </h4>

              <img src={article.image_Blog} alt="image blog"></img>
              <br></br>
              <p className="center-actualite__Page">
                <b> {getDate(article.date)}</b>
              </p>

              <p className="center-actualite__Page">
                <b>{article.owner}</b>
              </p>

              <br></br>
              <div>
                <p className="news-text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: article.body,
                    }}
                  ></div>
                </p>{" "}
              </div>
              <div className="actualite-Download">
                <br></br>
                <p className="actualite-text-Download">
                  <u>
                    <a
                      href={article.ficher_blog}
                      target="-blank"
                      className="center-actualite__Page"
                    >
                      Télécharger le document
                    </a>
                  </u>
                </p>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </>
  );
};

export default Articles;
