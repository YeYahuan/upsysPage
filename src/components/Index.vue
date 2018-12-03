<template>
  <div class="cf icon-box">
    <ul>
      <li @click="toMain">
        <img src="../assets/user.png" alt="" class="iconImg">
        <br>
        员工画像
      </li>
      <li>
       <img src="../assets/user.png" alt="" class="iconImg">
       <br>
        项目画像
      </li>
     
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
     
    }
  },
  created(){
    this.selected=this.$store.state.selected;
  },
  methods:{
    toMain(){
      this.$store.commit('changeBottomShow',true);
      this.$store.commit('changeBottomSelected','个人画像')
      this.$store.commit('changetabRouterName','Main')
      this.$router.push('/Main');
      this.$store.commit('changeBottomSelected','个人画像')
    }
  }
}
</script>

<style scoped>
.icon-box{
  margin-top:.2rem ;
  width:7rem;
  font-size: .24rem;
}
.icon-box li{
  width:33%;
  float: left;
  text-align: center;
}
.iconImg{
  width:.8rem;
  height: .8rem;

}
</style>
