import React from 'react'
import Item from './Item'
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
  const Meatlovers = ["pepperoni","sausage","bacon","chicken","onions","bananas","tomatoes","olives"]



const Items = (props) => {
    const [showItem, setShowItem] = React.useState(false);
    const toggle = () => {console.log("toggle called"); setShowItem(!showItem); console.log("showItem=" + showItem)} ;
    const stringy = "stttttttttttttttt"
    function closeModal(){
        setShowItem(!showItem)
    }
    return (
        <Row>
                          <Col md="3">


                          <Item name = "pizza" toggle={toggle} toppings={Meatlovers}/>  
             
             
             
              </Col>
              <Col md="3">

              <Item name = "Sub" toggle={toggle} toppings={Meatlovers}/>  
              </Col>

              <Col md="3">
              <Item name = "pasta" toggle={toggle} toppings={Meatlovers}/>  
              </Col>


              <Col md="3">
              <div onClick={() => {console.log("clicked")}} >
              <Item name = "salad"  toggle={toggle} toppings={Meatlovers}/>  
              </div>
              </Col>
              <SelectedItemModal onClose={closeModal} stringy= {stringy} show={showItem} />

        </Row>
        
    )
}

export default Items
