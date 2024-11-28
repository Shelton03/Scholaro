import React, { useEffect, useState } from "react";
import CheckItem from "./check_component";
import { useSearchParams } from "react-router-dom";
import { api_simulation_data } from "../data";
import { useAuth } from "../../../../../contexts/authContext";
import { getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase";
import { collection } from "firebase/firestore";

const Checklist = () => {
    
    const {currentUser} = useAuth()
   
    const data = []
    const email = currentUser.email
    const updateList = async () => {
    const docs = await getDocs(collection(db,"users"));
    docs.forEach((doc) => {
        if (doc.data().email === email)
        {
            doc.data().list_of_applied.forEach(program =>
                data.push(program)
            )
            updateDoc(doc.ref,{list_of_applied: data})
    
        }
  });
};

 useEffect(()=> {
    updateList()
 }, [])


    const [searchParams] = useSearchParams()
    const listName = searchParams.get('listName')
    const relevant_data = api_simulation_data[listName]
    const name = searchParams.get('name')
    const specific_data = relevant_data[name]

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
        states.forEach(state => {
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
        <div style={{marginLeft:"50px"}} className='text-2xl font-bold pt-14'>
            <p style={{font:"strong", fontStyle:"italic"}}>Kindly tick on the boxes if you would have submitted the following forms</p>
            <br></br>
        {reqCheclist} 
        <br></br>
        
        <button className="checkinglist" style={{border:"4px solid skyblue", padding:"5px 15px"}}onClick={(e) => {
            e.preventDefault()
            if (states.some(state => state.reqstate === false)){ 
                 alert("Please complete the checklist first")
                } 
            else{
                 if (data.includes(specific_data.name)){
                    alert("You have already applied for this opportunity")
                 }
                 else{
                     data.push(specific_data.name)
                     updateList()
                     alert("Successfully added")
                 }
            }
        }} >
            Add to list of applied
        </button>
        </div>
    )

    }

export default Checklist