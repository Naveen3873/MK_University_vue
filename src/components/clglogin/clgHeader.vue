<template>
<div id="admHeader">
   <div id="firhead">
        <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-container>


                 <!-- Right aligned nav items -->
                 <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>                                
                 <b-collapse id="nav-collapse1" is-nav> 
                   <b-navbar-nav class="ms-auto" id="right">
                        
                        <!-- College Login dropdown -->
                        <b-nav-item-dropdown text="college" right>     
                                <b-dropdown-item href="#"><router-link to="/college/uploadArticles">Upload Articles</router-link></b-dropdown-item>
                                <b-dropdown-item href="#"><router-link to="/college/facultyManagement">Faculty Management</router-link></b-dropdown-item>                                    
                                <b-dropdown-item href="#"><router-link to="/college/updateProfile">Update Profile</router-link></b-dropdown-item>                                  
                                <b-dropdown-item href="#"><router-link to="/college/sendResponse">Send Response</router-link></b-dropdown-item>
                                <b-dropdown-item href="#"><router-link to="/college/viewStudentsRequests">View Student Requests</router-link></b-dropdown-item>  
                                <b-dropdown-item href="#"><router-link to="/college/feedback">Feedback</router-link></b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item id="logout"><router-link to="/">Logout</router-link></b-dropdown-item>                                
                        </b-nav-item-dropdown>                     
                        <!-- College Login dropdown end -->
                        
                     <!-- Register start -->
                           <b-button variant="primary" v-b-modal.modal-2>Student Register</b-button>        
                                <b-modal id="modal-2" title="Student Register" hide-footer>
                                     <studentRegister /> <!-- studentRegister component -->
                                </b-modal>                     
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
                         <b-navbar-brand href="#"><router-link to="/college">
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
import studentRegister from '../../components/studentRegister'

export default {
 name : 'admHeader',
 prop : {
  msg : String   
 },
 components: {
  studentRegister
 },
 data() {
      return {
        selected: 'Admin Login',
        options: [
          { item: 'Admin Login', name: 'Admin'},
          { item: 'College Login', name: 'College' },
          { item: 'Student Login', name: 'Student' },
        ]
      }
    }
}
</script>

<style scoped>
*{
 text-decoration: none;
}
.bg-info {
 background-color: black!important;
}
#logo {
 width: 35px;
 padding-left: 5px;
}
/*
div #fir a.navlink {
 text-decoration: none;
 color: blue;
 text-weight: bolder;
 border: 2px solid transparent;
}

div #fir a:hover {
 border-bottom: 2px solid white;
 transition: .1s;
}
*/
div #sec a {
 text-decoration: none;
 color:black!important;
 text-weight: bolder;
 border: 2px solid transparent; 
}
/*
div #sec a:hover {
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
div a {
 color: black!important;
}
</style>
