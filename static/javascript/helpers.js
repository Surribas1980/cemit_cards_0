

const deletedWithQuerySelector = (atributo)=>{
  document.querySelector(`[${atributo}]`).remove();
}
const insertEventVerListInMovil = (datosUsers)=>{
  let num = datosUsers.randomUser.info.results;
            for(let contador = 0; contador < num - 1; contador ++){
              
              document.querySelectorAll('[ver-usuario]')[contador].addEventListener('click',(event)=>{
              
                const ref = document.getElementsByName(`info-aux-${contador+1}`)[0];
               
                (event.target.style.transform == "rotate(0deg)") ?  event.target.style.transform = "rotate(90deg)" : event.target.style.transform = "rotate(0deg)";
                if(ref.style.display === 'none'){
                  ref.style.display = 'flex';
                  ref.style.border = '1px solid white';
                  ref.style.margin = '4px';
                }else{
                  ref.style.display = 'none';
                }
              })
            }
}
export{
  deletedWithQuerySelector,
  insertEventVerListInMovil
}