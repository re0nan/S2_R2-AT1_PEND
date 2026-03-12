const botao = document.getElementById("btnAdicionar")

botao.addEventListener("click", function(){

let nome = document.getElementById("inputTarefa").value

let mensagem = document.getElementById("mensagem")

mensagem.textContent = "Olá " + nome + "!"

})