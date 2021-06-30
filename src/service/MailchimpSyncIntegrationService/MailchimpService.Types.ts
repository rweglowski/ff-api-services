export namespace MailchimpServiceTypes {
    export interface Credentials {
        token: string;
    }

    export interface MailchimpList {
        id: string;
        name: string;
    }

    export interface Settings {
        syncDirection: SyncDirection;
        listIds: string[]
    }

    export enum SyncDirection {
        MAILCHIMP = 'MAILCHIMP',
        FLOWFACT = 'FLOWFACT',
        BOTH = 'BOTH'
    }
}
