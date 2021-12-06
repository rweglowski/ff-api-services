import { APIClient, APIMapping } from '../../http';
import { UserLogoutTypes } from './UserLogoutService.Types';
import { JSONPatch } from '../DocumentTemplateService';

export class UserLogoutController extends APIClient {
    constructor() {
        super(APIMapping.userLogout);
    }

    /**
     * Creates a Policy and schedule triggers/events
     * @param policy
     */
    async createPolicy(policy: UserLogoutTypes.UserLogoutPolicy) {
        const createModel: UserLogoutTypes.UserLogoutPolicyCreateRequest = {
            trigger: policy.trigger,
            reminderNotificationMinutes: policy.reminderNotificationMinutes,
            userId: policy.userId,
        };

        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLogoutPolicy>('/user-logout-policy', 'POST', createModel);
    }

    /**
     * fetch Policy by id
     * @param id
     */
    async fetchPolicyById(id: string) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLogoutPolicy>(`/user-logout-policy/${id}`, 'GET');
    }

    /**
     * Updates a policy by JSON patch method
     * @param id
     * @param operations
     */
    async patchPolicy(id: string, operations: JSONPatch[]) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLogoutPolicy>(`/user-logout-policy/${id}`, 'PATCH', operations, {
            headers: { 'Content-Type': 'application/json-patch+json' },
        });
    }

    /**
     * Deletes the logout policy and all it's scheduled triggers/events
     * @param id
     */
    async deletePolicy(id: string) {
        return this.invokeApiWithErrorHandling(`/user-logout-policy/${id}`, 'DELETE');
    }

    /**
     * Get the logout data from users
     * @param userId
     */
    async fetchPoliciesByUser(userId: string) {
        const response = await this.invokeApiWithErrorHandling<UserLogoutTypes.UserLoginPolicyListResponse>(`/user-logout-policy/users/${userId}`, 'GET');
        // This is temporary and will be removed when proper endpoint will be implemented
        if (response.isSuccessful2xx && response.data) {
            return response.data.entries.filter((item) => !Boolean(item.loginPolicy));
        }
        return [];
    }
}
