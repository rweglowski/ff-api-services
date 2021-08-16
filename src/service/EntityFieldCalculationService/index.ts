import { EntityFieldCalculationController } from './EntityFieldCalculationController';

export * from './EntityFieldCalculationService.Types';

export class EntityFieldCalculationService {
    public readonly entityFieldCalculation: EntityFieldCalculationController;

    constructor() {
        this.entityFieldCalculation = new EntityFieldCalculationController();
    }
}

export const EntityFieldCalculationServiceInstance = new EntityFieldCalculationService();
