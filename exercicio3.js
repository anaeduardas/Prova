/* 3) Análise de Desempenho Escolar: Desenvolva um algoritmo que leia as notas de 4 bimestres de um aluno e calcule a média.
 Informe se o aluno foi aprovado (média ≥ 7) em recuperação (5 ≤ média < 7) ou reprovado (média < 5).
*/

var nota1 = parseFloat(prompt("Digite nota 1: "));
var nota2 = parseFloat(prompt("Digite nota 2: "));
var nota3 = parseFloat(prompt("Digite nota 3: "));
var nota4 = parseFloat(prompt("Digite nota 4: "));

var media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7 ){
    console.log("Aprovado!" + " média: " + media);
}
else if (media <= 6.9 ){
    console.log("O aluno está em recuperação!" + " média: " + media);
}
else if (media <= 5){
    console.log("O aluno foi reprovado!" + " média: " + media);
}

