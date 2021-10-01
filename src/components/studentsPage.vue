<template>
<div>
 <b-container>
     <div>   
        <p class="display-4 text-primary mt-5 mx-5">STUDENTS PAGE</p>
        <div>
             <b-form-input v-model="student.name" placeholder="Enter name"></b-form-input>
             <b-form-input v-model="student.age" placeholder="Enter age"></b-form-input>
             <b-form-input v-model="student.gender" placeholder="Enter gender"></b-form-input>
             <b-form-input v-model="student.email" placeholder="Enter email"></b-form-input>
             <button class="btn btn-primary mt-3" @click="putStudent()">submit</button>
             <button class="btn btn-primary mt-3 float-end" @click="putStudent()">update</button>
        </div>
     </div>
     <div class="mt-2">
       <table class="table table-striped table-bordered border-primary table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="s in students" :key="s.id">
                    <td>{{s.name}}</td>
                    <td>{{s.age}}</td>
                    <td>{{s.gender}}</td>
                    <td>{{s.email}}</td>
                    <td>
                        <span><button class="btn btn-secondary" @click="getStudent(s.id)">edit</button></span>
                        <span><button class="btn btn-secondary" @click="deleteStudent(s.id)">delete</button></span>
                    </td>
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
            student:{
                id: '',
                name: '',
                age: '',
                gender: '',
                email: '',
                submitForm: null
            },
            students: ''
        }
    },
    mounted(){
        this.getAllStudents();
    },
    methods:{
        putStudent: function(){
                   var authAxios = axios.create({
                    baseURL: "http://localhost:9090",
                });
                let config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                return new Promise((resolve, reject) => {
                    authAxios
                        .post("/student/insert",this.student, config)
                        .then(response => { 
                             alert(response.data);
                             this.getAllStudents();  
                             this.student.name = "";
                             this.student.age = "";
                             this.student.gender = "";
                             this.student.email = "";                 
                            resolve(response);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
        },
        getAllStudents : function(){
            var ax = axios.create({
                baseURL: "http://localhost:9090",
            });
            return new Promise((resolve, reject) => {
                ax({
                    method: 'get',
                    url: '/student/getAll',
                }).then((response) => {
                    this.students = response.data;
                    
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        deleteStudent: function(id){
            var ax1 = axios.create({
                baseURL: "http://localhost:9090",
            });
            return new Promise((resolve, reject) => {
                ax1({
                    method: 'get',
                    url: '/student/delete/'+id,
                }).then((response) => {
                    alert("Student deleted" + id); 
                    this.getAllStudents();                                                      
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });      
        },
        getStudent: function(id){
            var ax = axios.create({
                baseURL: "http://localhost:9090",
            });
            return new Promise((resolve, reject) => {
                ax({
                    method: 'get',
                    url: '/student/get/' + id,
                }).then((response) => {
                    console.log("Student is ", response.data)    
                    this.student = response.data;                                     
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });                
            });              
        }                
    }
}
      
/*
             myfun(resolve, reject){
             }
             return new Promise((resolve, reject)=>{
             });
             ax({
             }.then((response)=>{
             }).catch((err)=>{
             });
*/  
</script>

<style>

</style>
