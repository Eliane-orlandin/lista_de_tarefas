function pegarValorDeInputTarefa(){
    const elementoInputTarefa = document.getElementById("input-tarefa")
    const nomeDaTarefa = elementoInputTarefa.value
    
    if(nomeDaTarefa === "" || nomeDaTarefa === undefined){
        alert("Digite o nome da tarefa!")
    } else {
        elementoInputTarefa.value = ""
        elementoInputTarefa.focus()
        criaElementoTarefaNaListaDeTarefas(nomeDaTarefa)
    }

}

function criaElementoTarefaNaListaDeTarefas(){
    

    const elementoParagrafoTarefa = document.createElement("p")
    elementoParagrafoTarefa.innerText = "parametroNomeDaTarefa"

    const elementoBotaoEditarTarefa = document.createElement("button")
    elementoBotaoEditarTarefa.innerText = "Editar"
    elementoBotaoEditarTarefa.addEventListener("click", editaElementoTarefaNaListaDeTarefa)

    const elementoBotaoExcluirTarefa = document.createElement("button")
    elementoBotaoExcluirTarefa.innerText = "Excluir"
    elementoBotaoExcluirTarefa.addEventListener("click", removeElementoTarefaNalistaDeTarefas)

    const elementoDivTarefa = document.createElement("div")
    elementoDivTarefa.appendChild(elementoParagrafoTarefa)
    elementoDivTarefa.appendChild(elementoBotaoEditarTarefa)
    elementoDivTarefa.appendChild(elementoBotaoExcluirTarefa)

    const elementoDivTarefas = document.getElementById("div-lista-de-tarefas")
    elementoDivTarefas.appendChild(elementoDivTarefa)
}

function removeElementoTarefaNalistaDeTarefas(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    botaoQueFoiClicado.parentNode.remove()

}

function editaElementoTarefaNaListaDeTarefa(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    const paragrafoDaTarefa = botaoQueFoiClicado.previousSibling
    const textoInternoDoParagrafo = paragrafoDaTarefa.innerText
    const elementoInputTarefa = document.getElementById("input-tarefa")
    elementoInputTarefa.value = textoInternoDoParagrafo
    botaoQueFoiClicado.parentNode.remove()


}