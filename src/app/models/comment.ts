import { Post } from "./post";
import { Student } from "./student";

export class Comment {
	commentId: number | undefined;
	creationDate: Date | undefined;
	content: string | undefined;

	student: Student | undefined;
	post: Post | undefined;

	constructor(commentId?: number, creationDate?: Date,  content?: string, student?: Student, post?:Post) {
		this.commentId = commentId;
		this.content = content;
		this.creationDate = creationDate;
		this.student = student;
		this.post = post;
	}
}