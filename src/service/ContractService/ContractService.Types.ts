export namespace ContractServiceTypes {
    export type TemplateType = 'PURCHASE' | 'RENT';
    export type TemplateOrigin = 'BOORBERG';

    export interface Template {
        id: string;
        subject: string;
        fileName: string;
        url: string;
        type?: TemplateType;
        origin?: TemplateOrigin;
        version?: string;
    }
}
