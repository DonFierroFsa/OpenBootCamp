localStorage.setItem("nombre","Adrian")
localStorage.setItem("nombre","Lisbel")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona",JSON.stringify({nombre:"Adrian",edad:32}))
console.log(localStorage.getItem("persona"))
console.log(JSON.parse(localStorage.getItem("persona")))

localStorage.removeItem("nombre")
localStorage.getItem("nombre")

//SEsionStorage

sessionStorage.setItem("nombre","adrian")

//Cookies

document.cookie="nombreCookie=AdrianCookie"
//darle caducidad
document.cookie="NombreCaducado=AdrianCaduca;expires="+new Date(2023,11,1).toUTCString

console.log(document.cookie)

