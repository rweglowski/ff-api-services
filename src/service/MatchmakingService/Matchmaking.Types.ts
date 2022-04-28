import { Entity } from '@flowfact/types';

export namespace MatchmakingTypes {
    export interface UpdatedField {
        name: string;
        previousValue: string | number | object | null;
        currentValue: string | number | object | null;
    }

    export interface OfferedStatus {
        alreadyOffered: boolean;
        offeredAt: number;
    }

    /**
     * @typedef Match A result entry in a matchmaking search
     * @prop {number} accuracy The accuracy of the match related to the optional criteria (0-100)
     * @prop {OfferedStatus} offeredStatus Whether the estate was already offered to the customer or not and when
     * @prop {UpdatedField[]} updatedFields Updated fields of the entity with respect to the latest offer
     * @prop {Entity} entity The entity that matched the search (Estate or SearchProfile)
     */
    export interface Match {
        accuracy: number;
        offeredStatus: OfferedStatus;
        updatedFields: UpdatedField[];
        entity: Entity;
    }

    export interface FilterQuery {
        ignored?: boolean;
        offered?: boolean;
    }

    export interface MapMatchGeoLocation {
        latitude: number;
        longitude: number;
    }

    export interface MapMatchAddress {
        street: string;
        zipcode: string;
        city: string;
        geolocation?: MapMatchGeoLocation;
    }

    export interface MapMatch {
        id: string;
        addresses: {
            values: MapMatchAddress[];
        };
    }
}
