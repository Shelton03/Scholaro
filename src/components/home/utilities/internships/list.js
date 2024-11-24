import React from "react";
import {api_simulation_data} from "../data/data";
import ListComponent from "./listing_Component";
import { useSearchParams } from "react-router-dom";


export let relevant_data

const List = () => {

    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')
    relevant_data = api_simulation_data[name]


    //the props are either not getting passed properly or something's wrong with the data
    const list = relevant_data.map(result => {return (
        <ListComponent name={result.name} id={result.id} key={result.id}/>
    )})
   
    
            


    return (
        <div className='text-2xl font-bold pt-14'>
           {list}
        </div>
    )




}

export default List
