/* 
2) Elabore um programa que receba o salário bruto mensal de um funcionário e apresente a faixa e valor do desconto de INSS e IRRF e o valor liquido do salário baseado na seguinte tabela:

INSS (Instituto Nacional do Seguro Social):
Até R$ 1.302,00: 7,5%
De R$ 1.302,01 até R$ 2.571,29: 9%
De R$ 2.571,30 até R$ 3.856,94: 12%
Acima de R$ 3.856,94: 14%

IRRF (Imposto de Renda Retido na Fonte):
Até R$ 1.903,98: Isento
De R$ 1.903,99 até R$ 2.826,65: 7,5%
De R$ 2.826,66 até R$ 3.751,05: 15%
De R$ 3.751,06 até R$ 4.664,68: 22,5%
Acima de R$ 4.664,68: 27,5%
*/

var salarioBruto = parseFloat(prompt("Digite seu salário: "));

var descontoINSS;
if (salarioBruto <= 1.302,0) {
    var descontoINSS = salarioBruto * 0.075
  } 
else if (salarioBruto <= 2.571,29) {
    var  descontoINSS = salarioBruto * 0.09
  }
else if (salarioBruto <= 3.856,94) {
    var descontoINSS = salarioBruto * 0.12
  } 
else if (salarioBruto >= 3.856,94) {
    var descontoINSS = salarioBruto * 0.14
}

if (salarioBruto <= 1.903,98) {
    var descontoIRRF = 0
}
else if (salarioBruto <= 2.826,65) {
    var descontoIRRF = salarioBruto * 0.075
}  
else if (salarioBruto <= 3.75105) {
    var descontoIRRF = salarioBruto * 0.15
}
else if (salarioBruto <= 4.664,68) {
    var descontoIRRF = salarioBruto * 0.225
} 
else if (salarioBruto >= 4.664,68) {
    var descontoIRRF = salarioBruto * 0.275
}

var valorLiquido = salarioBruto - descontoINSS - descontoIRRF;

console.log("Salário Bruto: R$ " + salarioBruto);
console.log("Desconto INSS: R$ " + descontoINSS);
console.log("Desconto IRRF: R$ " + descontoIRRF);
console.log("Salário Líquido: R$ " + valorLiquido);
