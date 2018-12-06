
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
        <span>
          <img :src="like_url" @click="changeLike" id="likeMe">
        </span>
        <br>
        <span>{{likeNum}}</span>
      </div>
      <div class="score-right">
        <span>
          <img :src="heart_url" alt @click="changeHeart" id="heartMe">
        </span>
        <br>
        <span>{{heartNum}}</span>
      </div>
    </div>
    <mt-navbar v-model="selected" class="my-bar">
      <mt-tab-item id="1">个人印象</mt-tab-item>
      <mt-tab-item id="2">参与项目</mt-tab-item>
      <mt-tab-item id="3">个人能力图</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="my-container">
      <mt-tab-container-item id="1">
        <div class="add-box">
          <button @click="addLabel">+自定义标签</button>
          
          <img src="../../assets/arrow.png" alt @click="lookMore">
          <br>
          <span class="moreClass" @click="lookMore">查看更多</span>
        </div>

        <div class="label-box">
          <span
            class="tag-item"
            @click="add(item,index)"
            v-for="(item,index) in testList"
            :key="index"
            :style="{color:'#'+Math.floor(Math.random() * 16777215).toString(16)}"
            :id="'item'+index"
          >{{item.name}}({{item.count}})</span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2"></mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-swipe :auto="0" :style="mySwipeimg">
          <mt-swipe-item>
            <span class="title">个人能力雷达图</span>
            <div id="myCharts1" :style="myChart"></div>
          </mt-swipe-item>
          <mt-swipe-item>
            <span class="title">个人能力柱状图</span>
            <div :style="myChart" class="power">
              <span>当前得分：{{jbmRangeValue}}</span>
              <mt-range v-model="jbmRangeValue" :bar-height="5" :min="100" :max="2000">
                <div slot="start">基本面：100</div>
                <div slot="end">2000</div>
              </mt-range>
              <p></p>
              <span>当前得分：{{gwRangeValue}}</span>
              <mt-range v-model="gwRangeValue" :bar-height="5" :min="100" :max="3000">
                <div slot="start">岗位：100</div>
                <div slot="end">3000</div>
              </mt-range>
              <p></p>
              <span>当前得分：{{xxlRangeValue}}</span>
              <mt-range v-model="xxlRangeValue" :bar-height="5" :min="0" :max="370">
                <div slot="start">学习力：0</div>
                <div slot="end">370</div>
              </mt-range>
              <p></p>
              <span>当前得分：{{gzlRangeValue}}</span>
              <mt-range v-model="gzlRangeValue" :bar-height="5" :min="-1200" :max="1700">
                <div slot="start">工作力：-1200</div>
                <div slot="end">1700</div>
              </mt-range>
              <p></p>
              <span>当前得分：{{jcqkRangeValue}}</span>
              <mt-range v-model="jcqkRangeValue" :bar-height="5" :min="-600" :max="500">
                <div slot="start">奖惩情况：-600</div>
                <div slot="end">500</div>
              </mt-range>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
import { MessageBox } from "mint-ui";
import Main from "../main/Main";
import likeme from "../../assets/likeme.png";
import solidLikeme from "../../assets/solid_likeme.png";
import heart from "../../assets/heart_blue.png";
import solidHeart from "../../assets/solid_heart_blue.png";

