/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import LoginForm from './LoginForm';

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth < 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
const loginURl = '/register-page';
  return (
    <>
      <div
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pizzapalacelogo.jpg") + ")",
                    }}
        className="page-header landingheader"
        data-parallax={true}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
<h1>Welcome to Pizza Palace!</h1>
<h2 > Please <a href={loginURl}>Login</a> or Order as a guest</h2>
            <br />
          </div>
        </Container>
        
      </div>


    </>
  );
}

export default LandingPageHeader;
