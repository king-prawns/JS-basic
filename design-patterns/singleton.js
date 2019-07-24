var Singleton = (function() {
  var singletonInstance;

  function create() {
    function print() {
      // underlying printer mechanics
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() {
      if (!singletonInstance) {
        singletonInstance = create();
      }
      return singletonInstance;
    }
  };
})();
