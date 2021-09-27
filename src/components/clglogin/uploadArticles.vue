<template>
<div>
  <clgHeader />
  <div id="courses" style="background-image: url('https://www.adorama.com/alc/wp-content/uploads/2018/01/best-online-free-photography-courses-feature.jpg')">
     <br><br><br><br>
     <p class="text-primary mx-5 my-5 display-4">UPLOAD ARTICLES --></p>
  </div>
  <b-container class="mb-5">
        <h3 class="text-primary">Upload Files</h3>
        <div class="mb-3">
            <b-form-file
              v-model="file1"
              :state="Boolean(file1)"
              placeholder=""
              drop-placeholder="Drop file here..."
            ></b-form-file>
        </div>
        <div>
          <button type="submit" class="btn btn-primary mt-2 block">Submit</button>
        </div>  
  </b-container>
  <Footer />
</div>  
</template>

<script>
import clgHeader from './clgHeader'
import Footer from '../Footer'

export default {
 name : 'uploadArticles',
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
.block {
 display: block;
  width: 100%;
  border: none;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
