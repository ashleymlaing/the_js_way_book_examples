const account = {
  name: "Alex",
  balance: 0,

  credit() {
    return this.balance += 157;
  },

  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`
  }

};

console.log(account.describe());
account.credit();
console.log(account.describe());
