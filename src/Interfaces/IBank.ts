interface BankAccount {
    id: string;
    agency: string;
    number: string;
    balance: number;
    user: {
      id: number;
      name: string;
      age: number;
      email: string;
    };
  }