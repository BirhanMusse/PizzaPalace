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
import AuthService from '../services/auth.service'
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import CheckButton from "react-validation/build/button";


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  const[registerPage, setRegisterPage]=React.useState(false);
  const [email, setEmail]=React.useState("");
  const [username, setUsername]= React.useState("");
  const [password, setPassword]= React.useState("");
  const [loading, setLoading]= React.useState(false);
  const [message, setMessage]= React.useState("");
  const [successful, setSuccessful]=React.useState(false);
  const [confirmPassword, setConfirmPassword]= React.useState("");
  const [checkBtn, setCheckBtn]= React.useState("");

 function onUsernameChange(e) {
   setUsername(e.target.value)
   console.log("UsernameChanged!")
 }

 

 const handleLogin= (e)=> {
  e.preventDefault();

  setMessage("");
  setLoading(true);



    AuthService.login(username, password).then(
      () => {
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setLoading(false);
          setMessage(resMessage);

      }
    );
  
}

 const handleRegister = (e)=> {
  console.log("handle register called")


  
    AuthService.register(
      username,
      email,
      password
    ).then(
      response => {
        setSuccessful(true);
        setMessage(response.data.message)
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setSuccessful(false);
          setMessage(resMessage)

      }
    );
  
}


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
 
  return (

    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/pizzapalacelogo.jpg") + ")",
        }}
      >
        <div className="filter" />

        <Container>
   
          {registerPage?
          
          //Register form
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Register </h3>
                <a onClick={()=> setRegisterPage(!RegisterPage)} class="registerNow">Click here to sign in!</a>
                <button onClick={(e)=>handleRegister(e)}>buttton</button>

                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form  className="register-form">
                  <label>Email</label>
                  <Input 
                  placeholder="Email" 
                  type="text"
                  onChange={(e)=>{setEmail(e.target.value);console.log(email)}}

                  />
                  <label>Username</label>
                  <Input 
                  placeholder="Username" 
                  type="text" 
                  onChange={(e)=>{setUsername(e.target.value);console.log(e.target.value)}}
                  />
                  <label>Password</label>
                  <Input 
                  placeholder="Password" 
                  type="password" 
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                  <label>Confirm Password</label>
                  <Input 
                  placeholder="Confirm Password" 
                  type="password" 
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        
          
          
          :
          //Login form

          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome </h3>
                <a onClick={()=> setRegisterPage(!registerPage)} class="registerNow">Not a member? Click here to register!</a>

                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form onSubmit={(e)=>handleLogin(e)}
                                  className="register-form">
                  <label>Emailll</label>
                  <Input 
                  placeholder="Email" 
                  type="text" 
                  onChange={(e)=>{setUsername(e.target.value)}}

                  />
                  <label>Password</label>
                  <Input 
                  placeholder="Password" 
                  type="password" 
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                  <Button block className="btn-round" color="danger">
                    Login
                  </Button>
                </Form >
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>}
        
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
