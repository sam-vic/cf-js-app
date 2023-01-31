let listOfGreens = [
    { name: 'Kale', cost: 4, types: 'greens' },
    { name: 'Lettuce', cost: 5, types: 'greens' },
    { name: 'Mini kale', cost: 15, types: 'micro-greens' },
    { name: 'Basil', cost: 5, types: 'herbs' }
]


listOfGreens.forEach (product => {
    // framework of listing the product
    let textStructure = (
        'Product: ' + product.name + '; ' +
        'Cost: ' + product.cost + '; ' +
        'Type: ' + product.types + '; ' + '<br/>'
    )

    //loop to display product line
    if (product.types === 'greens' ) {
        document.write(
            textStructure + 'Sold per head' + '<br/>'
        )

    } else if (product.types === 'micro-greens') {

        document.write(
            textStructure + 'Sold per 100g' + '<br/>'
        )

    } else if (product.types === 'herbs'){
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

