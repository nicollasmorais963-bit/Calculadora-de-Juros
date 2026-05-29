function calcular(){
    let capital = Number(document.getElementById("capital").value);
    let taxa = Number(document.getElementById("taxa").value) / 100;
    let tempo = Number(document.getElementById("tempo").value);

    let tipoJuros = document.getElementById("tipoJuros").value;

    if(tipoJuros == "jurosSimples"){
        let juros = capital * taxa * tempo;
        let montante = capital + juros
        resultado = ("Seu montante é R$:" + montante + "\n" + "O juros é de R$" + juros);
    }

    else if(tipoJuros == "jurosC"){
        let montanteC = capital * (1 + taxa) ** tempo;
        let jurosComposto = montanteC - capital;
        
        resultado = ("Seu montante é R$:" + montanteC.toFixed(2) + "\n" + "O juros é de R$" + jurosComposto.toFixed(2));
    }

    else{
        resultado = ("Você não selecionou o tipo de juros");
    }

    document.getElementById("resultado").innerText = resultado;

}

function limparDados(){
    let capital = Number(document.getElementById("capital").value = " ");
    let taxa = Number(document.getElementById("taxa").value = " ") / 100;
    let tempo = Number(document.getElementById("tempo").value = " ");
    
}















