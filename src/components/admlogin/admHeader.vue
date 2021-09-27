<template>
<div id="admHeader">
   <div id="fir">
        <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-container>

                 <!-- Right aligned nav items -->
                 <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>                
                 <b-collapse id="nav-collapse1" is-nav> 
                   <b-navbar-nav class="ms-auto" id="right">
                        <!-- adminLogin dropdown -->
                        <b-nav-item-dropdown text="admin" right>     
                                <b-dropdown-item href="#" id="dditem"><router-link to="/admin/approveInstitute">Approve Institute</router-link></b-dropdown-item>
                                <b-dropdown-item href="#" id="dditem"><router-link to="/admin/deleteInstitute">Delete Institute</router-link></b-dropdown-item>                                    
                                <b-dropdown-item href="#" id="dditem"><router-link to="/admin/viewStudents">View Students</router-link></b-dropdown-item>                                  
                                <b-dropdown-item href="#" disabled>View Complaints</b-dropdown-item>  
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item id="logout"><router-link to="/">Logout</router-link></b-dropdown-item>
                        </b-nav-item-dropdown>                     
                        <!-- adminLogin dropdown end -->
                     <!-- Register start -->        
                        <b-nav-item-dropdown text="register" right>
                          <b-dropdown-item v-b-modal.modal-2 href="#">College Register</b-dropdown-item>
                                  <b-modal id="modal-2" title="College Register" hide-footer>
                                    <collegeRegister /> <!-- collegeRegister component -->
                                  </b-modal>                          
                          <b-dropdown-item v-b-modal.modal-3 href="#">Student Register</b-dropdown-item>
                                  <b-modal id="modal-3" title="College Register" hide-footer>
                                    <studentRegister /> <!-- studentRegister component -->
                                  </b-modal>                                                    
                        </b-nav-item-dropdown>                     
                     <!-- Register start end -->
                   </b-navbar-nav>
                 </b-collapse>
              </b-container>
           </b-navbar>
 </div>
<div id="sec">
      <b-container>
                <div>
                    <b-navbar toggleable="lg">
                         <b-navbar-brand href="#"><router-link to="/admin">
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
import collegeRegister from '../../components/collegeRegister'
import studentRegister from '../../components/studentRegister'

export default {
 name : 'admHeader',
 prop : {
  msg : String   
 },
 component : {
   collegeRegister,
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
