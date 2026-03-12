const botao = document.getElementById("btnAdicionar");

botao.addEventListener("click", function () {

    const input = document.getElementById("inputTarefa");
    const texto = input.value;

    const lista = document.getElementById("listaTarefas");
    const mensagem = document.getElementById("mensagem");

    if (texto === "") {

        mensagem.innerHTML = '<span class="text-danger">Tarefa vazia!</span>';

    } else {

        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between");

        li.textContent = texto;

        const botaoRemover = document.createElement("button");

        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("btn", "btn-danger", "btn-sm");

        botaoRemover.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(botaoRemover);

        lista.appendChild(li);

        input.value = "";

        mensagem.innerHTML = '<span class="text-success">Tarefa adicionada!</span>';
    }

});