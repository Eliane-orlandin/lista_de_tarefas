export const CHAVE_DO_LOCAL_STORAGE ="listaDeTarefas"

export function pegarValorDeInputTarefa(){
    const elementoInputTarefa = document.getElementById("input-tarefa")
    const nomeDaTarefa = elementoInputTarefa.value
    const listaDeTarefasSalvas = recuperaListaDeTarefasNoLocalStorage()
    
    
    if(nomeDaTarefa === "" || nomeDaTarefa === undefined || listaDeTarefasSalvas.includes(nomeDaTarefa)){
        alert("Tarefa já cadastrada!!")
    } else {
        elementoInputTarefa.value = ""
        elementoInputTarefa.focus()
        criaElementoTarefaNaListaDeTarefas(nomeDaTarefa)
        salvaListaDeTarefasNoLocalStorage(nomeDaTarefa)    
    }
}
export function salvaListaDeTarefasNoLocalStorage(novaTarefa){
    const listaDeTarefas = []

    if (localStorage.getItem(CHAVE_DO_LOCAL_STORAGE)){
        const listaSalva = JSON.parse(localStorage.getItem(CHAVE_DO_LOCAL_STORAGE))
        listaSalva.push(novaTarefa)
        localStorage.setItem(CHAVE_DO_LOCAL_STORAGE, JSON.stringify(listaSalva))
    }else{
        listaDeTarefas.push(novaTarefa)
        localStorage.setItem(CHAVE_DO_LOCAL_STORAGE, JSON.stringify(listaDeTarefas))
    }
}

export function recuperaListaDeTarefasNoLocalStorage(){
    return JSON.parse(localStorage.getItem(CHAVE_DO_LOCAL_STORAGE)) ?? []
}


export function criaElementoTarefaNaListaDeTarefas(parametroNomeDaTarefa){
    
    const elementoParagrafoTarefa = document.createElement("p")
    elementoParagrafoTarefa.style = "font-size: 18px; font-weight: 600"
    elementoParagrafoTarefa.innerText = parametroNomeDaTarefa

    const elementoBotaoEditarTarefa = document.createElement("button")
    elementoBotaoEditarTarefa.innerText = "Editar"
    elementoBotaoEditarTarefa.className = "waves-effect waves-light btn-small"
    elementoBotaoEditarTarefa.addEventListener("click", editaElementoTarefaNaListaDeTarefa)

    const elementoBotaoExcluirTarefa = document.createElement("button")
    elementoBotaoExcluirTarefa.innerText = "Excluir"
    elementoBotaoExcluirTarefa.className = "waves-effect waves-light btn-small red darken-2"
    elementoBotaoExcluirTarefa.style = "margin-left : 15px"
    elementoBotaoExcluirTarefa.addEventListener("click", removeElementoTarefaNalistaDeTarefas)

    const elementoDivTarefa = document.createElement("div")
    elementoDivTarefa.style = "margin-top: 28px"
    elementoDivTarefa.appendChild(elementoParagrafoTarefa)
    elementoDivTarefa.appendChild(elementoBotaoEditarTarefa)
    elementoDivTarefa.appendChild(elementoBotaoExcluirTarefa)

    const elementoDivTarefas = document.getElementById("div-lista-de-tarefas")
    elementoDivTarefas.appendChild(elementoDivTarefa)
}

export function removeElementoTarefaNalistaDeTarefas(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    const nomeDaTarefa = botaoQueFoiClicado.previousSibling.previousSibling.innerText
    removeTarefaNoLocalStorage(nomeDaTarefa)
    botaoQueFoiClicado.parentNode.remove()
}

export function removeTarefaNoLocalStorage(nomeDaTarefa){
    const listaDeTarefasSalvas = recuperaListaDeTarefasNoLocalStorage()
    const resultado = listaDeTarefasSalvas.filter((tarefa) => {
        return tarefa !== nomeDaTarefa
    })
    localStorage.setItem(CHAVE_DO_LOCAL_STORAGE, JSON.stringify(resultado))
}

export function editaElementoTarefaNaListaDeTarefa(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    const paragrafoDaTarefa = botaoQueFoiClicado.previousSibling
    const textoInternoDoParagrafo = paragrafoDaTarefa.innerText
    botaoQueFoiClicado.parentNode.remove()
    removeTarefaNoLocalStorage(textoInternoDoParagrafo)
    const elementoInputTarefa = document.getElementById("input-tarefa")
    elementoInputTarefa.value = textoInternoDoParagrafo
    elementoInputTarefa.focus()
}

