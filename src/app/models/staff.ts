export class Staff {
    staffId: number | undefined;
    email: string | undefined;
    password: string | undefined;
    username: string | undefined;
    profilePicture : string | undefined;

    // societies: Society[] | undefined;

    constructor(staffId?: number, email?: string, password?: string, username?: string, profilePicture?: string) {
        this.staffId = staffId;
        this.email = email;
        this.password = password;
        this.username = username;
        this.profilePicture = profilePicture;
    }
}
