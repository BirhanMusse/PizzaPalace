import React from 'react'
import ShoppingCartTotal from './ShoppingCartTotal.js';

const ShoppingCart = () => {
    return (
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
    )
}

export default ShoppingCart
