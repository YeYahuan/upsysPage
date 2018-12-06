<template>
  <div class="table-box">
    <span
      class="tag-item"
      v-for="(item,index) in tagList"
      :key="index"
      :style="{color:'#'+Math.floor(Math.random() * 16777215).toString(16)}"
    >{{item}}</span>
    <!-- <span class="tag-item">我是达芙文</span>
    <span class="tag-item">我芙文</span>
    <span class="tag-item">我达芙文</span>
    <span class="tag-item">我芙文</span>
    <span class="tag-item">我文</span>
    <span class="tag-item">我是达芙文</span>
    <span class="tag-item">我芙文</span>
    <span class="tag-item">我是达芙文</span>
    <span class="tag-item">芙文</span>
    <span class="tag-item">我是达芙文</span>
    <span class="tag-item">我芙文</span>
    <span class="tag-item">我是达芙文</span>
    <span class="tag-item">我是芙文</span>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagList: [
        "大人物",
        "小人物",
        "埃里克的实际发",
        "sdlkfls ",
        "发生是",
        "打撒所多",
        "是的发生按时",
        "asdasdada",
        "抖抖傲",
        "安达市大所多",
        "asdasasd",
        "大人物",
        "小人物",
        "埃里克的实际发",
        "sdlkfls ",
        "发生是",
        "打撒所多",
        "是的发生按时",
        "asdasdada",
        "抖抖傲",
        "安达市大所多",
        "asdasasd",
        "大人物",
        "小人物",
        "埃里克的实际发",
        "sdlkfls ",
        "发生是",
        "打撒所多",
        "是的发生按时",
        "asdasdada",
        "抖抖傲",
        "安达市大所多",
        "asdasasd"
      ]
    };
  }
};
</script>
<style scoped>
.table-box {
  font-size: 0.30rem;
  padding: 0.2rem 0.4rem;
  text-align: center;
  color: #ccc;
}
.tag-item {
  display: inline-block;
  padding: 0.06rem 0.1rem;
  border: 1px solid #26a2ff;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  border-radius: 0.06rem;
}

</style>

