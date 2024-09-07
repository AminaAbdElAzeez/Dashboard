import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../Components/Login/Login.jsx";
import Toast from "../../Components/Toast/Toast.jsx";
import { setToken } from "../../Store/Actions/AuthActions.jsx";
import axiosInstance from "../../Utils/axiosInstance.js";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setToastMessage("Please fill all fields 👀");
      return;
    }

    const loginData = { name, email, password };

    axiosInstance
      .post("/admin/login", loginData)
      .then((response) => {
        const data = response.data;
        if (data.token) {
          dispatch(setToken(data.token, email, name));
          setName("");
          setEmail("");
          setPassword("");
          setToastMessage("Login successfully 🌹 ");
          navigate("dashboard");
        } else {
          setToastMessage("Login Failed 🤷‍♂️ ");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setToastMessage("An error occurred. Please try again 🚫 ");
      });
  };

  const handleCloseToast = () => {
    setToastMessage("");
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="left-home">
          <Toast message={toastMessage} onClose={handleCloseToast} />
          <div className="left-home-wrapper">
            <h1>welcome back!</h1>
            <p>
              Be first to know new features, best solutions and great deals.
            </p>
          </div>
        </div>
        <Login
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
}

export default Home;
