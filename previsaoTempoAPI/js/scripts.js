


const key = "327958ed9ceb9d6c95865a50a9e22574"


async function buscarCidade(cidade){
    const dados = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    temperatura = document.querySelector(".temperatura").innerHTML =  Math.round(dados.main.temp) + "°C"
    humidade = document.querySelector(".humidade").innerHTML = dados.main.humidity + "%"
    tempo = document.querySelector(".tempo").innerHTML = dados.weather[0].description
    local = document.querySelector('.local').innerHTML = dados.name
    console.log(dados)
   


}


function cliqueNoBotao(){

    const cidade = document.querySelector(".buscarCidade").value
    console.log(cidade)
    buscarCidade(cidade)
}
