import { Captions } from '@flowfact/types';

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

    export enum Code {
        PRIVACY_POLICY = 'privacy_policy',
        RESPONSIBILITY = 'responsibility',
    }

    // General consent object
    export interface Consent {
        id: string;
        revision: number;
        code: Code;
        required: boolean;
        translations: Captions;
        // urls that are used inside the translations
        urls: string[];
    }

    export interface UserConsent {
        userId: string;
        companyId: string;
        acceptedAt?: Date;
        withdrawnAt?: Date;
        required: boolean;
        code: Code;
        // id of a general consent
        consentId: string;
        revision: number;
    }

    export enum ConsentStatus {
        ACCEPTED,
        REJECTED,
    }
}
