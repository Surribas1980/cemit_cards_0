import { dato,nomeAtributo } from "./datos.js";
import {pintarListaDatosUser as dataUsers, pintarLista } from "../views/listaUsuarios.js";
import {deletedWithQuerySelector as quitarGif} from "../helpers.js";

const peticionUrl = async (url) => {
  
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
const peticionUsersToApis = async () => {
    console.log('chegaron os datos: ');

    const datosUsers = {}
    datosUsers.slingAcademy = await dato.slingAcademy();
    datosUsers.randomUser = await dato.randomUser();
    quitarGif(nomeAtributo.gifCar)
    return datosUsers;
   
  }
export {
  peticionUrl,
  peticionUsersToApis
}