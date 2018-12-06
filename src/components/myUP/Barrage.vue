<template>
  <div class="table-box">
    <span
      class="tag-item"
      :class="{bgcolor:item.bgcolorHide}"
      @click="chose(item)"
      v-for="(item,index) in tagList"
      :key="index"
      :style="{color:colorList[Math.floor(Math.random() * 10)]}"
    >{{item.name}}</span>
    <!-- <span class="tag-item" >我是达芙文</span>
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
      colorList:[
        '#d4237a',
        '#f61f03',
        '#13227a',
        '#1296db',
        '#a4579d',
        '#d81e06',
        '#0e932e',
        '#db639b',
        '#93470e',
        '#f61f03'
      ],
      tagList: [
        {"name":"大人物","count":2},
        {"name":"大人ws物","count":2},
        {"name":"大sdfsd人物","count":2},
        {"name":"大人物","count":2},
        {"name":"大sdfsd人物","count":2},
        {"name":"大是滴人物","count":2},
        {"name":"大人物","count":2},
        {"name":"大是的发生s人物","count":2},
        {"name":"大水电费人物","count":2},
        {"name":"大人物","count":2},
        {"name":"大水电费人物","count":2},
        {"name":"大人物","count":2},
        {"name":"大是的发生人物","count":2},
        {"name":"大人物水电费","count":2},
        {"name":"大人物","count":2},
        {"name":"大水电费人物","count":2},
        {"name":"大双方的服务人物","count":2},
        {"name":"大人是的发生物","count":2},
        {"name":"大人物","count":2},
        {"name":"大水电费人物","count":2},
        {"name":"大人物","count":2},
        {"name":"大水电费人物","count":2},
        {"name":"大人物","count":2},
        {"name":"大是的发生人物","count":2},
        {"name":"大人物水电费","count":2},
        {"name":"大人物","count":2},
        {"name":"大水电费人物","count":2},
        {"name":"大双方的服务人物","count":2},
        {"name":"大人是的发生物","count":2},
        {"name":"大人物","count":2},    
      ]
    };
  },
  methods:{
    chose(item){
      if(item.bgcolorHide==undefined){
         this.$set(item,'bgcolorHide',true)
      }else{
         item.bgcolorHide=!item.bgcolorHide
      }
    }
  }
  
};
</script>
<style scoped>
.table-box {
  font-size: 0.3rem;
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
.bgcolor{
  background-color: #71efec;
}
</style>

