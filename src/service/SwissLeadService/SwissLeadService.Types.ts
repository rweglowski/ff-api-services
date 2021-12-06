export namespace SwissLeadServiceTypes {
    export interface SwissLeadsList {
        leads: LeadResource;
    }

    export interface Settings {
        responsibleUserId?: string;
        credentials: Credentials;
    }

    export interface Credentials {
        email: string;
        password: string;
    }

    export interface LeadResource {
        leadId: string;
        contactFirstName: string;
        contactLastName: string;
        contactEMail: string;
        contactPhoneNumber: string;
        reasonForValuation: string;
        objectType: string;
        objectAddress: string;
        objectMinValue: number;
        objectMaxValue: number;
        leadCreationDate: string;
        flatType?: string;
        houseType?: string;
        residenceType?: string;
        constructionYear: number;
        conditionRating: string;
        standardRating: string;
        area?: number;
        buildingVolume?: number;
        numberOfRooms?: number;
        usableArea?: number;
    }
}
