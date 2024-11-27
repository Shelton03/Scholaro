import React, {useState} from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
import { api_simulation_data } from "../data/data";

export let specific_data
const Specific = () =>{

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const listName = searchParams.get('listName')
    const relevant_data = api_simulation_data[listName]
    const name = Number(searchParams.get('name'))
    specific_data = relevant_data[name]

    //The puncline is at the bottom just wait and you will laugh
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    const style = {
      backgroundColor: isHovered ? "beige" : "#F5F7FC",
      border: isHovered ? "2px solid black" : "2px solid blue",
      cursor: "pointer",
      margin: "10px",
      borderRadius:"20px", 
      padding:"2px 10px"
    };

    //The componnt for adding specific data of the scholarships
    return (
        
<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{padding: "30px", marginTop:"100px", width:"80%", backgroundColor: "#F5F7FC"}}>
            <h1 style ={{marginTop: "10px", fontSize: "2em"}}>{specific_data.name}</h1>
            <hr/>
            <h1 style={{fontSize:"30px", color:"blue"}}>{specific_data.amount}</h1>
            <p>Opens: {specific_data.opens}</p>
            <p>Closes: {specific_data.closes}</p>
            <br/>
            <h1 style={{color:"blue"}}>About:</h1>
            <p>{specific_data.about}</p>
            <br/>
            <h1 style={{color:"blue"}}>Eligibility:</h1>
            <hr/>
            <ol>{specific_data.eligibility.map(item => (<li>🔑{item}</li>))}</ol>
            <hr/>
            <br/>
            <h1 style={{color:"blue"}}>Requirements:</h1>
            <hr/>
            <ol>{specific_data.requirements.map(item => (<li>🎓{item}</li>))}</ol>
            <hr/>
            <br/>
            <p>🏆Merit: {specific_data.merit}</p>
            <p>🚻Need: {specific_data.need}</p>
            <p>📕Essay: {specific_data.essay}</p>
            <br></br>
            <button onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}style ={style}onClick={()=> navigate("/Checklist?name=" + name + "&listName=" + listName)}>Application Checklist</button>
        </div>
   
</div>
)}
export default Specific