// Let's build upon a previous account object exercise. A bank account is still defined by:
// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit(num){
    return this.balance += num;
  }
  describe(){
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}



function createAccounts(name1, name2, name3) {
  this.name1 = new Account(name1);
  this.name2 = new Account(name2);
  this.name3 = new Account(name3);

  let people = [this.name1, this.name2, this.name3];
  people.forEach(person => {
    person.credit(1000);
    console.log(person.describe());

  })
}
createAccounts('Sean','Brad','Georges');
