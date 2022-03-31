import { onAuthStateChanged } from "firebase/auth"
import React from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import './style.css'

export default function Chat(){
    const history = useNavigate()
    const userId = auth.currentUser

    function LogOut(){
        auth.signOut()
        history('/')
    }

    return(
        <>
            <header className="navBar">
                <nav>
                    <ul>
                        <li>LITTLE PROJECT #3</li>
                    </ul>
                </nav>
            </header>

            <div className="components">
                <div id="chatRoom">
                    <div className="myMessage">
                        <p>Olá, mundo!!</p>
                    </div>

                    <div className="otherMessage">

                    </div>

                    <div className="inputText">
                        <form>
                            <input type={"text"} placeholder="Little Project #3"></input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}