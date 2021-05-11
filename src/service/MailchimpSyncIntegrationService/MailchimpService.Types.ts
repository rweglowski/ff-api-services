export namespace MailchimpServiceTypes {
    export interface Credentials {
        token: string;
    }

    export interface MailchimpLists {
        lists: MailchimpList[];
    }

    export interface MailchimpList {
        id: string;
        name: string;
    }

    export interface Settings {
        syncDirection: SyncDirection;
        listIds: Set<string>
    }

    export enum SyncDirection {
        MAILCHIMP = 'MAILCHIMP',
        FLOWFACT = 'FLOWFACT',
        BOTH = 'BOTH'
    }
}
