import { APIClient, APIMapping } from '../../http';
import { PagedResponse } from '@flowfact/types';
import { MatchmakingTypes } from './Matchmaking.Types';
import { Flowdsl } from '@flowfact/node-flowdsl';

export default class SearchController extends APIClient {
    constructor() {
        super(APIMapping.matchmakingService);
    }

    async fetchEntries(query: Flowdsl, index: string, offset: number = 0, size: number = 20, withCount: boolean = true) {
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.Match>>(`/search/schemas/${index}`, 'POST', query, {
            queryParams: {
                offset: offset,
                size: size,
                withCount: withCount,
            },
        });
    }
}
