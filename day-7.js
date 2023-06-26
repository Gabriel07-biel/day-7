function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtração(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicação(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function divisão(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operação = "";

do {  
	
    operação = prompt(`Qual calculo você deseja realizar? Escolha 'soma', 'subtração', 'multiplicação', 'divisão' ou 'encerrar'.`);	
    while (operação != "soma" && operação != "subtração" && operação != "multiplicação" && operação != "divisão" && operação != "encerrar") {  
	alert(`Calculo não identificado!`);
	operacao = prompt(`Qual calculo você deseja realizar? Escolha 'soma', 'subtração', 'multiplicação', 'divisão' ou 'encerrar'.`);
    }
	
    if (operação === "encerrar"){  
		break;	
    }
	
    valor1 = prompt(`Digite o primeiro numero:`);
    valor2 = prompt(`Digite o segundo número:`);
    switch (operação) {
        case 'soma':
          alert(`O resultado da ${operação} é ${soma(valor1, valor2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operação} é ${subtração(valor1, valor2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operação} é ${multiplicação(valor1, valor2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operação} é ${divisão(valor1, valor2)}`);
            break;
    }
} while(operação === "soma" || operação === "subtração" || operação === "multiplicação" || operação === "divisão")
alert(`Tchauuu, até mais :)`);