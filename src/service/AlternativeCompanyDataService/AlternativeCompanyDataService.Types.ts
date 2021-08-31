export namespace AlternativeCompanyDataServiceTypes {
    export type AlternativeCompanyData = {
        id: string;
        name: string;
    };

    export type AlternativeCompanyDataResponse = {
        data: AlternativeCompanyData[];
    };
    export type AlternativeCompanyDataSaveRequest = {
        configurationId: string;
        entityId: string;
    };
    export type AlternativeCompanyDataSaveResponse = AlternativeCompanyData;
    export type AlternativeCompanyDataSavedResponse = AlternativeCompanyData;
}
