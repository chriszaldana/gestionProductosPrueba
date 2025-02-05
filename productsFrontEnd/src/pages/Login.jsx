import { useContext, useState } from "react"
import { loginUser } from "../api/httpRequest"
import { useNavigate } from "react-router-dom"
import { MyAppContext } from "../context/MyAppContext"


const Login = () => {

    const navigate = useNavigate()
    const {login} = useContext(MyAppContext)

    const [loginData, setLoginData] = useState({
        email:'',
        password: ''
    })

    const handleChange = (e) =>{
        const {id, value} = e.target
        setLoginData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const userData = {
            email: loginData.email,
            password: loginData.password
        }

        const response = await loginUser(userData)
        if (response.token) {
            login(response.token)
            navigate('/')
        }else{
            alert('Incorrect credentials')
        }
        

        

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email"
                value={loginData.email}
                onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password"
                value={loginData.password}
                onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login