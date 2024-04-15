// bank app scripts
class BankAccount{

    //declare account number,accountowner name and balance
    constructor(accountNumber, accountOwnerName, balance){
        this.accountNumber = accountNumber;
        this.accountOwnerName = accountOwnerName;
        this.balance = balance;
    }

    //methods for deposit amount
    deposit(amount){
        this.balance += amount;
    }

    //methods for withdrawn amount
    withdrawn(amount){
        if(amount < this.balance){
            this.balance -= amount;
        }
        else {
            console.log(`Insufficient balance in this account ${this.accountNumber}`)
        }
    }
    
    //method for display account information
    displayAccountInfo(){
        console.log(`Account ${this.accountNumber} is the owner of ${this.accountOwnerName} and This account balance: ${this.balance}`)
    }
}
const account = new BankAccount('001', 'Jhon Doe', 2000);
account.deposit(500);
account.withdrawn(1000);
account.displayAccountInfo();