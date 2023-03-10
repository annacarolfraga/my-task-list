const ConcludedButton = () => {
    const concludedButton = document.createElement('button')

    concludedButton.classList.add('check-button')
    concludedButton.innerText = 'concluir'
    concludedButton.addEventListener('click', concludeTask)

    return concludedButton
}

const concludeTask = (event) => {
    const concludedButton = event.target

    const completedTask = concludedButton.parentElement

    completedTask.classList.toggle('done')

}

export default ConcludedButton;