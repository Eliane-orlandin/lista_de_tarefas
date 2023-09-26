function pegarInput(){
    // Acessa classe document e busca elemento pelo id
    var inputElement = document.getElementById("input-produto")
    // Imprime o valor do elemento encontrado
    console.log(inputElement.value)
    /* TODO - Implementa função que cria um elemento de linha
    com o valor capturado
    */ 

    // Apaga o valor do elemento encontrado
    inputElement.value = ''
    // Move o foco para o elemento encontrado
    inputElement.focus()
}