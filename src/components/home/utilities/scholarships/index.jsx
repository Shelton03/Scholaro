import React, { useEffect, useState } from 'react'
import { useNavigate, Link , Navigate } from 'react-router-dom';


const Scholarship = () => {
    const navigate = useNavigate()

       

    return (
        <div style={{backgroundColor:"rgb(26,26,49)",
                    paddingTop:'70px',
                    paddingBottom:'50px'}} className='text-2xl font-bold pt-14'>

            <button
            name="undergraduate"
             style={{backgroundColor:'rgb(79,70,229)',
                           height:'200px',
                           width:'200px',
                           borderRadius:'100%',
                           border:'1px solid #000',
                           color:'black',
                           display:'block',
                           margin:'auto',
                           
                           }}

            onClick={(event) => 
                {
                navigate("/List?name=undergraduate")}}
                           >
                    <b>Undergraduate</b>
            </button>

            <br/>

            <button
            name ="postgraduate"
            style={{backgroundColor:'rgb(79,70,229)',
                            height:'200px',
                            width:'200px',
                            borderRadius:'100%',
                            border:'1px solid #000',
                            color:'black',
                            display:'block',
                            margin:'auto',
                           }}

            onClick={(event) => 
                        {
                            navigate("/List?name=postgraduate")}}
          
                           >
                    <b>Post Graduate</b>
            </button>
            
        </div>
    )
}

export default Scholarship