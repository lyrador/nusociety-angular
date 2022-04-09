import { AccessRightEnum } from './access-right-enum';

export class Student
{
    studentId: number | undefined;
	name: string | undefined;
	email: string | undefined;
    password: string | undefined;
    userName: string | undefined;
    profilePicture: string | undefined;
	accessRightEnum: AccessRightEnum | undefined;

    // attendances: Attendance[] | undefined;
    // notifications: Notification[] | undefined;
    // comments: Comment[] | undefined;
    // posts: Post[] | undefined;
    // events: Event[] | undefined;
    // eventsOrganised: Event[] | undefined;
    // memberSocieties: Society[] | undefined;
    // followedSocieties: Society[] | undefined;

    constructor(studentId?: number, name?: string, email?: string, password?: string, userName?: string, profilePicture?: string, accessRightEnum?: AccessRightEnum)
	{
		this.studentId = studentId;		
		this.name = name;
		this.email = email;
        this.password = password;
        this.userName = userName;
        this.profilePicture = profilePicture;
		this.accessRightEnum = accessRightEnum;
	}
}
