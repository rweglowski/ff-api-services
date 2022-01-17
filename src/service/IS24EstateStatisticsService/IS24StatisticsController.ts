import {APIClient, APIMapping} from '../../http';
import {StatisticsType} from "../ViewDefinitionService";

export default class IS24StatisticsController extends APIClient {
    constructor() {
        super(APIMapping.is24EstateStatisticsLambdaService);
    }

    /**
     * Fetches IS24 statistics value for given estate
     * @param is24EstateId
     * @param portalId
     * @param type
     */
    async fetchStatistics(is24EstateId: string, portalId: string, type: StatisticsType) {
        switch (type) {
            case StatisticsType.EXPOSE_VIEWS:
                return await this.invokeApiWithErrorHandling<number>('/exposeviews', 'GET', {}, {
                    queryParams: {
                        portalId,
                        scoutId: is24EstateId
                    }
                });
            case StatisticsType.CONTACT_REQUESTS:
                //TODO waiting for the backend to be complete
                return 123;
            default:
                throw new TypeError(`Unhandled statistics type: ${type}`);
        }

    }

}
