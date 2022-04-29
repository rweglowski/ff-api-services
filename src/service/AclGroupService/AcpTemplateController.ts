import { APIClient, APIMapping } from '../../http';
import { AcpTemplate } from '@flowfact/types';

export class AcpTemplateController extends APIClient {
    constructor() {
        super(APIMapping.aclGroupService);
    }

    /**
     * Fetch available templates
     * @param userId
     */
    async fetchAcpTemplates(userId?: string) {
        return this.invokeApiWithErrorHandling<AcpTemplate[]>(`/templates`, 'GET', undefined,  {
            queryParams: {
                userId: userId,
            },
        });
    }

    /**
     * Create template
     * @param template
     */
    async createAcpTemplate(template: AcpTemplate) {
        return this.invokeApiWithErrorHandling<AcpTemplate>(`/templates`, 'POST', template);
    }

    /**
     * Updates template
     * @param template
     */
    async updateAcpTemplate(template: AcpTemplate) {
        return this.invokeApiWithErrorHandling<AcpTemplate>(`/templates`, 'PUT', template);
    }

    /**
     * Fetches a template by Id
     * @param templateId
     */
    async fetchAcpTemplateById(templateId: string) {
        return this.invokeApiWithErrorHandling<AcpTemplate>(`/templates/${templateId}`, 'GET');
    }

    /**
     * Updates template by Id
     * @param templateId
     * @param template
     */
    async updateAcpTemplateById(templateId: string, template: AcpTemplate) {
        return this.invokeApiWithErrorHandling<AcpTemplate>(`/templates/${templateId}`, 'PUT', template);
    }

    /**
     * Deletes template
     * @param templateId
     */
    async deleteAcpTemplate(templateId: string) {
        return this.invokeApiWithErrorHandling(`/templates/${templateId}`, 'DELETE');
    }
}
