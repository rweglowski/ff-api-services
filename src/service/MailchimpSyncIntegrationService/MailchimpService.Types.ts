export namespace MailchimpServiceTypes {
    export interface Credentials {
        token: string;
    }

    export interface MailchimpListItem {
        id: string;
        name: string;
    }

    export interface Settings {
        syncDirection: SyncDirection;
        listIds: string[];
    }

    export interface SyncStatus {
        companyId: string;
        syncDirection: SyncDirection;
        finished: boolean;
    }

    export enum SyncDirection {
        MAILCHIMP = 'MAILCHIMP',
        FLOWFACT = 'FLOWFACT',
        BOTH = 'BOTH',
    }
}
