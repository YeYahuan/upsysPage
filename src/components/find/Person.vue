
<template>
  <div class="cf">
    <div class="my-info">
      <span>陈家宁/010xxxxx</span>
      <br>
      <span>深圳分行/信息技术部/开发二室</span>
    </div>

    <div class="title_sol"></div>
    <img src="../../assets/fengjing.jpg" alt class="my-img">
    <div class="cf my-score-box">
      <div class="score-left">
        <span>4,454</span>
        <br>
        <span>人气值</span>
      </div>
      <div  class="score-right">
        <span>1k</span>
        <br>
        <span>关注度</span>
      </div>
    </div>
    <mt-navbar v-model="selected" class="my-bar">
      <mt-tab-item id="1">个人印象</mt-tab-item>
      <mt-tab-item id="2">参与项目</mt-tab-item>
      <mt-tab-item id="3">个人能力图</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="my-container">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(n,index) in 5" title="tab-container 1" :key="index"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n,index) in 5" title="tab-container 2" :key="index"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,index) in 5" title="tab-container 3" :key="index"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      selected: "1"
    };
  }
};
</script>
<style scoped>


.my-img {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: .2rem;
  left: .3rem;
}
.my-info {
  position:absolute;
  top:.2rem;
  text-align: left;
  margin-top:.1rem;
  font-size: .24rem;
  line-height: .55rem;
  margin-left: 2.6rem;
}
.title_sol {
  position:absolute;
  top:1.35rem;
  left: .2rem;
  width: 7rem;
  height: 0.01rem;
  padding: .01rem;
  background-color: #d5d5d5;
  overflow: hidden;
}
.my-score-box {
  position:absolute;
  top:1.45rem;
  left:2.6rem;
  width:4.7rem;
  height: .8rem;
  font-size:.24rem;
}
.score-left{
  float: left;
  width:2.35rem;
  text-align: center;
}
.score-right{
  float: right;
  width:2.35rem;
  text-align: center;
}
.my-bar {
  position: absolute;
  left:.2rem;
  top:2.6rem;
  height: .8rem;
  width:7rem;
}
.my-container {
  position:absolute;
  width: 7rem;
  top:3.8rem;
  left: .2rem;
}
</style>
