import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
//Endpoints
import { getUpcomingMovies } from '../tmdb-api';
import { getPopular } from '../tmdb-api';
// import { getMovie } from '../tmdb-api';

const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopular();
    res.status(200).json(popularMovies);
}));

//Parameterised Route
// router.get('/${movie.id}', asyncHandler(async (req, res) => {
//     const movieDetails = await getMovie();
//     res.status(200).json(movieDetails);
// }));

export default router;