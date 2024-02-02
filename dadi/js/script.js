/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// genero un numero casuale decimale da 0 a 1 escluso, lo moltiplico per 6, gli tolgo la parte decimale e ci aggiungo uno

const playerNumber = Math.floor( Math.random() * 6 + 1);
console.log("Numero giocatore: ", playerNumber);
document.querySelector("#playerOutput img").src = `./img/${playerNumber}.png`;


const computerNumber = Math.floor( Math.random() * 6 + 1);
console.log("Numero computer: ", computerNumber);
// document.querySelector("#computerOutput span").innerText = computerNumber;
document.querySelector("#computerOutput img").src = `./img/${computerNumber}.png`;




let message = "";

// controllo se il numero giocatore è maggiore di quello del computer
if(playerNumber > computerNumber) {

    // giocatore ha vinto
    // console.log(`Hai lanciato ${playerNumber}, il computer ha lanciato ${computerNumber}.<br>Hai vinto`);
    message = `Hai lanciato ${playerNumber}, il computer ha lanciato ${computerNumber}.<br>Hai vinto`;


} else if (playerNumber < computerNumber)  {

    // giocatore ha perso
    // console.log(`Hai lanciato ${playerNumber}, il computer ha lanciato ${computerNumber}.<br>Hai perso :(`);
    message = `Hai lanciato ${playerNumber}, il computer ha lanciato ${computerNumber}.<br>Hai perso :(`;


} else {

    // pareggio
    // console.log(`Avete lanciato entrambi ${playerNumber}.<br>Avete pareggiato`);
    message = `Avete lanciato entrambi ${playerNumber}.<br>Avete pareggiato`;

}

document.querySelector("p").innerHTML = message;
