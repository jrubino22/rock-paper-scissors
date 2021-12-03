const gameArray = ["Rock", "Paper", "Scissors"]



let opponent = document.querySelector("#opponent")

const btns = document.querySelectorAll(".button")

let result = document.querySelector("#result")

let playerChoice;


btns.forEach(function (btn) {
    btn.addEventListener("click", function (b) {
        const classes = b.currentTarget.classList;

        let targetNumber = Math.floor(Math.random() * gameArray.length)
        let targetPlay = gameArray[targetNumber]
        opponent.textContent = ("opponent: " + targetPlay)

        if (classes.contains("rock")) {
            playerChoice = "Rock"

            if (targetNumber === 1) {
                result.textContent = ("You Lose :(")
                result.style.color = "red"
            }
            else if (targetNumber === 2) {
                result.textContent = ("You Win! :)")
                result.style.color = "green"
            }
            else {
                result.textContent = ("It's a Draw!")
                result.style.color = "brown"
            }

        }
        else if (classes.contains("paper")) {
            playerChoice = "Paper"

            if (targetNumber === 1) {
                result.textContent = ("It's a Draw!")
                result.style.color = "brown"
            }
            else if (targetNumber === 2) {
                result.textContent = ("You Lose :(")
                result.style.color = "red"
            }
            else {
                result.textContent = ("You Win! :)")
                result.style.color = "green"
            }
        }

        else if (classes.contains("scissors")) {
            playerChoice = "Scissors"

            if (targetNumber === 1) {
                result.textContent = ("You Win! :)")
                result.style.color = "green"
            }
            else if (targetNumber === 2) {
                result.textContent = ("It's a Draw!")
                result.style.color = "brown"
            }
            else {
                result.textContent = ("You Lose :(")
                result.style.color = "red"
            }
        }

    })
})

