/*
Lista de tarefas
[x] Saber quando o botão foi clicado
[x] Pegar o texto dentro do input
[ ] colocar esse texto na tela
[ ] Deletar a tarefa. 
 
*/ 

function adicionarTarefa(){
    let input = document.querySelector("input").value;

    let li = document.createElement("li");
    li.innerHTML = input  + "<span>❌</span>";

    document.querySelector("ul").appendChild(li);

    input = "";
}