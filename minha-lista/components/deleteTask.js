const DeleteButton = () => {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('button')
    deleteButton.innerText = 'deletar'
    deleteButton.addEventListener('click', deleteTask)

    return deleteButton
}

const deleteTask = (event) => {
    const deleteButton = event.target
    
    const completedTask = deleteButton.parentElement

    completedTask.remove()

    return deleteButton
}

export default DeleteButton;