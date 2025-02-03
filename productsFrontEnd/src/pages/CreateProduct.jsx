import { Link } from 'react-router-dom'
import { createProductApi, getUsersApi } from '../api/httpRequest'
import { useState, useEffect } from 'react'


const CreateProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        user_id: null,
        description: '',
        price: '',
        stock: ''
    })

    useEffect(() => {
        
        const fetchUser = async () => {
            try {
                const user = await getUsersApi();
                if (user && user.id){
                    console.log("Usuario autenticado:", user.id);
                    setFormData(prevState => ({
                        ...prevState,
                        user_id: user.id
                    }))
                }else{
                    console.error("Usuario no autenticado");
                }
                
            } catch (error) {
                console.error("Error obteniendo el usuario:", error);
            }
            
        }
        fetchUser();

    }, [])

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

            const response = await createProductApi(productData)
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
            <Link to={'/'} className="btn btn-success ms-2">Cancelar</Link>
        </form>
    </div>
  )
}

export default CreateProduct