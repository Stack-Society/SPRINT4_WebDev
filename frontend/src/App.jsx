import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./routes/Home"
import Footer from "./routes/Error"

import "./index.css"

function App() {


  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App