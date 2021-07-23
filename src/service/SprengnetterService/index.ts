import { SprengnetterController } from './SprengnetterController';

export interface HTMLError {
    errorCode: string;
    message?: string;
}

export interface PriceComparison {
    category: string;
    construction: string;
    date: string;
    distance: number;
    equipment: string;
    kgs2: string;
    kgs3: string;
    kgs5: string;
    kgs8: string;
    lat: number;
    living_area: number;
    lng: number;
    model_type: string;
    rooms: number;
    similarity: number;
    value: number;
    x: number;
    y: number;
}

export interface GenericFetchValuationResponse {
    calc?: {
        address: { house_number: string; nation: string; street: string; town: string; zip: string };
        coordinates: { lat: number; lng: number };
        equipment: string;
    };
    compare_prices?: PriceComparison[];
    date?: string;
    meta?: { model: string; range: { min: number; max: number }; score: number; standarderror: number };
    value?: number;
}

export class SprengnetterService {
    public readonly sprengnetter: SprengnetterController;

    constructor() {
        this.sprengnetter = new SprengnetterController();
    }
}

export const SprengnetterServiceInstance = new SprengnetterService();
