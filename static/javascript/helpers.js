const deletedWithQuerySelector = (atributo)=>{
  document.querySelector(`[${atributo}]`).remove();
}
const insertEventVerListInMovil = (datosUsers)=>{
  let num = datosUsers.randomUser.info.results;
            for(let contador = 0; contador < num - 1; contador ++){
              
              document.querySelectorAll('[ver-usuario]')[contador].addEventListener('click',(event)=>{
                console.log('contador: ',contador,event.target)
                const referencia = event.target.parentElement.parentElement.parentElement.parentElement;
                referencia.children[1].classList.toggle('ver-info-aux')
                /*let construyoRef = 'datosUsuario' + `${contador}`;
                construyoRef.children[1].classList.toggle("ver-info-aux");*/
              })
            }
}
export{
  deletedWithQuerySelector,
  insertEventVerListInMovil
}