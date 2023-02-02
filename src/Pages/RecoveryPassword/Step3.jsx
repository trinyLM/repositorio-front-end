import React, { useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import { Link } from "react-router-dom";
import "./Recoverypassword.css";

const Step2 = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [state, setState] = useState("awaiting");

  const handleSubmit = async (e) => {
    setState("loading");
    e.preventDefault();
    const url = `${URL_BASE}/auth/password/reset/verified/`;
    if (password1 === password2) {
      const code = localStorage.getItem("code");
      const data = {
        code: code,
        password: password1,
      };
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      console.log(response);
      if (response.success) {
        alert("Se cambio la contraseña con exito");
        window.location = "/login";
        localStorage.removeItem("code");
        setState("awaiting");
      }
      response.password && alert(response.password);
      response.detail && alert(response.detail);
      setState("awaiting");
    } else {
      alert("las contraseñas no coinciden");
      setState("awaiting");
    }
  };

  return (
    <>
      {state === "loading" && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {state === "awaiting" && (
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Paso 3: Cambia tu contraseña</h2>
              <br></br>
            </div>
            <div className="row clearfix">
              <div className="">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="input_field">
                    <br />
                    <br />
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Ingresa tu nueva contraseña"
                      value={password1}
                      onChange={(e) => {
                        setPassword1(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input_field">
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Repite tu contraseña"
                      value={password2}
                      onChange={(e) => {
                        setPassword2(e.target.value);
                      }}
                    />
                  </div>

                  <input className="button" type="submit" value="Cambiar" />
                  <p className="credit">
                    <Link to={"/login"}>Regresar</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Step2;
