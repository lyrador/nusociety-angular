import { Society } from '../models/society';



export class CreateSocietyReq {
  society: Society | undefined;
  societyCategoryIds: number[] | undefined;
  staffIds: number[] | undefined;



  constructor(society?: Society, societyCategoryIds?: number[], staffIds?: number[]) {		
    this.society = society;
    this.societyCategoryIds = societyCategoryIds;
    this.staffIds = staffIds;
  }
}
