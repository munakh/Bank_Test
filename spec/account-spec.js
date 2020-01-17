describe('Account', function(){

  it('has a balance', function(){
    var account = new Account(this.balance);
    expect(account.returnBalance()).toEqual(account.balance);
  });

  it('deposits money to the balance', function(){
    var account = new Account(10);
    account.addDeposit(10);
    expect(account.returnBalance()).toEqual(20);
  });

  it('withdraws money from the balance', function(){
    var account = new Account(10);
    account.withdrawAmount(5);
    expect(account.returnBalance()).toEqual(5);
  });

  it('raises error if not enough money in account', function(){
    var account = new Account(10);
    expect(account.withdrawAmount(15)).toEqual("Not enough money in account");
  });
});

// function testingReturnBalance() {
//   var account = new Account(this.balance);
//   assert.isTrue(account.returnBalance() === account.balance);
// };
//
// testingReturnBalance();
