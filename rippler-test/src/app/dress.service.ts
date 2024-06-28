import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dress } from './app.models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class DressService {
  private apiUrl = 'http://165.232.44.99/api/dress/demo/list';
  private prefixImageUrl = 'http://165.232.44.99/';

  constructor(private http: HttpClient) { }

  getDresses(): Observable<Dress[]>{
    return this.http.get(this.apiUrl).pipe(map((resp:any)=>{
      return resp.data.map(dress => {
        dress.images =  dress.images.map((url)=> url = this.prefixImageUrl + url )  
        console.log(dress)
        return dress;
      });
    }));
  }
}
