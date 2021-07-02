import { APIClient, APIMapping } from '../../http';
import {UserLogoutData, UserLogoutInformation} from './UserLogoutService.Types';
import {JSONPatch} from '../DocumentTemplateService';

export class UserLogoutController extends APIClient {
    constructor() {
        super(APIMapping.userService);
    }

    /**
     * Creates and schedules a logout policy based on cron and reminder time
     * @param cronExpression
     * @param reminderNotificationMinutes
     * @param userId
     */
    async postLogoutDataForUser(cronExpression: string, reminderNotificationMinutes: number, userId: string) {
        return this.invokeApiWithErrorHandling<UserLogoutData>('/user-logout-policy', 'POST', {
            cronExpression,
            reminderNotificationMinutes,
            userId,
        })
    }

    /**
     * Get the logout data for specific user
     * @param id
     */
    async fetchLogoutDataFromUser(id: string) {
        return this.invokeApiWithErrorHandling<UserLogoutInformation>(`/user-logout-policy/${id}`, 'GET')
    }

    /**
     * Updates a logout policy by JSON patch method
     * @param id
     * @param operations
     */
    async patchLogoutPolicy(id: string, operations: JSONPatch[]) {
        return this.invokeApiWithErrorHandling<UserLogoutInformation>(`/user-logout-policy/${id}`, 'PATCH', operations, {
            headers: { 'Content-Type': 'application/json-patch+json' },
        })
    }

    /**
     * Deletes the logout policy and all it's scheduled triggers/events
     * @param id
     */
    async deleteLogoutData(id: string) {
        return this.invokeApiWithErrorHandling(`/user-logout-policy/${id}`, 'DELETE')
    }

    /**
     * Get the logout data from users
     * @param id
     */
    async fetchLogoutDataFromUsers(id: string) {
        return this.invokeApiWithErrorHandling<UserLogoutData>(`/user-logout-policy/users/${id}`, 'GET')
    }

}
