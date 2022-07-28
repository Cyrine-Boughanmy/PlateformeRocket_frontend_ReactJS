import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CoursPage from "./CoursPage";

const AllCours = () => {
  const [cours, setCours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getCourses();
      setIsLoading(false);
    }
  }, [isLoading]);
  const getCourses = async () => {
    const response = await axios.get("http://localhost:8000/cours/liste/");
    console.log("reponsee", response.data);
    setCours(response.data);
  };
  return (
    <div>
      {cours.map(function (courses) {
        return (
          <CoursPage
            id={courses.id}
            key={courses.id}
            nom={courses.nom}
            description={courses.description}
            titre_module={courses.titre_module}
            image_cours={courses.image_cours}
            fichier_cours={courses.fichier_cours}
            categorie={courses.categorie}
            cours_module={courses.cours_module}
          />
        );
      })}
    </div>
  );
};

export default AllCours;
