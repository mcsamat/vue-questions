<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <p v-if="question != null">
                    {{ question.description }}
                </p>
                <!-- Else show message -->
                <p v-else>
                    No more questions
                </p>
            </div>
            <div class="row">

                <div class="col-2"></div>

                <div class="col-3 mt-3 ">

                    <button @click="newQuestions()" type="button" class="btn btn-primary w-100">Skip</button>
                </div>

                <div class="col-3"></div>

                <div class="col-3 mt-3">

                    <button @click="nextQuestion()" type="button" class="btn btn-primary w-100">Next</button>

                </div>
            </div>
        </div>


    </div>
</template>
<script>
import questionService from '../services/questionService.js';

export default {
    name: 'HomeScreen',
    data() {
        return {
            question: {
                id: 0,
                description: '',
                isDone: false
            },
        }
    },
    created() {
        this.newQuestions();
    },
    methods: {
        newQuestions() {
            this.question = questionService.getRandomQuestion();
            if (this.question == null) {
                console.log('No more questions');
            }
        },
        nextQuestion() {
            if (this.question == null) {
                return;
            }
            this.question.isDone = true;
            questionService.updateQuestion(this.question);
            this.newQuestions();

        }
    }
}
</script>