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

const DefaultToppings = props.item.toppings;
const [selectedToppings,setSelectedToppings] = React.useState(DefaultToppings);
const [total, setTotal] = React.useState(props.item.price);


const toggleCheckbox = label => {
var exists = false;
selectedToppings.map((topping)=>{console.log(label);
    console.log(topping)
    console.log(label==topping);
if(label.name==topping.name){
exists=true;
}
})
console.log("")
    if (exists) {
        var arr = [...selectedToppings];
        var index = arr.indexOf(label);
        arr.splice(index,1);
        setSelectedToppings(arr);
        setTotal(total-label.price);
        console.log("selectToppings CAlled")
        console.log(selectedToppings)
    } else {
        var arr = [...selectedToppings];
        arr.push(label);
        setSelectedToppings(arr);
        setTotal(total+label.price);
        console.log("selectToppings ELSEELSE CAlled")
    }
    console.log(selectedToppings)

  }

 const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of selectedToppings) {
      console.log(checkbox, 'is selected.');
    }
    console.log("total is "+total)
  }



    return (
        <form onSubmit={(e)=> {e.preventDefault(); handleFormSubmit(e)}}> 
            <div class= "container">
            <div class="row justify-content-center"><h2>{props.item.name} $({total})</h2></div>
            <div class="row justify-content-center">


{ Toppings.map((currentTopping,index)=> {return (
<SelectedTopping
 item={props.item} 
 name={currentTopping.name} 
 price ={currentTopping.price}
 handleCheckboxChange={toggleCheckbox}
 label={currentTopping}
 selectedToppings={selectedToppings}/>
);})}
           
            </div>
                <div class="row col-5 justify-content-center">
                total : {total}         
                </div>
            
            </div>
            <input type="submit" value="Submit"/>
            </form>
    )
}

export default SelectedItem
