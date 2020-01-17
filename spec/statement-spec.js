describe('Statement', function(){

  it('prints a header', function(){
    var statement = new Statement();
    expect(statement.printHeader()).toEqual("date || credit || debit || balance\n");
  });
});
