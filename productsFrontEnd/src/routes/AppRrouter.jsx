import { Routes, Route } from "react-router-dom"
import CreateProduct from "../pages/CreateProduct"
import Home from "../pages/Home"
// import EditProduct from "../pages/EditProduct"
import { MyAppProvider } from "../context/MyAppContext"
import Navbar from "../pages/components/Navbar"
import Register from "../pages/Register"
import Login from "../pages/Login"


const AppRrouter = () => {
  return (
    <>
    <MyAppProvider>
        <Routes>
          <Route path="/" element = {<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="/register" element = {<Register/>} />
            <Route path="/login" element = {<Login/>}/>
            <Route path="/addProduct" element={<CreateProduct/>} />
            {/* <Route path="/editProduct" element={<EditProduct/>} /> */}
          </Route>
           
        </Routes>
    </MyAppProvider>
       

    </>
  )
}

export default AppRrouter