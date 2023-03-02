import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (money: number): void => {
    this.deposit(money)
    console.log(`Voce pegou um empréstimo de R$ ${money} Reais `)
  }
}
