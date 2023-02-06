let listOfGreens = (function () {
    let data = [
        { name: 'Kale', cost: 4, types: 'greens' },
        { name: 'Lettuce', cost: 5, types: 'greens' },
        { name: 'Mini kale', cost: 15, types: 'micro-greens' },
        { name: 'Basil', cost: 5, types: 'herbs' }
    ]

    return {
        // addition of new data to end of array
        add: function (newProduct) {
            //condition 1 to check for data type, condition 2 check for object keys before addition to array
            (typeof newProduct === 'object' && Object.keys(newProduct) === 'name', 'cost', 'types') ?
                data.push(newProduct) : 'Wrong data type'
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
            

            // framework of listing the product
            let textStructure = (
                'Product: ' + items.name + '; ' +
                'Type: ' + items.types + '; ' +
                'Cost: $' + items.cost + ' '
            )

            //conditional testing for how product sold
            if (items.types === 'greens') {
                button.innerText = textStructure + 'per head'
            } else if (items.types === 'micro-greens') {
                button.innerText = textStructure + 'per 100g'
            } else if (items.types === 'herbs') {
                button.innerText = textStructure + 'per shell'
            } else {
                //In-case product type is not available
                return button.innerText = 'Product undefined'
            }
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
        }
    }
})();
// addition of new products
listOfGreens.add({ name: 'Thymn', cost: 4, types: 'herbs' })



//loop function to display product line
listOfGreens.getAll().forEach(items => {
    listOfGreens.addListItem(items)
})

// Filter function for product specificity
const productFilter = listOfGreens.getAll().filter(item => item.types === 'greens')
console.log(productFilter, '123213')