import {APIClient, APIMapping} from "../../http";

export class AcpDefaultAssignmentsController extends APIClient {
    constructor() {
        super(APIMapping.aclGroupService);
    }

    /**
     * Get assignments by templates
     * @param templateId
     * @param userId
     */
    async fetchAssignmentsByTemplates(templateId: string) {
        return this.invokeApiWithErrorHandling(`/default-assignments/${templateId}`, 'GET');
    }


    /**
     * Add user by id
     * @param templateId
     * @param userId
     */
    async addUser(templateId: string, userId: string) {
        return this.invokeApiWithErrorHandling(`/default-assignments/${templateId}/users/${userId}`, 'PUT');
    }

    /**
     * Delete user by id
     * @param templateId
     * @param userId
     */
    async deleteUser(templateId: string, userId: string) {
        return this.invokeApiWithErrorHandling(`/default-assignments/${templateId}/users/${userId}`, 'DELETE');
    }

    /**
     * Add user by schema
     * @param templateId
     * @param schemaName
     */
    async addToSchema(templateId: string, schemaName: string) {
        return this.invokeApiWithErrorHandling(`/default-assignments/${templateId}/schemas/${schemaName}`, 'PUT');
    }

    /**
     * Delete user by id
     * @param templateId
     * @param schemaName
     */
    async deleteFromSchema(templateId: string, schemaName: string) {
        return this.invokeApiWithErrorHandling(`/default-assignments/${templateId}/users/${schemaName}`, 'DELETE');
    }
}

