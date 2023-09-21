import {peticionUsersToApis} from "./datos/datos.peticioneshttps.js";
import { nomeAtributo } from "./datos/datos.js";
import {pintarLista} from "./views/listaUsuarios.js";
import {insertEventVerListInMovil as eventoLista, deletedWithQuerySelector as quitarGif} from "./helpers.js";
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
  
    let referenciaSrc = document.querySelectorAll('[src]')[1];
    //let referenciaClase = document.querySelectorAll('[class]')[4];
    let referenciaClase = document.querySelector('[o-nome]');
  
    let imaxenLarge = data.results[2].picture.large;
    let oNome = data.results[2].name.title;
    let oPrimeiroApelido = data.results[2].name.first;
    let oSegundoApelido = data.results[2].name.last;
  
    console.log(data)
  
    /***** MODIFICO OS DATOS DO HTML *****/
  
    referenciaSrc.setAttribute('src',imaxenLarge);
    referenciaClase.textContent = `${oNome} ${oPrimeiroApelido} ${oSegundoApelido}`; 

}


const main = async () =>{

  const datosUsers = await peticionUsersToApis();

  if(datosUsers !== undefined){
    quitarGif(nomeAtributo.gifCar)
    pintarLista(datosUsers);
    eventoLista(datosUsers);
  }
 
 
}

main()




  

