import { Injectable } from '@angular/core';

import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getIsLogin(): boolean
  {
    if(sessionStorage['isLogin'] == "true")
    {
      return true;
    }
    else
    {
      return false;
    }
  }


  setIsLogin(isLogin: boolean): void
  {
    sessionStorage['isLogin'] = isLogin;
  }

  getCurrentStaff(): Staff
  {
    return JSON.parse(sessionStorage['currentStaff']);
  }



  setCurrentStaff(currentStaff: Staff | null): void
  {		 
    sessionStorage['currentStaff'] = JSON.stringify(currentStaff);
  }



  getUsername(): string
  {
    return sessionStorage['username'];
  }



  setUsername(username: string | undefined): void
  {
    sessionStorage['username'] = username;
  }
  
  
  
  getPassword(): string
  {
    return sessionStorage['password'];
  }



  setPassword(password: string | undefined): void
  {
    sessionStorage['password'] = password;
  }
  
  
  
  checkAccessRight(path : string): boolean
  {
    console.log("********** path: " + path);

    if(this.getIsLogin())
    {
      return true;
    } 
    return false;
  }
}
