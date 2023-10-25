const rollButton = document.getElementById('rollButton')
const diceResult = document.getElementById('diceResult')
const diceImage = document.getElementById('image')
const diceimages = ['./img/one.gif', './img/two.gif', './img/three.gif', './img/four.gif', './img/five.png', './img/six.png']
rollButton.addEventListener("click", () => {
    diceImage.src=diceimages[Math.floor(Math.random()*6)]
    console.log(diceimage[1])
})