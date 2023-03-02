export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  getStatus = (): void => {
    console.log(`Conta ativa: ${this.status}`)
  }

  setStatus = (touf: boolean): void => {
    if (touf === false) {
      if (this.balance > 0) {
        throw new Error('Saque o dinheiro da conta para pode desativa');
      }
    }
    this.status = touf
  }


  deposit = (money: number) => {
    if(this.validateStatus()){
      if (money < 0) {
        throw new Error('Erro pois não é possivel deposito negativos!')
      }
      this.balance += money
    }
  }

  withdraw = (money: number) => {
    if (this.validateStatus()) {
      if (money > this.balance || money < 0) {
        throw new Error('Não foi possivel efetua o saque')
      }
      this.balance -= money
    }
  }

  getBalance = (): void => {
    console.log(`Saldo: R$ ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta desativada')
  }
}
