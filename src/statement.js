(function(exports) {
  function Statement() {
  };

  Statement.prototype.printHeader = function(){
    return "date || credit || debit || balance\n"
  };


  exports.Statement = Statement;
})(this);
