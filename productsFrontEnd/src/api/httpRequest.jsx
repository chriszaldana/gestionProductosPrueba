import axios from 'axios';

const token = '4|UkrrJHm1NQxcXvqJVrHTII414UfTiAPYc6fDxJYjef7db278';

export const getUsersApi = async () => {
  const url = 'http://127.0.0.1:8000/api/user';
  const response = await axios.get(url,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  console.log("Usuario autenticado:",response.data.user);
  return response.data.user;
}

export const getProductsApi = async () => {
  const url = 'http://127.0.0.1:8000/api/products';
  const response = await axios.get(url,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(response.data);
  return response.data;
}

export const createProductApi = async (product) => {
  const url = 'http://127.0.0.1:8000/api/addProduct';
  const response = await axios.post(url, product, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  console.log(response.data);
  return response.data;
}