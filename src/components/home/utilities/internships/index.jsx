import React, { useState } from 'react'
import { useNavigate, Link , Navigate } from 'react-router-dom'


const Internship = () => {
       const navigate = useNavigate()
      

    return (
        <div style={{backgroundColor:"rgb(26,26,49)",
                    paddingTop:'70px',
                    paddingBottom:'50px'}} className='text-2xl font-bold pt-14'>

            <button
            name="IndustrialAttachment"
            style={{backgroundColor:'rgb(79,70,229)',
                           height:'200px',
                           width:'200px',
                           borderRadius:'100%',
                           border:'1px solid #000',
                           color:'black',
                           display:'block',
                           margin:'auto',
                           
                           }}
            onClick={() => {
                navigate("/List?name=industrialAttachment")}}    
            
                           >
                    <b>Industrial Attachments</b>
            </button>

            <br/>

            <button
            name ="apprenticeships"
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
                            navigate("/List?name=apprenticeship")}}

                           >
                    <b>Apprenticeships</b>
            </button>
            
        </div>
    )
}

export default Internship