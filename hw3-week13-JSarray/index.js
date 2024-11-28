let sandar = [];
while(true) {
    let san = +prompt('San engiz:  (тоқтату үшін -0- санын енгіз )');
    if (san ==0){
        break;
    }
    if(san%2 == 0){
        sandar.unshift(san);
    } else{
        sandar.push(san);
    }
}
console.log(sandar);
console.log(sandar.length);