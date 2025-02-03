import { Routes, Route } from "react-router-dom"
import CreateProduct from "../pages/CreateProduct"
import Home from "../pages/Home"


const AppRrouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addProduct" element={<CreateProduct/>} />
        </Routes>

    </>
  )
}

export default AppRrouter