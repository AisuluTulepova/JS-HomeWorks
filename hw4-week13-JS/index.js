//_________1-тапсырма________
let massiv = [1,2,3,4,5]
alert (massiv)

let kub = massiv.map(num=>num*num*num)

console.log('кубталған сандар:' + kub);
for(let massiv of kub){
   let taq =kub.filter(num=>num%2!==0)
   console.log('кубталған сандардың арасындағы тек тақ сандар:' + taq);
}
alert(kub)


