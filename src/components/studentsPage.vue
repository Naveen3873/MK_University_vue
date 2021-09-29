<template>
<div>
 <b-container>
        <p class="display-4 text-primary mt-5 mx-5">STUDENTS PAGE</p>
       <div class="table-responsive"> 
       <table class="table table-striped table-bordered border-primary table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="x in student" :key="x.name">
                    <td>{{ x.name }}</td>
                    <td>{{ x.age }}</td>
                    <td>{{ x.gender }}</td>
                    <td>{{ x.email }}</td>
                </tr>
            </tbody>
        </table>
        </div>
  </b-container>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "studentPage",
    data(){
        return{
            student: null
        }
    },
    mounted(){
        this.getStudent();
    },
    methods:{
        getStudent: function(){
            var ax = axios.create({
                baseURL: "http://localhost:8080",
            });
            return new Promise((resolve, reject) => {
                ax({
                    method: 'get',
                    url: '/student/get',
                }).then((response) => {
                    this.student = response.data;
                    console.log(this.student);
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
            // myfun(resolve, reject){
            // }
            // return new Promise((resolve, reject)=>{
            // });
            // ax({
            // }.then((response)=>{
            // }).catch((err)=>{
            // });
        }
    }
}
</script>

<style>

</style>
