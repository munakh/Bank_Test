describe('Transaction', function(){

  it('has a date', function(){
    var transaction = new Transaction(this.date, Account.balance);
    expect(transaction.printDate()).toEqual(transaction.date);
  });
});
