<template>
  <div class="follow-box">
    <ul>
      <li  @click="toPerson">
        <p class="follow-time">2018-10-18</p>
        <div class="followimg-box cf">
          <img src="../../assets/user.png" alt>
            <div> 
                <span>阿布都木/010xxxxx</span><br>
                <span>深圳分行/信息技术部/开发二室</span>
            </div>
        </div>
      </li>
      <li>
        <p class="follow-time">2018-9-18</p>
        <div class="followimg-box cf">
          <img src="../../assets/user.png" alt>
            <div> 
                <span>阿布都木/010xxxxx</span><br>
                <span>深圳分行/信息技术部/开发二室</span>
            </div>
        </div>
      </li>
      <li>
        <p class="follow-time">2018-8-18</p>
        <div class="followimg-box cf">
          <img src="../../assets/user.png" alt>
            <div> 
                <span>阿布都木/010xxxxx</span><br>
                <span>深圳分行/信息技术部/开发二室</span>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    toPerson(){
      this.$store.commit('changeTitle','个人风采');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','backFM');
      this.$router.push("/Person");
    }
  }
};
</script>
<style>
.follow-box {
  font-size: 0.26rem;
  padding: 0 0.3rem;
}
.follow-box li {
  width: 6.9rem;
  margin: 0 auto;

}
.followimg-box{  border-bottom: 1px solid #ccc;border-top: 1px solid #ccc; }
.follow-box .follow-time {
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top:.2rem 
}

.follow-box img {
  float:left;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  /* margin-bottom: .2rem;
  margin-left: .2rem */
  margin:.2rem .2rem;
  
}
.followimg-box div{
    float: left;
    margin:.2rem .2rem;
}
</style>

