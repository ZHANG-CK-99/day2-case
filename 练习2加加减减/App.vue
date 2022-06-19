<template>
  <!-- 有一个根标签 -->
  <div id="app">
    <div class="pannel">
        <ul>
          <li v-for="(item, i) in arr" :key="item">
              <span>{{item}}</span>
              <button @click="del(i)">删除</button>
          </li>
        </ul>
        <button @click="add">生成</button>
    </div>
  </div>
</template>

<script>
// 事件修饰符
// 阻止冒泡 .stop
// .prevent 阻止默认行为
export default {
  name: "App",
  data: function () {
    return {
     arr:[1,3]
    };
  },
  methods: {
   add() {
    this.arr.push(Math.floor(Math.random()*10) + 1);
   },
   del(i) {
    this.arr.splice(i,1)
   }
  },
};
</script>

<style scoped>
  .pannel {
    width: 300px;
    height: 300px;
    background-color: green;
  }
/* 写样式  scope写了就能在当前app.vue使用， 不写可以应用在其他的文件*/
</style>
            
