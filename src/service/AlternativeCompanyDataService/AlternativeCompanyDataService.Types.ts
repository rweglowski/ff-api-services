export namespace AlternativeCompanyDataServiceTypes {
    export type AlternativeCompanyDataResponse = {
        alternativeCompanyConfiguration: string[];
    };
    export type AlternativeCompanyDataSaveRequest = {
        configurationId: string;
        entityId: string;
    };
    export type AlternativeCompanyDataSaveResponse = {
        id: string;
        name: string;
    };
    export type AlternativeCompanyDataSavedResponse = {
        id: string;
        name: string;
    };
}
