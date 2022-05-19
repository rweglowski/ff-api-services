import { APIClient, APIMapping } from '../../http';
import { GetResponseServiceTypes } from './GetResponseService.Types';
import { EnvironmentManagementInstance } from '../../util/EnvironmentManagement';

export class GetResponseController extends APIClient {
    constructor() {
        super(APIMapping.getResponseService);
    }

    /**
     * Fetches GetResponse api credentials for current user company
     */
    async fetchCredentials() {
        return this.invokeApiWithErrorHandling<GetResponseServiceTypes.Credentials>(`/credentials`, 'GET');
    }

    /**
     * Saves GetResponse API credentials of the company
     * @param token
     */
    async saveCredentials(token: string) {
        return this.invokeApiWithErrorHandling<GetResponseServiceTypes.Credentials>(`/credentials`, 'POST', { token });
    }

    /**
     * Removes GetResponse API credentials of the company
     */
    async deleteCredentials() {
        return this.invokeApiWithErrorHandling(`/credentials`, 'DELETE');
    }

    /**
     * Fetches GetResponse settings for current user company
     */
    async fetchSettings() {
        return this.invokeApiWithErrorHandling<GetResponseServiceTypes.Settings>(`/settings`, 'GET');
    }

    /**
     * Saves GetResponse settings of the company
     * @param settings
     */
    async saveSettings(settings: GetResponseServiceTypes.Settings) {
        return this.invokeApiWithErrorHandling<GetResponseServiceTypes.Settings>(`/settings`, 'POST', {
            ...settings,
            callbackUrl: settings.callbackUrl ?? EnvironmentManagementInstance.getBaseUrl(),
        });
    }

    /**
     * Updates GetResponse settings of the company
     * @param settings
     */
    async updateSettings(settings: GetResponseServiceTypes.Settings) {
        return this.invokeApiWithErrorHandling<GetResponseServiceTypes.Settings>(`/settings`, 'PUT', {
            ...settings,
            callbackUrl: settings.callbackUrl ?? EnvironmentManagementInstance.getBaseUrl(),
        });
    }

    /**
     * Removes GetResponse settings of the company
     */
    async deleteSettings() {
        return this.invokeApiWithErrorHandling<void>('/settings', 'DELETE');
    }
}
