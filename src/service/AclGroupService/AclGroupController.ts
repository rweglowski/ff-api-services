import { APIClient, APIMapping } from '../../http';
import { AclGroup, AclGroupType } from '@flowfact/types';

export class AclGroupController extends APIClient {
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
}
