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
const modificoSTyle = (styleElement,contador)=>{
                (styleElement.transform == "rotate(0deg)") ?  styleElement.transform = "rotate(90deg)" : styleElement.transform = "rotate(0deg)";
                if(refDoc.infoAux(contador).style.display === 'none'){
                  refDoc.infoAux(contador).style.display = 'flex';
                  refDoc.infoAux(contador).style.border = '1px solid white';
                  refDoc.infoAux(contador).style.margin = '4px';
                }else{
                  refDoc.infoAux(contador).style.display = 'none';
                }
}

const insertEventVerListInMovil = (condicion)=>{
    
            for(let contador = 0; contador < condicion; contador ++){
              let ref = refDoc.pestanaUser(contador,atr.verUser);
              
              ref.addEventListener('click',(event)=>{ 
                modificoSTyle(event.target.style,contador)
              })
            }
}
export{
  insertEventVerListInMovil,
  refDoc
}