var Module = (function() {
  var contents = "contents";

  var getContent = function() {
    return 33;
  };

  return {
    callGetContent: function() {
      getContent();
      console.log(contents);
    }
  };
})();

Module.callGetContent(); // Outputs: 'contents'
console.log(Module.contents); // undefined
