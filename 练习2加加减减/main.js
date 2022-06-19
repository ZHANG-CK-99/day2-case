// Vue是一个构造函数
import Vue from "vue";
// @/ --> src/
// .js .vue结尾可省略
import App from "@/App";

const vm = new Vue({
  render: (h) => h(App),
});

//挂载底层通过documnet.querSelector('#app)获取
vm.$mount("#app");
