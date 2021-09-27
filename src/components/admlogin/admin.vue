<template>
<div>
 <admHeader />
 <home />
 <Footer />
</div>
</template>

<script>
import admHeader from './admHeader'
import home from '../home'
import Footer from '../Footer'


export default {
 name : 'admin',
 prop : {
  msg : String   
 },
 components : {
  admHeader,
  home,
  Footer
 }
}
</script>

<style scoped>
</style>
