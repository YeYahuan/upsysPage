<template>
  
  
  <mt-tabbar v-model="selected" fixed class="my-bottom">
    <mt-tab-item id="个人画像" @click.native="toMain">
    	 <img slot="icon" src="../../assets/logo.png" >
        个人画像
    </mt-tab-item>
    <mt-tab-item id="发现" @click.native="toFind">
      <img slot="icon" src="../../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="我的"  @click.native="toMe">
    	<img slot="icon" src="../../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script type="text/javascript">
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'Bottom',
  data() {
    return {
      selected:''
    }
  },
  watch:{
  	selected(val,oldval){
      // console.log(val)
  	}
  },
  mounted(){
    this.$router.push('/Main')
  },
  methods:{
    toMain(){
      this.$router.push('/Main')
    
    },
    toFind(){
       this.$router.push('/Find');
    },
    toMe(){
       this.$router.push('/Mine');
    }
  }
}

</script>
<style>
a {
text-decoration: none;
}
.mint-tabbar{
  height: 1.2rem;
}
</style>
