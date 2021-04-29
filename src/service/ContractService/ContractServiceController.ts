import { APIClient, APIMapping } from '../../http';
import { ContractServiceTypes } from './ContractService.Types';

export class ContractServiceController extends APIClient {
    constructor() {
        super(APIMapping.contractService);
    }

    /**
     * Get all available template contracts for a specific origin.
     * @param origin
     */
    async fetchTemplates(origin?: ContractServiceTypes.TemplateOrigin) {
        return await this.invokeApiWithErrorHandling<ContractServiceTypes.Template[]>('/templates', 'GET', undefined, {
            queryParams: {
                origin: origin,
            },
        });
    }

    /**
     * Download a contract template
     * @param templateId
     */
    async downloadTemplate(templateId: string) {
        return await this.invokeApiWithErrorHandling(`/templates/${templateId}/download`, 'GET', undefined, {
            responseType: 'arraybuffer',
        });
    }
}
