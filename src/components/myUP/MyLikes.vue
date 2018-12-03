<template>
  <div class="like-box">
    <ul>
      <li>
        <p class="like-time">2018-10-18</p>
        <div class="img-box">
          <img src="../../assets/user.png" alt @click="toPerson">
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
        </div>
      </li>
      <li>
        <p class="like-time">2018-10-18</p>
        <div class="img-box">
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
          <img src="../../assets/user.png" alt>
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
      this.$store.commit('changetabRouterName','backML');
      this.$router.push("/Person");
    }
  }
};
</script>
<style>
.like-box {
  font-size: 0.26rem;
  padding: 0 0.3rem;
}
.like-box li {
  width: 6.9rem;
  margin: 0 auto;

}
.img-box{  border-bottom: 1px solid #ccc;border-top: 1px solid #ccc;padding-top: .2rem }
.like-box .like-time {
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top:.2rem 
}

.like-box img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin-bottom: .2rem;
  margin-left: .2rem
}
</style>

