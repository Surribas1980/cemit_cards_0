import {peticionUsersToApis as users} from "./datos/datos.peticioneshttps.js";
import { nomeAtributo as atr} from "./datos/datos.js";
import {pintarLista} from "./views/listaUsuarios.js";
import {insertEventVerListInMovil as eventoLista,refDoc} from "./helpers.js";

const main = async () =>{

  const datosUsers = await users();

  if(datosUsers !== undefined){
  
    refDoc.borra(atr.gifCar)
    pintarLista(datosUsers);
    eventoLista(datosUsers.randomUser.info.results - 1);
  }
 
 
}

main()




  

