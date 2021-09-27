<template>
<div>
     <form @submit.prevent="submitForm">
        <h3><strong>{{ selected }}</strong></h3>
        <div class="col">
           <b-form-group label="" v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                id="radio-group-2"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="radio-sub-component"
                >        
               <b-form-radio value="ADMIN LOGIN" id="adm">Admin</b-form-radio>
               <b-form-radio value="COLLEGE LOGIN" id="clg">College</b-form-radio>
               <b-form-radio value="STUDENT LOGIN" id="stu">Student</b-form-radio>
             </b-form-radio-group>
           </b-form-group>
        </div> 
 
        <div class="form-row">
          <div class="form-group my-2">
             <label>User Id</label>
             <input type="text" id="user" class="form-control" v-model.trim="$v.userId.$model" :class="{'is-invalid':$v.userId.$error, 'is-valid':!$v.userId.$invalid}">        
             
             <div class="invalid-feedback">
                <span v-if="!$v.userId.required">userid is required</span>
             </div>
          </div>
          
          <div class="form-group my-3">
             <label>Password</label>
             <input type="password" id="psw" class="form-control" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid}">        
             
             <div class="invalid-feedback">
                <span v-if="!$v.password.required">password is required</span>
             </div>
          </div>
          <div>
           <p class="mt-2 float-end"><a href="#">forgot possword?</a></p>
          </div>
          <button type="submit" class="btn btn-primary mt-3 px-5 block">Login</button>
        </div>
     </form>
</div>
</template>

<style scoped>
body {
  padding: 1rem;
}
div .form-group {
 margin-bottom: 5px;
}
div button {
 margin-top:20px;
}
.block {
 display: block;
 width: 100%;
}
</style>

<script>
import { required } from "vuelidate/lib/validators";

export default {
 name: 'login',
 data () {
   return {
     userId: '',
     password: '',
     submitstatus: null,
     selected: 'ADMIN LOGIN',
        options: [
          { item: 'Admin Login', name: 'Admin'},
          { item: 'College Login', name: 'College' },
          { item: 'Student Login', name: 'Student' },
        ]
      }
 },
 validations: {
     userId: {
       required
     },
     password: {
       required
     }
 },
 methods: {
   submitForm () {
     this.$v.$touch()
     if(this.$v.$invalid){
        this.submitstatus = "FAIL"
     }
     else if (document.getElementById('adm').checked) {
        var username = document.getElementById('user').value;
        var password = document.getElementById('psw').value;
        
        if (username == "admin" && password == "admin") {
            this.submitstatus = "SUCCESS"
            alert("Submit successfully");
            window.location.replace("/admin");
        }
        else {
            alert("invalid username and password...!");
        }
     }
     else if (document.getElementById('clg').checked) {
        var user = document.getElementById('user').value;
        var pass = document.getElementById('psw').value;
   
        if (user == "mkuniv" && pass == "123456") {
           this.submitstatus = "SUCCESS"
           alert("Submit successfully");
           window.location.replace("/college");
        }
        else {
            alert("invalid username and password...!");
        }
     }
     else if (document.getElementById('stu').checked) {
        var usernam = document.getElementById('user').value;
        var passwor = document.getElementById('psw').value;
        
        if (usernam == "naveen" && passwor == "860865") {
           this.submitstatus = "SUCCESS"
           alert("Submit successfully");
           window.location.replace("/student");
        }
        else {
            alert("invalid username and password...!");
        }   
     }
   }
 }
}
</script>
