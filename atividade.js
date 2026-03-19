const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

botao.onclick = () => {

    let texto = input.value.trim();
    if (texto === "") return;

    let li = document.createElement("li");
    li.className = "list-group-item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.innerText = " " + texto;

    checkbox.onchange = () => {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };

    let btn = document.createElement("button");
    btn.innerText = "Remover";
    btn.className = "btn btn-danger btn-sm float-end";

    btn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);

    lista.appendChild(li);

    input.value = "";
};