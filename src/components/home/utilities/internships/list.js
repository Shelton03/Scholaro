import React from "react";
import {api_simulation_data} from "../data/data";
import listComponent from "./listing_Component";
import { useSearchParams } from "react-router-dom";
import { Result } from "postcss";



const List = () => {

    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')
    const relevant_data = api_simulation_data[name]


    //the props are either not getting passed properly or something's wrong with the data
    const list = relevant_data.map(result => {return (
        <listComponent key={result.id} name={result.name}/>
    )})
   
    
            


    return (
        <div className='text-2xl font-bold pt-14'>
           Hi {console.log()}
            </div>
    )




}

export default List