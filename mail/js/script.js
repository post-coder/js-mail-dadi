/**

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.


*/



/*
- Scrivo in pagina "accesso negato"
- controllo ogni mail
    - SE la mail a cui sono arrivato è uguale a quella dell'utente
        - Scrivo in pagina "benvenuto"



________________________________



- inizializzo una variabile "emailTrovata"
- controllo ogni mail
    ? SE la mail a cui sono arrivato è uguale a quella dell'utente
        - emailTrovata diventa TRUE

? SE emailTrovata
    - scrivo in pagina "benvenuto"
: ALTRIMENTI
    - scrivo in pagina "accesso negato"
*/





// const userEmail = prompt("Scrivi la tua email");

const mailArray = [
    'mario.rossi@example.com',
    'laura.bianchi@example.com',
    "gab@mail.it",
    'giovanni.verdi@example.com',
    'elena.rossi@example.com',
    'luca.bianchi@example.com',
    'francesca.verdi@example.com',
    'andrea.rossi@example.com',
    'sara.bianchi@example.com',
    'marco.verdi@example.com',
    'giulia.rossi@example.com',
    'davide.bianchi@example.com',
    'anna.verdi@example.com',
    'paolo.rossi@example.com',
    'valentina.bianchi@example.com',
    'luigi.verdi@example.com',
    'martina.rossi@example.com',
    'simone.bianchi@example.com',
    'chiara.verdi@example.com',
    'roberto.rossi@example.com',
    'elisa.bianchi@example.com'
];

console.log(mailArray);



// prendo il mio pulsante
const checkButtonElement = document.querySelector("#check-button");

checkButtonElement.addEventListener("click", function() {

    const userEmail = document.querySelector("#user-email").value;
    
    let mailFound = false;

    for(let i = 0; i < mailArray.length; i++) {

        if(mailArray[i] == userEmail) {
            
            mailFound = true;
    
        }

        
    }
    
    const outputElement = document.querySelector("#output");
    
    if(mailFound) {
    
        outputElement.innerText = "Accesso consentito";
        outputElement.className += " bg-success";
         
    } else {
    
        outputElement.innerText = "Accesso negato";
        outputElement.className += " bg-danger";
    
    }


});

