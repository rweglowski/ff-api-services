import { AddressType } from '@flowfact/types';

export namespace PoiServiceTypes {

    export interface PoiRequest {
        latitude: number;
        longitude: number;
        radius: number;
        categories: PoiCategory[];
    }

    export interface Poi {
        id: string;
        name: string;
        latitude: number;
        longitude: number;
        category: string;
        group: string;
        lastUpdated: string;
        url: string;
        distance: number;
    }

    export interface PoiList {
        entries: Poi[];
    }

    export interface PoiCategory {
        key: string;
        value: string;
        group: string;
        basic: boolean;
        default: boolean;
    }

    export interface PoiData {
        address: AddressType;
        categories: PoiCategory[];
        radius: number;
        limit: number;
        points: Poi[];
    }
}
