import React, { useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import { Link } from "react-router-dom";
import "./Recoverypassword.css";

const Step1 = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("await");
  const handleSubmit = async (e) => {
    setState("loading");
    e.preventDefault();
    var data = {
      email: email,
    };
    const url = `${URL_BASE}/auth/password/reset/`;
    const request = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    response.email === email && (window.location = "/recoverypassword/step2");
    response.email === email &&
      alert("revise su correo para el siguiente paso");
    response.email !== email && alert(response.email);
    response.detail && alert(response.detail);
    setState("await")
  };

  return (
    <>
      {state === "loading" && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {state === "await" && (
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Paso 1: Ingesa tu email</h2>
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
                      type="email"
                      name="email"
                      placeholder="example@zongolica.tecnm.mx"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <input className="button" type="submit" value="Enviar" />
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

export default Step1;
