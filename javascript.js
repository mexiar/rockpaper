// Genero un núnero al azar entre 1 y 3 que representan la elección de piedra, papel o tijera, respectivamente, por la computadora
let getComputerChoice = Math.floor((Math.random() * 3) + 1);

// Le pregunto al usuario que ingrese el texto correspondiente a Piedra, Papel o Tijera
let getUserChoice = prompt("Ingresa Piedra, Papel o Tijera: ");

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

// Llamo a la función que resuelve el juego y le paso la elección de cada participante
let resultGame = resolveGame (getUserChoice, getComputerChoice);

// Creo la función que resuelve el juego, pide la elección de cada participante
function resolveGame (userChoice, computerChoice) {
    let resultGame;

    // Si eligieron lo mismo, empataron.
    if (userChoice == computerChoice) {
        resultGame = "¡Ambos eligieron " + userChoice + "! Empataron.";
    }
    // Si no, revisa las dos opciones que le dan la victoria al usuario: si eligió piedra y la computadora tijera, si eligió papel y la computadora piedra, o si eligió tijera y la computadora papel
    else if ((userChoice == "Piedra" && computerChoice == "Tijera") || (userChoice == "Papel" && computerChoice == "Piedra") || (userChoice == "Tijera" && computerChoice == "Papel")) {
        resultGame = "¡Ganaste! Elegiste " + userChoice + " y la computadora eligió " + computerChoice + ".";
    }
    // Si no empataron ni ganó el usuario, entonces ganó la computadora
    else {
        resultGame = "¡Perdiste! Elegiste " + userChoice + " y la computadora eligió " + computerChoice + ".";
    }

    // Imprimo en la consola
    return resultGame;
}