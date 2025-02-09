import { useContext, useEffect, useState } from "react"
import { getProductsApi } from '../api/httpRequest'
import { Link } from 'react-router-dom'
import { MyAppContext } from "../context/MyAppContext"

const Home = () => {
    const [products, setProducts] = useState([])
    const {token} = useContext(MyAppContext)

    useEffect(() => {
      const getProducts = async () => {
        const response = await getProductsApi(token)
        setProducts(response)
      }
      getProducts()
    }, [])
    
      return (
        <>
         <h1>Gestion de Inventario de suministros Orange House</h1>
         <Link to={'/addproduct'} className="btn btn-success mt-4"> Add a product</Link>
        {
          products.map((product)=>(
              <div key={product.id} className="card mt-5">
                <div className="card-header">
                  {product.name}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.description}</h5>
                  <p className="card-text">{product.price}</p>
                  <Link to={'/editProduct'} className="btn btn-warning me-2">Editar</Link>
                  <Link to={'/'} className="btn btn-danger me-2">Eliminar</Link>
                </div>
              </div>
          ))
        }
          
        </>
      )
}

export default Home