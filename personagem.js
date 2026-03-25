let NomeUsuario = prompt("qual é o seu nome?");
alert("olá " + NomeUsuario)
let XpPersonagem = parseInt(prompt("quantos Pontos de Experiência seu personagem tem?"));

if (XpPersonagem <= 1000) {
    alert("seu personagem é da classe ferro");
}
else if (XpPersonagem > 1000 && XpPersonagem <= 2000) {
    alert("seu personagem é da classe bronze");

}

else if (XpPersonagem > 2000 && XpPersonagem <= 5000) {
    alert("seu personagem é da classe prata");

}
else if (XpPersonagem > 5000 && XpPersonagem <= 7000) {
    alert("seu personagem é da classe ouro");
}
else if (XpPersonagem > 7000 && XpPersonagem <= 8000) {
    alert("seu personagem é da classe platina");
}
else if (XpPersonagem > 8000 && XpPersonagem <= 9000) {
    alert("seu personagem é da classe ascedente");
}
else if (XpPersonagem > 9000 && XpPersonagem <= 10000) {
    alert("seu personagem é da classe imortal");
}
else {
    alert("seu personagem é da classe Radiante");
}