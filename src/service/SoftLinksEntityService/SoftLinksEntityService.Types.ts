export namespace SoftLinksEntityServiceTypes {
    export interface CreateSoftlinkRequest {
        source: string;
        sourceSchema: string;
        destination: string;
        destinationSchema: string;
        label: string;
    }
    export interface Softlink extends CreateSoftlinkRequest {
        id: string;
    }
    export interface NulleableSoftlinkSearch {
        id?: string;
        source?: string;
        sourceSchema?: string;
        destination?: string;
        destinationSchema?: string;
        label?: string;
    }
    export interface AllSoftlinksRequest {
        entityId: string;
        schema: string;
        label?: string;
    }
}
