import { showModal } from './modal.js'

$(function () {
    $('form').on('submit', function (event) {
        event.preventDefault()
        var searchTerm = $('input[type="search"]').val()
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/?limit=150' + searchTerm,
            method: 'GET',
            success: function (data) {
                let matchingPokemon = data.results.find((pokemon) => {
                    return pokemon.name.toLowerCase() === searchTerm.toLowerCase()
                });

                if (matchingPokemon) {
                    $.ajax({
                        url: matchingPokemon.url,
                        method: 'GET',
                        success: function (pokemonDetails) {
                            let pokemon = {
                                name: pokemonDetails.name,
                                height: pokemonDetails.height,
                                imageUrl: pokemonDetails.sprites.front_default
                            };
                            showModal(pokemon.name, pokemon.height, pokemon.imageUrl)
                            $('#exampleModal').modal('show')
                        },
                        error: function (error) {
                            console.log(error)
                        }
                    });
                } else {
                    console.log('No matching Pokemon found')
                }
            },
            error: function (error) {
                console.log(error)
            }
        })
    })
})

