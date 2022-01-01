import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectorasService {
  
  constructor(private http: HttpClient) { }

  getProtectoras(): Observable<any> {
    return this.http.get('http://surefugio.eu-west-3.elasticbeanstalk.com/api/list/protectoras');
  }

  Voluntariado(idP: number|undefined){
    return this.http.post('http://surefugio.eu-west-3.elasticbeanstalk.com/api/auth/voluntariado/'+idP,null)
  }
}
