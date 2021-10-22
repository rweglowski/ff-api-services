import { APIClient, APIMapping } from '../../http';

export class FieldCalculationController extends APIClient {
    constructor() {
        super(APIMapping.fieldCalculationService);
    }

    /**
     * Field recalculation of an entity
     * @param entityId
     * @param updateReferencingEntityRelations
     * @param alsoRecalculateDependingEntities
     */
    async recalculate(entityId: string, updateReferencingEntityRelations?: boolean, alsoRecalculateDependingEntities?: boolean) {
        return await this.invokeApiWithErrorHandling(`/entity-calculations/entities/${entityId}?updateReferencingEntityRelations=${updateReferencingEntityRelations}&alsoRecalculateDependingEntities={alsoRecalculateDependingEntities}`, 'POST');
    }
}
