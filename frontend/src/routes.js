import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from './pages/Chat'
import Home from './pages/Home'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/chat' element={<Chat/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}