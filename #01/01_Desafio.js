//Francielle Rodrigues Lindoso - Trilha de Ciência de Dados
//QUESTÃO 1

let nome = prompt("Qual é o seu nome?");
//utilizei "(nome)" no lugar de "(nome != null)" para o if desconsiderar também a string vazia
if (nome){
  console.log("Olá, " + nome + ", seja bem-vindo(a) à nossa empresa");
}
else {
  console.log("Desculpe, nenhum nome fornecido!");
}

//QUESTÃO 2

let idade = prompt("Qual é a sua idade?");
if (idade >= 60){
  console.log("Aguarde na fila de prioridade");
}
else {
  console.log("Aguarde na fila normal");
}

//QUESTÃO 3

let media = 0;
//utilizei o "for" no lugar do "while" pq já sabia o número de repetições
for (i = 1; i <= 3; i++){
  media += parseInt(prompt("Digite a sua nota " + i), 10);
}
if ((media/3) >= 7){
  console.log("Aprovado");
} 
else {
  console.log("Reprovado");
}

//QUESTÃO 4

for(i = 1; i <= 10; i++){
  console.log(i);
}

//QUESTÃO 5

for(i = 20; i >= 1; i--){
  console.log(i);
}

//QUESTÃO 6

let multi = 1;
for (i = 1; i <= 2; i++){
  multi *= parseInt(prompt("Digite o " + i + "° número"), 10);
}
console.log("A multiplicação dos números é " + multi);

//QUESTÃO 7

let num1 = parseInt(prompt("Digite o 1° número"), 10);
let num2 = parseInt(prompt("Digite o 2° número"), 10);
if ((num1 %= num2) == 0){
  console.log("O primeiro número é divisível por segundo");
}
else{
  console.log("O primeiro número não é divisível pelo segundo");
}

//QUESTÃO 8

//não utilizei prompt por entender que ia receber diretamente os dados do contador
let lista = [1200, 1000, 1100, 900, 800, 1000];
let soma = 0;
for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
}
console.log("O salário total da folha de pagamento é " + soma);

//QUESTÃO 9

let ano = parseInt(prompt("Digite o ano do seu nascimento"), 10);
//coloquei diretamente o ano atual, mas um "anoAtual = new Date().getFullYear()" evitaria que o código ficasse defasado em anos futuros
console.log("Idade: " + (2024 - ano));

//QUESTÃO 10

/*
·         10%, se o salário for menor ou igual a R$ 2000;
·         5%, se for maior a R$ 5000 e menor que R$ 10000;
·         2%, se for maior que que R$10000 e menor que R$15000.

existe um buraco em que não recebe um aumento -> se o salário foi maior que 2000 e menor que 5000 (além de nunca incluir igual depois dos 2000), não sei se foi um erro de digitação mas inclui no código
*/

let salario = parseInt(prompt("Digite o seu salário"), 10);
let salarioNovo = 0;
if (salario <= 2000){
  salarioNovo = salario + (salario*0.10);
} 
else if (salario > 5000 && salario < 10000){
  salarioNovo = salario + (salario*0.05);
}
 else if (salario > 10000 && salario < 15000){
  salarioNovo = salario + (salario*0.02);
}
else {
  salarioNovo = salario;
}
console.log("Seu novo salário é R$" + salarioNovo + " e seu salário anterior era R$" + salario);

