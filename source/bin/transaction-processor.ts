import { FromAccount } from "../entity/from-account.js";
import { ToAccount } from "../entity/to-account.js";
import { TransactionData } from "../entity/transaction-data.js";
import { Transaction } from "../entity/transaction.js"
import { MemoMap } from "./memo-map.js";


export class TransactionProcessor {
    private static memoMap = new MemoMap();

    public process(transactions: TransactionData[]): Transaction[] {
        return transactions.map(item => 
                 this      .processTransaction(item));
    }

    private processTransaction(transaction: TransactionData): Transaction {
        let date = new Date(transaction[2]), 
            cad     =       transaction[6],
            usd     =       transaction[7], 
            fromAccount =       new FromAccount(transaction[0], transaction[1], transaction[3]),
              toAccount = this.getRemoteAccount(transaction);

        return new Transaction(date, fromAccount, toAccount, cad, usd);
    }

    private getRemoteAccount(transaction: TransactionData): ToAccount {
        const desc1  = transaction[4],
              desc2  = transaction[5];
              
        const name   = TransactionProcessor.memoMap.account(desc1, desc2),  
              levels = this.getAccountLevels(name);
        

        return new ToAccount(name, levels, desc1, desc2);
    }
    
    private getAccountLevels(name: string): string[] {
        return name.split("/");
    }

}