<template>
    <h1 class="text-center">Aggiung una domanda</h1>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <textarea v-model="question.description" class="form-control" name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-7"></div>
            <button @click="questionSubmit()" class="btn btn-primary w-100 mt-3">Aggiungi</button>
        </div>
    </div>
</template>
<script>
import questionService from '../services/questionService.js';


export default {
    name: 'AddScreen',
    data() {
        return {
            question: {
                id: 0,
                description: '',
                isDone: false,
            }
        }
    },
    methods: {
        questionSubmit() {
            console.log(this.question)
            this.question.id = questionService.getQuestions().length + 1;
            questionService.addQuestion({ ...this.question });
            this.question.description = '';
        }
    }

} 
</script>