import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMovies from './pages/upcomingMovies';
import WatchListPage from "./pages/watchListPage";
import PopularMovies from "./pages/popularMoviesPage";
import NowPlayingMovies from "./pages/nowPlayingMoviesPage";
import TopRatedMovies from "./pages/topRatedMoviesPage";
import StartPage from "./pages/startPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/upcoming" element={ <UpcomingMovies /> } />
            <Route path="/movies/watchlist" element={<WatchListPage />} />
            <Route path="/movies/popular" element={<PopularMovies />} />
            <Route path="/movies/now-playing" element={<NowPlayingMovies />} />
            <Route path="/movies/top-rated" element={<TopRatedMovies />} />
            <Route path="/startpage" element={<StartPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);