import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
            const navigate = useNavigate()
            
            
            return(
                        <div className='home-div'
                                style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr', // Two equal columns
                                height: '100vh',}}>

                        {/* Left Side */}
                        <div className = 'left-side-div' style={{ backgroundColor: '#ffe4c4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h1 style={{ fontSize: '3rem', color: '#5a4b41' }}>Welcome</h1>
                        </div>
                        
                        {/* Right Side */}
                        <div style={{ backgroundColor: "azure", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='left-side-div'>

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
                                        <b>Undergraduate</b>
                                        </button><br/>
        
                                        <button className='postgraduate-button'
                                                name ="postgraduate"
                                                
                                        onClick={(event) => {
                                        navigate("/List?name=postgraduate")}}>
                                        <b>Post Graduate</b>
                                        </button>
                    
                                </div>

                        </div>
        
               </div>
        
            )
        }

export default Home