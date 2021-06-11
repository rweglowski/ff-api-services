import { Captions, Contact } from '@flowfact/types';

export namespace HistoryServiceTypes {
    export interface Source {
        type:   'APPOINTMENT' |
                'AUTOMATION' |
                'CONTACT' |
                'DATA_CHANGE' |
                'DATA_CREATE' |
                'DOCUMENT' |
                'ESTATE_PUBLISHED' |
                'ESTATE_UNPUBLISHED' |
                'ESTATE' |
                'MAIL' |
                'NOTE' |
                'OFFER' |
                'TAG' |
                'USER' |
                'TASK'
    }

    export type SourceType = 'ALL' | 'CREATE' | 'UPDATE' | 'DELETE';

    export interface UserData {
        firstname: {
            type: 'TEXT',
            value: string
        },
        lastname: {
            type: 'TEXT',
            value: string,
        }
    }

    export interface User {
        entityId: string;
        data: UserData;
    }

    export interface Estate {
        // TODO: create Estate Type
    }

    export interface HistoryEntry {
        id: string;
        type: Source;
        created: number;
        text: string;
        users: User[];
        contacts: Contact[];
        estates: Estate[];
    }

    export interface History {
        group: {
            key: string;
            captions: Captions;
        }
        entries: HistoryEntry[];
    }

    export interface HistoryResponse {
        offset: number;
        size: number;
        totalCount: number;
        source: Source;
        history: History;
    }
}
