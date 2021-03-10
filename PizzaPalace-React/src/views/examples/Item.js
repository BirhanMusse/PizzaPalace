import React from 'react'
import SelectedItemModal from './SelectedItemModal'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";
import Container from 'reactstrap/lib/Container';

const                 name="lol";
const Meatlovers= ["pepperoni","sausage","bacon","chicken","onions"]

const Item = (props) => {
  const [showItem, setShowItem] = React.useState(false);
const toggle = () => {; setShowItem(!showItem); console.log("showItem=" + showItem)} ;
function closeModal(){
  setShowItem(!showItem)
}
  const toppings = props.toppings.map((toppings,index)=> index==0?toppings:', '+toppings);
  return (

                <div>  
                               <Card className="card-profile card-plain" onClick={toggle}>

                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">{props.name} (${props.item.price})</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    <div class="container">
                      <div class="row justify-content-md-center">
                    {toppings}
                    </div>
                    </div>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              
              <SelectedItemModal item= {props.item} onClose={closeModal} show={showItem} />
</div>
    )
}

export default Item
