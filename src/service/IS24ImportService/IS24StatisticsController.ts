import {APIClient, APIMapping} from '../../http';
import {StatisticsType} from "../ViewDefinitionService";

export default class IS24ImmoController extends APIClient {
    constructor() {
        super(APIMapping.is24ImportService);
    }

    /**
     * Fetches IS24 statistics value for given estate
     * @param entityId
     * @param returnUrl
     */
    async fetchStatistics(entityId: string, type: StatisticsType) {
        return await this.invokeApiWithErrorHandling<number>(`/estate/${entityId}/statistics/${type}`, 'GET');
    }

}
