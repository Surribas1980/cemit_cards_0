import { dato } from "./datos.js";

const peticionUrl = async (url) => {
  
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
const peticionUsersToApis = async () => {
  const datosUsers = {}
  
    datosUsers.slingAcademy = await dato.slingAcademy();
    datosUsers.randomUser = await dato.randomUser();
    
    return datosUsers;
   
  }
export {
  peticionUrl,
  peticionUsersToApis
}