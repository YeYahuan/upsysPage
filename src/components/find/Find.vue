<template>
  <div :style="con">
    <!-- <mt-search v-model="value" cancel-text="cancel" placeholder="可输入用户名称" ></mt-search> -->
    <div class="my-search">
      <input type="text" placeholder="可输入用户名称" class="input-item"/>
      <button class="my-btn">搜&nbsp;索</button>
    </div>
    <mt-navbar v-model="selected" class="my-navbar">
      <mt-tab-item id="1">为你推荐</mt-tab-item>
      <mt-tab-item id="2">人气排行榜</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="my-tab">
      <mt-tab-container-item id="1">
        <div class="recommendClass">
          <div class="cf recommend" @click="toPerson">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
         <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
          <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
          <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
          <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>

           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
           <div class="recommend">
            <img src="../../assets/fengjing.jpg" class="imgClass">
            <div class="infoClass">
              <span>陈家宁</span>
              <br>
              <span>深圳分行/信息技术部/开发二室</span>
              <br>
              <span>个人签名：随风而行，大爱无疆</span>
            </div>
          </div>
        </div>
        
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p></p>
        <mt-cell title="1、测试" value="600" @click.native="toPerson"></mt-cell>
        <mt-cell title="2、测试" value="500"></mt-cell>
        <mt-cell title="3、测试" value="400"></mt-cell>
        <mt-cell title="4、测试" value="300"></mt-cell>
        <mt-cell title="5、测试" value="200"></mt-cell>
        <mt-cell title="6、测试" value="100"></mt-cell>
        <mt-cell title="7、测试" value="50"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div> 
</template>

<script>
import { Search } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";
import { Cell } from "mint-ui";
export default {
  data() {
    return {
      value: "",
      selected: "1",
      con:{
           position: 'fixed',
            top:'。55rem',
            left:'0',
            height:'',
            overflow:'scroll'
      }
    };
  },
  mounted(){
     this.con.height=$('body').height()-2.08*parseInt($('html').css('font-size'))+'px';
  },
  methods: {
    toPerson() {
      this.$router.push("/Person");
    }
  }
};
</script>
<style>
.my-navbar {
   /* margin-top: 1rem;
  height: 0.04rem;
  line-height: 0.04rem; */
}

.my-search {
  height: 1rem;
  font-size:.24rem;
  width:7.6rem;
  display:block;
  margin:0.3rem auto;
}
.input-item{
  width:75%;
  margin-left: .2rem;
  margin-right: .2rem;
  padding:.2rem .2rem;
  border:.01rem solid #ccc;
  border-radius: .1rem;
  height: .82rem;
}
.my-btn{

  position:absolute;
  top:.3rem;
  height: .82rem;
  width:1.2rem;
  font-size:.3rem;
  background-color: #26a2ff;
  border:.01rem solid #26a2ff;
  border-radius: .1rem;
  color: #fff;
}
.mint-cell-title {
  text-align: left;
}
.recommendClass{
  width: 7.6rem;
  
}
.recommend {
  margin-bottom: .2rem;
  width: 7rem;
  height: 1.6rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.1rem;
}
.my-tab{
  margin: 0.2rem auto;
  width: 7rem;
}
.imgClass {

  border-radius: 0.5rem;
  width: 1rem;
  height: 1rem;
  float: left;
  margin: .3rem .4rem;
}
.infoClass {
  font-size: .24rem;
  text-align: left;
  height: 1.2rem;
  float: left;
  margin: .2rem auto;
  line-height: .4rem;
}
/* .con{
    position: fixed;
    top:55px;
    left:0;
    width: 100%;
    height: calc(100vh - 110px); 
} */
</style>
