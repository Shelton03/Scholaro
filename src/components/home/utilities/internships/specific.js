import React from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
import { relevant_data } from "./list";

export let specific_data
const Specific = () =>{

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const name = Number(searchParams.get('name'))
    specific_data = relevant_data[name]

    
    

    //The componnt for adding specific data of the scholarships
    return (
        

        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{marginTop:"200px", width:"80%", height:"100px", border:"3px, solid"}}>
            <h1>{specific_data.name}</h1>
            <hr/>
            <p>Opens: {specific_data.opens}</p>
            <p>Closes: {specific_data.closes}</p>
            <br/>
            <h1>Eligibility:</h1>
            <hr/>
            <ol>{specific_data.eligibility.map(item => (<li>{item}</li>))}</ol>
            <br/>
            <h1>Requirements:</h1>
            <hr/>
            <ol>{specific_data.requirements.map(item => (<li>{item}</li>))}</ol>
            <br></br>
            <button onClick={()=> navigate("/Checklist")}>Application Checklist</button>
        </div>
   
</div>
)}
export default Specific