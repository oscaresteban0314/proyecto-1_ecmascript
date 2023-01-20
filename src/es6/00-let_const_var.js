var LastName = 'david';
console.log(LastName);
LastName='Oscar';
console.log(LastName);
console.clear();
/*  */
let fruit ='apple';
console.log(fruit);
fruit='banana';
console.log(fruit);
/*  */
const animal = 'cat';
console.log(animal);
animal='dog';
console.log(animal);

const fruits=() =>{
    if (true){
        var fruit1  ='apple';//function scope
        let fruit2 ='banana';//block scope
        const fruit3 ='kiwi'//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits()

/*  */
