let modalFunction = (function () {
    function showModal(title, text) {
        let modalContainer = document.querySelector('#modal-container');

        // Clear all existing modal content
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        // Add the new modal content
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', event => {
            hideModal()
        })

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (event) => {
            let target = event.target;
            if (target === modalContainer) {
              hideModal();
            }
        });
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container')
        modalContainer.classList.remove('is-visible')
    }

    document.querySelector('#show-modal').addEventListener('click', event => {
        showModal('Modal Title', 'This is the modal content!')
    })

    window.addEventListener('keydown', event => {
        let modalContainer = document.querySelector('#modal-container');
        if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
    })
})()