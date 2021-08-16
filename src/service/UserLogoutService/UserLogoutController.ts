import { APIClient, APIMapping } from '../../http';
import {UserLogoutTypes} from './UserLogoutService.Types';
import { JSONPatch } from '../DocumentTemplateService';

export class UserLogoutController extends APIClient {
    constructor() {
        super(APIMapping.userLogout);
    }

    /**
     * Creates and schedules a logout policy based on cron and reminder time
     * @param trigger
     * @param reminderNotificationMinutes
     * @param userId
     */
    async createLogoutData(
        trigger: UserLogoutTypes.UserLogoutPolicyRequestStringTimeTrigger,
        reminderNotificationMinutes: number,
        userId: string
    ) {
        const createModel: UserLogoutTypes.UserLogoutDataCreateRequest = {
            trigger,
            reminderNotificationMinutes,
            userId,
        };

        return this.invokeApiWithErrorHandling('/user-logout-policy', 'POST', createModel);
    }


    /**
     * Get the logout data for specific user
     * @param id
     */
    async fetchLogoutData(id: string) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLogoutPolicyRequest>(`/user-logout-policy/${id}`, 'GET');
    }

    /**
     * Updates a logout policy by JSON patch method
     * @param id
     * @param operations
     */
    async patchLogoutPolicy(id: string, operations: JSONPatch[]) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLogoutPolicyRequest>(`/user-logout-policy/${id}`, 'PATCH', operations, {
            headers: { 'Content-Type': 'application/json-patch+json' },
        });
    }

    /**
     * Deletes the logout policy and all it's scheduled triggers/events
     * @param id
     */
    async deleteLogoutData(id: string) {
        return this.invokeApiWithErrorHandling(`/user-logout-policy/${id}`, 'DELETE');
    }

    /**
     * Get the logout data from users
     * @param userId
     */
    async fetchLogoutDataByUser(userId: string) {
        return this.invokeApiWithErrorHandling<UserLogoutTypes.UserLogoutDataResponse>(`/user-logout-policy/users/${userId}`, 'GET');
    }
}
