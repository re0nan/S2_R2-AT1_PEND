const botao = document.getElementById("btnAdicionar");

botao.addEventListener("click", function () {

    const input = document.getElementById("inputTarefa");
    const texto = input.value;

    const mensagem = document.getElementById("mensagem");
    const lista = document.getElementById("listaTarefas");

    if (texto === "") {

        mensagem.innerHTML = '<span class="text-danger">Tarefa vazia!</span>';

    } else {

        const li = document.createElement("li");

        li.classList.add("list-group-item");

        li.textContent = texto;

        lista.appendChild(li);

        input.value = "";

        mensagem.innerHTML = '<span class="text-success">Tarefa adicionada com sucesso!</span>';
    }

});