import React from "react";


const CheckItem = (props) => {
    return (
    <div className="Todo-item">

            <input type="checkbox"/>  
            <span>{props.text}</span>

        </div>)

    
}
export default CheckItem
