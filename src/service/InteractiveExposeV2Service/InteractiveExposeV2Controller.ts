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
    fetchEmailTemplates(role?: string, language?: string, getDefaults?: boolean) {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.EmailTemplate[]>('/email-template', 'GET', undefined, {
            queryParams: { role, language, getDefaults },
        });
    }
    createEmailTemplate(template: InteractiveExposeV2ServiceTypes.EmailTemplate) {
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.EmailTemplate>('/email-template', 'PUT', template);
    }
    updateEmailTemplate(template: InteractiveExposeV2ServiceTypes.EmailTemplate) {
        if (!template || !template.id) {
            throw new Error('The template has no id');
        }
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.EmailTemplate>(`/email-template/${template.id}`, 'POST', template);
    }

    deleteEmailTemplate(id: string) {
        return this.invokeApiWithErrorHandling(`/email-template/${id}`, 'DELETE');
    }

    sendDraftExpose(id: string) {
        if (!id) {
            throw new Error('The id is empty');
        }
        return this.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.AsyncJobResponse>(`/draft-expose/${id}/send`, 'POST', undefined, {
            queryParams: { async: '' }, } );
    }
}
