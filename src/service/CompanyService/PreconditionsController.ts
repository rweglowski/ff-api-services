import { APIClient, APIMapping } from '../../http';
import { PreconditionResponse } from '../../util/InternalTypes';

export class PreconditionsController extends APIClient {
    constructor() {
        super(APIMapping.companyService);
    }

    async checkPreconditions() {
        return await this.invokeApiWithErrorHandling<
            PreconditionResponse<{
                companyLegalRequirements: boolean;
                companyLegalTextRequirements: boolean;
                companyProfileRequirements: boolean;
            }>
        >('/preconditions/userHasSetupOnboardingFeatures', 'GET');
    }
}
