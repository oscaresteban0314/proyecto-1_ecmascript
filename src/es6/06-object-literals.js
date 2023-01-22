//enahced object literals
/* function newuser(user, age, country) {
    return{
        user: user,
        age: age,
        country: country
    }
} */
function newuser(user, age, country,uid) {
    return{
        user,
        age,
        country,
        uid
    }
}
console.log(newuser("gndx",34,"Co",1))