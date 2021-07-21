export enum IEXModeType {
    V1_V2 = 'V1_V2',
    V1 = 'V1',
    V2 = 'V2',
    V2_V1 = 'V2_V1',
}
export declare namespace InteractiveExposeV2ServiceTypes {
    interface EmailData {
        subject: string;
        body: string;
    }
    interface IEXBlastItem {
        contactId: string,
        estateId: string,
    }
    interface BlastRequest {
        prospectEmailTemplateId?: string;
        afterAgreementEmailTemplateId?: string;
        prospectEmailData?: EmailData,
        afterAgreementEmailData?: EmailData,
        items: IEXBlastItem[],
        mergeContext?: { [key: string]: any},
    }
    interface BlastResponse {
        MessageId: string;
    }
   interface IEXExtendedSettings {
        iexMode: IEXModeType;
        iexMultilanguage: boolean;
        iexDefaultTemplate?: string;
        iexSupportedLanguages: { [key: string]: string };
        iexDefaultLanguage: string;
        iexAttachDocuments: boolean;
        iexAttachIEX: boolean;
        iexHideGlobalTemplates: boolean;
    }
}
