
function Natizhe(){
    let num = +prompt('Неше сан енгізгіңіз келеді?')

    let KeriSan = 0;
    let JupSan = 0;
    let TaqSan = 0;
    


    for(let i = 0; i<num; i++){
        let num1 = +prompt(`Санды енгізіңіз: ${i+1} `)
    
        if (num1<0){
            KeriSan++;
            console.log(KeriSan)
        }
        if(num1%2==0){
            JupSan++;
            console.log(JupSan)
        }else if(num1%2 !==0){
            TaqSan++;
            console.log(TaqSan);
            
        }
    }
    alert (`-кері сан : ${KeriSan} \n - Жұп сан: ${JupSan} \n - Тақ сан: ${TaqSan}`)
}

Natizhe();


