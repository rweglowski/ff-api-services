import { APIClient, APIMapping } from '../../http';

export class FieldCalculationController extends APIClient {
    constructor() {
        super(APIMapping.fieldCalculationService);
    }

    /**
     * Field recalculation of an entity
     * @param entityId
     */
    async recalculate(entityId: string) {
        return await this.invokeApiWithErrorHandling(`/entity-calculations/entities/${entityId}`, 'POST');
    }
}
