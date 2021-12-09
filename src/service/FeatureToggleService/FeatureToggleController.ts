import { APIClient, APIMapping } from '../../http';

export class FeatureToggleController extends APIClient {
    constructor() {
        super(APIMapping.featureToggleService);
    }

    /**
     * fetch the state of a feature:
     * true = enabled
     * false = disabled
     */
    async fetchFeatureState(featureName: string) {
        return await this.invokeApiWithErrorHandling<boolean>(`/features/${featureName}`, 'GET');
    }
}
