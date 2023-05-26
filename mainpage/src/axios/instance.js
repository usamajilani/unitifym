import axios from "axios";
// const url = "https://afredubackend.azurewebsites.net" ;
const url = "http://localhost:3500" ;
export const server = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});

export const userRegister = (data) => server.post(`${url}/register`, data);
export const userAuthentication = (data) => server.post(`${url}/auth`, data);
export const userLogOut = (data) => server.post(`${url}/logout`, data);
