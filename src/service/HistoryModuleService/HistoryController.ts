import { HistoryFilter } from '@flowfact/types';
import { APIClient, APIMapping } from '../../http';
import { HistoryServiceTypes } from './HistoryServiceTypes';
type HistoryResponse = HistoryServiceTypes.HistoryResponse;
type RequestBody = HistoryServiceTypes.RequestBody;

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
    async fetchHistory(schemaId: string, entityId: string, size = 20, offset = 0, filter?: HistoryFilter) {
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
