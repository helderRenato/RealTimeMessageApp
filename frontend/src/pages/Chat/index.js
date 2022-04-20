import { onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../firebase"
import {collection, addDoc, getDocs} from 'firebase/firestore'
import './style.css'
import { Icon } from '@iconify/react';
import { async } from "@firebase/util"

export default function Chat(){
    const history = useNavigate()
    const userId = auth.currentUser

    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')
    const [chat, setChat] = useState()
    async function LogOut(){
        await auth.signOut()
        history('/')
    }

    async function sendMessage(e){
        e.preventDefault()
        setImage(userId.photoURL)
        try{
            const send = await addDoc(collection(db ,"chat"), {
                message: message, 
                imageURL: image, 
                currentUser: userId.email
            });
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(() => {
        async function getMessage(){
            try{
                const messages = await getDocs(collection(db ,"chat"))
                messages.forEach(element => {
                    console.log(element.data)
                });
            }catch(e){
                console.log(e)
            }
            
        }

        getMessage()
    },[])


    return(
        <>
            <header className="navBar">
                <nav>
                    <div className="logo">
                        LITTLE PROJECT #3
                    </div>
                    <ul>
                        <li><button onClick={LogOut}>Log Out</button></li>
                    </ul>
                </nav>
            </header>

            <div id="chatRoom">
                <div className="title">
                    <h1>ChatRoom</h1> 
                    <Icon icon="bxs:message" height={"30px"}/>
                </div>
                
                <div id="messageSpace">
                    <div className = "myMessage">
                        <img src={userId.photoURL} className="author"></img>
                        <p className="message">hey</p>
                    </div>
                    
                    <div className = "otherMessage">
                        <img src={userId.photoURL} className="author"></img>
                        <p className="message">fuck u and sat ur bitch ass down</p>
                    </div>
                </div>

                <div id = "sendMessage">
                    <form onSubmit={sendMessage}>
                        <input type={"text"} placeholder="Little Project #3" onChange={event => setMessage(event.target.value)}/>
                        <button type="submit"><Icon icon="akar-icons:send" height={"20px"}/></button>
                    </form>
                </div>

            </div>
        </>
    )
}