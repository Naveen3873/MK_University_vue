<template>
<div>
  <Header />
  <home />
  <Footer />
</div>
</template>

<script>
import Header from './Header'
import home from './home'
import Footer from './Footer'

export default {
 name : 'homePage',
 prop : {
  msg : String   
 },
 components : {
  Header,
  home,
  Footer
 }
}
</script>

<style scoped>

</style>
