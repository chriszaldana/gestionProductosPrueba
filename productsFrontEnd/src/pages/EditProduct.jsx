// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
// import { updateProductApi } from "../api/httpRequest";

// const EditProduct = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     user_id: '',
//     description: '',
//     price: '',
//     stock: ''
//   })

//   useEffect(() => {

//     const fetchProduct = async () =>{
//       try {
//         const product = await updateProductApi();
//         console.log("Producto a editar:", product);
//       } catch (error) {
//         console.error("Error obteniendo el producto:", error);
//       }
//     }
//     fetchProduct();
//   }, [])

  

//   return (
//     <div className='container mt-5'>
//         <h1>Edita tu producto</h1>
//         <form>
//             <div className="mb-3">
//             <label htmlFor="name" className="form-label">Nombre</label>
//             <input 
//             type="text" 
//             className="form-control" 
//             id="name" 
//             />
//             </div>
//             <div className="mb-3">
//             <label htmlFor="description" className="form-label">Descripción</label>
//             <input type="text" 
//             className="form-control" 
//             id="description" 
//             />
//             </div>
//             <div className="mb-3">
//             <label htmlFor="price" className="form-label">Precio</label>
//             <input 
//             type="number" 
//             className="form-control" 
//             id="price" 
//             />
//             </div>
//             <div className="mb-3">
//             <label htmlFor="price" className="form-label">Stock</label>
//             <input 
//             type="number" 
//             className="form-control" 
//             id="stock" 
//             />
//             </div>
//             <button type="submit" className="btn btn-primary">Editar</button>
//             <Link to={'/'} className="btn btn-danger ms-2">Cancelar</Link>
//         </form>
//     </div>
//   )
// }

// export default EditProduct