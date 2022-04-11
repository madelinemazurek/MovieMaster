import { Movie } from 'src/app/models/movie-model';
import { Movie_Cast } from 'src/app/models/movie-cast-model';
import { Movie_Director } from 'src/app/models/movie-director-model';
import { Movie_Genre } from 'src/app/models/movie-genre-model';
import { Movie_Producer } from 'src/app/models/movie-producer-model';
import { Movie_Writer } from 'src/app/models/movie-writer-model';

export class Full_Movie {
    movie : Movie = new Movie();
    movieCasts : Movie_Cast[] = [];
    movieDirectors : Movie_Director[] = [];
    movieGenres : Movie_Genre[] = [];
    movieProducers : Movie_Producer[] = [];
    movieWriters : Movie_Writer[] = [];
}