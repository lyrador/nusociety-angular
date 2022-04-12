import { Society } from './society'

export class FeedbackSurvey {

    feedbackSurveyId: number | undefined;
    date: Date | undefined;
    title: string | undefined;
    content: string | undefined;
    rating: number | undefined

    society: Society | undefined;

    constructor(feedbackSurveyId?: number, date?: Date, title?: string, content?: string, rating?: number) {
        this.feedbackSurveyId = feedbackSurveyId;
        this.date = date;
        this.title = title;
        this.content = content;
        this.rating = rating;
    }
}
