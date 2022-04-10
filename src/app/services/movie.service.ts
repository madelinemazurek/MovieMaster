import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Movie } from 'src/app/models/movie-model';
import { Movie_Cast } from 'src/app/models/movie-cast-model';
import { Movie_Director } from 'src/app/models/movie-director-model';
import { Movie_Genre } from 'src/app/models/movie-genre-model';
import { Movie_Producer } from 'src/app/models/movie-producer-model';
import { Movie_Writer } from 'src/app/models/movie-writer-model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here
  getAllMovies() {
    return this.webReqService.get('Movies')
  }

  deleteMovie(pk : string){
    return this.webReqService.delete(pk)
  }
  
  createMovie(movie : Movie){
    return this.webReqService.post('Movies', movie)
  }

  addMovieWriter(movieWriter : Movie_Writer){
    return this.webReqService.post('Movie_Writer', movieWriter)
  }

  addMovieProducer(movieProducer : Movie_Producer){
    return this.webReqService.post('Movie_Producer', movieProducer)
  }

  addMovieCast(movieCast : Movie_Cast){
    return this.webReqService.post('Movie_Cast', movieCast)
  }

  addMovieGenre(movieGenre : Movie_Genre){
    return this.webReqService.post('Movie_Genre', movieGenre)
  }

  addMovieDirector(MovieDirector : Movie_Director){
    return this.webReqService.post('Movie_Director', MovieDirector)
  }

  deleteMovieElement(pk : string){
    return this.webReqService.delete(pk)
  }

  getAllMovieCast() {
    return this.webReqService.get('Movie_Cast')
  }

  getAllMovieDirector() {
    return this.webReqService.get('Movie_Director')
  }

  getAllMovieGenre() {
    return this.webReqService.get('Movie_Genre')
  }

  getAllMovieProducer() {
    return this.webReqService.get('Movie_Producer')
  }

  getAllMovieWriter() {
    return this.webReqService.get('Movie_Writer')
  }
}
