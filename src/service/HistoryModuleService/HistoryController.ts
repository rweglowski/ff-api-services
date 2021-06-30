import { HistoryFilter } from '@flowfact/types';
import { APIClient, APIMapping } from '../../http';
import { HistoryServiceTypes } from './HistoryServiceTypes';
import HistoryResponse = HistoryServiceTypes.HistoryResponse;
import RequestBody = HistoryServiceTypes.RequestBody;

export class HistoryController extends APIClient {
    constructor() {
        super(APIMapping.historyModuleService);
    }

    /**
     * Fetches a history of an entity
     * @param schemaId
     * @param entityId
     * @param size
     * @param offset
     * @param filter
     */
    async fetchHistory(schemaId: string, entityId: string, size: number = 20, offset: number = 0, filter?: HistoryFilter) {
        const body: RequestBody = {
            schemaId,
            entityId,
            size,
            offset,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApiWithErrorHandling<HistoryResponse>('/history', 'POST', [body]);
    }
}
