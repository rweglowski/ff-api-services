import { APIClient, APIMapping } from '../../http';

export class FeatureToggleController extends APIClient {
    constructor() {
        super(APIMapping.featureToggleService);
    }

    async feature(featureName: string) {
        return await this.invokeApiWithErrorHandling<boolean>(`/features/${featureName}`, 'GET');
    }
}
