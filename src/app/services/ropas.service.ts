import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  constructor(private http:HttpClient) { }


  public getAllRopaHombre(): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropahombre')
    
  }
  public getRopaHombre(id: string): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropahombre/' + id)
  }

  public getAllRopaMujer(): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropamujer')
    
  }
  public getRopaMujer(id: string): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropamujer/' + id)
  }
}
