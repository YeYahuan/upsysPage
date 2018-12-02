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
        <div>
          <mt-range v-model="rangeValue" :bar-height="5">
            <div slot="start">基本面0</div>
            <div slot="end">100</div>
          </mt-range>
          <p></p>
          <mt-range v-model="rangeValue" :bar-height="5">
            <div slot="start">岗位0</div>
            <div slot="end">100</div>
          </mt-range>
          <p></p>
          <mt-range v-model="rangeValue" :bar-height="5">
            <div slot="start">学习力0</div>
            <div slot="end">100</div>
          </mt-range>
          <p></p>
          <mt-range v-model="rangeValue" :bar-height="5">
            <div slot="start">影响力0</div>
            <div slot="end">100</div>
          </mt-range>
          <p></p>
          <mt-range v-model="rangeValue" :bar-height="5">
            <div slot="start">奖惩情况0</div>
            <div slot="end">100</div>
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
      rangeValue: 50,
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
            { name: "基本面", max: 6500 },
            { name: "影响力", max: 16000 },
            { name: "学习力", max: 30000 },
            { name: "奖惩情况", max: 38000 },
            { name: "岗位", max: 52000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000],
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