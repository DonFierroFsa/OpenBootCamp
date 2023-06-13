const nombre = "Adrian"; const apellido = "Rivira"; obj = {nombre:nombre,apellido:apellido}

/*Almaceno el obj en la localStorage*/
localStorage.setItem("obj",JSON.stringify(obj))
sessionStorage.setItem("obj",JSON.stringify(obj))

//Ahora la cookie

const time = new Date()
document.cookie= obj+";expires="+ new Date(time.getTime()+ 2*60000)