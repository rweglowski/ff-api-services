import {APIClient, APIMapping} from '../../http';
import ArrayValidator from '../common/validators/ArrayValidator';
import {ContactRequestResponse, ExposeViewsResponse} from './IS24StatisticsService.Types';


export default class IS24StatisticsController extends APIClient {
    private readonly MIN_ESTATE_IDS = 1;
    private readonly MAX_ESTATE_IDS = 10;

    private readonly arrayValidator = new ArrayValidator(this.MIN_ESTATE_IDS, this.MAX_ESTATE_IDS);

    constructor() {
        super(APIMapping.is24EstateStatisticsLambdaService);
    }

    /**
     * Fetches IS24 expose views value for given estate
     * @param is24EstateId
     * @param portalId
     */
    async fetchExposeViews(is24EstateId: string, portalId: string) {
        return await this.invokeApiWithErrorHandling<ExposeViewsResponse>('/exposeviews', 'GET', {}, {
            queryParams: {
                portalId,
                scoutId: is24EstateId
            }
        });
    }

    /**
     * Fetches IS24 contact request amount value for given estate
     * @param is24EstateIds
     */
    async fetchContactRequestsAmount(is24EstateIds: string[]) {
        return this.arrayValidator.validateArray(is24EstateIds)
            || await this.invokeApiWithErrorHandling<ContactRequestResponse>('/contactRequestsAmount', 'GET', {}, {
                queryParams: {
                    scoutIds: is24EstateIds.join(',')
                }
            });
    }

}
