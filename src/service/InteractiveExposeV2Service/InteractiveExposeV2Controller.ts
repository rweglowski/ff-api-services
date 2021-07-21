import { APIClient, APIMapping } from '../../http';
import { InteractiveExposeV2ServiceTypes } from './InteractiveExposeV2Service.Types';

export class InteractiveExposeV2Controller extends APIClient {
    constructor() {
        super(APIMapping.interactiveExposeV2Service);
    }
    /**
     *
     * returns the company extended settings
     *
     */
     loadExtendedSettings() {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.IEXExtendedSettings>('/company-settings', 'GET');
    }
}
