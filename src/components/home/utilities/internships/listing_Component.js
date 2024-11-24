import React from "react";
import reactDOM from "react-dom/client"
import { useNavigate, Link , Navigate } from 'react-router-dom'


//this needs to be fixed
const ListComponent = (props) =>{
    const navigate = useNavigate()

     
    return(
        <div style={{backgroundColor:'rgb(26,26,49)'}}>
                      
            <button
        
                             style={{
                                backgroundColor:'rgb(79,70,229)',
                                       height:'200px',
                                       width:'200px',
                                       borderRadius:'100%',
                                       border:'1px solid #000',
                                       color:'black',
                                       display:'block',
                                       margin:'auto',
                                    }}

                        onClick={() => {navigate("/Specific?name=" + props.id)}}
                                       >
                                <b>{props.name}</b>
                        </button>
            
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