<template>
<div>
  <clgHeader />
        <div id="courses" style="background-image: url('https://www.adorama.com/alc/wp-content/uploads/2018/01/best-online-free-photography-courses-feature.jpg')">
             <br><br><br><br>
             <p class="text-primary mx-5 my-5 display-4">UPDATE PROFILE --></p>
        </div>
  <Footer />
</div>  
</template>

<script>
import clgHeader from './clgHeader'
import Footer from '../Footer'

export default {
 name : 'updateProfile',
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
