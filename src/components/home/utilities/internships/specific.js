import React from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
import { relevant_data } from "./list";

export let specific_data
const Specific = () =>{

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const name = Number(searchParams.get('name'))
    specific_data = relevant_data[name]

    const object_list = <p>{specific_data.name}</p> 
    

    
    return (
        <div className='text-2xl font-bold pt-14'>
           {object_list}
           <button onClick={()=> navigate("/Checklist")}>Apply</button>
        </div>)

}
export default Specific