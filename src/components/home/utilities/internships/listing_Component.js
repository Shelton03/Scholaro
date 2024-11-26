import React from "react";
import reactDOM from "react-dom/client"
import { useNavigate, Link , Navigate } from 'react-router-dom'


//this needs to be fixed
const ListComponent = (props) =>{
    const navigate = useNavigate()

     
    return(
        <div >
                      
            <div className="populating-button"
                        onClick={() => {navigate("/Specific?name=" + props.id)}}>

                       
                        <h2 style={{fontSize:"2em"}}>{props.amount}</h2>
                       
                       <hr style={{borderTop: "1.5px dotted"}}/>

                        <h1 style = {{fontSize: "2em", marginTop: "25px"}}>{props.name}</h1>
                        <hr style={{borderTop: "1.5px dotted"}}/>
                        <p className="deadline-paragraph">opens: {props.opens}</p><p>Closes: {props.closes}</p>
                        <hr style={{marginTop: "20px", borderTop: "1.5px dotted"}}/>

                        <div style={{marginTop: "20px"}}>
                                <p>🏆Merit Based: {props.merit}</p>
                                <p>🚻Need Based: {props.need}</p>
                                <p>📕Essay Required: {props.essay}</p>
                        </div>

            </div>
        </div>
        
    )
}

export default ListComponent


/*style={{
                    alignItems:"center",
                    width: "50%",
                    display: "block",
                    backgroundColor: "rgb(79,70,229)",
                    gap: "32px",
                    padding: "32px",
                    borderRadius: "25px",
                    boxSizing: "border-box"
                    }} */