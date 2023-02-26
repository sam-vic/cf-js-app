function showModal(name, text, height, imageUrl) {

    let titleElement = document.createElement('h1')
    titleElement.innerText = name

    let contentElement = document.createElement('p')
    contentElement.innerText = text

    let heightElement = document.createElement('p');
    heightElement.innerText = `Height: ${height}`;

    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    modal.appendChild(closeButtonElement)
    modal.appendChild(titleElement)
    modal.appendChild(contentElement)
    modal.appendChild(heightElement)
    modal.appendChild(imageElement)
}

window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal()
    }
})

export { showModal }