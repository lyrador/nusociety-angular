import { Injectable } from '@angular/core';

import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getStaffs(): Staff[] | null
		{		
			try
			{
				return JSON.parse(sessionStorage['staffs']);
			}
			catch
			{
				return null;
			}
		}



		setStaffs(staffs: Staff[]): void
		{
			sessionStorage['staffs'] = JSON.stringify(staffs);
		}
}
