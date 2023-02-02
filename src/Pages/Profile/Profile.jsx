import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { URL_BASE } from "../../Config/URL_BASE";
import "./Profile.css";
import img from "../../img/profile.png";
import Footer from "../../Components/Footer/Footer";

const Profile = () => {
  const [data, setData] = useState({
    loading: true,
    infoProfile: {},
  });

  const token = localStorage.getItem("token");

  const handleClickLogout = async (e) => {
    e.preventDefault();
    const url = `${URL_BASE}/auth/logout/`;
    const request = await fetch(url, {
      method: "GET",

      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    if (response.success === "User logged out.") {
      window.location = "/login";
    }
  };
  const getInfoProfile = async () => {
    const url = `${URL_BASE}/auth/users/me/`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    setData({
      loading: false,
      infoProfile: response,
    });
  };
  const { loading, infoProfile } = data;
  useEffect(() => {
    getInfoProfile();
  }, []);

  return (
    <div className="bk">
      <Navbar />
      <div className="main-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/*  <h1>Nombre :{infoProfile.first_name}</h1>
          <h1>Apellido Paterno {infoProfile.last_name}</h1>
          <h1>Apellido Materno {infoProfile.apellido_materno}</h1>
          <h1>Correo: {infoProfile.email}</h1>
          <h1>Matricula: {infoProfile.matricula}</h1>  
 */}

           
            <br />
            <div className="card-profile">
              <img
                className="imagen-profile"
                src={img}
                alt="Avatar"
                style={{ width: "50%" }}
              />
              <div className="container">
                <h2>
                  <b>Nombre :{infoProfile.first_name}</b>
                </h2>
                <h2>
                  <p>Apellido Paterno: {infoProfile.last_name}</p>
                </h2>
                <h2>
                  <p>Apellido Materno: {infoProfile.apellido_materno}</p>
                </h2>

                <h4>
                  <p>Correo: {infoProfile.email}</p>
                </h4>
                <h5>
                  <p>Matricula: {infoProfile.matricula}</p>
                </h5>
                {/*  <div className="button">
                <button onClick={handleClickLogout}>cerrar sesion</button>
               </div> */}
                <div className="container-button">
                  <button onClick={handleClickLogout} type="button">
                    Cerrar sesión
                  </button>
                </div>

                {/* <button>cambiar contraseña</button> */}
              </div>
            </div>
          </>
        )}
      </div>
      <br></br>
      <br></br> <br></br> <br></br> <br></br> <Footer></Footer>
    </div>
  );
};

export default Profile;
