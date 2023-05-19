const data = [
    {
        image:"",
        name:'Quiz',
        description:'This is a Quiz'
    },
    {
        image:"",
        name:'Workshop',
        description:'This is a Workshop'
    },
    {
        image:"",
        name:'Lab',
        description:'This is a lab'
    }
]

for (i = 0; i < data.length; i++) {
    const cards = document.querySelector('.cards');
    const card = document.createElement('div');
    card.classList.add('card');
    const mainCards = `
      <img src="">
      <h2>${data[i].name}</h2>
      <p>${data[i].description}</p>
      <button>READ MORE</button>
    `
    card.innerHTML = mainCards;
    cards.appendChild(card);
}