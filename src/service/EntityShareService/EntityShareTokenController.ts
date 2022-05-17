import { APIClient, APIMapping } from '../../http';
import { EntityShareServiceTypes } from './EntityShareService.Types';

type ShareEntityTokenData = EntityShareServiceTypes.ShareEntityTokenData;

export class EntityShareTokenController extends APIClient {
    constructor() {
        super(APIMapping.entityShareService);
    }

    /**
     * Fetches the share token of the entity
     * @param entityId
     * @param schemaName
     */
    async fetchToken(entityId: string, schemaName: string) {
        return this.invokeApiWithErrorHandling<ShareEntityTokenData>(`/shared/${entityId}/${schemaName}`, 'GET');
    }

    /**
     * Generates and returns the share token for given entity and schema
     * @param entityId
     * @param schemaName
     */
    async generateToken(entityId: string, schemaName: string) {
        return this.invokeApiWithErrorHandling<ShareEntityTokenData>('/shared', 'POST', { entityId, schemaName });
    }

    /**
     * Removes share token of the entity
     * @param token
     */
    async deleteToken(token: string) {
        return this.invokeApiWithErrorHandling<ShareEntityTokenData>(`/shared/${token}`, 'DELETE');
    }
}
