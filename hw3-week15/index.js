let box=document.querySelector('.qorap')


box.addEventListener('mouseenter',function(){
    box.textContent="Сіздің мышкаңыз қораптың ішінде!"
})


box.addEventListener('mouseleave',function(){
    box.textContent="Сіздің мышкаңыз қораптан шығып кетті!"
})


// let batyrma = document.getElementsByClassName("myButton1")
// for( batyrma of box ){
//     batyrma.addEventListener('click',function(){
//      batyrma.style.backgroundColor="green"
//     })
// }
// let batyrma=document.getElementsByClassName('myButton1')
// batyrma.addEventListener('click', ()=>{
//     box.style.backgroundColor = "green"
// })