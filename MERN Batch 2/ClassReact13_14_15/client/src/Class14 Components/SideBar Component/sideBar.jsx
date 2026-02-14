import React from "react";
import styles from './sideBar.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBarComponent({textChange}){

console.log("now the text is in Side bar component: ", textChange)

// const [count, setCount] = useState(10)
const navigate = useNavigate()


const navigateToHeader = ()=>{
    navigate('/headerPage')
}
const navigateToSideBar = ()=>{
    navigate('/headerPage')
}

    return(
    <div className={styles.container}>
        <div >
            Hii this is {textChange} Component
        </div>
<div className={styles.chnager}>
        {/* <button onClick={()=>clickme()}>
            Counter me
        </button> */}


        <div onClick={()=>navigateToHeader()}>Header Page</div>
        <div onClick={()=>navigateToSideBar()}>Side Bar Page</div>



</div>
    </div>
    )

}

export default SideBarComponent