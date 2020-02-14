import credentials from '../credentials/index.js'
import userStub from '../default-content/user'
import productsStub from '../default-content/products'

export const getUser = async () => {
  let user = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(response => response.json())
    .catch(error => {
      console.log(error)
      return userStub
    })

  return user
}

export const getProducts = async () => {
  let productList = await fetch('https://coding-challenge-api.aerolab.co/products', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(response => response.json())
    .catch(error => {
      console.log(error)
      return productsStub
    })

  return productList
}

export const getHistory = async () => {
  let history = await fetch('https://coding-challenge-api.aerolab.co/user/history', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(response => response.json())
    .catch(error => {
      console.log(error)
      return []
    })

  return history
}

export const postPoints = async (points) => {
  const addedPoints = await fetch('https://coding-challenge-api.aerolab.co/user/points', {
    method: 'POST',
    withCredentials: true,
    body: JSON.stringify({
      'amount': points
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(res => res.json())
    .catch(error => {
      console.log(error)
      return error
    })

  return addedPoints
}

export const postProduct = async (id) => {
  const redeemedProduct = await fetch('https://coding-challenge-api.aerolab.co/redeem', {
    method: 'POST',
    withCredentials: true,
    body: JSON.stringify({
      'productId': id
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(res => res.json())
    .catch(error => {
      console.log(error)
      return productsStub
    })

  return redeemedProduct
}
