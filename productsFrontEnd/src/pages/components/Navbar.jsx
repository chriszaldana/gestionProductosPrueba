import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { MyAppContext } from "../../context/MyAppContext"
import { logoutUser } from "../../api/httpRequest"

const Navbar = () => {

    const navigate = useNavigate()
    const {token, logout} = useContext(MyAppContext)

    const handleLogOut = async ()  => {
        if (!token) return 
        const response = await logoutUser(token)

        if (response) {
            logout()
            navigate('/')
        }else{
            alert('Error al cerrar sesion')
        }
        

    }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <Link to={'/register'} className="btn btn-success">Register</Link>
      <Link to={'/login'} className="btn btn-success">Login</Link>
      <button onClick={handleLogOut} className="btn btn-success">Logout</button>
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}

export default Navbar