import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
            const navigate = useNavigate()
            
            
            return (
                <>
                    <div style={{backgroundColor:"rgb(26,26,49)",
                                paddingTop:'70px',
                                paddingBottom:'50px'}} className='text-2xl font-bold pt-14'>
            
                        <button
            
            
                        name="scholarships"
                         style={{backgroundColor:'rgb(79,70,229)',
                                       height:'200px',
                                       width:'200px',
                                       borderRadius:'100%',
                                       border:'1px solid #000',
                                       color:'black',
                                       display:'block',
                                       margin:'auto',
                                       }}

                        onClick={() => navigate('/Scholarships')}
                                       >
                                <b>Scholarships</b>
                        </button>
            
                        <br/>
            
                        <button
                        name ="Internships"
                        style={{backgroundColor:'rgb(79,70,229)',
                                        height:'200px',
                                        width:'200px',
                                        borderRadius:'100%',
                                        border:'1px solid #000',
                                        color:'black',
                                        display:'block',
                                        margin:'auto',
                                       }}
                            onClick={() => navigate('/Internships')}
                                       >
                                <b>Internships</b>
                        </button>
            
                    </div>
                    </>
                )
        }

export default Home