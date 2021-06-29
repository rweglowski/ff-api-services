export namespace MailchimpServiceTypes {
    export interface Credentials {
        token: string;
    }

    export interface MailchimpLists {
        entries: MailchimpList[];
        page: number;
        size: number;
        totalCount: number;
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
