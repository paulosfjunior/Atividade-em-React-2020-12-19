import axios from 'axios'
import user from './user'

const basePath = "http://18.188.122.22:8001/tasks"

let tasks = []

async function loadTasks() {
    try {
        let response = await axios.get(`${basePath}/${user.id}`)
        tasks = response.data
    } catch (err) {
        console.warn(err.message)
        tasks = []
    }
}

function get() {
    return tasks
}

async function add(task) {
    try {
        let response = await axios.post(basePath, {...task, userId: user.id })
        console.log(response)
    } catch (err) {
        console.warn(err.message)
    }
}

function remove(taskId) {
    tasks = tasks.filter(item => item.id != taskId)
}

export default {
    get,
    add,
    remove,
    loadTasks
}
