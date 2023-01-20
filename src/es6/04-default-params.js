function newuser(name, age, country){
    var name = name || 'oscar';
    var age = age || 20;
    var country = country || 'Colombia';
    console.log(name, age, country);
}
newuser();
newuser('Esteban',15, 'MX');
/* E_S_6 */
function newadmin(name='oscar', age=19, country='CO') {
    console.log(name, age, country);
}
newadmin();
newadmin('Esteban',15, 'MX');