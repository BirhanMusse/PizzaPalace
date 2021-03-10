import React, {useEffect} from 'react'
import Toppings from '../../mockData/Mock-Toppings';
const func = () => console.log("Button Clicked")
const SelectedTopping = (props) => {
    const [isChecked, setIsChecked]= React.useState(false);


useEffect( () => {
    props.item.toppings.map((topping,index)=>{if(topping.name==props.name){console.log("TRUE");setIsChecked(true);}});

}, []);

const updateTotal = () => {
    props.selectedToppings.map((topping)=> {console.log(topping.price)}

    )
}

  const  toggleCheckboxChange = () => {
    //    const { handleCheckboxChange, label } = this.props;
    
    setIsChecked(!isChecked);
    
        props.handleCheckboxChange(props.label);
        updateTotal();
      }




    return (
<div class="container">
            <div class="row justify-content-center">
                <div class="col-6 topping">
                {props.name} $({props.price})
                </div>
                <div class="col-2 topping">
                <input 
                id={props.topping} 
                onClick={()=>console.log("clicked")} 
                type="checkbox" 
                name="topping"
                checked={isChecked}
                onChange={toggleCheckboxChange}
                value={props.topping} />
                </div>
            </div>
            
        </div>
    )
}

export default SelectedTopping
