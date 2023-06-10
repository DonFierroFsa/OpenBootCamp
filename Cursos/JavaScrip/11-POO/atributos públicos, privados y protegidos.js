class Persona{
    //Privated --> # Solo se pueden acceder desde dentro de la clase, o fuera a traves de metodos
    #password;
    //Protected --> _Atributo, Solo se puede acceder desde dentro de la clase o clases descendientes
    _Dni;
    constructor(nombre,edad,password,Dni){
        this.nombre=nombre;
        this.edad=edad;//Atributos publicos
        this.#password=password //Privated --> #
        this._Dni=Dni
    }
    saludo(){
        console.log("Hola mi nombre es ",this.nombre)//Getter son metodos que nos permiten obtener atributos//metodos privados o protejidos.
    }
    dimePassword(){
        console.log("La contraseña es ",this.#password)//Getter
    }
    getPassword(){  //Getter
        return this.#password
    }
    getDNI(){   //Getter
        return this._Dni;
    }
    setPassword(newPassword){   //Setter son metodos que nos permiten cambiar atributos//metodos privados o protejidos
        this.#password=newPassword;
    }
}

const adrian = new Persona("Adrian",32,123456,"35.678.818");
console.log(adrian.nombre);
adrian.saludo()
console.log(adrian)
adrian.dimePassword();
console.log(adrian.getDNI())
console.log(adrian.getPassword());
adrian.setPassword("Nueva Password")
console.log(adrian.getPassword())


//Getter y Setters


