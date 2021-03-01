import React from 'react'
import {useState} from 'react'
import SelectedItem from './SelectedItem';

const SelectedItemModal = (props) => {
    const [show, setShow] = useState(props.show)

const close = () => setShow('')
    return (
<div id="myModal" class={show?"topping-modal show":"topping-modal"}>

<div class="topping-modal-content">
  <span onClick={close} class="topping-close">&times;</span>
  <SelectedItem/>
</div>

</div>

    )
}

export default SelectedItemModal
