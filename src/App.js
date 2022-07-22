import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Pages/Auth/Login";
import RegisterSimple from "./components/Pages/Auth/RegisterSimple";
import ForgetPwd from "./components/Pages/Auth/ForgetPwd";
import Dashboard from "./components/Dashboard/Default";
// import Ecommerce from "./components/Dashboard/Ecommerce";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<RegisterSimple />}></Route>
          <Route exact path="/login/reset_pwd" element={<ForgetPwd />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>

          {/* <Route exact path="/test" element={<Ecommerce />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
