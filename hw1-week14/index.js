let fuddbool = { 
    name:"Messy", 
    name2: "Lionel", 
    gol: "689", 
    age: "37", 
    golNew: "691", 
     komanda: ["Ньюэллс Олд Бойз "," Барселона"," Сборная Аргентина"," Пари Сен-Жермен"," Интер Майами"], 
    info:  function () { 
       return `name -> ${this.name}\nname2 -> ${this.name2}\ngol sany ${this.gol}\nage ${this.age}\nklub-> ${this.komanda}` 
    }, 
    newKlub: function () { 
       return `${this.name2} ${this.name}\nКазыргы ойнап жаткан клубы ${this.komanda[4]} ` 
    } 
    
 } 
  
 alert(fuddbool.info()) 
 alert(`сонгы гол соканмен санаганда ${fuddbool.golNew}`) 
 console.log(fuddbool.newKlub());