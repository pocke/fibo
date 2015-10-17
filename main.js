(function () {
  "use strict";


  var app = new Vue({
    el: '#vue-main',
    data: {
      n: 2,
      memo_fib: [1, 1],
    },
    methods: {
      fib: function (n) {
        var self = this;
        return self.memo_fib[n] || function () {
          self.memo_fib[n] = self.fib(n-1) + self.fib(n-2);  
          return self.memo_fib[n];
        }();
      },
    },
    computed: {
      a: function () {
        console.log(this);
        var a = this.fib(this.n);
        var b = this.fib(this.n-1);
        return (a/(a+b) * 100);
      },
      b: function () {
        var a = this.fib(this.n);
        var b = this.fib(this.n-1);
        return (b/(a+b) * 100);
      },
    }
  });

  console.log(app);
})();
