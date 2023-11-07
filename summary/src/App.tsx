import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
