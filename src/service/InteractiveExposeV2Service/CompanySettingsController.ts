import { APIClient, APIMapping } from '../../http';
import { InteractiveExposeV2ServiceTypes } from './InteractiveExposeV2Service.Types';

export class CompanySettingsController extends APIClient {
    constructor() {
        super(APIMapping.interactiveExposeV2LambdaService);
    }
    /**
     *
     * returns the company extended settings
     *
     */
    fetchExtendedSettings() {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.IEXExtendedSettings>('/company-settings', 'GET');
    }
    /**
     *
     * updates the company extended settings
     *
     */
    updateExtendedSettings(extendedSettings: InteractiveExposeV2ServiceTypes.IEXExtendedSettings) {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.IEXExtendedSettings>('/company-settings', 'POST', extendedSettings);
    }
}
