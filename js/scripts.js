import { showModal } from './modal.js'

let listOfData = (function () {
    let data = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=15';

    return {
        // addition of new data to end of array
        add: function (pokemon) {
            (typeof pokemon === 'object'
                && 'name' in pokemon
                && 'detailsUrl' in pokemon
            ) ?
                data.push(pokemon) : 'Wrong data type'
        },

        // call for newest data array
        getAll: function () {
            return (
                data
            )
        },
        // framework to append data loop into elements 
        addListItem: function (items) {
            //element selector to append product-list to ul
            let productSelector = document.querySelector('.product-list')

            let listItem = (
                document.createElement('li')
            )

            let button = (
                document.createElement('button')
            )
            listItem.innerText = items.name
            //button text
            button.innerText = 'Show Profile'
            // event handler to log selected product
            button.addEventListener('click', event => {
                this.showDetails(items)
            })
            button.classList.add('button', 'target_button')
            listItem.appendChild(button)
            productSelector.appendChild(listItem)
        },
        //fetch api into json formate 
        loadList: function () {
            this.showLoadingMessage()
            return fetch(apiUrl).then(function (response) {
                return response.json()
            }).then((json) => {
                json.results.forEach((item) => {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    this.add(pokemon)
                })
                this.hideLoadingMessage()
            }).catch(function (event) {
                console.error(event)
                this.hideLoadingMessage()
            })
        },
        //fetch data from api 
        loadDetails: function (item) {
            let url = item.detailsUrl
            return fetch(url).then(response => {
                return response.json()
            }).then(details => {
                item.imageUrl = details.sprites.front_default
                item.height = details.height
                item.types = details.types
                this.hideLoadingMessage()
            }).catch(event => {
                console.error(event)
                this.hideLoadingMessage()
            })
        },

        // log selected product
        showDetails: function (item) {
            listOfData.loadDetails(item).then(function () {
                console.log(item, 'showDetails', item.name)
                showModal( item.name, item.detailsUrl, item.height, item.imageUrl)
            })
        },
        // Loading message function
        showLoadingMessage: function () {
            // Add a div element to show the loading message
            const loadingMessage = document.createElement("div")
            loadingMessage.innerHTML = `<div class="loading">Loading...</div>`
            document.body.appendChild(loadingMessage)
        },
        hideLoadingMessage: function () {
            const loadingMessage = document.querySelector('.loading')
            loadingMessage? loadingMessage.remove(): ''
        }
    }
})();


//loop function to display product line
listOfData.loadList().then(function () {
    listOfData.getAll().forEach(items => {
        listOfData.addListItem(items)
    })
})

// Filter function for product specificity
const productFilter = listOfData.getAll().filter(item => item.types === 'greens')
console.log(productFilter, '123213')