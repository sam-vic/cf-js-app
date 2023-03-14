import { showModal } from './modal.js'
import { loadList } from './scripts.js'
import { loadDetails } from './scripts.js'

$(function () {
    $('form').on('submit', function (event) {
        event.preventDefault()
        var searchTerm = $('input[type="search"]').val()

        loadList().then(function (pokemonList) {
            // Find the matching pokemon
            let matchingPokemon = pokemonList.find((pokemon) => {
                return pokemon.name.toLowerCase() === searchTerm.toLowerCase()
            })

            if (matchingPokemon) {
                // Load the details for the matching pokemon
                loadDetails(matchingPokemon).then(function () {
                    showModal(matchingPokemon.name, matchingPokemon.height, matchingPokemon.imageUrl)
                    $('#exampleModal').modal('show')
                })
            } else {
                alert('No matching Pokemon found!')
            }
        })
    })
})



