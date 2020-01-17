(function(exports) {
  function Account(balance) {
    this.balance = balance
  };

  Account.prototype.returnBalance = function(){
    return this.balance;
  };

  exports.Account = Account;
})(this);
