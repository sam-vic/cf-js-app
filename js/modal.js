let modalFunction = (function () {
    function showModal() {
        let modalContainer = document.querySelector('#modal-container')
        modalContainer.classList.add('is-visible')
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container')
        modalContainer.classList.remove('is-visible')
    }

    document.querySelector('#show-modal').addEventListener('click', event => {
        showModal()
    })
    document.querySelector('.modal-close').addEventListener('click', event => {
        hideModal()
    })
})()