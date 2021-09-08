import {FieldCalculationController} from "./FieldCalculationController";

export class FieldsCalculationService {
    public readonly recalculation: FieldCalculationController;

    constructor() {
        this.recalculation = new FieldCalculationController();
    }
}

export const FieldCalculationServiceInstance = new FieldsCalculationService();

