export class Budget { 

    Assets = {
        weekly_ei:                     628
    };

    Liabilities = {
        Expenses__Recurring: {
            Rent:                     1200,    
            Food:                      450,    
            Phone_and_Modem:            55,    
        }
    }

    closingBalance(assets: Record<string, any>, liabilities: Record<string, Record<string, any>>) {
        return Object.values(assets)
                     .reduce((a: number, b: number) => a + b) 
             - (Object.values(this.flattenAccountHierarchy(liabilities))
                     .reduce((a: number, b: number) => a + b) as number);
    }

    flattenAccountHierarchy(group: Record<string, any>): Record<string, any> {
        return Object.values(group)
                     .reduce((p, c) => { p.push(...Object.values(c)); }, []);
    }
    
    June() { 
        
        let Assets = { 
            initial_ei_payment:       7293,
            monthly_ei: this.Assets
                            .weekly_ei * 4
        };
        
        let Liabilities = {
            Expenses: {
                ...this.Liabilities
                       .Expenses__Recurring,
                Supplements:           222.92, // #[[8 months]] 
                Equipment:            1300,    // #[ Replacement Monitor             ]
                Vape:                  146.89, // #[ ]
            },
            Debts:    { 
                VISA__ActualPayment:  2048, 
            },
        };
        
        return this.closingBalance(Assets, Liabilities);
    }

    July() {
        let Assets = {
            opening_balance:    this.June(),
            monthly_ei:         this.Assets
                                    .weekly_ei * 4
        }

        let Liabilities = {
            Expenses: {
                ...this.Liabilities
                       .Expenses__Recurring
            },
            Debts: {
                VISA__ActualPayment:          2048
            }
        }

        return this.closingBalance(Assets, Liabilities);
    }
}    


// console.log( new Budget().July() );
