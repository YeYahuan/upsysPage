
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
      <div class="score-right">
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
        <!-- <input type="text" placeholder=" xxx" v-model.trim="msg" @keyup.enter="setdata" size="20">
        <div :style="barrageBox">
          <span v-for="el in ku" :key="el.id" class="fly" :style="{top:el.top + 'px'}">
          {{el.msg}}</span>
        </div>-->
        <div class="add-box">
          <button @click="addLabel">+自定义标签</button>
          
        </div>
        
        <div class="label-box">
          <span class="tag-item"  :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我是文(10)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我芙文(2)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我达(16)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我芙文(8)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}"> 我文(10)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我是芙文(4)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我芙文(10)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我达芙文(10)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">芙文(15)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我是达芙文(10)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我芙文(10)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我是达芙文(5)</span>
          <span class="tag-item" :style="{color:'#'+getColor,border:'1px solid #'+getColor}">我是芙文(1)</span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2"></mt-tab-container-item>
      <mt-tab-container-item id="3"></mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
import { MessageBox } from 'mint-ui';
import Main from "../main/Main";
export default {
  data() {
    return {
      selected: "1",
      msg: "", //缓存
      ku: [],
      //存取数据
      barrageBox: {
        width: "7rem",
        margin: ".2rem auto",
        height: ""
      }
    };
  },
  components: {
    "my-main": Main
  },
  mounted() {
    this.barrageBox.height =
      $("body").height() - 4.5 * parseInt($("html").css("font-size")) + "px";
  },
  methods: {
    // setdata() {
    //   if (this.msg) {
    //     let num = Math.random() * 300;
    //     let top = Math.floor(num);
    //     let obj = { msg: this.msg, top: top };
    //     this.ku.push(obj);
    //     this.msg = " ";
    //   }
    // },
    addLabel(){
      MessageBox.prompt('新增自定义标签',{
          inputValidator: (val) => {
            if (val === null) {
              return true;//初始化的值为null，不做处理的话，刚打开MessageBox就会校验出错，影响用户体验
            }
            return !( val.length > 8)
          }, inputErrorMessage: '标签长度必须在0~8位'
        }).then(({ value}) => {
        console.log(value)
      }).catch(() => {
        console.log('取消操作')
      });
    }
    
  },
  computed:{
    getColor () {
      return `${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

  }
};
</script>
<style scoped>
.my-img {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 0.2rem;
  left: 0.3rem;
}
.my-info {
  position: absolute;
  top: 0.2rem;
  text-align: left;
  margin-top: 0.1rem;
  font-size: 0.24rem;
  line-height: 0.55rem;
  margin-left: 2.6rem;
}
.title_sol {
  position: absolute;
  top: 1.35rem;
  left: 0.2rem;
  width: 7rem;
  height: 0.01rem;
  padding: 0.01rem;
  background-color: #d5d5d5;
  overflow: hidden;
}
.my-score-box {
  position: absolute;
  top: 1.45rem;
  left: 2.6rem;
  width: 4.7rem;
  height: 0.8rem;
  font-size: 0.24rem;
}
.score-left {
  float: left;
  width: 2.35rem;
  text-align: center;
}
.score-right {
  float: right;
  width: 2.35rem;
  text-align: center;
}
.my-bar {
  position: absolute;
  left: 0.2rem;
  top: 2.6rem;
  height: 0.8rem;
  width: 7rem;
}
.my-container {
  position: absolute;
  width: 7rem;
  top: 3.8rem;
  left: 0.2rem;
}
.add-box{
  width: 6.8rem;
  height: .8rem;
  margin: .2rem auto;
  text-align: center;
}
.my-container button{
  position:absolute;
  top:0;
  right:0;
  border:1px dashed #26a2ff;
  border-radius: .1rem;
  width:2rem;
  height: .6rem;
  font-size: .3rem;
  color: #26a2ff;
  background-color: #fff;

}
.label-box {
  font-size: 0.40rem;
  /* padding: .4rem .4rem ; */
  text-align: center;
  /* color: #aaa */
}
.tag-item {
  display: inline-block;
  padding: 0.06rem 0.1rem;
  border: 1px solid #aaa;
  margin-top: .2rem;
  margin-left: .2rem;
  border-radius: .06rem;
}

.mint-msgbox-message{
  color:#26a2ff !important;
}

</style>
