var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js!'
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    list: ['りんご', 'みかん', 'いちご']
  }
})