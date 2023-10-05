import { pegarValorDeInputTarefa, 
recuperaListaDeTarefasNoLocalStorage,
criaElementoTarefaNaListaDeTarefas} from "./src/funcoes.js"

const listaDeTarefasSalvas = recuperaListaDeTarefasNoLocalStorage()
if (listaDeTarefasSalvas.length >0){
for (var i = 0; i < listaDeTarefasSalvas.length; i++){
    criaElementoTarefaNaListaDeTarefas(listaDeTarefasSalvas[i])

    }
}
const botaoAdicionaTarefa = document.getElementById("botao-tarefa")
botaoAdicionaTarefa.addEventListener("click", pegarValorDeInputTarefa)