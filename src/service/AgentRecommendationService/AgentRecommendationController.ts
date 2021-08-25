import { APIClient, APIMapping } from '../../http';

export class AgentRecommendationController extends APIClient {
    constructor() {
        super(APIMapping.agentRecommendationService);
    }

    /**
     * Fetches the view for the Agent by the given schemaId and entityId
     * @param schemaId
     * @param entityId
     */
    async fetchViewForAgent(schemaId: string, entityId: string) {
        return this.invokeApiWithErrorHandling(`/agent/schema/${schemaId}/entity/${entityId}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param file
     */
    async uploadAgentVideo(schemaId: string, entityId: string, file: any) {
        let formData = new FormData();
        formData.append('file', file);
        return this.invokeApiWithErrorHandling(`/agent/upload/schema/${schemaId}/entity/${entityId}`, 'POST', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param file
     * @param token
     */
    async uploadRaterVideo(schemaId: string, entityId: string, file: any, token: string) {
        let formData = new FormData();
        formData.append('file', file);
        return this.invokeApiWithErrorHandling(
            `/public/authenticated/upload/schema/${schemaId}/entity/${entityId}?accessToken=${token}`,
            'POST',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
    }

    /**
     * TODO: Please comment this method
     * @param token
     */
    async fetchViewForRater(token: string) {
        return this.invokeApiWithErrorHandling(`/public/authenticated/getViewForProspect?accessToken=${token}`, 'GET', undefined, {
            headers: {
                Accept: 'application/json',
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param token
     */
    async fetchCompanyAndUser(token: string) {
        return this.invokeApiWithErrorHandling(`/public/authenticated/companyAndUser?accessToken=${token}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param fieldValueMapping
     * @param token
     */
    async updateEntity(fieldValueMapping: object, token: string) {
        return this.invokeApiWithErrorHandling(`/public/authenticated/updateEntity?accessToken=${token}`, 'PATCH', fieldValueMapping);
    }

    /**
     * TODO: Please comment this method
     * @param token
     * @param value
     */
    async finishRating(token: string, value: any) {
        return this.invokeApiWithErrorHandling(`/public/authenticated/finishRating?accessToken=${token}`, 'POST', value);
    }

    /**
     * TODO: Please comment this method
     */
    async createPreconditions() {
        return this.invokeApiWithErrorHandling('/agent/preconditions', 'POST');
    }
}
