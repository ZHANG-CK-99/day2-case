<template>
  <!-- 有一个根标签 -->
  <div id="app">
   <ul>
      <li v-for="item in Arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
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
      Arr:['帅哥', '美女', '马云']
    };
  },
  methods: {
    // 点击了走一走就实现把数组中第一个元素扒拉到最后一个
    btn() {
      this.Arr.push(this.Arr[0]);
      this.Arr.shift();  //去掉头部
    }
  },
};
</script>

<style scoped>
  ul {
    width: 300px;
    height: 300px;
    background-color: pink;
    padding: 30px;
  }
/* 写样式  scope写了就能在当前app.vue使用， 不写可以应用在其他的文件*/
</style>
            
