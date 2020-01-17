describe('Account', function(){

  it('has a balance', function(){
    var account = new Account(this.balance);
    expect(account.returnBalance()).toEqual(account.balance);
  });

  it('adds a deposit to the balance', function(){
    var account = new Account(10);
    // account.balance = 10
    account.addDeposit(10)
    expect(account.returnBalance()).toEqual(20);
  });
});

// function testingReturnBalance() {
//   var account = new Account(this.balance);
//   assert.isTrue(account.returnBalance() === account.balance);
// };
//
// testingReturnBalance();
