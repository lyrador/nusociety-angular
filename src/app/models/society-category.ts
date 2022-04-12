import { Society } from './society'

export class SocietyCategory {

    societyCategoryId: number | undefined;
    societyCategoryName: string | undefined;

    societies: Society[] | undefined;

    constructor(societyCategoryId?: number, societyCategoryName?: string) {
        this.societyCategoryId = societyCategoryId;
        this.societyCategoryName = societyCategoryName;
    }
}
