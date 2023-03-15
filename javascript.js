// Botones de piedra, papel y tijera
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");

let winner;
let ronda = 0;
let userWins = 0;
let computerWins = 0;

const divResultado = document.getElementById("resultado");
divResultado.textContent = "Seleccion una opción para competir contra la computadora. La partida tiene 5 rondas.";

btnPiedra.addEventListener('click', () => {
    winner = game (btnPiedra.textContent);
})

btnPapel.addEventListener('click', () => {
    winner = game (btnPapel.textContent);
})

btnTijera.addEventListener('click', () => {
    winner = game (btnTijera.textContent);
})

// Creo la función que resuelve el juego, pide la elección de cada participante
function playRound (userChoice, computerChoice) {
    let resultGame;

    // Si eligieron lo mismo, empataron.
    if (userChoice == computerChoice) {
        resultGame = "¡Ambos eligieron " + userChoice + "! Empataron.";
        winner = "tie";
    }
    // Si no, revisa las dos opciones que le dan la victoria al usuario: si eligió piedra y la computadora tijera, si eligió papel y la computadora piedra, o si eligió tijera y la computadora papel
    else if ((userChoice == "Piedra" && computerChoice == "Tijera") || (userChoice == "Papel" && computerChoice == "Piedra") || (userChoice == "Tijera" && computerChoice == "Papel")) {
        resultGame = "¡Ganaste! Elegiste " + userChoice + " y la computadora eligió " + computerChoice + ".";
        winner = "user";
    }
    // Si no empataron ni ganó el usuario, entonces ganó la computadora
    else {
        resultGame = "¡Perdiste! Elegiste " + userChoice + " y la computadora eligió " + computerChoice + ".";
        winner = "computer";
    }

    ronda++;

    // Le sumo partidas a cada jugador
    switch (winner) {
        case "tie":
            break;
        case "user":
            userWins++;
            break;
        case "computer":
            computerWins++;
            break;
        default:
            break;
    }

    if (userWins < 5 && computerWins < 5) {
        // Imprimo el resultado de cada ronda
        divResultado.textContent = "Ronda " + ronda + ": " + resultGame + " Van " + userWins + " a " + computerWins;
    }else{
        // Imprimo el resultado final
        divResultado.textContent = "Ronda " + ronda + ": " + resultGame + " Terminaron " + userWins + " a " + computerWins;
        if (userWins > computerWins) {
            divResultado.textContent += "¡Ganaste la partida!";
        }else if (computerWins > userWins) {
            divResultado.textContent += "¡La computadora ganó la partida!";
        }else{
            divResultado.textContent += "¡Empataron!";
        }
        ronda = 0;
        userWins = 0;
        computerWins = 0;
    }

    // Devuelvo el ganador
    return winner;
}

// Creo la función que va a correr el script durante 5 rondas, para elegir un ganador
function game(userChoice) {

    // Genero un núnero al azar entre 1 y 3 que representan la elección de piedra, papel o tijera, respectivamente, por la computadora
    let getComputerChoice = Math.floor((Math.random() * 3) + 1);

    // Le pregunto al usuario que ingrese el texto correspondiente a Piedra, Papel o Tijera
    let getUserChoice = userChoice;

    // Formateo el texto para que sea todo minúsculas con la primera letra en mayúsculas, porque así lo vamos a comparar luego

    // Tomo la primera letra del string y la hago mayúscula
    primeraLetra = getUserChoice.charAt(0).toUpperCase();

    // Le quito la primera letra a la cadena que ingresó el usuario
    getUserChoice = getUserChoice.toLowerCase().slice(1);

    // Junto la primera letra en mayúscula con el string sin la primera letra
    getUserChoice = primeraLetra + getUserChoice;


    // Convierto la elección de la computadora a Piedra, Papel o Tijera
    switch (getComputerChoice) {
        case 1:
            getComputerChoice = "Piedra";
            break;
        case 2:
            getComputerChoice = "Papel";
            break;
        case 3:
            getComputerChoice = "Tijera";
            break;
    }

    let winner = playRound (getUserChoice, getComputerChoice);
    return winner;
}