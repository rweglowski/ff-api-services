import { HistoryFilter } from '@flowfact/types';
import { APIClient, APIMapping, ApiResponse } from '../../http';
import { UserHistoryTypes } from './UserHistoryTypes';
import UserHistory = UserHistoryTypes.UserHistory;
import SourceType = UserHistoryTypes.SourceType;

export default class UserHistoryController extends APIClient {
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
    async fetchUserHistoryActivity(size: number = 100, offset: number = 0, sourceTypes: SourceType[] = ['ALL'], userIds: string[], filter?: HistoryFilter): Promise<ApiResponse<UserHistory>> {
        let body: any = {
            size,
            offset,
            sourceTypes,
            userIds,
            filter,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApiWithErrorHandling<UserHistory>('/user/history/activtiy', 'POST', [body]);
    }

    /**
     * Fetches the history data changes of the given users
     * @param size
     * @param offset
     * @param sourceTypes
     * @param userIds
     * @param filter
     */
    async fetchUserHistoryDataChanges(size: number = 100, offset: number = 0, sourceTypes: SourceType[] = ['ALL'], userIds: string[], filter?: HistoryFilter): Promise<ApiResponse<UserHistory>> {
        let body: any = {
            size,
            offset,
            sourceTypes,
            userIds,
            filter,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApiWithErrorHandling<UserHistory>('/user/history/data-changes', 'POST', [body]);
    }
}
