import React from "react";
import { useSearchParams } from "react-router-dom";
import { relevant_data } from "./list";

const Specific = () =>{

    const [searchParams] = useSearchParams()
    const name = Number(searchParams.get('name'))
    const specific_data = relevant_data[name - 1]

    const object_list = <p>{specific_data.name}</p>
    

    
    return (
        <div className='text-2xl font-bold pt-14'>
           {object_list}
        </div>)

}
export default Specific