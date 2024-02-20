


export const BASEURL = 'https://api.themoviedb.org/3'
export const POPULAR_ENDPOINT = '/movie/popular'
export const UPCOMING_ENDPOINT = '/movie/upcoming'
export const CONFIG_ENDPOINT = '/configuration'

 const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

export const headers = {
    Authorization: "Bearer "+ TMDB_TOKEN,
}
