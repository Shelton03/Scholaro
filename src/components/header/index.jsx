import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} 
                        className='text-sm text-blue-600 underline' style={{color:'rgb(79,70,229)'}}>Logout</button>
                         <br/>
                        <button onClick={() => { navigate('/Applied') } } 
                        className='text-sm text-blue-600 underline' style={{color:'rgb(79,70,229)'}}>Applications</button>
                        <br/>
                        <button onClick={() => { navigate('/Home') } } 
                        className='text-sm text-blue-600 underline' style={{color:'rgb(79,70,229)'}}>Home</button>
                    </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' style={{color:'rgb(79,70,229)'}} to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' style={{color:'rgb(79,70,229)'}} to={'/register'}>Register New Account</Link>
                    </>
            }

        </nav>
    )
}

export default Header