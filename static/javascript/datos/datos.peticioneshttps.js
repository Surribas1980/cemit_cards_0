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
    const datos = await dato.slingAcademy();
    const datos2 = await dato.randomUser();
    
    quitarGif(nomeAtributo.gifCar)
    pintarLista(datos,datos2,dataUsers);
  
          if(datos == "" && datos2 == ""){
          console.log('chegando datos');
          }else{
            console.log('chegaron os datos: ',datos2,datos2.results.length);
            let num = datos2.info.results;
            
            console.log('a ver se vai',num,document.querySelectorAll('[ver-usuario]')[0])
            for(let contador = 0; contador < num - 1; contador ++){
              
              document.querySelectorAll('[ver-usuario]')[contador].addEventListener('click',(event)=>{
              console.log('contador: ',contador)
            })
            }
            
        }
  }
export {
  peticionUrl,
  peticionUsersToApis
}