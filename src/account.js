(function(exports) {
  function Account(balance) {
    this.balance = balance;
  };

  Account.prototype.returnBalance = function(){
    return this.balance;
  };

  Account.prototype.addDeposit = function(amount){
    return this.balance += amount;
  };

  Account.prototype.withdrawAmount = function(amount){
    return this.balance -= amount;
  };

  exports.Account = Account;
})(this);
