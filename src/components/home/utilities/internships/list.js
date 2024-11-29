import React from "react";
import {api_simulation_data} from "../data/data";
import ListComponent from "./listing_Component";
import { useSearchParams } from "react-router-dom";


export let relevant_data

const List = () => {

    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')
    relevant_data = api_simulation_data[name]
    

    
    const list = relevant_data.map(result => {return (
        <ListComponent name={result.name} id={result.id} type={result.type} essay={result.essay} key={result.id} amount={result.amount}
        merit={result.merit} opens={result.opens} listName={name} closes={result.closes} need={result.need} duration={result.duration}
        location={result.location} /> 
    )})
   
    
            


    return (
        <>
        <div className='listing-div'>
           {list} 
        </div>
        
        </>
    )




}

export default List
