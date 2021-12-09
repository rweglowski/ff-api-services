import { FeatureToggleController } from './FeatureToggleController';

export class FeatureToggleService {
    public readonly featureToggle: FeatureToggleController;

    constructor() {
        this.featureToggle = new FeatureToggleController();
    }
}

export const FeatureToggleServiceInstance = new FeatureToggleService();
