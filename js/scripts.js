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
            (typeof newProduct === 'object' && Object.keys(newProduct) === 'name', 'cost', 'types')?
            data.push(newProduct): 'Wrong data type'
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

listOfGreens.getAll().forEach(items => {
    // framework of listing the product
    let textStructure = (
        'Product: ' + items.name + '; ' +
        'Cost: ' + items.cost + '; ' +
        'Type: ' + items.types + '; ' + '<br/>'
    )

    //loop to display product line
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



// for ( i=0; i<listOfGreens.length; i++ ) {
//     //variable for iterator before it is declared
//     let x = i
//     // framework of listing the product
//     let textStructure = (
//         'Product: ' + listOfGreens[x].name + '; ' +
//         'Cost: ' + listOfGreens[x].cost + '; ' +
//         'Type: ' + listOfGreens[x].types + '; ' + '<br/>'
//     )

//     //loop to display product line
//     if (listOfGreens[i].types === 'greens' ) {
//         document.write(
//             textStructure + 'Sold per head' + '<br/>'
//         )

//     } else if (listOfGreens[i].types === 'micro-greens') {

//         document.write(
//             textStructure + 'Sold per 100g' + '<br/>'
//         )

//     } else {
//         document.write(
//             textStructure + 'Sold per shell' + '<br/>'
//         )
//     }
// }

