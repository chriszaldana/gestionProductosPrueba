/* eslint-disable no-unused-vars */
import { useState } from "react"
import { registerUser } from "../api/httpRequest";


const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) =>{
        const {id, value} = e.target;
        setUserData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            //Creamos el objeto con los datos que ha dado el usuario
            const dataUser = {
                name: userData.name,
                email: userData.email,
                password: userData.password
            }

            //Enviamos los datos del usuario a la DB
            const response = await registerUser(dataUser)
            alert('Usuario creado con exito')

            //Limpiamos el formulario
            setUserData(({
                name:'',
                email: '',
                password: ''
            }))
        } catch (error) {
            console.error("Error creando el usuario", error)
        }
    }

  return (
    <div className="container mt-5">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label  className="form-label">Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="name"
                value={userData.name} 
                onChange={handleChange}
                aria-describedby="name"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email"
                value={userData.email}
                onChange={handleChange}
                aria-describedby="email"/>
                <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password"
                value={userData.password}
                onChange={handleChange}
                />
            </div>
            <button type="Register" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Register