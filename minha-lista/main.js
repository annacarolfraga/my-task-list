import ConcludedButton  from './components/completedTask.js'
import DeleteButton from './components/deleteTask.js'

    const createTask = (event) => {

    event.preventDefault()
    
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const inputContent = input.value
    
    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${inputContent}</p>`

    task.innerHTML = content

    task.appendChild(ConcludedButton())

    task.appendChild(DeleteButton())
    list.appendChild(task)
    input.value = " "

}

    const newTask = document.querySelector('[data-form-button]');

    newTask.addEventListener('click',createTask);
