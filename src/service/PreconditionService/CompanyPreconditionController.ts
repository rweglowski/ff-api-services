import { APIClient, APIMapping } from '../../http';
import { PreconditionServiceTypes } from './PreconditionsService.Types';

export class CompanyPreconditionController extends APIClient {
    constructor() {
        super(APIMapping.companyService);
    }

    async checkPreconditions() {
        return await this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse<PreconditionServiceTypes.Company.DetailedResult>>(
            '/preconditions/userHasSetupOnboardingFeatures',
            'GET'
        );
    }
}
