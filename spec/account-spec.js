describe('Account', function(){

  it('has a balance', function(){
    var account = new Account(this.balance);
    expect(account.returnBalance()).toEqual(account.balance);
  });
});

// function testingReturnBalance() {
//   var account = new Account(this.balance);
//   assert.isTrue(account.returnBalance() === account.balance);
// };
//
// testingReturnBalance();
