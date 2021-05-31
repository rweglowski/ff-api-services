import { Captions } from '@flowfact/types';

export interface NeededPlaceholder {
    type: 'USER_INPUT' | 'ENTITY_PICK';
    alias: string;
    schemaName?: string;
    captions: Captions;
}

export enum BaseTemplateType {
    WORD = 'WORD',
    HTML = 'HTML',
    SLACK = 'SLACK',
    TEAMS = 'TEAMS'
}

// Expected types with a fallback to safe data, even if type is unknown
export type TemplateType = BaseTemplateType | string;

export interface BaseTemplate {
    name: string;
    categoryName?: string;
    captions: Captions;
    fileType: string;
    neededPlaceholders: NeededPlaceholder[];
    templateType?: TemplateType;
}

export interface ReadTemplate extends BaseTemplate {
    id: string;
    url: string;
    custom: boolean;
}

export interface BaseCategory {
    parentName: string | null;
    name: string;
    captions: Captions;
    templateType?: TemplateType;
}

export interface ReadCategory extends BaseCategory {
    custom: boolean;
}

export interface JSONPatch {
    op: 'replace' | 'add' | 'remove';
    path: string;
    value?: any;
}

export interface WriteTemplate extends BaseTemplate {}
export interface WriteCategory extends BaseCategory {}
