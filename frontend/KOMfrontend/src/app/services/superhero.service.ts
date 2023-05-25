import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class superheroService {
  
  readonly APIlink = 'http://127.0.0.1:8000'
  readonly characterPic = 'http://127.0.0.1:8000/media/'

  constructor(private http: HttpClient) {

  }

  displaySuperheroesList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIlink + '/superhero/')
  }

  getSuperhero(id: any) {
    return this.http.get(this.APIlink + '/superhero/' + id)
  }

  addSuperhero(element: any) {
    return this.http.post(this.APIlink + '/superhero/', element)
  }

  updateSuperhero(element: any) {
    return this.http.put(this.APIlink + '/superhero/', element)
  }

  deleteSuperhero(id: any) {
    return this.http.delete(this.APIlink + '/superhero/'+ id)
  }

  uploadCharacterPicture(pic: any) {
    return this.http.post(this.APIlink + '/SaveFile', pic)
  }

  getCharacterPicture(filename: string): string {
    return this.characterPic + filename;
  }

  getSuperheroImageUrl(filename: string): string {
    return this.getCharacterPicture(filename);
  }

}
