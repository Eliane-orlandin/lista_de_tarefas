// Seleciona os seletores
function pegarInput(){
    // Acessa classe document e busca elemento pelo id
    var inputElement = document.getElementById("input-produto")
    // Imprime o valor do elemento encontrado
    console.log(inputElement.value)
    /* TODO - Implementa função que cria um elemento de linha
    com o valor capturado
    */ 
    criaLinhaProduto(inputElement.value)
    // Apaga o valor do elemento encontrado
    inputElement.value = ''
    // Move o foco para o elemento encontrado
    inputElement.focus()
}
// Manipulação do DOM
function criaLinhaProduto(nomeDoProduto){
    // Cria elemnto linha com  os elementos internos
    var linhaProduto = document.createElement("tr")
    var celulaProdutoNumero = document.createElement("td")
    celulaProdutoNumero.innerText = Math.floor(Math.random() * 10000)
    
    var celulaProdutoItem = document.createElement("td")
    var celulaProdutoEditar = document.createElement("td")
    
    var botaoEditar = document.createElement("button")
    botaoEditar.className = "btn"
    botaoEditar.type = "button"
    botaoEditar.addEventListener("click", editaProduto)
    
    var iconeEditar = document.createElement("span")
    iconeEditar.className = "material-icons"
    iconeEditar.innerText = "mode_edit"

    var celulaProdutoExcluir = document.createElement("td")
    
    var botaoExcluir = document.createElement("button")
    botaoExcluir.type = "button"
    botaoExcluir.className = "btn"
    
    var iconeExcluir = document.createElement("span")
    iconeExcluir.className = "material-icons"
    iconeExcluir.innerText = "delete"

    // Adiciona valor na celula item
    celulaProdutoItem.innerHTML = nomeDoProduto
    
    // --------Início celula Editar------------//
    //Anexa o ícone  editar ao elemento botão editar
    botaoEditar.appendChild(iconeEditar)
    // Anexa o botão editar  ao elemento  célula editar
    celulaProdutoEditar.appendChild(botaoEditar)
    // --------Fim célula Editar---------------//

    // --------Início celula Excluir------------//
    //Anexa o ícone  editar ao elemento botão excluir
    botaoExcluir.appendChild(iconeExcluir)
     // Anexa o botão editar  ao elemento  célula excluir
    celulaProdutoExcluir.appendChild(botaoExcluir)
    // --------Fim célula Excluir---------------//

    // ANexa todas as células ao elemento linha
    linhaProduto.appendChild(celulaProdutoNumero)
    linhaProduto.appendChild(celulaProdutoItem)
    linhaProduto.appendChild(celulaProdutoEditar)
    linhaProduto.appendChild(celulaProdutoExcluir)

    // Buscar o tbody
    var elementoTBody = document.getElementById('registro-produto')
    //  Anexa a linha produto ao tbody
    elementoTBody.appendChild(linhaProduto)    
}
// Eventos

function editaProduto(objetoDeEventos){
    var elementoButtonOrSpan = objetoDeEventos.target
    var elementoTd
    
    if (elementoButtonOrSpan.tagName === "BUTTON"){
        elementoTd = elementoButtonOrSpan.parentNode
    }else{
        elementoTd = elementoButtonOrSpan.parentNode.parentNode
    }
    
    var elementoTdPreviousSiblings = elementoTd.previousSibling
    
    var elementoInput = criaEntradaDeTexto(elementoTdPreviousSiblings.innerText)

    elementoTdPreviousSiblings.innerText = ""
    elementoTdPreviousSiblings.appendChild(elementoInput)
}
function criaEntradaDeTexto(textoAtual){
    var container = document.createElement("div")
    var entradaDeTexto = document.createElement("input")
    entradaDeTexto.value = textoAtual
    var botaoConfirmar = document.createElement("button")
    botaoConfirmar.innerText = "✔️"
    var botaoCancelar = document.createElement("button")
    botaoCancelar.innerText = "❌"

    container.appendChild(entradaDeTexto)
    container.appendChild(botaoConfirmar)
    container.appendChild(botaoCancelar)

    return container
}