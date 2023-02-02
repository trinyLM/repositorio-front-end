import React, { useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import { Link } from "react-router-dom";
import "./Recoverypassword.css";

const Step2 = () => {
  const [code, setCode] = useState("");
  const [state, setState] = useState("awaiting");
  const handleSubmit = async (e) => {
    setState("loading")
    e.preventDefault();
    const url = `${URL_BASE}/auth/password/reset/verify/?code=${code}`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    if (response.success) {
      localStorage.setItem("code", code);
      window.location = "/recoverypassword/step3";
    }
    response.password && alert(response.password);
    response.detail && alert(response.detail);
    setState("awaiting")
  };

  return (
    <>
    {state==="loading"&&(
      <div>
        <h1>Loading...</h1>
      </div>
    )}
      {state === "awaiting" && (
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Paso 2: Ingesa tu codigo de verificacion</h2>
              <br></br>
            </div>
            <div className="row clearfix">
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="input_field">
                    <br />
                    <br />
                    <input
                      required
                      type="text"
                      name="first_name"
                      placeholder="codigo#"
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value);
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

export default Step2;
