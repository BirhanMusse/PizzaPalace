import React from 'react'
import Item from './Item'
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

const Items = () => {

    return (
        <Row>
                          <Col md="3">


                          <Item name = "pizza" toppings={Meatlovers}/>  
             
             
             
              </Col>
              <Col md="3">

              <Item name = "Sub" toppings={Meatlovers}/>  
              </Col>

              <Col md="3">
              <Item name = "pasta" toppings={Meatlovers}/>  
              </Col>

              <Col md="3">
              <Item name = "salad" toppings={Meatlovers}/>  
              </Col>

        </Row>
    )
}

export default Items
