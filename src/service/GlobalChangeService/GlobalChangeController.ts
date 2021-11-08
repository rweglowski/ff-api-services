import { APIClient, APIMapping } from '../../http';
import { CreateGlobalChangeRequestBody, CreateGlobalChangeResponse } from './GlobalChange.Types';

export class GlobalChangeController extends APIClient {
    constructor() {
        super(APIMapping.globalChangeService);
    }

    createGlobalChange = async (globalChangeEntity: CreateGlobalChangeRequestBody) => {
        return await this.invokeApiWithErrorHandling<CreateGlobalChangeResponse>('/createGlobalChange', 'POST', globalChangeEntity);
    };

    cancelGlobalChange = async (globalChangeId: string) => {
        return await this.invokeApiWithErrorHandling<CreateGlobalChangeResponse>('/cancelGlobalChange', 'POST', { globalChangeId });
    };
}
