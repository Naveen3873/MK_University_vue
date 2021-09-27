<template>
<div>
 <clgHeader />
 <home />
 <Footer />
</div>
</template>

<script>
import clgHeader from './clgHeader'
import home from '../home'
import Footer from '../Footer'


export default {
 name : 'college',
 prop : {
  msg : String   
 },
 components : {
  clgHeader,
  home,
  Footer
 }
}
</script>

<style scoped>
</style>
