import { Student } from './student';
import { Staff } from './staff';
import { SocietyCategory  } from './society-category';

export class Society {

    societyId: number | undefined;
    name: string | undefined;
    description: string | undefined;
    profilePicture: string | undefined;
    dateCreated: Date | undefined;

    // announcements: Announcement[] | undefined;
    societyCategories: SocietyCategory[] | undefined;
    // posts: Post[] | undefined;
    staffs: Staff[] | undefined;
    memberStudents: Student[] | undefined;
    followedStudents: Student[] | undefined;
    // events: Event[] | undefined;
    // surveys: FeedbackSurvey[] | undefined;


}
