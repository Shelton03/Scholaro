import React, { useState } from "react";
import { specific_data } from "../../internships/specific";
import CheckItem from "./check_component";


const Checklist = () => {
    


    const reqs = specific_data.requirements
    const states = reqs.map(requirement => 
        {return (
        {requirement:requirement,reqstate:false}
    )})

   function handleChange(id){
       const updated = states.map(state =>{
        if (state.requirement === id){
            state.reqstate = !state.reqstate
           }
       }) 
       return updated }

       
       function findState(requirement){
        states.array.forEach(state => {
            if (state.requirement === requirement.text){
                return state.reqstate}
        });
    }
            
    
    

    const reqCheclist =  reqs.map(requirement => {return (<CheckItem 
        key={requirement}  
        check ={findState(requirement)}
        handleChange ={handleChange}
        text={requirement} 
        id={requirement} />)})


    return (
        <div className='text-2xl font-bold pt-14'>
        {reqCheclist} {console.log(states)}
        <button>
            Add to list of applied
        </button>
        </div>
    )

    }

export default Checklist