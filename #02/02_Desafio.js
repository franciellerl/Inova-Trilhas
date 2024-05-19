//Francielle Rodrigues Lindoso - Trilha de Ciência de Dados
//PARTE 1 do desafio se encontra no 01_Desafio.txt

function exibirResultado(id, mensagem) {
  let elementoResultado = document.getElementById(id);
  elementoResultado.innerHTML = `<label class="texto">${mensagem}</label>`;
}

//PARTE 2 - QUESTÃO 1

function operacao(x, y) {
  let soma = (x**y) + (x**y);
  let divisao = x % y;
  let subtracao = y - x;

  exibirResultado("som", `Soma: ${soma}`);
  exibirResultado("div", `Resto da divisão: ${divisao}`);
  exibirResultado("sub", `Subtração do segundo pelo primeiro: ${subtracao}`);
}

//PARTE 2 - QUESTÃO 2

//a função já não permite o input de valores além de números (por utilizar type = number) então o tratamento foi pra garantir que números negativos não entrem (lembrando que não faz checagem pra tempo negativo)

//  "e, se o tempo de aplicação for maior que 12 (meses) e menor ou igual a 24(meses), a taxa de juro de ser 5 %. Caso o tempo de aplicação for maior ou igual a 12 (meses) e menor ou igual a 24 (meses), a taxa de juros deverá ser de 10%" --> texto repetido, considerei 10% como acima de 24 meses e segui o texto para os 5%

function taxa(capitalAplicado, tempoDeAplicacao){
  let juros = 0;
  //A
  if(capitalAplicado < 0){
    exibirResultado("resu", `Valor informado inválido! Por favor, informe o valor depositado na poupança`);
  } 
  //B
  else if(capitalAplicado > 999 && capitalAplicado < 10000){
    if(tempoDeAplicacao > 5 && tempoDeAplicacao < 12){
      juros = 2/100;
    }
  }
  //C
  else if(capitalAplicado > 50000 && capitalAplicado < 100000){
    if(tempoDeAplicacao > 24){
      juros = 10/100;
    } else if(tempoDeAplicacao > 12 && tempoDeAplicacao <= 24){
      juros = 5/100;
    }
  } 
  else {
      juros = 0.6022/100; //else da letra A
  }
  
  let resultado = capitalAplicado * juros * tempoDeAplicacao;
  resultado = resultado.toFixed(2);
  exibirResultado("resu", ` A quantia de R$${capitalAplicado} aplicada em ${tempoDeAplicacao} meses, rendeu R$${resultado} a juros de ${juros}`);
}

//PARTE 2 - QUESTÃO 3

let numSecreto = Math.floor(Math.random() * (30 - 20 + 1) + 20);
let i = 0;

function jogo(chute){
  console.log(numSecreto);
  if(chute == numSecreto){
    exibirResultado("acer", `Parabéns! Você acertou!`)
    numSecreto = Math.floor(Math.random() * (30 - 20 + 1) + 20);
    i = 0;
    return;
  } else if(i == 3){
    exibirResultado("acer", `Você perdeu! O número secreto era ${numSecreto}`);
    numSecreto = Math.floor(Math.random() * (30 - 20 + 1) + 20);
    i = 0;
    return;
  } else {
    exibirResultado("acer", `Você errou! Digite novamente um número entre 20 e 30!`)
    i++;
    alert(i);
  }
}
