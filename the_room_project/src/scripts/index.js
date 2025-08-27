import { latestReleases } from "./latestReleases";
import { mostWatched } from "./mostWatched";
import { trendingMovies } from "./trendingMovies";

export const allMovies = [
  ...latestReleases,
  ...mostWatched,
  ...trendingMovies,
].map((movie, idx) => ({
  ...movie,
  id: idx.toString(),
}));
