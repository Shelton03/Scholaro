import React from "react";
import {api_simulation_data} from "../data/data";
import ListComponent from "./listing_Component";
import { useSearchParams } from "react-router-dom";


export let relevant_data

const List = () => {

    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')
    relevant_data = api_simulation_data[name]
    console.log(relevant_data)


    
    const list = relevant_data.map(result => {return (
        <ListComponent name={result.name} id={result.id} essay={result.essay} key={result.id} amount={result.amount}
        merit={result.merit} opens={result.opens} listName={name} closes={result.closes} need={result.need} /> 
    )})
   
    
            


    return (
        <>
        <div className='listing-div'>
           {list} 
        </div>
        <footer className="footer">
            lollipop or something like that just seeing how thing goes ohh ohhh ohhh ohhh how arte you good people this is a footer by the way so foot the things alright
        </footer>
        </>
    )




}

export default List
