import React from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    matricula: "",
    apellido_materno: "",
  });
  const {
    email,
    password,
    first_name,
    last_name,
    matricula,
    apellido_materno,
  } = formValues;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${URL_BASE}/auth/signup/`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const response = await request.json();
    console.log(response);
    if (response.status === "success" && response.email === email) {
      alert("Registrado Correctamente, revisa tu correo");
      window.location = "/login";
    } else {
      response.email && console.log(response.email);
      response.matricula && console.log(response.matricula);
      response.password && console.log(response.password);
    }
  };
  return (
    <>
      {/*       <h1>Registro</h1>
      <hr />
      <br />
      <form onSubmit={handleSubmit} method="POST">
        <input
          required
          type="text"
          name="first_name"
          placeholder="Nombre(s)"
          value={first_name}
          onChange={handleInputChange}
        />
        <br />
        <input
          required
          type="text"
          name="last_name"
          placeholder="Apellido Paterno"
          value={last_name}
          onChange={handleInputChange}
        />
        <br />
        <input
          required
          type="text"
          name="apellido_materno"
          placeholder="Apellido Materno"
          value={apellido_materno}
          onChange={handleInputChange}
        />
        <br />
        <input
          required
          type="text"
          name="matricula"
          placeholder="Matricula"
          value={matricula}
          onChange={handleInputChange}
        />
        <br />
        <input
          required
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <input
          required
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Registrar</button>

      </form>
      <button>
        <Link to={"/login"}>Login</Link>
      </button> */}

      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="matricula"
                    placeholder="Matricula"
                    value={matricula}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Matricula"
                    required
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                   required
          type="text"
          name="first_name"
          placeholder="Nombre(s)"
          value={first_name}
          onChange={handleInputChange}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Matricula"
                    required
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Matricula"
                    required
                  />
                </div>
                
                  
                

                <input className="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
