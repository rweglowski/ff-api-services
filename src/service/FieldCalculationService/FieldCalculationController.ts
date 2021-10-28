import { APIClient, APIMapping } from '../../http';

export class FieldCalculationController extends APIClient {
    constructor() {
        super(APIMapping.fieldCalculationService);
    }

    /**
     * Field recalculation of an entity
     * @param entityId
     * @param alsoRecalculateReferencedEntities
     * @param alsoRecalculateReferencingEntities
     * @param updateReferencingEntityRelations
     */
    async recalculate(entityId: string, alsoRecalculateReferencedEntities?: boolean, alsoRecalculateReferencingEntities?: boolean, updateReferencingEntityRelations?: boolean) {
        return await this.invokeApiWithErrorHandling(`/entity-calculations/entities/${entityId}?alsoRecalculateReferencedEntities=${alsoRecalculateReferencedEntities}&alsoRecalculateReferencingEntities=${alsoRecalculateReferencingEntities}&updateReferencingEntityRelations=${updateReferencingEntityRelations}`, 'POST');    }
}
