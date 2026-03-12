const botao = document.getElementById("btnAdicionar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){

    mensagem.textContent = "Texto alterado com JavaScript!";

});