/*Larocca Natanael c30335*/


/*EJERCICIOS OPCIONALES*/
/*Pedir número mediante prompt y sumarle otro número en cada repetición,
realizando una salida por cada resultado*/

let numero = parseInt(prompt("Ingrese un numero"))
for (let i=1; 1<=10; i++){
    let resultado =(numero+i)
    alert(numero + " mas " + i + " es igual a " + resultado)
    if (i ==10){
        break
    }
}


/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/

let texto = ""
let entrada =""
do{
    texto=prompt("Ingrese una palabra")
    if(texto != "ESC"){
        alert(texto + " no es la palabra correcta")
    }
}while(texto != "ESC")







/*Pedir un número por prompt,
repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

let numero1 = parseInt(prompt("Ingrese un numero"))
for (let i=1;1<numero1;i++){
    let resultado = numero1*i
    if (i==(numero1+1)){
        break
    }
    alert("Hola vez numero "+i )
}


