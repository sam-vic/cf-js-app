let listOfGreens = (function () {
    let data = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

    return {
        // addition of new data to end of array
        add: function (pokemon) {
            (typeof pokemon === 'object' && 'name' in pokemon) ?
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

            button.innerText = items.name
            // event handler to log selected product
            button.addEventListener('click', event => {
                this.showDetails(items.name)
            })
            button.classList.add('button')
            listItem.appendChild(button)
            productSelector.appendChild(listItem)
        },
        // log selected product
        showDetails: function (button) {
            console.log(button)
        },

        loadList: function () {
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then((json) => {
                json.results.forEach((item) => {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    this.add(pokemon);
                });
            }).catch(function (event) {
                console.error(event);
            })
        }
    }
})();


//loop function to display product line
listOfGreens.loadList().then(function () {
    listOfGreens.getAll().forEach(items => {
        listOfGreens.addListItem(items)
    })
})

// Filter function for product specificity
const productFilter = listOfGreens.getAll().filter(item => item.types === 'greens')
console.log(productFilter, '123213')