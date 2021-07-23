import { Entity } from '@flowfact/types';
import { APIClient, APIMapping } from '../../http';

export class InteractiveExposeV2S3Controller extends APIClient {
    constructor() {
        super(APIMapping.interactiveExposeV2S3Service);
    }
    /**
     *
     * returns the list of global iex V2 templates
     *
     */
    fetchGlobalTemplateRepository() {
        return this.invokeApiWithErrorHandling<Entity[]>('/global/template-repo.json', 'GET');
    }
}
