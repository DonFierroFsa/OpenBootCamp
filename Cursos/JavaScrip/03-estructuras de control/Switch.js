let nota = 12;

switch (nota) {
    case 5:
        console.log("Sobresaliente")
        break;
    case 4:
        console.log("Obtuviste un 4")
        break;
    case 3:
        console.log("Obtuviste un 3")
        break;
    case nota<3:
        console.log("te fue mal")
        break;
    default:
        console.log("ERROR")
}