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
const nomeAtributo = {
  gifCar:'imaxen-de-carga'
}

const tituloLista = `<div name="status">STATUS</div>
              <div name="status"></div>
              <div>Usuario
                <!--
                first-name
                email
                -->
              </div>
              <div name="status">Datos persoais
                <!--
                Traballo
                Idade
                -->
              </div>
              
              <div name="status">Num Pedido</div>
              <div name="titulo-gastado">Gastado</div>`
export {
  dato,
  nomeAtributo,
  tituloLista
}