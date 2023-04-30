import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //IMPORT FOR HTTP
import { Observable } from 'rxjs'; //IMPORT FOR OBSRVE

@Injectable({
providedIn: 'root'
})
export class MoviesService {

 constructor(private http:HttpClient) { }

 //FUNCTION
 GetMovieData():Observable<any>{   
 return this.http.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27'); //HTTP LINKS WITH API 
 }
}