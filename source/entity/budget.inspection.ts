import { Inspection } from "./inspection.js";
import { Transaction } from "./transaction.js";

export class BudgetInspection implements Inspection {
    
    state: Record<string, any> = {};
    output: string = "";

    inspect(transaction: Transaction): void {
        

    }

}