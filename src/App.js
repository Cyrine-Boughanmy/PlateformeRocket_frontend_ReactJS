import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Pages/Auth/Login";
import RegisterSimple from "./components/Pages/Auth/RegisterSimple";
import ForgetPwd from "./components/Pages/Auth/ForgetPwd";
import Dashboard from "./components/Dashboard/Default";
// import Ecommerce from "./components/Dashboard/Ecommerce";

// import SecuredRoute from "./middlewares/SecuredRout";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<RegisterSimple />}></Route>
            <Route
              exact
              path="/login/reset_pwd"
              element={<ForgetPwd />}
            ></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>

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
