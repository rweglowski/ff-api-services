export type ContractTemplateType = 'PURCHASE' | 'RENT';
export type ContractTemplateOrigin = 'BOORBERG';
export interface ContractTemplate {
    id: string;
    subject: string;
    fileName: string;
    url: string;
    type?: ContractTemplateType;
    origin?: ContractTemplateOrigin;
    version?: string;
}