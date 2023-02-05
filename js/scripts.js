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

        // call for new data array
        getAll: function () {
            return (
                data
            )
        }
    }
})();

listOfGreens.add({ name: 'Thymn', cost: 4, types: 'herbs' })

//loop function to display product line
listOfGreens.getAll().forEach(items => {
    // framework of listing the product
    let textStructure = (
        '<div>' + 
            'Product: ' + items.name + '; ' +
            'Cost: ' + items.cost + '; ' +
            'Type: ' + items.types + '; ' +
        '</div>'
    )

    //conditional testing for how product sold
    if (items.types === 'greens') {
        document.write(
            textStructure + 'Sold per head' + '<br/>'
        )

    } else if (items.types === 'micro-greens') {

        document.write(
            textStructure + 'Sold per 100g' + '<br/>'
        )

    } else if (items.types === 'herbs') {
        document.write(
            textStructure + 'Sold per shell' + '<br/>'
        )
    } else {
        //In-case product type is not available
        return document.write('Product undefined')
    }
})

// Filter function for product specificity


const productFilter = listOfGreens.getAll().filter(item => item.types === 'greens')
console.log(productFilter, '123213')