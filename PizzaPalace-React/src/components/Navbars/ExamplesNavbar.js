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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import AuthService from "../../views/services/auth.service"
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ExamplesNavbar() {
const user=AuthService.getCurrentUser();

const route= window.location.pathname


  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          {user? 
            <NavbarBrand
           onClick={()=>{console.log("HOLY CRAP ONCLICK CALLED");AuthService.logout()}}
            data-placement="bottom"
            to="/landing-page"
            title="Coded by Creative Tim"
            tag={Link}>
            Logout
            </NavbarBrand> 
            

            :
            <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Login/profile ExamplesNavbar
          </NavbarBrand>
          
          }
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        { route==="/landing-page"? "":
              <NavbarBrand
              className="justify-content-right"
              tag={Link}
              to="/login-page"> Go to Order Page</NavbarBrand>
            }
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >



{user?
            <NavbarBrand
            data-placement="bottom"
            title="Coded by Creative Tim"
            tag={Link}
              to="/profile-page"
              >
                <i className="nc-icon nc-book-bookmark" /> View Profile
              
            </NavbarBrand>:""
            }

<NavbarBrand
            data-placement="bottom"
            title="Coded by Creative Tim"
            tag={Link}
              to="/shopping-cart"
              >
                <i className="nc-icon nc-book-bookmark" /> Go To Cart
              
            </NavbarBrand>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
