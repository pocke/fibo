(function () {
  "use strict";

  var colors = ['#ff8e8e', '#ff8ec6', '#ff8eff', '#c68eff', '#8e8eff', '#8ec6ff', '#8effff', '#8effc6', '#8eff8e', '#c6ff8e', '#ffff8e', '#ffc68e'];

  function colourN(n) {
    return colors[n%colors.length];
  }

  var memo_fib = [1, 1];

  function fibo(n) {
    return memo_fib[n] || function () {
      memo_fib[n] = fibo(n-1) + fibo(n-2);  
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

  Vue.component('fibo-base', {
    template: '#base-template',
    data: function () {
      return {n: 5};
    },
    computed: {
      width: function () {
        var a = fibo(this.n);
        var b = fibo(this.n-1);
        return a/(a+b) * 100;
      },
      color: function () { return colourN(this.n); },
    },
    ready: function () {
      console.log(this);
    },
  });

  Vue.component('fibo-a', {
    template: '#a-template',
    props: ['n'],
    methods: {
      fib: fibo,
      colorn: colourN,
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

  Vue.component('fibo-b', {
    template: '#b-template',
    props: ['n'],
    methods: {
      fib: fibo,
      colorn: colourN,
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

  Vue.component('fibo-c', {
    template: '#c-template',
    props: ['n'],
    methods: {
      fib: fibo,
      colorn: colourN,
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

  Vue.component('fibo-d', {
    template: '#d-template',
    props: ['n'],
    methods: {
      fib: fibo,
      colorn: colourN,
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
      n: 2,
    },
    ready: function () {
      console.log(this);
    }
  });


})();
