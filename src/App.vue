<template>
  <!-- 有一个根标签 -->
  <div id="app">
     <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, i) in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>
          <button @click="del(i)">删除</button>
        </td>
      </tr>
      <tr>
        <td colspan="4">保时捷还在努力！</td>
      </tr>
    </table>
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
     list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
  methods: {
   del(i) {
      this.list.splice(i,1)
   }
  },
};
</script>

<style scoped>
  #app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
/* 写样式  scope写了就能在当前app.vue使用， 不写可以应用在其他的文件*/
</style>
            
