import React from "react";
import reactDOM from "react-dom/client"
import { useNavigate, Link , Navigate } from 'react-router-dom'


//this needs to be fixed
const ListComponent = (props) =>{
    const navigate = useNavigate()

     
    return(
        <div style={{backgroundColor:'azure'}}>
                      
            <button
        
                             style={{
                                backgroundColor: "azure",
                                       height:'400px',
                                       width:'200px',
                                    marginTop: "20px",
                                       border:'2px solid yellow',
                                       color:'black',
                                       display:'block',
                                       marginRight: "20px",
                                       borderRadius: "20px",
                                       alignItems: "center",
                                       
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