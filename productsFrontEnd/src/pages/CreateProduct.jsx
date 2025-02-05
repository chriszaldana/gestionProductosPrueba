import { Link } from 'react-router-dom'
import { createProductApi} from '../api/httpRequest'
import { useState, useContext } from 'react'
import { MyAppContext } from '../context/MyAppContext'


const CreateProduct = () => {

    const {user, token} = useContext(MyAppContext) 

    const [formData, setFormData] = useState({
        name: '',
        user_id: user.id,
        description: '',
        price: '',
        stock: ''
    })


    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
            })
        )
        
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Convertimos el precio a entero
            const productData = {
                name: formData.name,
                user_id: formData.user_id,
                description: formData.description,
                price: parseInt(formData.price) || 0,
                stock: parseInt(formData.stock) || 0
            }
            console.log("Enviando producto: ", productData);

            const response = await createProductApi(productData, token)
            console.log("Respuesta de API: ",response);
            alert('Producto creado con éxito');
            setFormData(({
                name:"", 
                user_id: formData.user_id, 
                description: "", 
                price: "", 
                stock: "" 
            }));//Limpiar formulario
        } catch (error) {
            console.error("Error creando el producto: ",error);
        }
    }

  return (
    <div className="container mt-5">
        <h1>Crear Producto</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripción</label>
            <input type="text" 
            className="form-control" 
            id="description" 
            value={formData.description}
            onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="price" className="form-label">Precio</label>
            <input 
            type="number" 
            className="form-control" 
            id="price" 
            value={formData.price}
            onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="price" className="form-label">Stock</label>
            <input 
            type="number" 
            className="form-control" 
            id="stock" 
            value={formData.stock}
            onChange={handleChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">Crear</button>
            <Link to={'/'} className="btn btn-danger ms-2">Cancelar</Link>
        </form>
    </div>
  )
}

export default CreateProduct