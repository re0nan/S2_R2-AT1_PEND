
let input = document.getElementById("inputTarefa");
let botao = document.getElementById("btnAdicionar");
let lista = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");


botao.addEventListener("click", () => {

    let texto = input.value;

  
    if (texto === "") {
        mensagem.innerText = "Digite uma tarefa!";
        mensagem.className = "text-danger";
        return;
    }

  
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    
    li.innerText = texto;


    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";
    btnRemover.className = "btn btn-danger btn-sm";

  
    btnRemover.addEventListener("click", () => {
        li.remove();
    });

   
    li.appendChild(btnRemover);


    lista.appendChild(li);

    input.value = "";

    
    mensagem.innerText = "Tarefa adicionada!";
    mensagem.className = "text-success";
});