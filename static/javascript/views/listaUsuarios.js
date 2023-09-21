import {datosLista} from "../datos/datos.js";
const pintarListaDatosUser = (listaOrdeada,listaUsuarios,contador,internoLista,nomes,imaxen) => {
  datosLista.elementosDaLista(listaUsuarios,contador,internoLista,nomes,imaxen)
  listaOrdeada.append(internoLista)
  
}
const pintoTitulo = (internoLista,contador)=>{
  internoLista.setAttribute('id',`datosUsuario${contador}`)
  internoLista.innerHTML = `${datosLista.tituloLista}`;
  listaOrdeada.append(internoLista)
}
const pintoLista = (datosUsers,internoLista,contador)=>{
  internoLista.setAttribute('id',`datosUsuario${contador}`)
      let imaxen = datosUsers.randomUser?.results[contador].picture.large;
      let nomes = datosUsers.randomUser?.results[contador].name.first;
      pintarListaDatosUser(listaOrdeada,datosUsers.slingAcademy,contador,internoLista,nomes,`${imaxen}`);
}
const insertandoIdToList = (datosUsers)=>{
  
  for(let contador = 0; contador < datosUsers.randomUser.results.length ;contador ++){

    let internoLista = document.createElement('li',{is:"o-li"})
    contador === 0 ? pintoTitulo(internoLista,contador) : pintoLista(datosUsers,internoLista,contador);
    
  }
}
const pintarLista = (datosUsers)=>{
  
  const listaOl = document.createElement('ul',{is:"unha-lista"});
  const lugarDeRefencia = document.querySelector('[lista-clientes]');
  listaOl.setAttribute('id','listaOrdeada')
  lugarDeRefencia.append(listaOl)
  insertandoIdToList(datosUsers);
}

export {
  pintarListaDatosUser,
  pintarLista
}