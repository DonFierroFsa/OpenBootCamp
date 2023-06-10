//Inheritance o Herencia
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
class Developer extends Persona{
    constructor(nombre, edad,password,Dni, lenguaje) {
        super(nombre,edad,password,Dni)
        this.lenguaje=lenguaje;
    }
    saludo(){   //Polimorfismo
        super.saludo(); //Polimorfismo
        console.log(". Mi lenguaje favorito es ",this.lenguaje)
    }
}

const newdev= new Developer("Adrian",32,"Facil",342123123,"Python")

console.log(newdev)
//Polimorfismo
newdev.saludo()
console.log(newdev.getPassword())