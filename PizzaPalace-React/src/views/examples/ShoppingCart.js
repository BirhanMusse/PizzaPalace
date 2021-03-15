import React from 'react'
import ShoppingCartTotal from './ShoppingCartTotal.js';
import AuthService from '../services/auth.service'
import GuestCartService from '../services/guest-cart.service'
const ShoppingCart = () => {
  const user = AuthService.getCurrentUser();
  console.log("YOOO")
  console.log("")
  console.log("")
  console.log(GuestCartService.getItems())
  console.log(JSON.parse(localStorage.getItem("items")))
  console.log("")
  console.log("")
  console.log(GuestCartService.getItems().map((item)=> {console.log(item)}))
  console.log(JSON.parse(localStorage.getItem("items")).map((item)=> {console.log(item)}))
  console.log("")
  console.log("")

    return (
      <div>



    {user?
        <div>
        <table class="table">
          <tr>
            <th>Pizza custom</th>
            <th>toppings</th>
            <th>price</th>
          </tr>
          {JSON.parse(localStorage.getItem("items")).map((item)=> { return(
          <tr>
          <td>January</td>
          <td>{item.toppings.map((topping, index)=>{return ((index==0?"":", ")+ topping.name)})}</td>
          <td>${item.price}</td>
        </tr>
           ) })}
        </table>
      <div>Total: $350</div>
      </div>
    
    
    :
    
    <div>
      <table class="table">
        <tr>
          <th>Pizza custom</th>
          <th>toppings</th>
          <th>price</th>
        </tr>
        <tr>
          <td>January</td>
          <td>pepperoni, sausage, onions, jalepenos, bacon, pepperoni, sausage, onions, jalepenos, bacon</td>
          <td>$100</td>
        </tr>
      </table>
    <div>Total: $350</div>
    </div>
    }

      
              </div>

    )
}

export default ShoppingCart
