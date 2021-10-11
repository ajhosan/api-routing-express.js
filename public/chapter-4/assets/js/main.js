
let player_batu    = document.getElementById("player-batu");
let player_kertas  = document.getElementById("player-kertas");
let player_gunting =   document.getElementById("player-gunting");

player_batu.addEventListener("click", function(){
        setPlayerChoice(0)
});

player_kertas.addEventListener("click", function(){
       setPlayerChoice(1)
});

player_gunting.addEventListener("click", function(){
        setPlayerChoice(2)
});


function setPlayerChoice(playerChoice){
    switch (playerChoice) {
        case 0:
            document.getElementById("player-batu").style.backgroundColor = "#c4c4c4";
            document.getElementById("player-batu").style.borderRadius = "5px";
            document.getElementById("player-kertas").setAttribute("id", "none-kertas");
            document.getElementById("player-gunting").setAttribute("id", "none-gunting");
            break;
        case 1:
            document.getElementById("player-kertas").style.backgroundColor = "#c4c4c4";
            document.getElementById("player-kertas").style.borderRadius = "5px";
            document.getElementById("player-batu").setAttribute("id", "none-batu");
            document.getElementById("player-gunting").setAttribute("id", "none-gunting");
            break;
        case 2:
            document.getElementById("player-gunting").style.backgroundColor = "#c4c4c4";
            document.getElementById("player-gunting").style.borderRadius = "5px";
            document.getElementById("player-batu").setAttribute("id", "none-batu");
            document.getElementById("player-kertas").setAttribute("id", "none-kertas");
            break;    
    }

    let computerChoice = setComputerChoice();
    matchChoice(playerChoice,computerChoice);
}

function setComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            document.getElementById("com-batu").style.backgroundColor = "#c4c4c4";
            document.getElementById("com-batu").style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById("com-kertas").style.backgroundColor = "#c4c4c4";
            document.getElementById("com-kertas").style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById("com-gunting").style.backgroundColor = "#c4c4c4";
            document.getElementById("com-gunting").style.borderRadius = "5px";
            break;
    }
    return randomNumber;
}


function style_message(){
    let media_query = window.matchMedia("(max-width: 750px)")
    if(media_query){
        document.getElementById("vs").style.display = "none";
        document.getElementById("result-message").style.padding = "5px 15px 5px 15px";
        document.getElementById("result-message").style.background = "#4C9654";
        document.getElementById("result-message").style.borderRadius = "10px";
        document.getElementById("result-message").style.transform = "rotate(-28.87deg)";
        document.getElementById("result-message").style.fontSize = "20px";  
        document.getElementById("result-message").style.textAlign = "center";
    }else{
        document.getElementById("vs").style.display = "none";
        document.getElementById("result-message").style.padding = "5px 15px 5px 15px";
        document.getElementById("result-message").style.background = "#4C9654";
        document.getElementById("result-message").style.borderRadius = "10px";
        document.getElementById("result-message").style.transform = "rotate(-28.87deg)";
        document.getElementById("result-message").style.fontSize = "38px";  
    }
    
}

function matchChoice(playerChoice,computerChoice){

    if(playerChoice || playerChoice === 0){
        document.getElementById('refreshButton').innerHTML = "Ulangi Permainan!";
        document.getElementById('refreshButton').style.textAlign = "center";
        document.getElementById('refreshButton').style.color = "white";
    }

    switch(playerChoice){
        case 0:
            if(computerChoice === 1){
                document.getElementById("result-message").innerHTML = "COM WIN";
                style_message();
            } else if(computerChoice === 2){
                document.getElementById("result-message").innerHTML = "PLAYER 1 WIN";
                style_message();
            } else if(computerChoice === 0){
                document.getElementById("result-message").innerHTML = "DRAW";
                style_message();
            }
            break;
        case 1: 
            if(computerChoice === 0){
                document.getElementById("result-message").innerHTML = "PLAYER 1 WIN";
                style_message();
            } else if(computerChoice === 2){
                document.getElementById("result-message").innerHTML = "COM WIN";
                style_message();
            }else if(computerChoice === 1){
                document.getElementById("result-message").innerHTML = "DRAW";
                style_message();
            }
            break;
        case 2:
            if(computerChoice === 0){
                document.getElementById("result-message").innerHTML = "COM WIN";
                style_message();
            } else if(computerChoice === 1){
                document.getElementById("result-message").innerHTML = "PLAYER 1 WIN";
                style_message();
            }else if(computerChoice === 2){
                document.getElementById("result-message").innerHTML = "DRAW";
                style_message();
            }
            break;
    }
}

function reloadPage(){
    location.reload(true);
}
