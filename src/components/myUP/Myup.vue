<template>
  <div class="myup-box">
    <img src="../../assets/fengjing.jpg" alt class="my-img">
    <br>
    <div class="self_info">
      <span>陈家宁/010xxxxx</span>
      <br>
      <span>深圳分行/信息技术部/开发二室</span>
    </div>
    <div class="cf item-box">
      <div class="item add-border">
        <img src="../../assets/logo.png" alt class="iconImg" @click="toBarrage">
        <br>
        <span>弹幕管理</span>
      </div>
      <div class="item add-border" >
        <img src="../../assets/logo.png" alt class="iconImg" @click="toLikeMe">
        <br>
        <span>赞过我</span>
      </div>
      <div class="item">
        <img src="../../assets/logo.png" alt class="iconImg" @click="toFollowMe">
        <br>
        <span>我的粉丝</span>
      </div>
    </div>
    <div class="cellItem-box">
      <p class="tag">个性标签</p>
      <ul>
        <li class="like-box cf" @click="toMyLabel">
          <div>
            <span class="tag-item">大富翁</span>
            <span class="tag-item">哈哈哈</span>
            <span class="tag-item">我雷区</span>
            <span class="tag-item">你咩的</span>
          </div>
          <div class="item-right">
            <span>更多</span>
            <span>></span>
          </div>
        </li>
        <li class="like-box cf"  @click="toMyLikes">
          <div>我赞过的</div>
          <div class="item-right">
            <span>查看</span>
            <span>></span>
          </div>
        </li>
        <li class="like-box cf" @click="toMyFollows">
          <div>我关注的</div>
          <div class="item-right">
            <span>查看</span>
            <span>></span>
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    toMyLabel(){
      this.$store.commit('changeTitle','个性标签');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','MyLabel')
      this.$router.push('/MyLabel')
    },
    toMyLikes(){
      this.$store.commit('changeTitle','我赞过的');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','MyLike');
      this.$router.push('/MyLike');
    },
    toMyFollows(){
      this.$store.commit('changeTitle','我关注的');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','MyFollow');
      this.$router.push('/MyFollow');
    },
    toBarrage(){
      this.$store.commit('changeTitle','弹幕管理');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','Barrage');
      this.$router.push('/Barrage');
    },
    toLikeMe(){
      this.$store.commit('changeTitle','赞过我');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','LikeMe');
      this.$router.push('/LikeMe');
    },
    toFollowMe(){
      this.$store.commit('changeTitle','我的粉丝');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','FollowMe');
      this.$router.push('/FollowMe');
    }
  }
};
</script>
<style scoped>
.myup-box {
  font-size: 0.25rem;
  position: fixed;
  top: 0.88rem;
  left: 0.3rem;
  width: 6.9rem;
}
.my-img {
  display: block;
  margin: 0 auto;
  border-radius: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.3rem;
}
.self_info{
  display: block;
  margin: 0 auto;
  text-align: center;
  line-height: .5rem;
}
.cf:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.item-box {
  width: 100%;
  margin-top: .5rem;
  border-bottom: 0.01rem solid #ccc;
}
.item {
  float: left;
  width: 33.3%;
  margin: 0.1rem auto;
  text-align: center;
}
.add-border {
  border-right: 0.01rem solid #ccc;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style-type: none;
}
.iconImg {
  width: 0.5rem;
  height: 0.5rem;
}
.cellItem-box {
  margin-top: 0.4rem;
  width: 100%;
  font-weight: bold;
}
.cellItem-box ul li {
  width: 100%;
  border-bottom: 0.01rem solid #ccc;
  padding: 0.2rem 0.08rem;
}
.tag {
  text-align: left;
  padding-bottom: 0.06rem;
  font-weight: bold;
}
.like-box div {
  float: left;
}
.like-box .item-right {
  float: right;
}
.tag-item {
  display: inline-block;
  border: 0.01rem solid #ccc;
  padding: 0.08rem 0.2rem;
  margin-left: 0.12rem;
}
</style>


