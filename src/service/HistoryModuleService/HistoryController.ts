import { HistoryFilter } from '@flowfact/types';
import { APIClient, APIMapping, ApiResponse } from '../../http';
import { UserHistoryTypes } from './UserHistoryTypes';
import UserHistory = UserHistoryTypes.UserHistory;

export default class HistoryController extends APIClient {
    constructor() {
        super(APIMapping.historyModuleService);
    }

    /**
     * Fetches a history of an entity
     * @param schemaId
     * @param entityId˚
     * @param size
     * @param offset
     * @param filter
     */
    async fetchHistory(schemaId: string, entityId: string, size: number = 20, offset: number = 0, filter?: HistoryFilter): Promise<ApiResponse<UserHistory>> {
        let body: any = {
            schemaId: schemaId,
            entityId: entityId,
            size: size,
            offset: offset,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApiWithErrorHandling<UserHistory>('/history', 'POST', [body]);
    }
}
