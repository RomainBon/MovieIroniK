import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerPage } from '../class/server-page';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_AUTH_KEY="129179ef371fb7ccda0d7ce503684cb4";
  LANG="fr-FR"
  URL="https://api.themoviedb.org/3"
  constructor(private httpClient : HttpClient) { }

  searchMovie(keyword:string,page:number): Observable<ServerPage>{
    return this.httpClient.get<ServerPage>(`${this.URL}/search/movie?language=${this.LANG}
    &query=${keyword}&api_key=${this.API_AUTH_KEY}&page=${page}`);
  }
}
