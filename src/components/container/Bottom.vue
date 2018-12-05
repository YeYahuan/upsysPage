<template>
  <div class="bottom cf">
    <ul>
      <li @click="toMain" :class="{selected:selected=='个人画像'}">
        <img src="../../assets/person.png" alt>
        <p>个人画像</p>
      </li>
      <li @click="toFind" :class="{selected:selected=='发现'}">
        <img src="../../assets/find.png" alt>
        <p>发现</p>
      </li>
      <li @click="toMe" :class="{selected:selected=='我的'}">
        <img src="../../assets/user.png" alt>
        <p>我的</p>
      </li>
    </ul>
  </div>
  <!-- <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../../assets/logo.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../../assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../../assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../../assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar> -->
</template>
<script type="text/javascript">
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: "Bottom",
  data() {
    return {
    };
  },
  watch: {
    selected(val, oldval) {
      // console.log(val);
    }
  },
  mounted() {
    // this.$router.push('/Main')
  },
  computed: {
    tabRouterName() {
      return "/" + this.$store.state.tabRouterName;
    },
    selected(){
       return  this.$store.state.selected;
    }
  },
  methods: {
    toMain() {
      this.$store.commit("changeTitle", "画像系统");
      this.$store.commit("changetabRouterName", "Main");
      this.$router.push(this.tabRouterName);
      this.$store.commit('changeBottomSelected',"个人画像");
    },
    toFind() {
      this.$store.commit("changeTitle", "画像系统");
      this.$store.commit("changetabRouterName", "Find");
      this.$router.push(this.tabRouterName);
      this.$store.commit('changeBottomSelected',"发现");
    },
    toMe() {
      this.$store.commit("changeTitle", "画像系统");
      this.$store.commit("changetabRouterName", "Mine");
      this.$router.push(this.tabRouterName);
      this.$store.commit('changeBottomSelected',"我的");
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
.mint-tabbar {
  height: 1.2rem;
}

.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 7.5rem;
  font-size: 0.24rem;
  text-align: center;
  border-top:1px solid  #d9d9d9
}
.bottom li {
  width: 2.5rem;
  float: left;
  padding: .14rem 0
}
.bottom img {
  width: 0.48rem;

}
.selected {
  background-color: #eaeaea;
  color: #26a2ff;
}
</style>
