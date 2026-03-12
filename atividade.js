const botao = document.getElementById("btnAdicionar");

botao.addEventListener("click", function(){

    const texto = document.getElementById("inputTarefa").value;

    const lista = document.getElementById("listaTarefas");

    const li = document.createElement("li");

    li.classList.add("list-group-item");

    li.textContent = texto;

    lista.appendChild(li);

});