(function(exports) {
  function Account(balance) {
    this.balance = balance;
    // this.transactions = [];
  };

  Account.prototype.returnBalance = function(){
    return this.balance;
  };

  Account.prototype.addDeposit = function(amount){
    return this.balance += amount;
  };

  Account.prototype.withdrawAmount = function(amount){
    if (amount < this.balance) {
      return this.balance -= amount;
    }
    return "Not enough money in account";
  };

  exports.Account = Account;
})(this);
