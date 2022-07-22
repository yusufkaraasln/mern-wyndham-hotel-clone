import React from "react";
import "./panel-login.scss";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setAuthData } from "../../store/auth/authSlice";

function PanelLogin() {
  const userRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);
  const [error, setError] = useState("");
  const authDataState = useSelector((state) => state.auth.authData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch(setAuthData(res));
      console.log(authDataState);

      dispatch(setAuth(true));
    } catch (e) {
      dispatch(setAuth(false));
      setError("Kullanıcı adı veya şifre hatalı !!");
    }finally{
      localStorage.setItem("auth", JSON.stringify(authState));
    }
  };
  console.log(authState);

  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="main-container">
            <div className="main-container-header">
              <span>Giriş Yap</span>
            </div>

            <div className="main-container-content">
              <div className="main-container-content-item">
                <label htmlFor="">Kullanıcı Adı</label>
                <input ref={userRef} type="text" placeholder="@karaaslan" />
              </div>

              <div className="main-container-content-item">
                <label htmlFor="">Şifre</label>
                <input ref={passwordRef} type="password" placeholder="****" />
              </div>
              <button type="submit">Giriş Yap</button>
              {!authState && (
                <div className="main-container-header">
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PanelLogin;
