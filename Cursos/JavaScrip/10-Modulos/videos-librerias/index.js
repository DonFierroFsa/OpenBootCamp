//Instalar axios para hacer llamdas a servicios externos ==> crea la carpeta node_modules y un package.lock

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/adsadas')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log("Salio todo bien vieja")
    console.log(response.data); //respone.data para que muestre solo la info
  })
  .catch(function (error) {
    // manejar error
    console.log("OCURIO UN ERROR GUAMPA SECA")
    console.log(error);
  })