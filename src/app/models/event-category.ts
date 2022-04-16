export class EventCategory {

    eventCategoryId: number | undefined;
    categoryName: string | undefined;		



    constructor(eventCategoryId?: number, categoryName?: string)
    {
        this.eventCategoryId = eventCategoryId;		
        this.categoryName = categoryName;			
    }
}

