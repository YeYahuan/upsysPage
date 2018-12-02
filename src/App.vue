<template>
  <div id="app">
    <my-nav></my-nav>
    <div :style="main">
      <router-view/>
    </div>
    <my-bottom></my-bottom>
  </div>
</template>

<script>
import Nav from './components/container/Nav'
import Bottom from './components/container/Bottom'

export default {
  name: 'App',
  data(){
    return{
      main:{
        height:'',
        position:'fixed',
        top:'0.88rem',
        left:'0rem',
        width:'7.5rem'
      }
    }
   
  },
   mounted(){
    this.main.height=$('body').height()-2.08*parseInt($('html').css('font-size'))+'px';
    },
  components:{
    'my-nav':Nav,
    'my-bottom':Bottom
  }
}
</script>

<style>
#app {
}
</style>
