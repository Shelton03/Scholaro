import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
            const navigate = useNavigate()
            
        
            return(
                        <div className='home-div'
                                style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr', // Two equal columns
                                height: '100vh',
                                backgroundImage: 'url("/public/background.jpg")'}}>

                        {/* Left Side */}
                        <div className = 'left-side-div' >
                                <p style= {{marginTop:"400px", marginLeft:"70px", fontSize:"20px"}}>WELCOME TO SCHOLARO, YES WE ARE NICE LIKE THAT</p>
                                
                        </div>
                        
                        {/* Right Side */}
                        <div style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='right-side-div'>

                                        <button className='industrial-attachment-button'
                                        name="IndustrialAttachment"
                                                
                                        onClick={() => {
                                        navigate("/List?name=industrialAttachment")}}>
                                        <b>Industrial Attachments</b>
                                        </button><br/>
        
                                        <button  className='apprenticeship-button'
                                                 name ="apprenticeships"
                                               
                                        onClick={(event) => {
                                        navigate("/List?name=apprenticeship")}}>
                                        <b>Apprenticeships</b>
                                        </button>

                                        <button className='undergraduate-button'
                                                name="undergraduate"
                                               
                                        onClick={(event) => {
                                        navigate("/List?name=undergraduate")}}>
                                        <b>Undergraduate Scholarships</b>
                                        </button><br/>
        
                                        <button className='postgraduate-button'
                                                name ="postgraduate"
                                                
                                        onClick={(event) => {
                                        navigate("/List?name=postgraduate")}}>
                                        <b>Post Graduate Scholarships</b>
                                        </button>
                    
                                </div>

                        </div>
        
               </div>
        
            )
        }

export default Home