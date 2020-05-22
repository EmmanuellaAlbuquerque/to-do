// Captura tags:
var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

// JSON para array
var to_dos = JSON.parse(localStorage.getItem('list_todos')) || []

// Renderiza a lista de tarefas
function renderTo_dos() {
    listElement.innerHTML = ''

    for (to_do of to_dos) {
        var to_doElement = document.createElement('li')
        var to_doText = document.createTextNode(to_do)

        // Cria link para envolver o icon trash
        var linkTrash = document.createElement('a')
        linkTrash.setAttribute('href', '#')

        // Adiciona um onclick no link
        var position = to_dos.indexOf(to_do)
        linkTrash.setAttribute('onclick', 'deleteTo_do(' + position + ')')

        // Tag i, com class="fas fa-trash"
        var trashItem = document.createElement('i')
        trashItem.setAttribute('class', 'fas fa-trash')

        linkTrash.appendChild(trashItem)

        // Adiciona o texto ao elemento lista
        to_doElement.appendChild(to_doText)

        // Adiciona o link trash dentro do elemento lista
        to_doElement.appendChild(linkTrash)

        // Adiciona o elemento li em uma ul
        listElement.appendChild(to_doElement)
    }

    event.preventDefault()
}

// Adiciona uma nova tarefa
function addTo_do() {
    var to_doText = inputElement.value
    if (to_doText != ''){
        to_dos.push(to_doText)
        inputElement.value = ''
        renderTo_dos()
        saveToStorage()
    }
}

// Deleta uma tarefa existente
function deleteTo_do(position) {
    to_dos.splice(position, 1)
    renderTo_dos()
    saveToStorage()
}

// Salva no Storage local
function saveToStorage() {
    // array para JSON, reconhecido pelo browser
    localStorage.setItem('list_todos', JSON.stringify(to_dos))
}

// Ao clicar no botao adicionar
buttonElement.onclick = addTo_do

renderTo_dos()
