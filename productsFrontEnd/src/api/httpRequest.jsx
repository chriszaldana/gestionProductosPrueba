import axios from 'axios';


export const getProductsApi = async (token) => {
  const url = 'http://127.0.0.1:8000/api/products';
  const response = await axios.get(url,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(response.data);
  return response.data;
}

export const createProductApi = async (product, token) => {
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

export const updateProductApi = async (product, id, token) => {
  const url = 'http://127.0.0.1:8000/api/updateProduct/{id}';
  const response = await axios.put(url, product, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response.data);
}

export const registerUser = async(user) => {
  const url = 'http://127.0.0.1:8000/api/register'
  const response = await axios.post(url, user)

  return response.data
}

export const loginUser = async (user) => {
  const url = 'http://127.0.0.1:8000/api/login'
  const response = await axios.post(url, user)

  return response.data
}