import React from "react"
import { Icon } from '@iconify/react'
import './style.css'
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../firebase"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const history = useNavigate()

    async function Login(){
        await signInWithPopup(auth, googleProvider)
        history('/chat')
    }

    return(
        <>
            <header className="navBar">
                <div className="title">LITTLE PROJECT #3</div>
            </header>

            <div className="container">
                <div className='components'>
                    <div className='SignInGoogle' onClick={Login}>
                        <Icon icon="flat-color-icons:google" height={"30px"} className="icon"/>
                        <p>Sign in with google</p>
                    </div>
                </div>
            </div>
        </>
    )
}