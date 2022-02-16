import {HashRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../componets/Navbar"
import { Home } from "../pages/Home"


function RoutesContainer() {
    return (
      
            <HashRouter>
              
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                   
                </Routes>
              
            </HashRouter>
       
    )
}

export { RoutesContainer }