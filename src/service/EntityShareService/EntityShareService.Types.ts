export namespace EntityShareServiceTypes {
    export interface ShareEntityTokenData {
        token: string;
        entityId: string;
        companyId: string;
        schemaName: string;
        creationDate: string;
        creatorId: string;
    }

    export interface SharedEntityCompanyWithAccess {
        companyId: string;
        companyName: string;
        active: boolean;
    }

    export interface SharedEntityCompanyWithAccessList {
        accesses: SharedEntityCompanyWithAccess[];
    }

    export interface ImportedEntity {
        entityId: string;
        schemaName: string;
        companyId: string;
    }
}
