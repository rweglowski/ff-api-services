import { Captions } from '@flowfact/types';

export namespace NavigationTypes {
    export interface ACP {
        id: string;
        grantType: 'template' | 'group';
    }

    export interface Access {
        // this will be handled by the backend. But you have to save it in frontend!
        acps?: ACP[];
        // Hide given item from navigation for a user with a given role
        // It has a precedence over the showForUserRoles property
        hideForUserRoles?: string[];
        showForUserRoles?: string[];
    }

    export interface BaseItem {
        name: string;
        access?: Access;
        captions: Captions;
        metadata?: {
            hideFromCrm?: boolean;
            hideForTrial?: boolean;
        };
    }

    export interface Item extends BaseItem {
        type: // This will embed the website into the software (iframe)
        | 'REDIRECT'
            // This will redirect with target="_blank"
            | 'EXTERNAL_REDIRECT'
            // This will redirect with target="_self"
            | 'EXTERNAL_SELF_REDIRECT';
        url: string;
    }

    export interface Section extends BaseItem {
        items: Item[];
    }

    export interface NavigationEntry extends BaseItem {
        icon: string;
        type: 'EXPANDABLE' | 'REDIRECT';
        url?: string;
        sections?: Section[];
    }

    export interface Navigation {
        entries: NavigationEntry[];
    }
}
