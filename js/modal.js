let modalContainer = document.querySelector('#modal-container')

function showModal(item) {

    let modalTitle = $('.modal-title')
    let modalBody = $('.modal-body')
    let modalHeader = $('.modal-header')

    //Clear all existing modal content
    modalTitle.empty()
    modalBody.empty()

    let nameElement = $('<h1>' + item.name + '</h1>')
    let imageElement = $('<img class="modal-img">')


    // Add the new modal content
    let closeButtonElement = document.createElement('button')
    closeButtonElement.classList.add('modal-close')
    closeButtonElement.innerText = 'Close'
    closeButtonElement.addEventListener('click', event => {
        hideModal()
    })

    modalHeader.appendChild(closeButtonElement)
    modalTitle.appendChild(nameElement)
    modalBody.appendChild(contentElement)
    modalBody.appendChild(heightElement)
    modalBody.appendChild(imageElement)
    modalContainer.appendChild(modal)

    modalContainer.classList.add('is-visible')
    modalContainer.addEventListener('click', hideClick);
}

let hideClick = (event) => {
    let target = event.target
    if (target === modalContainer) {
        hideModal()
    }
}


function hideModal() {
    modalContainer.classList.remove('is-visible')
    modalContainer.removeEventListener('click', hideClick)
}

window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal()
    }
})

export { showModal, hideModal }