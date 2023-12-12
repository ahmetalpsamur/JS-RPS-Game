let computerSelect;
let gameResult;
let userSelect;
const result = {
    win: 0,
    lose: 0,
    draw: 0
}

function resetResult() {
    result.win = 0;
    result.lose = 0;
    result.draw = 0;
    showStat();
}
function computerChoice() {
    computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom == 0) {
        computerSelect = "Rock";
        return computerSelect;
    }
    else if (computerRandom == 1) {
        computerSelect = "Paper";
        return computerSelect;
    }
    else {
        computerSelect = "Scissors";
        return computerSelect;
    }
}

function gameRun(userChoice) {
    userSelect = userChoice;
    computerSelect = computerChoice();
    if (computerSelect == "Rock") {
        if (userSelect === "Rock") {
            gameResult = "Draw";
            result.draw++;
            showAll();
        }
        else if (userSelect === "Paper") {
            gameResult = "Win";
            result.win++
            showAll();
        }
        else {
            gameResult = "Lose";
            result.lose++;
            showAll();
        }
    }

    else if (computerSelect == "Paper") {
        if (userSelect === "Rock") {
            gameResult = "Lose";
            result.lose++;
            showAll();
        }
        else if (userSelect === "Paper") {
            gameResult = "Draw";
            result.draw++
            showAll();
        }
        else {
            gameResult = "Win";
            result.win++;
            showAll();
        }
    }
    else {
        if (userSelect === "Rock") {
            gameResult = "Win";
            result.win++;
            showAll();
        }
        else if (userSelect === "Paper") {
            gameResult = "Lose";
            result.lose++
            showAll();
        }
        else {
            gameResult = "Draw";
            result.draw++;
            showAll();
        }
    }
}
function showAll() {
    showStat();
    showResult();
    showSelect();
}
function showSelect() {
    let userSelectPart;
    let computerSelectPart;
    if (userSelect == "Rock") {
        userSelectPart = 'Your Select:<img class="img-select" src="source/rock-emoji.png">';
    }
    else if (userSelect == "Paper") {
        userSelectPart = 'Your Select:<img class="img-select" src="source/paper-emoji.png">';
    }
    else {
        userSelectPart = 'Your Select:<img class="img-select" src="source/scissors-emoji.png">';
    }

    if (computerSelect == "Rock") {
        computerSelectPart = '<img class="img-select" src="source/rock-emoji.png"> :Computer Select';
    }
    else if (computerSelect == "Paper") {
        computerSelectPart = '<img class="img-select" src="source/paper-emoji.png">:Computer Select';
    }
    else {
        computerSelectPart = '<img class="img-select" src="source/scissors-emoji.png">:Computer Select';
    }
    let selectPart = userSelectPart + computerSelectPart;
    document.querySelector(".p-select").innerHTML = selectPart;

}
function showStat() {
    let resultShow = document.querySelector(".p-stat");
    resultShow.innerHTML = `Win:${result.win} Lose:${result.lose} Draw:${result.draw}`;
}
function showResult() {
    if (gameResult == "Win") {
        let resultShow = document.querySelector(".p-result");
        resultShow.innerHTML = "You WIN";
    }
    else if (gameResult == "Draw") {
        let resultShow = document.querySelector(".p-result");
        resultShow.innerHTML = "DRAW";
    }
    else {
        let resultShow = document.querySelector(".p-result");
        resultShow.innerHTML = "You LOSE";
    }
}