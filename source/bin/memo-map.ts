export class MemoMap {
  constructor() {}

    account(fromDescription1:string, and2: string): string {
        return this.toInternal
                   .filter( edge =>
                            edge[0].test(`${fromDescription1 + and2}`)
                    )
                   .map( edge => edge[1] )
                    [0];
    }

  toInternal: [RegExp, string][] = [
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
    [/^/, "Account"],
  ];
}
