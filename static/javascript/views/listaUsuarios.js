import {tituloLista} from "../datos/datos.js";
const pintarListaDatosUser = (listaOrdeada,listaUsuarios,contador,internoLista,nomes,imagenes) => {
  console.log('imagenes: ',imagenes)
    
   internoLista.innerHTML = `
    <div name="datos-unicos">
      <div>status</div>
    </div> 
    <div name="imagen-client">
      <img alt="imaxen-cliente" class="imagen-client" src=${imagenes} >
    </div>
    <div name="lista-usuarios">
     <div>
      <div class="lista-nomes">${nomes}</div>
      <div>${listaUsuarios[contador].email}</div>
     </div>
    </div>
    <div name="datos-persoais">
      <div>${listaUsuarios[contador].job}</div>
      <div>${listaUsuarios[contador].age}</div>
    </div>
    <div name="datos-unicos"><div>${listaUsuarios[contador].orders}</div></div>
    <div name="datos-unicos"><div name="gastado"><span>${listaUsuarios[contador].spent} €</span>
    <span ver-usuario="ver-usuario">&gt;</span></div></div>
    `;
  listaOrdeada.append(internoLista)
  
}
const insertandoIdToList = (datosUsers)=>{
  
  for(let contador = 0; contador < datosUsers.randomUser.results.length ;contador ++){

    let internoLista = document.createElement('li',{is:"o-li"})
    
    if(contador == 0){
      internoLista.setAttribute('id',`datosUsuario${contador}`)
      internoLista.innerHTML = `${tituloLista}`;
      listaOrdeada.append(internoLista)
    }
    else{
      internoLista.setAttribute('id',`datosUsuario${contador}`)
      let imaxen = datosUsers.randomUser?.results[contador].picture.large;
      let nomes = datosUsers.randomUser?.results[contador].name.first;
      pintarListaDatosUser(listaOrdeada,datosUsers.slingAcademy,contador,internoLista,nomes,`${imaxen}`);
    }
    
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