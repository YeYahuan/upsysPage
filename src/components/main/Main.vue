<template>
  <div>
    <div class="score-box">
      <div class="title">个人能力得分</div>
      <button class="my-button" disabled="disabled">3500</button>
    </div>
    <mt-swipe :auto="0" :style="mySwipeimg">
      <mt-swipe-item>
        <span class="title">个人能力雷达图</span>
        <div id="myCharts1" :style="myChart"></div>
      </mt-swipe-item>
      <mt-swipe-item>
        <span class="title">个人能力柱状图</span>
        <div :style="myChart">
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
  </div>
</template>
<script type="text/javascript">
import { Swipe, SwipeItem } from "mint-ui";
import { Range } from "mint-ui";
export default {
  data() {
    return {
      jbmRangeValue: 500,
      gwRangeValue:1070,
      xxlRangeValue:100,
      gzlRangeValue:1000,
      jcqkRangeValue:200,
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
      }
    };
  },
  mounted() {
    
    this.myChart.height =
      $("body").height() - 6.7 * parseInt($("html").css("font-size")) + "px";
    this.mySwipeimg.height =
      $("body").height() - 6.3 * parseInt($("html").css("font-size")) + "px";
    this.$nextTick(() => {
      setTimeout(() => {
        this.drawCharts1();
        this.drawCharts2();
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
          data: ["预算分配"]
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
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [500, 1070, 100, 200, 1000],
                name: "预算分配（Allocated Budget）"
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    drawCharts2() {}
  }
};
</script>

<style>
.mt-range{
  height: 1rem;
  line-height: 1rem;
  width:6.8rem;
  margin:0 auto;
}
.mt-range-thumb{
  top:.3rem;
  width:.4rem;
  height: .4rem;
}
.score-box {
  height: 3rem;
  margin: 0.3rem auto;
  margin-top:.6rem;
}

.my-button {
  height: 2rem;
  width: 2rem;
  border-radius: 2rem;
  color: #aaa;
  font-size: 0.6rem;
  padding-top: 0.1rem;
  background-color: #fff;
  border: 0.01rem solid;
  display: block;
  margin: 0.3rem auto;
}
.title {
  font-size: 0.24rem;
  display: block;
  margin: 0.1rem auto;
  text-align: center;
}
/* .title_sol {
  width: 7rem;
  height: 0.01rem;
  margin: 0rem auto;
  margin-top: .5rem;
  background-color: #d5d5d5;
  overflow: hidden;
} */
</style>