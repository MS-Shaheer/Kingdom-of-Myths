import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class townService {
  
  readonly APIlink = 'http://127.0.0.1:8000'
  readonly townPic = 'http://127.0.0.1:8000/media/'

  constructor(private http: HttpClient) {

  }

  displayTownsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIlink + '/town/')
  }

  getTown(id: any) {
    return this.http.get(this.APIlink + '/town/' + id)
  }

  addTown(element: any) {
    return this.http.post(this.APIlink + '/town/', element)
  }

  updateTown(element: any) {
    return this.http.put(this.APIlink + '/town/', element)
  }

  deleteTown(id: any) {
    return this.http.delete(this.APIlink + '/town/'+ id)
  }

  uploadTownPicture(pic: any) {
    return this.http.post(this.APIlink + '/SaveFile', pic)
  }

  getCharacterPicture(filename: string): string {
    return this.townPic + filename;
  }

  getTownImageUrl(filename: string): string {
    return this.getCharacterPicture(filename);
  }

}
