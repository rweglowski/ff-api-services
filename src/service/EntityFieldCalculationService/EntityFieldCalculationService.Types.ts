export namespace EntityFieldCalculationServiceTypes {
    export type FormulaVerificationRequest = {
        formula: string;
        schema: string;
    };
    export type FormulaVerificationResponse = {
        verificationDetails: string;
        formulaVerificationRequest: FormulaVerificationRequest;
    };
}
