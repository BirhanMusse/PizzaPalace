import React from 'react'
import { Container, Row } from 'reactstrap';
import SelectedTopping from './SelectedTopping';
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
    console.log("called")

    return (
        <div>
            <div class= "container">
            <div class="row justify-content-center"><h2>Item</h2></div>
            <div class="row justify-content-center">
{ Item.toppings.map((currentTopping)=> {return (<SelectedTopping price = {Item.price} topping={currentTopping}/>);})}
           
            </div>
                <div class="row col-5 justify-content-center">
                total         
                </div>
            
            </div>

</div>
    )
}

export default SelectedItem
