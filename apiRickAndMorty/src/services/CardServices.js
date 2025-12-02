const API_URL = 'https://rickandmortyapi.com/api/character'

export const getCards = async () => {
    try {
        const res = await fetch(API_URL)
        const data = await res.json()
        return data.results
    } catch (error) {
        console.log(error)
    }
}