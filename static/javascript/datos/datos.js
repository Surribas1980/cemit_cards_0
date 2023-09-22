import { urlApi } from "./datos.url.js";
import { peticionUrl } from "./datos.peticioneshttps.js";

const dato = {
  randomUser : async () =>{
    return await peticionUrl(urlApi.RandomUser)
  },
  slingAcademy : async () => {
    return await peticionUrl(urlApi.SlingAcademy)
  }
}
const nomeAtributo = {
  gifCar:'imaxen-de-carga'
}

const datosLista = {
  tituloLista: `<div name="status">STATUS</div>
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
              <div name="titulo-gastado">Gastado</div>`,
  elementosDaLista: (listaUsuarios,contador,internoLista,nomes,imaxen)=>{
    internoLista.innerHTML = `
      <div class="novo-div">
        <div name="datos-unicos">
          <div>status</div>
        </div> 
        <div name="imagen-client">
          <img alt="imaxen-cliente" class="imagen-client" src=${imaxen} >
        </div>
        <div name="lista-usuarios">
         <div class="column-usuario">
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
    </div>
    <div class="ver-info-aux">
        <div name="datos-persoais">
          <div>Artist</div>
          <div>71</div>
        </div>
        <div name="datos-unicos">
          <div>status</div>
        </div>
        <div name="datos-unicos"><div>11</div></div>
    </div>
    `;
  }
} 
export {
  dato,
  nomeAtributo,
  datosLista
}