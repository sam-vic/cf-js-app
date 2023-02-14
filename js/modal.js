let modalContainer = document.querySelector('#modal-container')

function showModal(title, text, height, imageUrl) {

    // Clear all existing modal content
    modalContainer.innerHTML = ''

    let modal = document.createElement('div')
    modal.classList.add('modal')

    // Add the new modal content
    let closeButtonElement = document.createElement('button')
    closeButtonElement.classList.add('modal-close')
    closeButtonElement.innerText = 'Close'
    closeButtonElement.addEventListener('click', event => {
        hideModal()
    })

    let titleElement = document.createElement('h1')
    titleElement.innerText = title

    let contentElement = document.createElement('p')
    contentElement.innerText = text

    let heightElement = document.createElement('p');
    heightElement.innerText = `Height: ${height}`;

    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    modal.appendChild(closeButtonElement)
    modal.appendChild(titleElement)
    modal.appendChild(contentElement)
    modalContainer.appendChild(modal)

    modalContainer.classList.add('is-visible')
    modalContainer.addEventListener('click', (event) => {
        let target = event.target
        if (target === modalContainer) {
            hideModal()
        }
    });
}

function hideModal() {
    modalContainer.classList.remove('is-visible')
}

document.querySelector('.modal-button').addEventListener('click', event => {
    showModal('modal title', 'modal text')
})

window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal()
    }
})

export { showModal, hideModal }