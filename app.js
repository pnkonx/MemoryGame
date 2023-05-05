const cardArray = [
      {
        name: 'star',
        img: 'MemoryGame/blue.png', 
      },
      {
        name: 'square',
        img: 'MemoryGame/red.png', 
      },
      {
        name: 'circle',
        img: 'MemoryGame/yellow.png', 
      },
      {
        name: 'burst',
        img: 'MemoryGame/green.png', 
      },
      {
        name: 'diamond',
        img: 'MemoryGame/purple.png', 
      },
      {
        name: 'star',
        img: 'MemoryGame/blue.png', 
      },
      {
        name: 'square',
        img: 'MemoryGame/red.png', 
      },
      {
        name: 'circle',
        img: 'MemoryGame/yellow.png', 
      },
      {
        name: 'burst',
        img: 'MemoryGame/green.png', 
      },
      {
        name: 'diamond',
        img: 'MemoryGame/purple.png', 
      },
  ]


  cardArray.sort(() => 0.5 - Math.random())
  
  const gridDisplay = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  const cardsChosen = []
  const cardsChosenIds = []
  


  
  function createBoard(){
    for(let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'MemoryGame/rainbow.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.append(card)
      console.log(card, i)
    };
  };
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for Match!')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'MemoryGame/rainbow.png')
        cards[optionTwoId].setAttribute('src', 'MemoryGame/rainbow.png')
        alert('you clicked the same card!')
    }
    
    
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'MemoryGame/white.png')
        cards[optionTwoId].setAttribute('src', 'MemoryGame/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'MemoryGame/rainbow.png')
        cards[optionTwoId].setAttribute('src', 'MemoryGame/rainbow.png')
        alert('sorry try again!')
    }
    resultDisplay.innerHTML = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
       resultDisplay.innerHTML = 'Great Job!'
    }

}


function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
