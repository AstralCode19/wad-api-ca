//Added in lab
import fetch from 'node-fetch';

export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

// 
//My endpoints for assignment
//

export const getUpcomingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`);

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getPopular = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`);

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getTopRated = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`);

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getNowPlaying = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`);

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

//Parameterised
// export const getMovie = async (args) => {
//     // console.log(args);
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     const response =await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`);

//     if (!response.ok) {
//         throw new Error(response.json().message);
//     }

//     return await response.json();
// }; 