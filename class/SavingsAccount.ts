import { DioAccount } from "./DioAccount"

export class SavingsAccount extends DioAccount {

    premiumDeposit = (money: number): void => {
        this.deposit(money + 10)
        console.log(`Voce depositou R$ ${money} Reais e ganhou mais 10 reais`)
    }

}

