import { Student } from "./student";

export class Post {
	postId: number | undefined;
	bodyContent: string | undefined;
	image: string | undefined;
	creationDate: Date | undefined;
	postIsPublic: boolean | undefined;
	student: Student | undefined;

	comments: Comment[] | undefined;

	constructor(postId?: number, bodyContent?: string, 
		image?: string, creationDate?: Date, postIsPublic?:boolean, student?: Student) {
		this.postId = postId;
		this.bodyContent = bodyContent;
		this.image = image;
		this.creationDate = creationDate;
		this.postIsPublic = postIsPublic;
		this.student = student;
	}
}
