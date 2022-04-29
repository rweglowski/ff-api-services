import { APIClient, APIMapping } from '../../http';
import { PreconditionServiceTypes } from './PreconditionsService.Types';

export class InquiryPreconditionsController extends APIClient {
    constructor() {
        super(APIMapping.inquiryService);
    }

    async fetchPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/inquiriesSetup', 'GET');
    }

    /**
     * Checks if the Contact API is available for that customer
     */
    async checkContactAPIAvailability() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/authenticatedIs24Portal', 'GET');
    }
}
