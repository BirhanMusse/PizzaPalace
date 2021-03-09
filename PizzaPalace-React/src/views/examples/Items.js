import React from 'react'
import Item from './Item'
import SelectedItemModal from './SelectedItemModal'
import MockItems from '../../mockData/Mock-Items'
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
  const getItems = MockItems;


const Items = (props) => {
    const [selectedItem, setSelectedItem] = React.useState();
    const [showItem, setShowItem] = React.useState(false);
    const toggle = () => {console.log("toggle called"); setShowItem(!showItem); console.log("showItem=" + showItem)} ;
    const thisItem = ()=>{console.log("Item selected")};
    const onClick = (item)=> {toggle();thisItem();}
    function closeModal(){
        setShowItem(!showItem)
    }
    return (
        <div>
        <Row>
            { getItems.map((item)=> {return(props.title===item.category ?
            
            
            
<Col md="3">
                          <Item item={item} name = {item.name} onClick={onClick(item)} toppings={Meatlovers}/>  
              </Col> : 
            "")
        
        
        
        }
              )
            }

        </Row>
        <SelectedItemModal onClose={closeModal} show={showItem} />

        </div>
        
    )
}

export default Items
