
var ancestral = "Davi";
ancestral = "Moises";

let nome = "Jose";
let Nome = "Maria";

console.log(Nome);



nome = "São Jose";
Nome = "Santa Maria";

console.log(Nome);

//let mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`

let endereco;

const horasDia = 24;
// (X) horasDia = 36;

let deMaior = true;

const pessoa = {
    nome: "Ana",
    idade: 25    
}

pessoa.nome = "Beatriz";




let idade = 23;

if ( idade >= 18){
    console.log('Maior de Idade. Pode dirigir!')
} else {
    console.log('Menor de idade.')
}

let validaIdade = idade >= 18 ? "Maior" : "Menor";
console.log(validaIdade)

let statusSemaforo = 'verde';
switch(statusSemaforo){
    case "vermelho":
        console.log('Pare!');
    break;
    case "verde":
        console.log('Siga!');
    break;
    default:
        console.log('Atenção!');
}


let contador = 0;
while (contador < 3){
    console.log(`O contador é ${contador}`);
    contador++;
}

for (let i = 0; i<5; i++ ){
    console.log(`esse é o for de ${i}`);
}

const frutas = ["Maça", "Banana", "Morango", "Melão", "Uva"];
for (const fruta of frutas){
    console.log(fruta)
}


/*
function somar(a, b){
    return a + b;
}
let resultado = somar(5, 3);
console.log(resultado);
*/

let somar = (a,b) => a+b;
console.log(somar(5,3))


/*
let multiplicar = function(a, b){
    return a*b;
}
console.log(multiplicar(5, 10))
*/

let multiplicar = (a, b) => a*b;
console.log(multiplicar(5,10));



const botao = document.getElementById('btn-hero');

console.log(botao.textContent);

botao.addEventListener('click', () => {
    alert('[Alert] cliquei no botao!!!')
    console.log('cliquei no botao!!!');
} )

const link = document.getElementById('link-google');

link.addEventListener('click', (event) => {
    alert('não vou!!!')
    event.preventDefault();
})


