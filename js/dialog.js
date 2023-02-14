let dialogFunction = (function () {
    function showDialog(title, text) {
        let dialogContainer = document.querySelector('#dialog-container')

        dialogContainer.innerHTML = ''

        let dialog = document.createElement('div')
        dialog.classList.add('dialog')

        let titleElement = document.createElement('h1')
        titleElement.innerText = title

        let contentElement = document.createElement('p')
        contentElement.innerText = text


        let closeElement = document.createElement('button')
        closeElement.innerText = 'Close'
        closeElement.classList.add('dialog-close')
        closeElement.addEventListener('click', event => {
            hideDialog()
        })

        dialog.appendChild(closeElement)
        dialog.appendChild(titleElement)
        dialog.appendChild(contentElement)
        dialogContainer.appendChild(dialog)

        dialogContainer.classList.add('is-visible')
        dialogContainer.addEventListener('click', (event) => {
            let target = event.target
            if (target === dialogContainer) {
              hideDialog()
            }
        });
    }

    function hideDialog() {
        let dialogContainer = document.querySelector('#dialog-container')
        dialogContainer.classList.remove('is-visible')
        dialogContainer.innerHTML = ''

    }

    document.querySelector('.dialog-button').addEventListener('click', event => {
        showDialog('dialog title', 'dialog text')
    })


    window.addEventListener('keydown', event => {
        let modalContainer = document.querySelector('#modal-container');
        if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideDialog() 
        }
    })
})()