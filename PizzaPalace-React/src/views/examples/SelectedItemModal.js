import React from 'react'
import {useState} from 'react'
import SelectedItem from './SelectedItem';

const SelectedItemModal = (props) => {
    const [show, setShow] = useState(props.show)
const what= props.show +"blaj"
const close = () => setShow('')
const open = () => setShow('show')
    return (
        
<div id="myModal" class={props.show?"topping-modal show":"topping-modal"}>
<div class="topping-modal-content">
  <span onClick={props.onClose} class="topping-close">&times;</span>
  <div class="asasasasasasasasasass" key={props.show}>whaaa {props.show?"a":"b"}</div>

  <SelectedItem/>
</div>

</div>

    )
}

export default SelectedItemModal
