export declare class ShebaService {
    banks: any;
    banksHash: any;
    banksOutput: any;
    pattern: RegExp;
    pattern_code: RegExp;
    constructor();
    iso7064Mod97_10(iban: any): number;
    isValid(str: string): boolean;
    recognize(str: string): false | {
        nickname: string;
        name: string;
        persianName: string;
        code: string;
        accountNumberAvailable: boolean;
        accountNumber?: any;
        formattedAccountNumber?: any;
    };
}
