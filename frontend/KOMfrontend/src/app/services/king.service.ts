import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class kingService {
  
  readonly APIlink = 'http://127.0.0.1:8000'
  readonly characterPic = 'http://127.0.0.1:8000/media/'

  constructor(private http: HttpClient) {

  }

  displayKingList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIlink + '/king/')
  }

  getKing(id: any) {
    return this.http.get(this.APIlink + '/king/' + id)
  }

  addKing(element: any) {
    return this.http.post(this.APIlink + '/king/', element)
  }

  updateKing(element: any) {
    return this.http.put(this.APIlink + '/king/', element)
  }

  deleteKing(id: any) {
    return this.http.delete(this.APIlink + '/king/'+ id)
  }

  uploadCharacterPicture(pic: any) {
    return this.http.post(this.APIlink + '/SaveFile', pic)
  }

  // getCharacterPicture(id: any): Observable<any> {
  //   return this.http.get(this.APIlink + '/media/' + id);
  // }

  getCharacterPicture(filename: string): string {
    return this.characterPic + filename;
  }

  getKingImageUrl(filename: string): string {
    return this.getCharacterPicture(filename);
  }

}
