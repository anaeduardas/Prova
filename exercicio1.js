/*1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário e calcule o imposto a ser pago com base nas faixas: 
até R$ 22.847,76 (isento), de R$ 22.847,77 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%).
 Apresente o valor digitado e o valor do imposto a ser pago.
*/
var renda = parseFloat(prompt("Digite sua renda anual: "));

if (renda < 22.847,76 ){
    console.log("isento");
}

else if (renda == 22.847,76 > 33.919,80){
    var imposto = renda / 7.5%
    console.log ("O valor a ser pago é: " + imposto);
}

else if (renda <= 45.012,60 ){
    var imposto = renda / 0.15
    console.log ("O valor a ser pago é: " + imposto);
}