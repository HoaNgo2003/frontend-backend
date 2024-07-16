import axios from "axios";
export const jwt = localStorage.getItem("jwt")
export const API_BASE_URL = "http://localhost:3001"
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers:{
    "Authorization": `Bearer ${jwt}`,
    "Content-Type":'application/json'
  }
})