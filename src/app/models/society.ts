import { Student } from './student';
import { Staff } from './staff';
import { SocietyCategory  } from './society-category';
import { Post } from './post';

export class Society {

    societyId: number | undefined;
    name: string | undefined;
    description: string | undefined;
    profilePicture: string | undefined | null;
    dateCreated: Date | undefined;

    // announcements: Announcement[] | undefined;
    societyCategories: SocietyCategory[] | undefined;
    posts: Post[] | undefined;
    staffs: Staff[] | undefined;
    memberStudents: Student[] | undefined;
    followedStudents: Student[] | undefined;
    // events: Event[] | undefined;
    // surveys: FeedbackSurvey[] | undefined;

    constructor(societyId?: number, name?: string, description?: string, profilePicture?: string | null, dateCreated?: Date) {
        this.societyId = societyId;
        this.name = name;
        this.description = description;
        this.profilePicture = profilePicture;
        this.dateCreated = dateCreated;
    }


}
