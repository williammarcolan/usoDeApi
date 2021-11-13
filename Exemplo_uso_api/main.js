function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(dia) {
    linha = document.createElement("tr");
    tdDate = document.createElement("td");
    tdWeekday = document.createElement("td");
    tdMax = document.createElement("td");
    tdMin = document.createElement("td");
    tdDescription = document.createElement("td");
    tdCondition = document.createElement("td");
    tdDate.innerHTML = dia.date
    tdWeekday.innerHTML = dia.weekday
    tdMax.innerHTML = dia.max
    tdMin.innerHTML = dia.min
    tdDescription.innerHTML = dia.description
    tdCondition.innerHTML = dia.condition
    
    linha.appendChild(tdDate);
    linha.appendChild(tdWeekday);
    linha.appendChild(tdMax);
    linha.appendChild(tdMin);
    linha.appendChild(tdDescription);
    linha.appendChild(tdCondition);

    return linha;
}

function main() {
    let data = fazGet("https://api.hgbrasil.com/weather?format=json-cors&key=1f1eb726");
    let dias = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    dias.results.forecast.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}
 
main();