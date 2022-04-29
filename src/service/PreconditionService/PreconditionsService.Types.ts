export namespace PreconditionServiceTypes {
    export namespace Company {
        export interface DetailedResult {
            companyLegalRequirements: boolean;
            companyLegalTextRequirements: boolean;
            companyProfileRequirements: boolean;
        }
    }

    export namespace InteractiveExpose {
        export interface DetailedResult {
            companyBaseData: boolean;
            companyLegalData: boolean;
            companyLegislationTexts: boolean;
            iexSettings: boolean;
            user: boolean;
        }
    }

    export interface PreconditionResponse<T = Record<string, boolean>> {
        id: string;
        satisfied: boolean;
        detailedResult: T;
    }
}
