import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class villianService {
  
  readonly APIlink = 'http://127.0.0.1:8000'
  readonly characterPic = 'http://127.0.0.1:8000/media/'

  constructor(private http: HttpClient) {

  }

  displayVilliansList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIlink + '/villian/')
  }

  getVillian(id: any) {
    return this.http.get(this.APIlink + '/villian/' + id)
  }

  addVillian(element: any) {
    return this.http.post(this.APIlink + '/villian/', element)
  }

  updateVillian(element: any) {
    return this.http.put(this.APIlink + '/villian/', element)
  }

  deleteVillian(id: any) {
    return this.http.delete(this.APIlink + '/villian/'+ id)
  }

  uploadCharacterPicture(pic: any) {
    return this.http.post(this.APIlink + '/SaveFile', pic)
  }

  getCharacterPicture(filename: string): string {
    return this.characterPic + filename;
  }

  getVillianImageUrl(filename: string): string {
    return this.getCharacterPicture(filename);
  }

}
