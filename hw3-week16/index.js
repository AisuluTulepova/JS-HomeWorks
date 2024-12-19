let addBtn = document.getElementById('add-btn')
let listBox = document.getElementById('list-box')
let searchBtn = document.getElementById('search-btn')

addBtn.addEventListener('click', function(event){
    event.preventDefault()
    let toDoItem = document.getElementById('newTask')
    console.log(toDoItem);
    if(toDoItem.value && toDoItem.value !=null && toDoItem.value !=undefined){
        let createdItem = createNewList(toDoItem.value)
        listBox.appendChild(createdItem)
        toDoItem.value = ''
    } 
})

searchBtn.addEventListener('click', function(e){
    e.preventDefault()
    let searchText = document.getElementById('search-text')
    console.log('іздеу ішіндегі мән:', searchText.value.toLowerCase());

    let items = listBox.querySelectorAll('div')
    console.log('ListBox ішіндегі мәндер:', items);

    items.forEach(function(item){
        let paragraph = item.querySelector('p').textContent.toLowerCase()
        if(searchText.value.toLowerCase() == '' || searchText.value.toLowerCase() == null){
            item.style.display = 'block'
        }else if(paragraph == searchText.value.toLowerCase()){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
        console.log("Paragraph manderi:", paragraph);
    })
    searchText.value = ''  
})

function createNewList(newToDoItem){
    let newDiv = document.createElement('div')
    let itemName = document.createElement('p')
    let deleteButton = document.createElement('button')
    newDiv.className = 'newDiv'
    
    itemName.textContent = newToDoItem
    deleteButton.textContent = 'Өшір'

    deleteButton.addEventListener('click', function(){
        listBox.removeChild(newDiv)
    })
    newDiv.appendChild(itemName)
    newDiv.appendChild(deleteButton)

    return newDiv
}