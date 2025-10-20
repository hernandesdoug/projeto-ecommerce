import axios from "axios";

const listaProdutos = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default listaProdutos;