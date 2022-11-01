import { FromAccount } from "./from-account";
import { ToAccount } from "./to-account";

export class Transaction {
    private static auto_increment_id: number = 0;
    private static currencyConversionRate = 1.25
    public id:    number;
    public value: number;

    constructor(
        public transactionDate: Date,
        public fromAccount: FromAccount,
        public toAccount:     ToAccount,
        
        public cad:   number,
        public usd:   number,
    ) { 
        this.id = this.id_(); 
        this.value = this.findValue(cad, usd);
    }

    private findValue(cad: number, usd: number): number {
        return cad || (usd * Transaction.currencyConversionRate);
    }

    private id_(): number {
        return (Transaction.auto_increment_id++);
    }
}
