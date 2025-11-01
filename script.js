/*
Lista de tarefas
[x] Saber quando o botão foi clicado
[x] Pegar o texto dentro do input
[ ] colocar esse texto na tela
[ ] Deletar a tarefa (Quando clicar no X)
 
*/ 

function adicionarTarefa(){
    let input = document.querySelector("input").value;

    let li = document.createElement("li");
    li.innerHTML = input  + '<span onclick="deletarTarefas(this)">❌</span>';

    document.querySelector("ul").appendChild(li);

    document.querySelector("input").value = '';
}

function deletarTarefas(li){
    
    li.parentElement.remove()

}