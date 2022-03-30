import React from "react";
import { Icon } from '@iconify/react';
import './style.css'

export default function Home(){
    return(
        <>
            <div className="container">
                <div className='components'>

                <div className='SignInGoogle'>
                    <Icon icon="flat-color-icons:google" height={"30px"} className="icon"/>
                    <p>Sign in with google</p>
                </div>

                </div>
            </div>
        </>
    )
}