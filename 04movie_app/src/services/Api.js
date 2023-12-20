import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const page = 1;

export const TMDBAPI = createApi({
    reducerPath:"TMDBAPI",
    baseQuery : fetchBaseQuery({baseUrl :'https://api.themoviedb.org/3/'}),
    endpoints:(builder) => ({

        // get movie api
        // getMovies : builder.query({
        //     query:() => `movie/popular?page=${page}&api_key=24e9ff9194e33499fe5bc051518e759d`
        // }),

        // get movie by id
        getMovie: builder.query({
            query:(id) => `movie/${id}?append_to_response=videos,credits&api_key=24e9ff9194e33499fe5bc051518e759d`
        }),

        // get Movies by type
        getMovies: builder.query({
            query: ({ genreName, page, searchQuery }) => {
      
              // Search movies
              if(searchQuery){
                return `/search/movie?query=${searchQuery}&page=${page}&api_key=24e9ff9194e33499fe5bc051518e759d`
            }
      
              // Get movies by Genre
              if (genreName && typeof genreName === 'number') {
                return `discover/movie?with_genres=${genreName}&page=${page}&api_key=24e9ff9194e33499fe5bc051518e759d`
              }
              // Get Popular Movies
              return `movie/popular?page=${page}&api_key=24e9ff9194e33499fe5bc051518e759d`;
            }
          }),

        // get movie by genre
        getMovieByGenre : builder.query({
            query: () => `genre/movie/list?api_key=24e9ff9194e33499fe5bc051518e759d`
        }),

    })
}); 

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetMovieByGenreQuery,
}=TMDBAPI; 