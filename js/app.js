const cardJson = [
    {
        id: 1,
        name: "Card 1",
        isCompleted: false,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 2,
        name: "Card 2",
        isCompleted: false,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 3,
        name: "Card 3",
        isCompleted: false,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 4,
        name: "Card 4",
        isCompleted: false,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
];


const inProgress = document.querySelector(".inprogress-container");
const completed = document.querySelector(".completed-container");

const resultHtml = cardJson.map(card => {
    return (
        `
        <div class="card" draggable="true">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
        </div>
        `
    );
}).join("");

inProgress.innerHTML = resultHtml;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('dragstart', ()=>{
        card.classList.add("dragging");
    });
    card.addEventListener('dragend', ()=>{
        card.classList.remove("dragging");
    });
});


const dropContainers = document.querySelectorAll(".drop-container");

dropContainers.forEach(container => {
    console.log(container)
    container.addEventListener("dragover", (e) => {
        const dragElement = document.querySelector(".dragging");
        e.preventDefault();
        container.appendChild(dragElement);
    })
});