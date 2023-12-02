import './menu.css'
import arrowDown from './assets/arrow-down.svg'
import arrowUp from "./assets/arrow-up.svg";
import { useState } from 'react';

function Menu({title = 'Title',inputForm }){
    let [arrowDirection,setArrowDirection] = useState(true)

     function handleArrowImg() {
       setArrowDirection(!arrowDirection);
     }

    return (
    <>
    <div className="menu-container"> 
    <div className='menu'> 
    <span>{title}</span><img src={arrowDirection ? arrowUp : arrowDown} onClick={handleArrowImg}></img>
    </div>
    {arrowDirection && <> {inputForm} </> }
    </div>
    </>
)
}

export default Menu