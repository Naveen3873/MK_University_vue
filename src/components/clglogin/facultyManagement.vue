<template>
<div>
  <clgHeader />
  <div id="courses" style="background-image: url('https://www.adorama.com/alc/wp-content/uploads/2018/01/best-online-free-photography-courses-feature.jpg')">
     <br><br><br><br>
     <p class="text-primary mx-5 my-5 display-4">FACULTY MANAGEMENT --></p>
  </div>
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="4">
                <b-list-group>
                  <b-list-group-item active>Add Faculty</b-list-group-item>
                  <b-list-group-item>Update Faculty</b-list-group-item>
                </b-list-group>               
            </b-col>
            <b-col cols="8">
                
            </b-col>
          </b-row>
        </b-container>
  <Footer />
</div>  
</template>

<script>
import clgHeader from './clgHeader'
import Footer from '../Footer'

export default {
 name : 'facultyManagement',
 prop : {
  msg : String   
 },
 components : {
  clgHeader,
  Footer
 }
}
</script>

<style scoped>
</style>
