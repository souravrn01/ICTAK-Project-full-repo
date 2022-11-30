import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniApiService {

  constructor(private http:HttpClient) { }

  getJob(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjob')
  }
  getSinglejob(id:any){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getOneJob/:id')
   
    
  }

}

