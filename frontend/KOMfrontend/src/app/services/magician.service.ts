import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class magicianService {
  
  readonly APIlink = 'http://127.0.0.1:8000'
  readonly characterPic = 'http://127.0.0.1:8000/media/'

  constructor(private http: HttpClient) {

  }

  displayMagiciansList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIlink + '/magician/')
  }

  getMagician(id: any) {
    return this.http.get(this.APIlink + '/magician/' + id)
  }

  addMagician(element: any) {
    return this.http.post(this.APIlink + '/magician/', element)
  }

  updateMagician(element: any) {
    return this.http.put(this.APIlink + '/magician/', element)
  }

  deleteMagician(id: any) {
    return this.http.delete(this.APIlink + '/magician/'+ id)
  }

  uploadCharacterPicture(pic: any) {
    return this.http.post(this.APIlink + '/SaveFile', pic)
  }

  getCharacterPicture(filename: string): string {
    return this.characterPic + filename;
  }

  getMagicianImageUrl(filename: string): string {
    return this.getCharacterPicture(filename);
  }

}
