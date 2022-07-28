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

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/register" element={<RegisterSimple />}></Route>
            <Route exact path="/cours" element={<Cours />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/exercices" element={<Exercices />}></Route>
            <Route exact path="/evaluations" element={<Evaluations />}></Route>
            <Route exact path="/qcm" element={<Qcm />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/annonces" element={<Annonces />}></Route>
            <Route exact path="/monCompte" element={<MonCompte />}></Route>

            <Route
              exact
              path="/login/reset_pwd"
              element={<ForgetPwd />}
            ></Route>
            {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}

            {/* <PrivateRoute
              exact
              path="/dashboard"
              element={<Dashboard />}
            ></PrivateRoute> */}

            {/* <Route exact path="/test" element={<Ecommerce />}></Route> */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
