import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

const Home = () => {
    return <h1>Home page</h1>
}
const About = () => {
    return <h1>About page</h1>
}
const NotFound = () => {
    return <h1>404 page</h1>
}

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
