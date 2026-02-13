import React from "react";
import styles from './firsctReactCode.module.css'
import SecondComponent from "../Second Component/secondComponent";


function NormalComponent(){


    return(
    <div>

        <div className={styles.container}>
            <h1 className="heading">Hii This is Normal Component</h1>

        </div>

            <p>This is First Component and Calling Second Component</p>

            <SecondComponent />


    </div>
    )

}

export default NormalComponent