import { Captions } from '@flowfact/types';

export namespace GeoInformationsServiceTypes {
    export interface LocationPlace {
        id: string;
        description: string;
        importance: number;
        title: string;
    }

    export interface AutocompleteResults {
        places: LocationPlace[];
    }

    export interface BestMatchResult extends LocationPlace, Coordinates {
        address: LocationAddress;
    }

    export interface GeoInformationValue {
        captions: {
            additionalProp1: string;
            additionalProp2: string;
            additionalProp3: string;
        };
        companyId: string;
        createdTimestamp: number;
        geometry?: GeoInformationValueGeometry;
        id: string;
        isGlobal: boolean;
        metadata: object;
        name: string;
        parent: string;
    }

    export type Latitude = number;

    export type Longitude = number;

    export type GeoPoint = [Longitude, Latitude];

    export interface GeoInformationValueGeometry {
        type: 'Polygon' | 'MultiPolygon';
        coordinates: GeoPoint[][];
    }

    export interface ListOfPolygons {
        size: number;
        values: GeoInformationValue[];
    }

    export interface LinkedPolygon {
        polygonName: string;
        entityId: string;
    }

    export interface FindPolygonResponse {
        size: number;
        values: GeoInformation[];
    }

    export interface GeoInformation {
        global: boolean;
        labels: Captions;
        name: string;
        parent: string;
    }

    export interface LocationAddress {
        city: string;
        street: string;
        zipcode: string;
        country: string;
        [key: string]: string;
    }

    export interface Coordinates {
        lat: number;
        lon: number;
    }
}
