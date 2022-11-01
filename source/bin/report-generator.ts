import { Inspection } from "../entity/inspection";
import { Report } from "../entity/report";
import { Transaction } from "../entity/transaction";
import { Budget } from "./template/budget";

export class ReportGenerator {
 
    generate(budget: Budget, transactions: Transaction[], inspections: Inspection[]): Report {
        let report = new Report({ budget, inspections });
     
        for (let transaction of transactions) {
            report.inspectTransaction(transaction);
        }
     
        return report;

    }

    private runReport(budget: Budget, transaction: Transaction): string {
        let out = "";

        return out;
    }
}