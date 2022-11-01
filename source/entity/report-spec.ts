import { Budget } from "../bin/template/budget.js";
import { Inspection } from "./inspection.js";

export interface ReportSpec {
    budget: Budget;
    inspections: Inspection[];
}