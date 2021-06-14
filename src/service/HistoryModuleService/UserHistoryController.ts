import { HistoryFilter } from '@flowfact/types';
import { APIClient, APIMapping } from '../../http';
import { HistoryServiceTypes } from './HistoryServiceTypes';
import HistoryResponse = HistoryServiceTypes.HistoryResponse;
import SourceType = HistoryServiceTypes.SourceType;
import RequestBody = HistoryServiceTypes.RequestBody;

export class UserHistoryController extends APIClient {
    constructor() {
        super(APIMapping.historyModuleService);
    }

    /**
     * Fetches the history activity of the given users
     * @param size
     * @param offset
     * @param sourceTypes
     * @param userIds
     * @param filter
     */
    async fetchUserHistoryActivity(size: number = 100, offset: number = 0, sourceTypes: SourceType[] = ['ALL'], userIds: string[], filter?: HistoryFilter) {
        let body: RequestBody = {
            size,
            offset,
            sourceTypes,
            userIds,
            filter,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApiWithErrorHandling<HistoryResponse>('/user/history/activity', 'POST', [body]);
    }

    /**
     * Fetches the history data changes of the given users
     * @param size
     * @param offset
     * @param sourceTypes
     * @param userIds
     * @param filter
     */
    async fetchUserHistoryDataChanges(size: number = 100, offset: number = 0, sourceTypes: SourceType[] = ['ALL'], userIds: string[], filter?: HistoryFilter) {
        let body: RequestBody = {
            size,
            offset,
            sourceTypes,
            userIds,
            filter,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApiWithErrorHandling<HistoryResponse>('/user/history/data-changes', 'POST', [body]);
    }
}
