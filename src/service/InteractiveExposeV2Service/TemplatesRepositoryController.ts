import { Entity } from '@flowfact/types';
import { APIClient, APIMapping } from '../../http';
import { InteractiveExposeV2ServiceTypes } from './InteractiveExposeV2Service.Types';

export class TemplatesRepositoryController {
    s3Controller: APIClient;
    lambdaController: APIClient;

    constructor() {
        this.s3Controller = new APIClient(APIMapping.interactiveExposeV2S3Service);
        this.lambdaController = new APIClient(APIMapping.interactiveExposeV2LambdaService);
    }
    /**
     *
     * returns the list of global iex V2 templates
     *
     */
    fetchGlobalTemplateRepository() {
        return this.s3Controller.invokeApiWithErrorHandling<Entity[]>('/global/template-repo.json', 'GET');
    }

    publishTemplate(request: InteractiveExposeV2ServiceTypes.PublishTemplateRequest) {
        const { id, configuration, parentTemplateId, name } = request;
        return this.lambdaController.invokeApiWithErrorHandling<InteractiveExposeV2ServiceTypes.PublishTemplateResponse>(`/template/${id}`, 'POST', configuration, { queryParams: { parentTemplateId, name }});
    }

    deleteTemplate(id: string) {
        return this.lambdaController.invokeApiWithErrorHandling(`/template/${id}`, 'DELETE');
    }
}
