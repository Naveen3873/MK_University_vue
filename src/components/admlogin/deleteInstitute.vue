<template>
<div>
 <admHeader />
  <div>
  <b-container>
  <p class="display-4 text-primary mt-5 mx-5">DELETE INSTITUTE</p>
    <b-table responsive striped bordered hover head-variant-dark class="my-5 p-5" :items="items"></b-table>
  </b-container>
  </div> 
 <Footer />
</div>
</template>

<script>
import admHeader from './admHeader'
import Footer from '../Footer'


export default {
 name : 'approveInstitute',
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
          { College_ID: 'C000023', College_Name: 'American', Action: 'View / Delete' },
          { College_ID: 'C000032', College_Name: 'Thiyagarajar', Action: 'View / Delete' },
          { College_ID: 'C000453', College_Name: 'Mannar', Action: 'View / Delete' },                             
        ]
     }
  } 
}
</script>

<style>

