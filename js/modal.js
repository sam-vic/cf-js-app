let modalContainer = document.querySelector('#modal-container')
function showModal(name, text, height, imageUrl) {

  let modalBody = $('.modal-body')
  let modalTitle = $('.modal-title')
  let modalHeader = $('.modal-header')

  modalTitle.empty()
  modalBody.empty()

    let titleElement = document.createElement('h1')
    titleElement.innerText = name

    let contentElement = document.createElement('p')
    contentElement.innerText = text

    let heightElement = document.createElement('p');
    heightElement.innerText = `Height: ${height}`;

    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    modalTitle.append(titleElement)
    modalBody.append(heightElement)
    modalBody.append(imageElement)

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