import { APIClient, APIMapping } from '../../http';
import { UserLoginTypes } from './UserLoginService.Types';
import { JSONPatch } from '../DocumentTemplateService';

const POLICY_PATH = '/user-logout-policy';

export class UserLoginPolicyController extends APIClient {
    constructor() {
        // this is not a mistake - it will be updated when backend will be implemented
        super(APIMapping.userLogout);
    }

    /**
     * Create a Policy and schedule logout trigger
     * @param policy
     */
    async createPolicy(policy: UserLoginTypes.UserLoginPolicy) {
        const createModel: UserLoginTypes.UserLoginPolicyCreateRequest = {
            trigger: policy.trigger,
            reminderNotificationMinutes: policy.reminderNotificationMinutes,
            userId: policy.userId,
            loginPolicy: policy.loginPolicy
        };

        return this.invokeApiWithErrorHandling<UserLoginTypes.UserLoginPolicy>(POLICY_PATH, 'POST', createModel);
    }

    /**
     * fetch Policy by id
     * @param id
     */
    async fetchPolicyById(id: string) {
        return this.invokeApiWithErrorHandling<UserLoginTypes.UserLoginPolicy>(`${POLICY_PATH}/${id}`, 'GET');
    }

    /**
     * Updates a policy by JSON patch method
     * @param id
     * @param operations
     */
    async patchPolicy(id: string, operations: JSONPatch[]) {
        return this.invokeApiWithErrorHandling<UserLoginTypes.UserLoginPolicy>(`${POLICY_PATH}/${id}`, 'PATCH', operations, {
            headers: { 'Content-Type': 'application/json-patch+json' },
        });
    }

    /**
     * Deletes a policy
     * @param id
     */
    async deletePolicy(id: string) {
        return this.invokeApiWithErrorHandling<void>(`${POLICY_PATH}/${id}`, 'DELETE');
    }

    /**
     * Fetch LoginPolicies for given user
     * @param userId
     */
    async fetchPoliciesByUser(userId: string) {
        return this.invokeApiWithErrorHandling<UserLoginTypes.UserLoginPolicyListResponse>(`${POLICY_PATH}/users/${userId}`, 'GET');
    }
    /**
     * Check if user can login
     */
    async canLogin() {
        return this.invokeApiWithErrorHandling<UserLoginTypes.LoginPolicyValidationResponse>(`/user-login-verification`, 'GET');
    }
}
