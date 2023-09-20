import { dato } from "./datos/datos.js";
import {pintarListaDatosUser as dataUsers, pintarLista } from "./views/listaUsuarios.js"
//let verDatos = document.querySelector('[ver-usuario]');
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


const funcionPeticionDatos = () =>{
  let datos = "";
  let datos2 = "";
  const fetchData2 = async () => {
    console.log('chegaron os datos: ');
    const data = await dato.slingAcademy();
    datos = data;
    const data2 = await dato.randomUser();
    datos2 = data2;
   
    let datoImaxen = document.querySelector('[imaxen-de-carga]')
    datoImaxen.remove()
    pintarLista(datos,datos2,dataUsers);
          if(datos == "" && datos2 == ""){
          console.log('chegando datos');
          }else{
            console.log('chegaron os datos: ',data2,data2.results.length);
            let num = data2.info.results;
            
            console.log('a ver se vai',num,document.querySelectorAll('[ver-usuario]')[0])
            for(let contador = 0; contador < num - 1; contador ++){
              
              document.querySelectorAll('[ver-usuario]')[contador].addEventListener('click',(event)=>{
              console.log('contador: ',contador)
            })
            }
            
        }
  }
  fetchData2();
  if(datos == "" && datos2 == ""){
    console.log('chegando datos fora');
  }
  //(datos == "" && datos2 == "") ? console.log('chegando datos') : console.log('chegaron os datos: ');
}

funcionPeticionDatos()




  

