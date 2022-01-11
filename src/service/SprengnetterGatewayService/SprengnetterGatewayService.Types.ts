export namespace SprengnetterGatewayServiceTypes {
    export interface BillingAddress {
        zipcode: string;
        city: string;
        street: string;
    }

    export interface Account {
        salutation: string;
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
        billingAddress: BillingAddress;
    }

    export interface CustomerAccount {
        companyId: string;
        email: string;
        id: string;
    }

    export interface ConsentTranslation {
        language: string;
        text: string;
    }

    export interface Consent {
        id: string;
        revision: number;
        code: string;
        required: boolean;
        translations: ConsentTranslation[];
    }
}
