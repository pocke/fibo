(function () {
  "use strict";

  var colors = ['#ff8e8e', '#ff8ec6', '#ff8eff', '#c68eff', '#8e8eff', '#8ec6ff', '#8effff', '#8effc6', '#8eff8e', '#c6ff8e', '#ffff8e', '#ffc68e'];

  function ColourN(n) {
    return colors[n%colors.length];
  }

  var app = new Vue({
    el: '#vue-main',
    data: {
      n: 3,
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
      colorn: ColourN,
    },
    computed: {
      a: function () {
        var a = this.fib(this.n);
        var b = this.fib(this.n-1);
        return (a/(a+b) * 100);
      },
      b: function () {
        var a = this.fib(this.n);
        var b = this.fib(this.n-1);
        return (b/(a+b) * 100);
      },

      color: function () {
        return this.colorn(this.n);
      },
    }
  });

  console.log(app);
})();
