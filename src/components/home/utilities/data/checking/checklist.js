import React from "react";
import { specific_data } from "../../internships/specific";
import CheckItem from "./check_component";

const Checklist = () => {
    

    const reqs = specific_data.requirements
    const reqCheclist =  reqs.map(requirement => {return (<CheckItem text={requirement} />)})


    return (
        <div className='text-2xl font-bold pt-14'>
        {reqCheclist}
        </div>
    )

    }

export default Checklist