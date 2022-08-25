import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  const loginUser = async (username, password) => {
    // const response = axios
    //   .post("http://localhost:8000/simple-user/token/", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((res) => {
    //     const users = {
    //       authTokens: res.data.key,
    //       username,
    //       userId: res.data.users,
    //     };
    //     localStorage.setItem("users", JSON.stringify(users));
    //   });
    const response = await fetch(
      // "https://rocketcoding-plateform-back.herokuapp.com/simple-user/token/",
      "http://localhost:8000/simple-user/token/",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      history("/home");
    } else {
      alert("Something went wrong!");
    }
  };

  const reset_passsword = async (email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email });

    try {
      await axios.post(
        "http://127.0.0.1:8000/simple-user/password_reset/",
        body,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  const token_validation = async (token, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ token, password });

    try {
      await axios.post(
        "http://127.0.0.1:8000/simple-user/password_reset/confirm/",
        body,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  const change_password = async (username, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authTokens.access,
      },
    };

    const body = JSON.stringify({ username, password });

    try {
      await axios.put(
        "http://127.0.0.1:8000/simple-user/change_password/",
        body,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  // const registerUser = async (
  //   username,
  //   password,
  //   email,
  //   nom,
  //   prenom,
  //   date_de_naissance,
  //   num_tel,
  //   adresse,
  //   ville,
  //   code_postal
  // ) => {
  //   const response = await fetch(
  //     "http://127.0.0.1:8000/simple-user/register/",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username,
  //         password,
  //         email,
  //         nom,
  //         prenom,
  //         date_de_naissance,
  //         num_tel,
  //         adresse,
  //         ville,
  //         code_postal,
  //       }),
  //     }
  //   );
  //   if (response.status === 201) {
  //     history.push("/login");
  //   } else {
  //     alert("Something went wrong!");
  //   }
  // };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    // registerUser,
    loginUser,
    logoutUser,
    reset_passsword,
    token_validation,
    change_password,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
