/*4) Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50

Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50

Solicite ao usuário qual Pizza e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
*/

var menuLanche = "===== menu lanches ====="
menuLanche = menuLanche = "cód | nome | preço \n"
menuLanche += "1 -> X-SALADA-> R$ 20,00\n "
menuLanche += "2 -> X-BACON-> R$ 25,00\n "
menuLanche += "3 -> X-TUDO-> R$ 23,00\n "
menuLanche += "4 -> BAURU -> R$ 29,99\n "
menuLanche += "5 -> AMERICANO -> 22,50\n "
var menuLanche = parseInt(prompt(menuLanche));

var quantidade = parseInt(prompt("Digite a quantidade: "));

if (menuLanche == 1){
    var xSalada = 20.00
    var valorT1 = xSalada * quantidade; 
    console.log ("Você escolheu: X-SALADA ");
}
else if (menuLanche == 2){
    var xBacon = 25.00
    var valoT1 = xBacon * quantidade; 
    console.log ("Você escolheu: X-BACON ");
}
else if (menuLanche == 3 ){
    var xTudo = 23.00
    var valorT1 = xTudo * quantidade;
    console.log ("Você escolheu: X-TUDO ");
}
else if (menuLanche == 4 ){
    var bauru = 29.99
    var valorT1 = bauru * quantidade;
    console.log ("Você escolheu: BAURU");
}

var bebidas = "==== menu bebidas ===="
bebidas = bebidas = "cód | nome | preço \n"
bebidas += "1 -> Refrigerante Lata -> R$ 5,00\n "
bebidas += "2 -> Refrigerante 2L -> R$ 10,00\n "
bebidas += "3 -> Agua -> R$ 3,50\n "
bebidas += "4 -> Suco -> R$ 7,50\n "

var bebidas = parseInt(prompt(bebidas));
var quantidade2 = parseInt(prompt("Digite a quantidade de bebidas: "));

if (bebidas == 1){
    var refriLata = 5.00
    var valorT2 = refriLata * quantidade2;
    console.log ("Você escolheu: Refrigerante Lata "); 
}
else if (bebidas == 2){
    var refri2l = 10.00
    var valorT2 = refri2l * quantidade2; 
    console.log ("Você escolheu: Refrigerante 2L "); 
}
else if (bebidas == 3 ){
    var agua = 3.50
    var valorT2 = agua * quantidade2;
    console.log ("Você escolheu: Água "); 
}
else if (bebidas == 4 ){
    var suco = 7.50
    var valorT2 = suco * quantidade2;
    console.log ("Você escolheu: Suco"); 
}

var pagamento = "==== Opção de pagamento ===="
pagamento = pagamento = "cód | opção | descontos \n"
pagamento += "1 -> PIX - 10% de desconto.\n "
pagamento += "2 -> Dinheiro - 5% de desconto.\n "
pagamento += "3 -> Crédito - sem desconto.\n "
var pagamento = parseFloat(prompt(pagamento));

if (pagamento == 1){
    var pix = (valorT1 + valorT2 - 10/100);
    console.log("seu pedido ficou: " + pix)
}
else if (pagamento == 2 ){
    var dinheiro = (valoT1 + valorT2 - 5/100 );
    console.log("seu pedido ficou: " + dinheiro)
}
else if (pagamento == 3 ){
    var credito = (valorT1 + valorT2);
    console.log = ("seu pedidio ficou: " + credito);
}