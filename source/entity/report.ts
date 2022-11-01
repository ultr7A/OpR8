import { Budget } from "../bin/template/budget.js";
import { Inspection } from "./inspection.js";
import { ReportSpec } from "./report-spec.js";
import { Transaction } from "./transaction.js";

export class Report {

    private state                   = {};
    private budget:    Budget;
    private spections: Inspection[] = [];
    constructor(spec: ReportSpec) {
        this.budget = spec.budget;
        this.spections = spec.inspections;
    }

    public inspectTransaction(transaction: Transaction): void {
        
    }

    public get(): Record<string, any> {
        return {};
    }

    public render(): string {
        let out = "";
        
        return out;
    }
}