import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./header"
import Introduction from "./introduction"
import Skills from "./skills"
import Contact from "./contact"

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
        <Header />
        <Introduction />
        <Skills />
        <Contact />
        </>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
