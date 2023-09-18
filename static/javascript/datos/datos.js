import { urlApi } from "./datos.url.js";
import { peticionUrl } from "./datos.peticioneshttps.js";

const dato = {
  randomUser : async () =>{
    return await peticionUrl(urlApi.RandomUser)
  },
  slingAcademy : async () => {
    return await peticionUrl(urlApi.SlingAcademy)
  }
}

export {
  dato
}