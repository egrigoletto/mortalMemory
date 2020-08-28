document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'mkjc',
      img: 'images/mkjc.png'
    },
    {
      name: 'mkjc',
      img: 'images/mkjc.png'
    },
    {
      name: 'mkjx',
      img: 'images/mkjx.png'
    },
    {
      name: 'mkjx',
      img: 'images/mkjx.png'
    },
    {
      name: 'mkkl',
      img: 'images/mkkl.png'
    },
    {
      name: 'mkkl',
      img: 'images/mkkl.png'
    },
    {
      name: 'mkkt',
      img: 'images/mkkt.png'
    },
    {
      name: 'mkkt',
      img: 'images/mkkt.png'
    },
    {
      name: 'mkml',
      img: 'images/mkml.png'
    },
    {
      name: 'mkml',
      img: 'images/mkml.png'
    },
    {
      name: 'mkrd',
      img: 'images/mkrd.png'
    },
    {
      name: 'mkrd',
      img: 'images/mkrd.png'
    },
    {
      name: 'mkscorp',
      img: 'images/mkscorp.png'
    },
    {
      name: 'mkscorp',
      img: 'images/mkscorp.png'
    },
    {
      name: 'mksz',
      img: 'images/mksz.png'
    },
    {
      name: 'mksz',
      img: 'images/mksz.png'
    },
  ]
  cardArray.sort(() => 0.5 - Math.random())

  const result = document.querySelector('#result')
  const grid = document.querySelector('.grid')
  var cardsChosen = []
  var cardsChosenIds = []
  var cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Acertou miseravi')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Eeeeeeeerrrrrouuuu')
    }

    cardsChosen = []
    cardsChosenIds = []
    result.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2) {
      result.textContent = 'Você resolveu esse enigma, parabéns!!!'
    }
  }

  //inicia o jogo
  createBoard()
})