<template>
  <div id="app">
    <my-nav></my-nav>
    <div :style="main">
      <router-view/>
    </div>
    <div v-if="showBottom">
      <my-bottom ref="bottom"></my-bottom>
    </div>
  </div>
</template>
<script>
import Nav from "./components/container/Nav";
import Bottom from "./components/container/Bottom";

export default {
  name: "App",
  data() {
    return {
      main: {
        height: "",
        position: "fixed",
        top: "0.88rem",
        left: "0rem",
        width: "7.5rem"
      }
    };
  },
  created() {
    if (sessionStorage.getItem("state")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("state"))
        )
      );
    }
    window.addEventListener("unload", this.saveState);
  },
  computed: {
    showBottom() {
      return this.$store.state.showBottom;
    }
  },
  mounted() {
    this.main.height =
      $("body").height() - 2.08 * parseInt($("html").css("font-size")) + "px";
  },
  methods: {
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    }
  },
  components: {
    "my-nav": Nav,
    "my-bottom": Bottom
  }
};
</script>

<style>
#app {
}
</style>
