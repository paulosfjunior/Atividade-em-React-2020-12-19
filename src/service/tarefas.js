
let tasks = [
    { id: '1234567', title: 'Tarefa 1', done: false, description: 'Dockerizar a API do backend.' },
    { id: '7654321', title: 'Tarefa 2', done: true, description: 'Desenvolver a API de backend do App.' },
    { id: '2459835', title: 'Tarefa 3', done: false, description: 'Realizar os testes da API.' },
    { id: '7649820', title: 'Tarefa 4', done: false, description: 'Disponibilizar o endpoint da API para a turma.' }
]

function get() {
    return [...tasks]
}

function add(task) {
    task.id = '' + Math.floor(Math.random() * Math.floor(1000))
    tasks = [...tasks, task]
}

function remove(taskId) {
    tasks = tasks.filter(item => item.id != taskId)
}

export default {
    get,
    add,
    remove
}