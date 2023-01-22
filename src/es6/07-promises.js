//promesas
/* const another_function =() =>{ //creamos una funcion de flechita sin parametros 
    return new Promise ((resolve,reject) =>{
        if (false){
            resolve('Hello World!');
        } else {            //logica de si la promesa se ejecuta de forma correcta o no 
            reject('Error');
        }
    })//frase reservada para funciones, va a retornar una funcion anonima/arrow function(funcion de flechita)
}
 */
/* another_function().then(response=>
    console.log(response))   //logica de validacion de promesas para errores o ejecucion de las mismas
    .catch(err => console.log(err));  */
const another_function = (num1,num2) =>{
    return new Promise ((resolve,reject) =>{
        if ((num1+num2)>4){
            resolve('Hello World!');
        } else {            //logica de si la promesa se ejecuta de forma correcta o no 
            reject('Error');
        }
    })//frase reservada para funciones, va a retornar una funcion anonima/arrow function(funcion de flechita)
}
    let num1 =2; 
    let num2 =1;

    another_function(num1,num2).then(response=>
    console.log(response))   //logica de validacion de promesas para errores o ejecucion de las mismas
    .catch(err => console.log(err));
