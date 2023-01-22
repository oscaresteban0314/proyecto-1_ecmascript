/* arrays destructure */
let fruits=['apple', 'banana', 'peach',];
let[a,b,c]=fruits;
console.log(a, b,c);
/* objets destructure */
let user= { username: 'oscar', age: '19' };
let{ username, age } = user;
console.log(username,age);

//spread operator
let person ={name: 'oscare', age: 19};
let country ='Co';
let data={...person, country};
console.log(data);
//rest
function sum(num1, ...values){
    console.log(values);
    console.log(num1+values[5]);
    return num1+values[5];
}
sum(1,2,3,4,5,6,7,8);