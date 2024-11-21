import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Home = () => {
    const { currentUser } = useAuth()
    
    return (
        <div style={{backgroundColor:"rgb(26,26,49)",
                    paddingTop:'70px',
                    paddingBottom:'50px'}} className='text-2xl font-bold pt-14'>

            <button style={{backgroundColor:'rgb(79,70,229)',
                           height:'200px',
                           width:'200px',
                           borderRadius:'100%',
                           border:'1px solid #000',
                           color:'grey',
                           display:'block',
                           margin:'auto',
                           
                           }}>
                    <b>Scholarships</b>
            </button>

            <br/>

            <button style={{backgroundColor:'rgb(79,70,229)',
                            height:'200px',
                            width:'200px',
                            borderRadius:'100%',
                            border:'1px solid #000',
                            color:'grey',
                            display:'block',
                            margin:'auto',
                           }}>
                    <b>Internships</b>
            </button>

        </div>
    )
}

export default Home