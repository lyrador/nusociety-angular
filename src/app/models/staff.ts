import { Society } from "./society";

export class Staff {
    staffId: number | undefined;
    email: string | undefined;
    password: string | undefined;
    username: string | undefined;

    societies: Society[] | undefined;

    constructor(staffId?: number, email?: string, password?: string, username?: string) {
        this.staffId = staffId;
        this.email = email;
        this.password = password;
        this.username = username;
    }
}
