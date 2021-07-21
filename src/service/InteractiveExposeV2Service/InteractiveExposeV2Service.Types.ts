export declare namespace InteractiveExposeV2ServiceTypes {
    export enum IEXModeType {
        V1_V2 = 'V1_V2',
        V1 = 'V1',
        V2 = 'V2',
        V2_V1 = 'V2_V1',
    }
    export interface IEXExtendedSettings {
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