export default {
  data() {
    return {
      likeNum: 4454,
      heartNum: 1000,
      hasClick: false,
      likeFlag: false,
      heartFlag: false,
      like_url: likeme,
      heart_url: heart,
      selected: "1",
      msg: "", //缓存
      ku: [],
      // //存取数据
      // labelBox: {
      //   width: "7rem",
      //   margin: ".2rem auto",
      //   height: "",
      //   overflow:"hidden",
      //   paddingBottom:'1rem'
      // },
      jbmRangeValue: 500,
      gwRangeValue: 1070,
      xxlRangeValue: 100,
      gzlRangeValue: 1000,
      jcqkRangeValue: 200,
      myChart: {
        width: "7rem",
        height: ""
      },
      mySwipeimg: {
        height: "",
        color: "#000",
        fontSize: "0.2rem",
        width: "7rem",
        display: "block",
        margin: "0 auto",
        textAlign: "center"
      },
      testList: [
        { name: "大人物", count: 2 },
        { name: "大人ws物", count: 2 },
        { name: "大sdfsd人物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大sdfsd人物", count: 2 },
        { name: "大是滴人物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大是的发生s人物", count: 2 },
        { name: "大水电费人物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大水电费人物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大是的发生人物", count: 2 },
        { name: "大人物水电费", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大水电费人物", count: 2 },
        { name: "大双方的服务人物", count: 2 },
        { name: "大人是的发生物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大水电费人物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大水电费人物", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大是的发生人物", count: 2 },
        { name: "大人物水电费", count: 2 },
        { name: "大人物", count: 2 },
        { name: "大水电费人物", count: 2 },
        { name: "大双方的服务人物", count: 2 },
        { name: "大人是的发生物", count: 2 },
        { name: "大人物", count: 2 }
      ]
    };
  },
  components: {
    "my-main": Main
  },
  mounted() {
    // this.labelBox.height =
    //   $("body").height() - 4.5 * parseInt($("html").css("font-size")) + "px";
    this.myChart.height =
      $("body").height() - 5.5 * parseInt($("html").css("font-size")) + "px";
    this.mySwipeimg.height =
      $("body").height() - 5.1 * parseInt($("html").css("font-size")) + "px";
    this.$nextTick(() => {
      setTimeout(() => {
        this.drawCharts1();
      }, 100);
    });
  },
  methods: {
    drawCharts1() {
      var myChart = echarts.init(document.getElementById("myCharts1"));

      var option = {
        title: {},
        tooltip: {},
        legend: {
          data: ["个人能力雷达图"]
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "基本面", max: 2000 },
            { name: "岗位", max: 1300 },
            { name: "学习力", max: 370 },
            { name: "奖惩情况", max: 500 },
            { name: "工作力", max: 1700 }
          ]
        },
        series: [
          {
            name: "",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [500, 1070, 100, 200, 1000],
                name: ""
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    addLabel() {
      MessageBox.prompt("新增自定义标签", {
        inputValidator: val => {
          if (val === null) {
            return true; //初始化的值为null，不做处理的话，刚打开MessageBox就会校验出错，影响用户体验
          }
          return !(val.length > 8);
        },
        inputErrorMessage: "标签长度必须在0~8位"
      })
        .then(({ value }) => {
          console.log(value);
        })
        .catch(() => {
          console.log("取消操作");
        });
    },
    changeLike() {
      if (!this.likeFlag) {
        this.like_url = solidLikeme;
        this.likeFlag = true;
        this.likeNum++;
        this.addOneAnimate("#likeMe");
      } else {
        this.like_url = likeme;
        this.likeFlag = false;
        this.likeNum--;
      }
    },
    changeHeart() {
      if (!this.heartFlag) {
        this.heart_url = solidHeart;
        this.heartFlag = true;
        this.heartNum++;
        this.addOneAnimate("#heartMe");
      } else {
        this.heart_url = heart;
        this.heartFlag = false;
        this.heartNum--;
      }
    },
    add(item, index) {
      item.count++;
      var el = "#item" + index;
      this.hasClick = true;
      this.addOneAnimate(el);
    },
    addOneAnimate(el) {
      $.tipsBox({
        obj: $(el),
        str: "+1",
        callback: function() {}
      });
    },
    lookMore(){
      this.$store.commit('changeTitle','个人印象');
      this.$store.commit('changeBottomShow',false);
      this.$store.commit('changetabRouterName','PersonImpression');
      this.$router.push('PersonImpression');
    }
  },
  computed: {}
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
.my-score-box img {
  width: 0.5rem;
}
.my-bar {
  position: absolute;
  left: 0.2rem;
  top: 3rem;
  height: 0.8rem;
  width: 7rem;
}
.my-container {
  position: absolute;
  width: 7rem;
  top: 4.2rem;
  left: 0.2rem;
}
.add-box {
  width: 6.8rem;
  height: 0.8rem;
  margin: 0.2rem auto;
  text-align: center;
}
.my-container button {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  border: 1px dashed #26a2ff;
  border-radius: 0.1rem;
  width: 2rem;
  height: 0.6rem;
  font-size: 0.3rem;
  color: #26a2ff;
  background-color: #fff;
}
.my-container img {
  position: absolute;
  width: 0.3rem;
  top: 0.25rem;
  right: 0rem;
}
.moreClass{
  position:absolute;
  top:0.2rem;
  right: .4rem;
  font-size: .28rem;
  /* color:#26a2ff; */
}
.label-box {
  font-size: 0.3rem;
  /* padding: .4rem .4rem ; */
  text-align: center;
  /* color: #aaa */
}
.tag-item {
  display: inline-block;
  padding: 0.06rem 0.1rem;
  border: 1px solid #ccc;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  border-radius: 0.06rem;
}

.mint-msgbox-message {
  color: #26a2ff !important;
}
</style>
