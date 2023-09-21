import {peticionUsersToApis} from "./datos/datos.peticioneshttps.js";
import {pintarLista,pintarListaDatosUser as dataUsers} from "./views/listaUsuarios.js";
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
  console.log('datosUsers.',datosUsers)

  if(datosUsers != undefined){
     pintarLista(datosUsers.slingAcademy,datosUsers.randomUser,dataUsers)
  
  if(datosUsers.slingAcademy == "" && datosUsers.randomUser == ""){
          console.log('chegando datos');
          }
          else{
            console.log('chegaron os datos: ',datosUsers.randomUser,datosUsers.randomUser.results.length);
            let num = datosUsers.randomUser.info.results;
            
            console.log('a ver se vai',num,document.querySelectorAll('[ver-usuario]')[0])
            for(let contador = 0; contador < num - 1; contador ++){
              
              document.querySelectorAll('[ver-usuario]')[contador].addEventListener('click',(event)=>{
                console.log('contador: ',contador)
              })
            }
            
          }
  }
 
 
}

main()




  

