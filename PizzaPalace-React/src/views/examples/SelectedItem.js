import React from 'react'
import { Container, Row } from 'reactstrap';
import SelectedTopping from './SelectedTopping';
import Toppings from '../../mockData/Mock-Toppings';
const Item = 
    {
        id: 8,
        toppings: ["pepperoni","sausage","onions","olives","salami", "mushrooms"],
        category: "Entree",
        cart: null,
        name: 'wings',
        price: 10,
        points: 1,
        specialReq: null
    }


const topy=["pepperoni","sausage","onions","olives","salami", "mushrooms"];
//{Item.toppings.map((topping)=> {return(<div>{topping}</div>);})}
const descrip = ["this pizza has ..."]
const SelectedItem = (props) => {
    // Toppings.forEach((currentToppingt)=> console.log(currentToppingt.name))

    return (
        <div>
            <div class= "container">
            <div class="row justify-content-center"><h2>Item</h2></div>
            <div class="row justify-content-center">
{ Toppings.map((currentTopping)=> {return (<SelectedTopping price = {currentTopping.price} topping={currentTopping.name}/>);})}
           
            </div>
                <div class="row col-5 justify-content-center">
                total         
                </div>
            
            </div>

</div>
    )
}

export default SelectedItem
