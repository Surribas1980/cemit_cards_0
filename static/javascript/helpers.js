import {nomeAtributo as atr} from "./datos/datos.js";

const refDoc = {
  borra : function(atributo){
     document.querySelector(`[${atributo}]`).remove()
  },
  pestanaUser: function(contador,atributo){
    return document.querySelectorAll(`[${atributo}]`)[contador];
  },
  infoAux : function(contador){
    return document.getElementsByName(`info-aux-${contador+1}`)[0];
  }
}
const modificoSTyle = (nodo,contador)=>{
                (nodo.transform == "rotate(0deg)") ?  nodo.transform = "rotate(90deg)" : nodo.transform = "rotate(0deg)";
                if(refDoc.infoAux(contador).style.display === 'none'){
                  refDoc.infoAux(contador).style.display = 'flex';
                  refDoc.infoAux(contador).style.border = '1px solid white';
                  refDoc.infoAux(contador).style.margin = '4px';
                }else{
                  refDoc.infoAux(contador).style.display = 'none';
                }
}

const insertEventVerListInMovil = (datosUsers)=>{
  let num = datosUsers.randomUser.info.results;
  
            for(let contador = 0; contador < num - 1; contador ++){
              let ref = refDoc.pestanaUser(contador,atr.verUser);
              
              ref.addEventListener('click',(event)=>{  
                let nodo = event.target.style;
                modificoSTyle(nodo,contador)
              })
            }
}
export{
  insertEventVerListInMovil,
  refDoc
}