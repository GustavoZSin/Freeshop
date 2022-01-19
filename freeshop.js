/*Programa criado utilizando JavaScript;
  Valores devem ser trocados nas variáveis;
  Favor utilizar "." ao informar números com vírgulas;
  Bom uso.*/

//variáveis passíveis de mudança
let expense = 40;
let payment = 50;
let dolarToday = 5.63; 

//calcula, arredonda e converte o troco
var realChange = payment - expense;
if (realChange == 0) {
    console.log("Não existe troco para a compra.")
}
realChange = realChange.toFixed(2);
var dollarChange = parseFloat((realChange/dolarToday).toFixed(2));

//calcula a quantidade de cada nota
let iHun = 0;  let iCin = 0;        let iTwe = 0; 
let iTen = 0;  let iFiv = 0;        let iTwo = 0;
let iOne = 0;  let iHalfDollar = 0; let iQuarter = 0;
let iDime = 0; let iNickel = 0;     let iPenny = 0;

if (dollarChange > 0) {
    console.log("O troco em real é de: R$ " + realChange); 
    console.log("Em dólar o troco é de: $ " + dollarChange);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
}

while (dollarChange != 0) {
    if (dollarChange < 0) {
        console.log("O valor pago é inferior ao gasto!");
        break;
    }   else if (dollarChange >= 100) {
            dollarChange -= 100;
            iHun++;
        } else if (dollarChange >= 50 && dollarChange < 100) {
            dollarChange -= 50;
            iCin++;
        } else if (dollarChange >= 20 && dollarChange < 50) {
            dollarChange -= 20;
            iTwe++;
        } else if (dollarChange >= 10 && dollarChange < 20) {
            dollarChange -= 10;
            iTen++;
        } else if (dollarChange >= 5 && dollarChange < 10) {
            dollarChange -= 5;
            iFiv++;
        } else if (dollarChange >= 2 && dollarChange < 5) {
            dollarChange -= 2;
            iTwo++;
        } else if (dollarChange >= 1 && dollarChange < 2) {
            dollarChange -= 1;
            iOne++;
        } else if (dollarChange >= 0.50 && dollarChange < 1) {
            dollarChange -= 0.5;
            iHalfDollar++;
        } else if (dollarChange >= 0.25 && dollarChange < 0.50) {
            dollarChange -= 0.25;
            iQuarter++;
        } else if (dollarChange >= 0.10 && dollarChange < 0.05) {
            dollarChange -= 0.10;
            iDime++;
        } else if (dollarChange >= 0.05 && dollarChange < 0.10) {
            dollarChange -= 0.05;
            iNickel++;
        } else if (dollarChange >= 0.01 && dollarChange < 0.05) {
            dollarChange -= 0.01;
            iPenny++;
        } else {
            break;
        }
    }

//verifica as cedulas
let arrayBills = [{index: iHun, value: "$ 100"},
                  {index: iCin, value: "$ 50"},
                  {index: iTwe, value: "$ 20"},
                  {index: iTen, value: "$ 10"},
                  {index: iFiv, value: "$ 5"}, 
                  {index: iTwo, value: "$ 2"}, 
                  {index: iOne, value: "$ 1"}, 
];
function verifyZeroBills(arrayBills){
    if (arrayBills.index != 0) 
    console.log(arrayBills.index + " Notas de: " + arrayBills.value);
};
arrayBills.forEach(verifyZeroBills);

//verifica as moedas
let arrayCoins = [{index: iHalfDollar, value: "$ 0,50"}, 
                  {index: iQuarter, value: "$ 0,25"}, 
                  {index: iDime, value: "$ 0,10"}, 
                  {index: iNickel, value: "$ 0,05"}, 
                  {index: iPenny, value: "$ 0,01"}, 
];
function verifyZeroCoins(arrayCoins){
    if (arrayCoins.index != 0) {
        console.log(arrayCoins.index + " Moedas de: " + arrayCoins.value);
    } 
}
arrayCoins.forEach(verifyZeroCoins);