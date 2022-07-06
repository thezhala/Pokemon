var gameArray = ["w","e","f"];
var player1Score = 0;
var player2Score = 0;
var player1Pokemon = document.querySelector("#player1Img");
var player2Pokemon = document.querySelector("#player2Img");
var player1ScorePanel = document.querySelector("#player1ScorePanel");
var player2ScorePanel = document.querySelector("#player2ScorePanel");
var winInfoPanel1 = document.querySelector("#winGame1");
var winInfoPanel2 = document.querySelector("#winGame2");

function compAttack(arr) {
  var randomNum = Math.floor(Math.random() * arr.length)
  return(arr[randomNum])
}

function resetGame() {
    player1Score = 0
    player2Score = 0
    winInfoPanel1.innerHTML = "BEGIN"
    winInfoPanel2.innerHTML = "BEGIN"
    player1ScorePanel.innerHTML = `Score: 0`
    player2ScorePanel.innerHTML = `Score: 0`
}

function startGame(e) {
    var userAttack = e.key
    var comp = compAttack(gameArray)
    // console.log(comp)

    if(!(gameArray.includes(userAttack))) {
     alert("Please, choose only one of the 'f w e' letters")
     return
    }

    player1Pokemon.src = `./img/${userAttack}.png`
    player2Pokemon.src = `./img/${comp}.png`

    if(userAttack === "w" && comp === "f" ||
    userAttack === "e" && comp === "w" ||
    userAttack === "f" && comp === "e") {
    // console.log("User Win")

    player1Score++
    player1ScorePanel.innerHTML = `Score: ${player1Score}`
    winInfoPanel1.innerHTML = "WIN"
    winInfoPanel2.innerHTML = "LOSE"

    } else if(userAttack === comp) {
        // console.log("Draw-Draw")

    winInfoPanel1.innerHTML = "DRAW"
    winInfoPanel2.innerHTML = "DRAW"

    } else {
        // console.log("Comp Win")

    player2Score++
    player2ScorePanel.innerHTML = `Score: ${player2Score}`
    winInfoPanel1.innerHTML = "LOSE"
    winInfoPanel2.innerHTML = "WIN"

    }

    if(player1Score === 5 && player1Score > player2Score) {
        alert("USER WIN!!!")
        resetGame()
    } else if (player2Score === 5 && player2Score > player1Score) {
      alert("COMP WIN!!!");
      resetGame();
    }
    
    // console.log("---------------------")
    // console.log("user",userAttack)
    // console.log("comp",comp)
    // console.log("---------------------")
}



window.onkeydown = startGame