import React,{ useState } from "react";
import styles from './body.module.css'
import SideBarComponent from "../SideBar Component/sideBar";



function BodyComponent({text, changeCity}){
console.log("This Text is inside Body",text)







    return(
    <div className={styles.parentContainer}>
        <div className={styles.container}>
            Hii this is Body Component
        </div>


<div>
          <SideBarComponent textChange={text} />


         
</div>

    </div>
    )

}

export default BodyComponent