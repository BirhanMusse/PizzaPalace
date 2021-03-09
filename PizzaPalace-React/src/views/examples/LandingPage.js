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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Categories from './Categories';
import SelectedItemModal from "./SelectedItemModal";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  function toggle(){console.log("Langing toggle called")};
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main"
      >

        <div className="section section-dark text-center"
        >
          <Container>
            <h2 className="title">Menu</h2>

<Categories onclick={toggle} title="Entrees"/>
<Categories onclick={toggle} title="Desserts"/>


            {/* <Categories title="Entrees"/> */}

          </Container>
          <a
                          className="btn-round"
                          color="danger"
                          href="shopping-cart"
                          disabled>
        Checkout Shopping Cart
      </a>
        </div>

      </div>
  
      <DemoFooter />
    </>
  );
}

export default LandingPage;
