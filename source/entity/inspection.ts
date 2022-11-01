import { Transaction } from "./transaction";

export interface Inspection {

    state: Record<string, any>;
    output: string;
    inspect(transaction: Transaction): void;

}