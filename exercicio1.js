/*1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário e calcule o imposto
a ser pago com base nas faixas: 

até R$ 22.847,76 (isento)
de R$ 22.847,77 a R$ 33.919,80 (7,5%)
de R$ 33.919,81 a R$ 45.012,60 (15%) 
e acima (22,5%).
 Apresente o valor digitado e o valor do imposto a ser pago.
*/
var rendaAnual;
var rendaAnual = parseFloat(prompt("Digite sua Renda Anual: "));
var imposto;

if (rendaAnual <= 0){
    
}
if (rendaAnual < 22.847){
    imposto = 0;
    console.log("isento!");
} 
else if (rendaAnual >= 33.919,80){
    imposto = rendaAnual * 0.075;
    console.log("o valor digitado: "  + rendaAnual + " // Valor do imposto é: "   + imposto );
}
else if (rendaAnual >= 45.012){
    imposto = rendaAnual * 0.15;
    console.log("o valor digitado: "  + rendaAnual + " // Valor do imposto é: "   + imposto );
}
else if (rendaAnual >= 45.013){
    imposto = rendaAnual * 0,225;
    console.log("o valor digitado: "  + rendaAnual + " // Valor do imposto é: "   + imposto );
}