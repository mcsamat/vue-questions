// questionService.js
import questions from "../data/questions.js";

export default {
  getQuestions() {
    return questions;
  },

  getQuestionByStatus(status) {
    return questions.filter((trte) => trte.isDone === status);
  },

  getRandomQuestion() {
    if (this.getQuestionByStatus(false).length === 0) {
      return null;
    }
    return this.getQuestionByStatus(false)[
      Math.floor(Math.random() * this.getQuestionByStatus(false).length)
    ];
  },

  addQuestion(question) {
    questions.push(question);
  },

  updateQuestion(question) {
    const index = questions.findIndex((trte) => trte.id === question.id);
    questions[index] = question;
  },
};
