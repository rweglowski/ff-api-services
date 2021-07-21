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
    updateExtendedSettings(extendedSettings: InteractiveExposeV2ServiceTypes.IEXExtendedSettings) {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.IEXExtendedSettings>('/company-settings', 'POST', extendedSettings);
    }
    iexBlast(templateId: string, payload: InteractiveExposeV2ServiceTypes.BlastRequest) {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.BlastResponse>(`/template/${templateId}/iex-blast?async`, 'POST', payload);
    }
}
