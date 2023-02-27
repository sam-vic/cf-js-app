
function showModal(name, height, imageUrl) {

  let modalBody = $('.modal-body')
  let modalTitle = $('.modal-title')

  modalTitle.empty()
  modalBody.empty()

    let titleElement = document.createElement('h1')
    titleElement.innerText = name

    let heightElement = document.createElement('p');
    heightElement.innerText = `Height: ${height}`;

    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    modalTitle.append(titleElement)
    modalBody.append(heightElement)
    modalBody.append(imageElement)
}
export { showModal }