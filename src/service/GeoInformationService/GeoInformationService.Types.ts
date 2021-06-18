import { Captions } from '@flowfact/types';

export namespace GeoInformationsServiceTypes {
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

    export type Point = [number, number];

    export interface GeoInformationValueGeometry {
        type: 'Polygon' | 'MultiPolygon';
        coordinates: Point[][];
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
}
