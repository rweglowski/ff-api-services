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
    }
}
