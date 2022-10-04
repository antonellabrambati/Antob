let user = prompt("Ingresar usuario");

if (user == "Luciano"){
    console.log("Bienvenido Luciano");

}else{
    console.log("Usuario no registrado");
}

//Ciclo por conteo For 
//funcion sin aprametros
function saludar() {
    console.log("Hola!!!")
}
for (let i=1; i<=2; i++){
    saludar()
let usuario=prompt("Ingresa Usuario");
let contrasenia=prompt("Ingresa contraseña para"+usuario);

if((usuario=="Luciano")&&(contrasenia=="Lu2")){
    console.log("Bienvenido!!!");

}else{
    console.log("Usuario y/o contraseña incorrecta");
}
}

