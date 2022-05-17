import { APIClient, APIMapping } from '../../http';
import { WorkflowServiceTypes } from './WorkflowService.Types';
type Templates = WorkflowServiceTypes.Templates;
type AllTypesResponse = WorkflowServiceTypes.AllTypesResponse;

export class FlowTypeController extends APIClient {
    constructor() {
        super(APIMapping.workflowService);
    }

    /**
     * Fetch all available templates
     */
    async fetchTemplates() {
        return this.invokeApiWithErrorHandling<Templates>('/flow-type/templates', 'GET');
    }

    /**
     * Fetch all available types
     */
    async fetchTypes() {
        return this.invokeApiWithErrorHandling<AllTypesResponse>('/flow-type/types', 'GET');
    }
}
