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

const pintarLista = (listaUsuarios,cincoUsuarios,listUsers)=>{
  console.log('pintar a lista dos seguintes usuarios: ',listaUsuarios,cincoUsuarios)
  //const numUsuarios = listaUsuarios.length;//caso real
  const numUsuarios = 9;
  const listaOl = document.createElement('ul',{is:"unha-lista"});
  const lugarDeRefencia = document.querySelector('[lista-clientes]');
  listaOl.setAttribute('id','listaOrdeada')
  lugarDeRefencia.append(listaOl)
 
  for(let contador = 0; contador <= numUsuarios ;contador ++){

    let internoLista = document.createElement('li',{is:"o-li"})
    
    if(contador == 0){
      internoLista.setAttribute('id',`datosUsuario${contador}`)
      internoLista.innerHTML = `
              <div name="status">STATUS</div>
              <div name="status"></div>
              <div>Usuario
                <!--
                first-name
                email
                -->
              </div>
              <div name="status">Datos persoais
                <!--
                Traballo
                Idade
                -->
              </div>
              
              <div name="status">Num Pedido</div>
              <div name="titulo-gastado">Gastado</div>
    `;
    listaOrdeada.append(internoLista)
    }
    else{
      internoLista.setAttribute('id',`datosUsuario${contador}`)
      let imaxen = cincoUsuarios.results[contador].picture.large;
      let nomes = cincoUsuarios.results[contador].name.first;
      listUsers(listaOrdeada,listaUsuarios,contador,internoLista,nomes,`${imaxen}`);
    }
    //listaOrdeada.append(internoLista)
  }
}

export {
  pintarListaDatosUser,
  pintarLista
}