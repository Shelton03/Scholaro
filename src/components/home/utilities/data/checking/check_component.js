import React, { useState } from "react";


const CheckItem = (props) => {


    return (
    <div className="Todo-item">

            <input checked={props.check} onChange={()=>props.handleChange(props.id)} type="checkbox"/>  
            <span>{props.text}</span>

        </div>)

    
}
export default CheckItem