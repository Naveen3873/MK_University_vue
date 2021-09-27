<template>
<div>
 <admHeader />
  <div>
  <b-container>
  <p class="display-4 text-primary mt-5 mx-5">VIEW INSTITUTE</p>
    <b-table responsive striped bordered hover head-variant-light class="my-5 p-5" :items="items" head-variant="light"></b-table>
  </b-container>
  </div> 
 <Footer />
</div>
</template>

<script>
import admHeader from './admHeader'
import Footer from '../Footer'


export default {
 name : 'viewStudents',
 prop : {
  msg : String   
 },
 components : {
  admHeader,
  Footer
 },
     data() {
      return {
        items: [
          { Student_Name: 'Naveen', Mobile: '6456121', Email: 'asfas@asdf.com', Address: 'yyyyyyyyy', College: 'American' },
          { Student_Name: 'Vicky', Mobile: '7865487', Email: 'avrf@asdf.com', Address: 'nnnnnn', College: 'Thiyagarajar' },
          { Student_Name: 'Mani', Mobile: '9876483', Email: 'ghgd@asdf.com', Address: 'wwwwwwww', College: 'Mannar' },
          { Student_Name: 'Sri', Mobile: '92789333', Email: 'htrf@asdf.com', Address: 'ccccccccc', College: 'psy' }
        ]
      }
    }
}
</script>

<style>

</style>
