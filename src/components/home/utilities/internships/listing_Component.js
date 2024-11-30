import React from "react";
import reactDOM from "react-dom/client"
import { useNavigate, Link , Navigate } from 'react-router-dom'


//this needs to be fixed
const ListComponent = (props) =>{
    const navigate = useNavigate()

     
    return(

        <div > 
                  
           {props.type === "scholarship" ?   <div className="populating-button"
                        onClick={() => {navigate("/Specific?name=" + props.id +"&listName=" + props.listName)}}>

                        <h2 style={{fontSize:"2em", color:"purple"}}>{props.amount}</h2>
                        <hr style={{borderTop: "1.5px dotted purple"}}/>

                        <h1 style = {{fontSize: "2em", marginTop: "25px", color:"purple"}}>{props.name}</h1>
                        <hr style={{borderTop: "1.5px dotted purple"}}/>
                        <p className="deadline-paragraph" style={{color:"blue"}}><span style={{color:"purple"}}>Opens: </span>{props.opens}</p>
                        <p style={{color:"blue"}}><span style={{color:"purple"}}>Closes:</span> {props.closes}</p>
                        <hr style={{marginTop: "20px", borderTop: "1.5px dotted purple"}}/>

                        <div style={{marginTop: "20px"}}>
                                <p style={{color:"blue"}}>🏆<span style={{color:"purple"}}>Merit Based:</span> {props.merit}</p>
                                <p style={{color:"blue"}}>🚻<span style={{color:"purple"}}>Need Based:</span> {props.need}</p>
                        </div>

            </div> :  <div className="populating-button"
                        onClick={() => {navigate("/Specific?name=" + props.id +"&listName=" + props.listName)}}>
                        <h1 style = {{fontSize: "2em", marginTop: "0px", color: "purple"}}>{props.name}</h1>
                        <hr style={{borderTop: "1.5px dotted purple"}}/>
                        <p style={{color:"blue"}}className="deadline-paragraph"><span style={{color:"purple"}}>Opens:</span> {props.opens}</p>
                        <p style={{color:"blue"}}> <span style={{color:"purple"}}>Closes:</span> {props.closes}</p>
                        <hr style={{marginTop: "20px", borderTop: "1.5px dotted purple"}}/>

                        <div style={{marginTop: "20px"}}>
                                <p style ={{color:"blue"}}>🎯<span style={{color:"purple"}}>Location:</span> {props.location}</p>
                                <p style={{color:"blue"}}>⌛<span style={{color:"purple"}}>Duration:</span> {props.duration}</p>
                        </div>

            </div> }
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