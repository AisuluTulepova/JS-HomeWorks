
const data = [
    { title: '"Абай жолы"- МұхтарӘуезов', description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.' },
    { title: '"Қан мен тер"- Әбдіжәміл Нұрпейісов' , description: 'Қазақ халқының қиын  кезеңдерінің эпикалық баяны.' },
    { title: '"Көшпенділер" - Ілияс Есенберлін', description: 'Қазақ хандығының қалыптасу тарихы' }
];


const container = document.getElementById("cards-container");


data.forEach(item => {
  
    const card = document.createElement("div");
    card.classList.add("card"); 

   
    const title = document.createElement("h3");
    title.textContent = item.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = item.description;
    card.appendChild(description);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Жою";
    deleteButton.addEventListener("click", () => {
        container.removeChild(card);
    });
    card.appendChild(deleteButton);

    container.appendChild(card);
});