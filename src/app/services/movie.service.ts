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

  
}
