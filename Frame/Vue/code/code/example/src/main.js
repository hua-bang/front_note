import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render(createElement){
    return createElement('div', {
      attrs: {
        id: "#app"
      }
    }, [
      createElement("a", {
        attrs: {
          href: "https://www.baidu.com"
        }
      }, "baidu")
    ])
  },
  data() {
    return {
      message: "msg"
    }
  }
})
