import { APIClient, APIMapping } from '../../http';
import { AclGroup, AclGroupType, AcpTemplate } from '@flowfact/types';

export class AclGroupServiceRestController extends APIClient {
    constructor() {
        super(APIMapping.aclGroupService);
    }

    /**
     * This method fetches a group. If a groupType is provided, only groups with this type will be returned
     * @param groupType
     */
    async fetchGroups(groupType?: AclGroupType) {
        return this.invokeApiWithErrorHandling('/groups', 'GET', undefined, {
            queryParams: {
                groupType: groupType,
            },
        });
    }

    /**
     * Create a new acl group
     * @param group
     */
    async createGroup(group: AclGroup) {
        return this.invokeApiWithErrorHandling('/groups', 'POST', group);
    }

    /**
     * Updates a group by the id
     * @param group
     */
    async updateGroup(group: AclGroup) {
        return this.invokeApiWithErrorHandling(`/groups/${group.id}`, 'PUT', group);
    }

    /**
     * Deletes a group by the id
     * @param group
     */
    async deleteGroup(group: AclGroup) {
        return this.invokeApiWithErrorHandling(`/groups/${group.id}`, 'DELETE', group);
    }

    /**
     * Fetch available templates
     */
    async fetchAcpTemplates() {
        return this.invokeApiWithErrorHandling<AcpTemplate[]>(`/templates`, 'GET');
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
