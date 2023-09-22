import {peticionUsersToApis} from "./datos/datos.peticioneshttps.js";
import { nomeAtributo } from "./datos/datos.js";
import {pintarLista} from "./views/listaUsuarios.js";
import {insertEventVerListInMovil as eventoLista, deletedWithQuerySelector as quitarGif} from "./helpers.js";

const main = async () =>{

  const datosUsers = await peticionUsersToApis();

  if(datosUsers !== undefined){
    quitarGif(nomeAtributo.gifCar)
    pintarLista(datosUsers);
    eventoLista(datosUsers);
  }
 
 
}

main()




  

