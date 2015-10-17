(function () {
  "use strict";

  var colors = ['#ff8e8e', '#ff8ec6', '#ff8eff', '#c68eff', '#8e8eff', '#8ec6ff', '#8effff', '#8effc6', '#8eff8e', '#c6ff8e', '#ffff8e', '#ffc68e'];

  function ColourN(n) {
    return colors[n%colors.length];
  }

  var memo_fib = [1, 1];

  function Fibo(n) {
    var self = this;
    return memo_fib[n] || function () {
      memo_fib[n] = self.fib(n-1) + self.fib(n-2);  
      return memo_fib[n];
    }();
  }

  var aFunc = function () {
    var a = this.fib(this.n);
    var b = this.fib(this.n-1);
    return (a/(a+b) * 100);
  };

  var bFunc = function () {
    var a = this.fib(this.n);
    var b = this.fib(this.n-1);
    return (b/(a+b) * 100);
  };

  Vue.component('fibo-a', {
    template: '#a-template',
    props: ['n'],
    methods: {
      fib: Fibo,
      colorn: ColourN,
    },
    computed: {
      a: aFunc,
      b: bFunc,

      color: function () { return this.colorn(this.n); },
    },
    ready: function () {
      console.log(this);
    }
  });

  var app = new Vue({
    el: '#vue-main',
    data: {
      n: 3,
    },
    ready: function () {
      console.log(this);
    }
  });


})();
