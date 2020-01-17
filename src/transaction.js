(function(exports) {
  function Transaction(date, balance) {
    Account.balance = balance;
    this.date = new Date();
  };

  Transaction.prototype.printDate = function(){
    return this.date;
  };

  exports.Transaction = Transaction;
})(this);
