const deletedWithQuerySelector = (atributo)=>{
  document.querySelector(`[${atributo}]`).remove();
}

export{
  deletedWithQuerySelector
}