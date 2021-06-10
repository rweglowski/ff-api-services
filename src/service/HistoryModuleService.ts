import { HistoryFilter } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient, APIMapping } from '../http';

export type SourceType = 'ALL' | 'CREATE' | 'UPDATE' | 'DELETE';

export class HistoryModuleService extends APIClient {
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
    async fetchHistory(schemaId: string, entityId: string, size: number = 20, offset: number = 0, filter?: HistoryFilter): Promise<AxiosResponse> {
        let body: any = {
            schemaId: schemaId,
            entityId: entityId,
            size: size,
            offset: offset,
        };

        if (filter) {
            body.filter = filter;
        }

        return await this.invokeApi('/history', 'POST', [body]);
    }

    /**
     * Fetches the history activity of the given users
     * @param size
     * @param offset
     * @param sourceTypes
     * @param userIds
     * @param filter
     */
    async fetchUserHistoryActivity(size: number = 100, offset: number = 0, sourceTypes: SourceType[] = ['ALL'], userIds: string[], filter?: HistoryFilter): Promise<AxiosResponse> {
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

        return await this.invokeApi('/user/history/activtiy', 'POST', [body]);
    }

    /**
     * Fetches the history data changes of the given users
     * @param size
     * @param offset
     * @param sourceTypes
     * @param userIds
     * @param filter
     */
    async fetchUserHistoryDataChanges(size: number = 100, offset: number = 0, sourceTypes: SourceType[] = ['ALL'], userIds: string[], filter?: HistoryFilter): Promise<AxiosResponse> {
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

        return await this.invokeApi('/user/history/data-changes', 'POST', [body]);
    }
}

export default new HistoryModuleService();
