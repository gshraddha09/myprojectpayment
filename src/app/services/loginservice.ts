import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
export class LoginService{
    customerid:any
    id=1;
    flag:any;
    userid:any
    commoncustomer:any;
    constructor(private http:HttpClient,private router:Router) {
        this.customerid="83020817828620";
        this.commoncustomer="";
        console.log(this.commoncustomer);
     

      
      }
       getcustomerid()
       {
         return this.customerid;
       }
       httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      };
      getflag()
      {
        return this.flag;
      }
    

}