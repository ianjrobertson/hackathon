import survey from "./survey.json"

export class SurveyGenerator {
    constructor (){
        this.questions = survey.questions
    }

    getQuestions() {
        return this.questions;
    }
}