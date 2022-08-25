import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Pages/Auth/Login";
import RegisterSimple from "./components/Pages/Auth/RegisterSimple";
import ForgetPwd from "./components/Pages/Auth/ForgetPwd";
import Dashboard from "./components/Dashboard/Default";
import Cours from "./components/Dashboard/Default/Cours";
import Profile from "./components/Dashboard/Default/Profile";
import Exercices from "./components/Dashboard/Default/Exercices";
import Evaluations from "./components/Dashboard/Default/Evaluations";
import Qcm from "./components/Dashboard/Default/Qcm";
import Blog from "./components/Dashboard/Default/Blog";
import Annonces from "./components/Dashboard/Default/Annonces";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Dashboard/Default/Home";
import MonCompte from "./components/Dashboard/Default/MonCompte";
import CoursPage from "./components/Pages/Cours/CoursPage";
import ModulesPage from "./components/Pages/Cours/ModulesPage";
// import Annonces from "./components/Pages/Annonces/Annonces";
import AnnoncePage from "./components/Pages/Annonces/Annoncepage";
// import AllBlogs from "./components/Pages/Blog/AllBlogs";
import Articles from "./components/Pages/Blog/Articles";
import ProfilePage from "./components/Pages/Profile/ProfilePage";
import PageQcm from "./components/Pages/QCM/PageQcm";
import ExercicePage from "./components/Pages/Exercices/ExercicePage";
import PageLoader from "./components/Pages/hooks/PageLoader";
import EvaluationPage from "./components/Pages/Evaluations/EvaluationPage";
import ConnexionPage from "./components/Pages/Profile/ConnexionPage";
import PrivateRoute from "./utils/PrivateRoute";
import TokenValidation from "./components/Pages/Auth/TokenValidation";
import AllCours from "./components/Pages/test";

function App() {
  return (
    <div className="App">
      {/* <PageLoader/> */}

      <Router>
        <AuthProvider>
          <Routes>
          {/* <Route exact path="/test" element={<AllCours />}></Route> */}
            <Route exact path="/" element={<Login />}></Route>

            <Route element={<PrivateRoute />}>
              <Route exact path="/home" element={<Home />}></Route>
              <Route
                exact
                path="/register"
                element={<RegisterSimple />}
              ></Route>
              <Route exact path="/cours" element={<Cours />}></Route>
              <Route exact path="/profile" element={<Profile />}></Route>
              <Route
                exact
                path="/profilepage"
                element={<ProfilePage />}
              ></Route>
              <Route exact path="/exercices" element={<Exercices />}></Route>
              <Route
                exact
                path="/exercicepage"
                element={<ExercicePage />}
              ></Route>
              <Route
                exact
                path="/evaluations"
                element={<Evaluations />}
              ></Route>
              <Route
                exact
                path="/evaluationpage"
                element={<EvaluationPage />}
              ></Route>
              <Route exact path="/qcm" element={<Qcm />}></Route>
              <Route exact path="/pageqcm" element={<PageQcm />}></Route>

              {/* <Route exact path="/pageqcm" element={<QuestionPage />}></Route> */}

              <Route exact path="/blog" element={<Blog />}></Route>
              <Route exact path="/article/:id" element={<Articles />}></Route>
              <Route exact path="/annonces" element={<Annonces />}></Route>
              <Route
                exact
                path="/annonce/:id"
                element={<AnnoncePage />}
              ></Route>
              {/* <Route exact path="/monCompte" element={<MonCompte />}></Route> */}
              <Route
                exact
                path="/annonce/:id"
                element={<AnnoncePage />}
              ></Route>
              <Route
                exact
                path="/monCompte"
                element={<ConnexionPage />}
              ></Route>
              <Route exact path="/modules/:id" element={<CoursPage />}></Route>
              <Route
                exact
                path="/sousModule/:id"
                element={<ModulesPage />}
              ></Route>

              {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}

              {/* <PrivateRoute
              exact
              path="/dashboard"
              element={<Dashboard />}
            ></PrivateRoute> */}

              {/* <Route exact path="/test" element={<Ecommerce />}></Route> */}
            </Route>
            <Route
              exact
              path="/login/reset_pwd"
              element={<ForgetPwd />}
            ></Route>
            <Route
              exact
              path="/token/:id"
              element={<TokenValidation />}
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
