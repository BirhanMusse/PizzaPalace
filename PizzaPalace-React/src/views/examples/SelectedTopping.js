import React from 'react'

const func = () => console.log("Button Clicked")
const SelectedTopping = (props) => {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 topping">
                {props.topping} $({props.price})
                </div>
                <div class="col-2 topping">
                <input onClick={func} type="checkbox"/>
                </div>
            </div>
            
        </div>
    )
}

export default SelectedTopping
