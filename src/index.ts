import { v4 as uuidv4 } from 'uuid';
import { createBankAccount } from './models/bankAccount';
import { createUser } from './models/user';

function createUser(user: { name: string; age: number }): any {
  const newUser = {
    id: uuidv4(),
    name: user.name,
    age: user.age,
  };

    return newUser;
}


function createBankAccount(user: any, basicInfo: { agency: string; number: string }): void {
  const bankAccount = {
    id: uuidv4(),
    agency: basicInfo.agency,
    number: basicInfo.number,
    balance: 0,
    user,
  };

  console.log(bankAccount);
}

const user = createUser({ name: 'John Doe', age: 21 });

// TODO - pegar usuário criado e passar como parâmetro para a função createBankAccount
const bankAcc = createBankAccount(user, { agency: '0001', number: '123456' });

// TODO - pegar conta criada, realizar um depósito e um saque
function deposit(bankAccount: any, value: number): number {
  bankAccount.balance += value;

  return bankAccount.balance;
}


function withdraw(bankAccount: BankAccount, value: number): number {
    if (value > bankAccount.balance) {
      throw new Error('Insufficient funds');
    }
  
    bankAccount.balance -= value;
  
    return bankAccount.balance;
  }