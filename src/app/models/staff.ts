export class Staff {
    staffId: number | undefined;
    email: string | undefined;

    constructor(staffId?: number, email?: string) {
        this.staffId = staffId;
        this.email = email;
    }
}
