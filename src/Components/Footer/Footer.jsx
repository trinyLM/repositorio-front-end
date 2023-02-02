import React from "react";
import "./Footer.css";
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
/>;
const Footer = () => {
  return (
    <>
      <form className="footer-bd">
        <footer className="footer">
          {/* <div className="container-imgs">
          <br></br>
          <a href="https://zongolica.tecnm.mx/TecNM/" target="_blank">
          <img
          className="tec" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAilJREFUSEutlT1OHEEQhb+SOMD6BDYZGSZ24CV2gJB8EufmRxzCR3BKYGLGJ4AhI9vU2R7AcqGu/qvu6YHEE6x6+6feq1evukUAJXxpVCds1q2U/69srXvyWYtXf9aDjqEWAVtCYlwK+TfoblDuU8RTkH3OvYRYIdoKESV6BI6H9FyOghZ5BX1UOOnZxgzaGlyhXPp5F2hOYwP35Urja+DKE3MS2ZYPCA8om0HdZ5CtAQgT6jMMWls2e5ATQXexriCdi26Bs5ab/ZsVtlgA+zYgk6DHAweGGOdelzwOAe4bC0b0WWCrcAB8EvircBdABCZd1MoOnQJToOZrsAN93xV2JjI/QPiB8jVJd4FyY5ks5LIdO4TDoKW3aZYtY8wIW9TseIZwmywTiO1ReZdsGuo1mevaXrXYvsiaDrisile+AL+c359Rjrzt3TiWJcVeApghBteG8B2Vb6B/gGuQn9W+jbC57mH51Qw0pRydFjE/CvxTeHIhG8blarPYTZGdwvF0AfBNN7geajvnc1EgU2KlBraqiXWuSWaaJZYEloSw3ZFYAcgSpYUkhWk3+HKg3Id9k2ZgZ5ZOogoweBRi4zuJF7dAXvYWaTY1yFXr4ii7hBxOZ+eScwswcEMx8egh8tIt8mwbw9k0ngrd+Ln2SK2d9/tQvK5gAr/j5di9aN3NWo75oGt71jJrnLDG1Gde9Us1HTR9Dzb05P+ZFO+i/plZCltc9Aa6l/QFLSn0IkqQuTEAAAAASUVORK5CYII="
          />
          </a>

          <a href="https://instagram.com/itszongolica?igshid=OGQ2MjdiOTE=" target="_blank">
            <img
              className="icons"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnZJREFUSEuVlsFxGkEQRV9nwMlXUARaRQC++GoIwFWQARkIInBx800oAklHn4wjMI5AlBMQcgLt6pkeZnZ2QdZUUWzNzvSf/v37zwr/OwRQCH/+nLcKgtrrati8jc6Gc6jnAwX0ywDv2Fxm0xs2ZZky6C4aAbdA479TlmWyTtcelb2gG4V9vbCPojlw55g/gSNhY81lCN8gDFDGDrZAZVvSFQF8CDQKvwALPI3Be6jr1swyfgSuQW5A96muLQBgizBFGQkck1p6RJNI/gKsgVdghvCMcg8YCzHnavMB4YDKpKOKCHzt+4yyJ+AT8B3kD+gQYYfKUNCrpKkIkFFsfgMsC+YGAj9UaKoG2AHfgL8gHwS91wDA2IV/qlrZPYqwRlkVAHbaEcIcDTzbestmS6zXx2KtgUaAQsqlslQjpwnACv0gMNNYxFISc0HvVJgZsDNRZSBeg8yTZyArb30Dsn5wMbQ6bAC8eJHTgXYg40B6K4N8rpqiFcitV6n2FKvNS8rY4wUAQSXWtZVBQDll4M5mXD8ECXYoClK0hpyBPLrqQg0E5KSiyiVsfg2yytbJXmCoUdtPflJ7/gr8BiZ1kd8C2IAsiz4wru1kqQeSKFrd7gd6U6YHwH7lqZINTVFpvPgm3UpVYZkdxGzDZB0xc48Fz9mq8Bnlyk3uwmXR8SgL/AyVVWSTdHeMzbMTWGjMpriP2kGzumUEamIwe7/J7pv03Tak0q5Ndsfgjp0RNiUqJx5iYYbZYuXMbdkILDXWYtgNXjY0r6jsBF3FC6fV7R03rd9nJ3zHvZ0VmBotF6L3A+Bi7J6X5VR9H/QAtJaf+TzpIdG3/QNA6wUwpYaMxgAAAABJRU5ErkJggg=="
            />
          </a>
          <a href="https://www.facebook.com/TecNMZongolica/" target="_blank">
            <img
              className="icons"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiNJREFUSEuNlg1x20AQhb9FUAhJEbRBUENwEURBEAeBZQR1ENRBkJRBILgMbAYtgu3c3km39yOlmvFII93tz3tv31mYLwEU0i2/T0/+c7NmaRPI6lr7KAgabpb/vy9X0HLVFk0G0G/A1/BL+87AWeBN4VcIYEWUzcbd/YoszBbhByq3H5R+AZ6AtxjLtyodiOKiI+jjtCFDtII1HNUS+W7Cc00yHIHHVciXhfCMskvUzZrxKAVYXmdG20BXgZ0aHDOLIyp7p8DvGa6WgwvCTVctwl/USL4UYhIsgSM5cPI5w5t5GYCfLVFzgy9BUU6yGyCoawOyyUKwzuYuPAcnQe9XpH4AGVOCLcrryky8AIMR7mAO2v6Soa1qEg4oYwo6QsK9kaa9OCPcTcYwFdIOa0nyARiTQjLuHYfxQ+w7qLibO4hryvnxs/eeuCgRi+OQ5iBuDuzfFKvi+3bay4x/QD55qwB+J2spODgB9x03LYaxChTqsc5zg/aUSXYVFzJtAnmSk/b7HmUJHhBO5sQVviVMnsBVFaUO4vorcDsVXpwHAlul1vfcvKkoy5T9whzEIZuKa8QhHFFvdj6BjAmWkGhf4R7yPQM7n7hVSPwaCU9XCtR0kOH1xJbhHQelj9uBE617ku5Sgmuy6HC6Ne7/0RCFDYPARoV3VIJfBXEMqBlcGLKTs+5qIhePzM4xvTzJjRt5ZUYOOl7QGai2/fqPRuldtv4f7efuIHEzPlsAAAAASUVORK5CYII="
            />
          </a>
          
          
                    <p><strong>© 2022 Todos los Derechos son Reservado ITSZ</strong></p>
                
        </div>
        <div></div>
         */}

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          />
          <link rel="stylesheet" href="https://boxicons.com/?query=home" />

          <div className="container-imgs">
            <a
              className="tec"
              href="https://zongolica.tecnm.mx/TecNM/"
              target="_blank"
            >
             <img
          className="tec" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAilJREFUSEutlT1OHEEQhb+SOMD6BDYZGSZ24CV2gJB8EufmRxzCR3BKYGLGJ4AhI9vU2R7AcqGu/qvu6YHEE6x6+6feq1evukUAJXxpVCds1q2U/69srXvyWYtXf9aDjqEWAVtCYlwK+TfoblDuU8RTkH3OvYRYIdoKESV6BI6H9FyOghZ5BX1UOOnZxgzaGlyhXPp5F2hOYwP35Urja+DKE3MS2ZYPCA8om0HdZ5CtAQgT6jMMWls2e5ATQXexriCdi26Bs5ab/ZsVtlgA+zYgk6DHAweGGOdelzwOAe4bC0b0WWCrcAB8EvircBdABCZd1MoOnQJToOZrsAN93xV2JjI/QPiB8jVJd4FyY5ks5LIdO4TDoKW3aZYtY8wIW9TseIZwmywTiO1ReZdsGuo1mevaXrXYvsiaDrisile+AL+c359Rjrzt3TiWJcVeApghBteG8B2Vb6B/gGuQn9W+jbC57mH51Qw0pRydFjE/CvxTeHIhG8blarPYTZGdwvF0AfBNN7geajvnc1EgU2KlBraqiXWuSWaaJZYEloSw3ZFYAcgSpYUkhWk3+HKg3Id9k2ZgZ5ZOogoweBRi4zuJF7dAXvYWaTY1yFXr4ii7hBxOZ+eScwswcEMx8egh8tIt8mwbw9k0ngrd+Ln2SK2d9/tQvK5gAr/j5di9aN3NWo75oGt71jJrnLDG1Gde9Us1HTR9Dzb05P+ZFO+i/plZCltc9Aa6l/QFLSn0IkqQuTEAAAAASUVORK5CYII="
          />
              
            </a>

            <a
              className="icons"
              href="https://www.facebook.com/TecNMZongolica/"
              target="_blank"
            >
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>

            <a
              className="icons"
              href="https://instagram.com/itszongolica?igshid=OGQ2MjdiOTE="
              target="_blank"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>

            <p>
              <strong>© 2022 Todos los Derechos son Reservados ITSZ</strong>
            </p>
          </div>
        </footer>
      </form>
    </>
  );
};

export default Footer;
