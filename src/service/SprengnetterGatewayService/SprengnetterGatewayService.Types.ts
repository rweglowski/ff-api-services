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
}
