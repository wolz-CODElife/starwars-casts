/**
 * This function gets a list of movies from SWA.
 * @returns {JSON} data - The JSON data gotten from SWA
 */
export const GetMovies = async () => {
     return await fetch('https://swapi.dev/api/films').then(req => req.json()).then(data => {
        // return data fetched in JSON
        localStorage.setItem('movies', JSON.stringify(data.results))
        return data.results
    }).catch(error => {
        localStorage.removeItem('movies')
        // console log error message
        console.log(error.message);
    })
}