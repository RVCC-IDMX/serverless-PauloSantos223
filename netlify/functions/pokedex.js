exports.handler = async function (event, context) {
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region
    const eventBody = JSON.parse(event.body)
   

    const response = await fetch(POKE_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify({
            pokemon: data.pokemon_entries
        })
    }
}