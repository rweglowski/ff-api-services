import { Captions } from '@flowfact/types';

export namespace GeoInformationsServiceTypes {
    export interface GeoInformationValue {
        captions: {
            en?: string;
            de?: string;
        };
        companyId: string;
        createdTimestamp: number;
        geometry: Geometry;
        id: string;
        isGlobal: boolean;
        metadata: object;
        name: string;
        parent: string;
    }

    export type Latitude = number;

    export type Longitude = number;

    export type GeoPoint = [Longitude, Latitude];

    // https://en.wikipedia.org/wiki/GeoJSON
    export interface PolygonGeometry {
        type: 'Polygon';
        coordinates: GeoPoint[][];
    }
    export interface MultiPolygonGeometry {
        type: 'MultiPolygon';
        coordinates: GeoPoint[][][];
    }
    export type Geometry = PolygonGeometry | MultiPolygonGeometry;

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

    export interface CreateGeoInformationRequest {
        captions: {
            en?: string;
            de?: string;
        };
        name: string;

        parent?: string;
        geometry?: Geometry;
        metadata?: object;
    }

}
