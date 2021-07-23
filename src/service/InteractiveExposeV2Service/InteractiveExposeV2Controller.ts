import { APIClient, APIMapping } from '../../http';
import { InteractiveExposeV2ServiceTypes } from './InteractiveExposeV2Service.Types';

export class InteractiveExposeV2Controller extends APIClient {
    constructor() {
        super(APIMapping.interactiveExposeV2LambdaService);
    }
    /**
     *
     * sends an exposé
     *
     */
    sendBlast(templateId: string, payload: InteractiveExposeV2ServiceTypes.BlastRequest) {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.BlastResponse>(`/template/${templateId}/iex-blast`, 'POST', payload, {
            queryParams: { async: '' },
        });
    }
}
