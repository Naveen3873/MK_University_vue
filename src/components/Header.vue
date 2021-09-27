<template>
<div id="Header">
   <div id="firhead">
        <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-container>
                 
                 <b-collapse id="nav-collapse1" is-nav> 
                 <b-navbar-nav>
                        <b-nav-item>hava a question?</b-nav-item>
                        <b-nav-item>9876543210</b-nav-item>
                        <b-nav-item>info_mkuniversity@gmail.com</b-nav-item>
                 </b-navbar-nav>
                 </b-collapse>

                 <!-- Right aligned nav items -->                
                 <b-collapse id="nav-collapse" is-nav> 
                   <b-navbar-nav class="ms-auto" id="right">
                             <!-- Login Popup start -->
                              <button class="btn btn-primary" v-b-modal.modal-1>Login</button>
                               <b-modal id="modal-1" title="Login" hide-footer>
                                  <login /> <!-- login component -->
                               </b-modal>
                             <!-- Login Popup end -->
                     
                     <!-- Register start -->
                        <b-nav-item-dropdown text="register" right>
                          <b-dropdown-item v-b-modal.modal-2 href="#">College Register</b-dropdown-item>
                                  <b-modal id="modal-2" title="College Register" hide-footer>
                                       <collegeRegister /> <!-- collegeRegister component -->
                                  </b-modal>                          
                          <b-dropdown-item v-b-modal.modal-3 href="#">Student Register</b-dropdown-item>
                                  <b-modal id="modal-3" title="Student Register" hide-footer>
                                       <studentRegister /> <!-- studentRegister component -->
                                  </b-modal>                                                    
                        </b-nav-item-dropdown>                     
                     <!-- Register start end -->
                   </b-navbar-nav>
                 </b-collapse>
              </b-container>
           </b-navbar>
 </div>
<div id="sechead">
      <b-container>
                <div>
                    <b-navbar toggleable="lg">
                         <b-navbar-brand href="#"><router-link to="/">
                                <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Mkulogo.jpg" class="d-inline-block align-top" alt="Kitten" id="logo">
                                MK UNIVERSITY</router-link>
                         </b-navbar-brand>

                         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                         <b-collapse id="nav-collapse" is-nav>

                         <!-- Right aligned nav items -->
                           <b-navbar-nav class="ms-auto">
                             <b-nav-item href="#"><router-link to="/courses">COURSES</router-link></b-nav-item>
                             <b-nav-item href="#"><router-link to="/about">ABOUT</router-link></b-nav-item>
                             <b-nav-item href="#"><router-link to="/events">EVENTS</router-link></b-nav-item>
                             <b-nav-item href="#"><router-link to="/gallery">GALLERY</router-link></b-nav-item>
                             <b-nav-item href="#footer1">CONTACT</b-nav-item>
                           </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
               </div> 
       </b-container>
</div>

</div>
</template>

<script>
import login from './login'
import collegeRegister from './collegeRegister'
import studentRegister from './studentRegister'

export default {
 name : 'Header',
 prop : {
  msg : String   
 },
 components : {
  login,
  collegeRegister,
  studentRegister
 },
}
</script>

<style scoped>
.bg-info {
 background-color: black!important;
}
#logo {
 width: 35px;
 padding-left: 5px;
}

div #firhead a {
 text-decoration: none;
 color:white!important;
 text-weight: bolder;
 border: 2px solid transparent;
}
div #firhead a:hover {
 border-bottom: 2px solid white;
 transition: .1s;
}
div #sechead a {
 text-decoration: none;
 color:black!important;
 text-weight: bolder;
 border: 2px solid transparent; 
}
/*
div #sechead a:hover {
  border-bottom: 2px solid blue;
}
*/
#header {
 position:fixed;
}
div #right {
    left: auto !important;
    right: 0px;
}
</style>
