import React,{useState} from "react";
import { Link } from "react-router-dom";
import { URL_BASE } from "../../Config/URL_BASE";
import { useForm } from "../../hooks/useForm";
import "./Login.css";
import img from "../../img/ITSZ.png";
import Footer from "../../Components/Footer/Footer";
const Login = () => {
  //const [is_staff, set_is_staff] = useState(false);
  const [counter, setCounter] = useState(1);
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
      localStorage.setItem("is_staff", response.is_staff);
      window.location = "/home";
    } else {
      response.detail && alert(response.detail);
      response.email && alert(response.email);
      response.password && alert(response.password);
      console.log("hubo un error");
    }
    setCounter(counter+1)
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
              {counter >= 3 && (
                <div>
                  <p className="message">
                    ¿Olvodaste tu contraseña?
                    <Link to={"/recoverypassword/step1"}>Recuperar</Link>
                  </p>
                </div>
              )}

              <button type="submit">Iniciar sesion</button>

              <p className="message">
                ¿No tienes cuenta?
                <Link to={"/register"}>Registrarse</Link>
              </p>
            </form>
          </div>
        </div>

        <Footer></Footer>
      </>
    </>
  );
};

export default Login;
