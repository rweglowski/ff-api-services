import { APIClient, APIMapping } from '../../http';
import { CreateGlobalChangeRequestBody, GlobalChangeResponse } from './GlobalChange.Types';

export class GlobalChangeController extends APIClient {
    constructor() {
        super(APIMapping.globalChangeService);
    }

    createGlobalChange = async (globalChangeEntity: CreateGlobalChangeRequestBody) => {
        return await this.invokeApiWithErrorHandling<GlobalChangeResponse>('/createGlobalChange', 'POST', globalChangeEntity);
    };

    cancelGlobalChange = async (globalChangeId: string) => {
        return await this.invokeApiWithErrorHandling<GlobalChangeResponse>('/cancelGlobalChange', 'POST', { globalChangeId });
    };

    restoreGlobalChange = async (globalChangeId: string) => {
        return await this.invokeApiWithErrorHandling<GlobalChangeResponse>('/restoreGlobalChange', 'POST', { globalChangeId });
    };

    fetchAffectedEntity = async (entityId: string) => {
        return await this.invokeApiWithErrorHandling<GlobalChangeResponse>(`/queryAffectedEntities?entityId=${entityId}`, 'GET');
    };
}
