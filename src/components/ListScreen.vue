<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-4">
                    <p v-for="tro in questions" :key="tro.id">
                        {{ tro.description }}
                    </p>
                </div>
                <div class="col-4">
                    <p v-for="temp in done" :key="temp.id">
                        {{ temp.description }}
                    </p>
                </div>
                <div class="col-4">
                    <p v-for="temp in unDone" :key="temp.id">
                        {{ temp.description }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import questionService from '../services/questionService.js';
export default {
    name: 'ListScreen',
    data() {
        return {
            questions: [],
            done: [],
            unDone: [],

        }
    },
    created() {
        this.questions = questionService.getQuestions();
        console.log(this.questions.length + 1)
        this.questions.length
        this.done = questionService.getQuestionByStatus(true);
        this.unDone = questionService.getQuestionByStatus(false);
    }
}
</script>