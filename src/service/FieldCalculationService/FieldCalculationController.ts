import { APIClient, APIMapping } from '../../http';

export class FieldCalculationController extends APIClient {
    constructor() {
        super(APIMapping.fieldCalculationService);
    }

    /**
     * Field recalculation of an entity
     * @param entityId
     * @param updateReferencingEntityRelations
     */
    async recalculate(entityId: string, updateReferencingEntityRelations: boolean) {
        return await this.invokeApiWithErrorHandling(`/entity-calculations/entities/${entityId}?updateReferencingEntityRelations=${updateReferencingEntityRelations}`, 'POST');
    }
}
