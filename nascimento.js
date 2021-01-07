anoDeNascimento = 1986
var resultado = anoDeNascimento;
if (anoDeNascimento <= 1945) {
    resultado = "Geraçãão silenciosa"
} else if (anoDeNascimento <= 1964 && anoDeNascimento > 1945) {
    resultado = "Boomers"
} else if (1964 < anoDeNascimento <= 1980 ) {
    resultado = "Geração X"
} else if (1980 < anoDeNascimento <= 1996) {
    resultado = "Millennials"
} else if (anoDeNascimento > 1996) {
    resultado = "Geração Z"
}
console.log(resultado)