import React from "react";
import { Link } from "react-router-dom";
import { URL_BASE } from "../../Config/URL_BASE";
import { useForm } from "../../hooks/useForm";
import "./Login.css";
import img from "../../img/ITSZ.png";
const Login = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${URL_BASE}/auth/login/`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const response = await request.json();
    console.log(response);
    if (response.email === email && response.token) {
      console.log("logedo correctamente");
      localStorage.setItem("token", response.token);
      window.location = "/home";
    } else {
      response.detail && alert(response.detail);
      response.email && alert(response.email);
      response.password && alert(response.password);
      console.log("hubo un error");
    }
  };

  return (
    <>
      {/*  <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <input
          required
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Login</button>
        <button>
          <Link to={"/register"}>No tienes cuenta?</Link>
        </button>
      </form>

       */}

      <>
        <div className="nav">
          <br />
          <h1>Repositorio ITSZ</h1>
        </div>
        <br />
        <br />
        <br />

        

        <div className="login-page">
        
          <div className="form">
          <div className="logo">
                <img src={img} alt="ITSZ" style={{ width: "50%" }} />
              </div>
            <form onSubmit={handleSubmit}>
              <input
                required
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />

              

              <input
                type="password"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
              />

              <button type="submit">Iniciar sesion</button>

              <p className="message">
                ¿No tienes cuenta?
                <Link to={"/register"}>Registrarse</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="footer">
          <footer className="text-center text-white">
            <div className="container p-4 pb-0">
              <section className="mb-4">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.facebook.com/TecNMZongolica/"
                  role="button"
                >
                  <i className="fab fa-facebook-f">Facebook</i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram">Instagram</i>
                </a>
              </section>
            </div>

            <div className="text-center p-3">
              © 2022 Copyright:
              <a className="text-white" href="#"></a>
            </div>
          </footer>
        </div>
      </>
    </>
  );
};

export default Login;
