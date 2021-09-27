<template>
<div>
 <stuHeader />
 <home />
 <Footer />
</div>
</template>

<script>
import stuHeader from './stuHeader'
import home from '../home'
import Footer from '../Footer'


export default {
 name : 'college',
 prop : {
  msg : String   
 },
 components : {
  stuHeader,
  home,
  Footer
 }
}
</script>

<style scoped>
</style>
