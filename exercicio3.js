/* 3) Análise de Desempenho Escolar: Desenvolva um algoritmo que leia as notas de 4 bimestres de um aluno e calcule a média.
 Informe se o aluno foi aprovado (média ≥ 7) em recuperação (5 ≤ média < 7) ou reprovado (média < 5).
*/

var nota = parseFloat(prompt("Digite suas notas: "));

if (nota >= 7){
    console.log("aprovado!");
}
else if (nota = 5 < 7  ){
    console.log ("recuperação!");
}
else if (nota <= 5 ){
    console.log (" Reprovado :( ");
}


