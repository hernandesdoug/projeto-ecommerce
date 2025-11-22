import axios from "axios";
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

api.interceptors.request.use( (config) => {
  const token = localStorage.getItem("ecommerce-token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
})



api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        localStorage.removeItem("ecommerce-token");
        const navigate = useNavigate();
        // window.location.href = "/login";
        navigate('/login');
    }
  }
    return Promise.reject(error);
  }
);
export default api;

