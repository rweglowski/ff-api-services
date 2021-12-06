import { APIClient, APIMapping } from '../../http';
import { UserLogoutTypes } from './UserLogoutService.Types';
import { JSONPatch } from '../DocumentTemplateService';

export class UserLoginPolicyController extends APIClient {
    constructor() {
        // this is not a mistake - it will be updated when backend will be implemented
        super(APIMapping.userLogout);
    }

    /**
     * Create a Policy
     * @param policy
     */
    async createPolicy(policy: UserLogoutTypes.UserLoginPolicy) {
        const createModel: UserLogoutTypes.UserLoginPolicyCreateRequest = {
            trigger: policy.trigger,
            reminderNotificationMinutes: policy.reminderNotificationMinutes,
            userId: policy.userId,
            loginPolicy: policy.loginPolicy
        };

        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLoginPolicy>('/user-logout-policy', 'POST', createModel);
    }

    /**
     * fetch Policy by id
     * @param id
     */
    async fetchPolicyById(id: string) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLoginPolicy>(`/user-logout-policy/${id}`, 'GET');
    }

    /**
     * Updates a policy by JSON patch method
     * @param id
     * @param operations
     */
    async patchPolicy(id: string, operations: JSONPatch[]) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLoginPolicy>(`/user-logout-policy/${id}`, 'PATCH', operations, {
            headers: { 'Content-Type': 'application/json-patch+json' },
        });
    }

    /**
     * Deletes a policy
     * @param id
     */
    async deletePolicy(id: string) {
        return this.invokeApiWithErrorHandling<void>(`/user-logout-policy/${id}`, 'DELETE');
    }

    /**
     * Fetch LoginPolicies for given user
     * @param userId
     */
    async fetchPoliciesByUser(userId: string) {
        const response = await this.invokeApiWithErrorHandling<UserLogoutTypes.UserLoginPolicyListResponse>(`/user-logout-policy/users/${userId}`, 'GET');
        // This is temporary and will be removed when proper endpoint will be implemented
        if (response.isSuccessful2xx && response.data) {
            return response.data.entries.filter((item) => Boolean(item.loginPolicy));
        }
        return [];
    }
    /**
     * Check if user can login
     */
    async canLogin() {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.LoginPolicyValidationResponse>(`/user-login-verification`, 'GET');
    }
}
