import { APIClient, APIMapping } from '../../http';
import { MailchimpServiceTypes } from './MailchimpService.Types';
import { PagedResponse } from '@flowfact/types';

export class MailchimpController extends APIClient {
    constructor() {
        super(APIMapping.mailchimpService);
    }

    /**
     * Fetches Mailchimp api credentials for current user company
     */
    async fetchCredentials() {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.Credentials>(`/credentials`, 'GET');
    }

    /**
     * Saves Mailchimp API credentials of the company
     * @param token
     */
    async saveCredentials(token: string) {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.Credentials>(`/credentials`, 'POST', { token });
    }

    /**
     * Removes Mailchimp API credentials of the company
     */
    async deleteCredentials() {
        return this.invokeApiWithErrorHandling(`/credentials`, 'DELETE');
    }

    /**
     * Fetches Mailchimp lists(audiences) for current user company
     */
    async fetchMailchimpLists(page: number = 0, size: number = 20) {
        return this.invokeApiWithErrorHandling<PagedResponse<MailchimpServiceTypes.MailchimpListItem>>(`/mailchimp/lists`, 'GET', undefined, {
            queryParams: {
                page,
                size,
            },
        });
    }

    /**
     * Fetches Mailchimp settings for current user company
     */
    async fetchSettings() {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.Settings>(`/settings`, 'GET');
    }

    /**
     * Saves Mailchimp settings of the company
     * @param settings
     */
    async saveSettings(settings: MailchimpServiceTypes.Settings) {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.Settings>(`/settings`, 'POST', settings);
    }

    /**
     * Updates Mailchimp settings of the company
     * @param settings
     */
    async updateSettings(settings: MailchimpServiceTypes.Settings) {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.Settings>(`/settings`, 'PUT', settings);
    }

    /**
     * Synchronize Mailchimp contacts
     */
    async synchronizeContacts() {
        return this.invokeApiWithErrorHandling<void>('/publish', 'POST');
    }

    /**
     * Synchronizes selected contacts and assigns them to given mailchimp subgroup
     * @param contactResource
     */
    async synchronizeSelectedContacts(contactResource: MailchimpServiceTypes.ContactResource) {
        return this.invokeApiWithErrorHandling('/publish/contacts', 'POST', contactResource)
    }

    /**
     * Check the manual sync status
     */
    async checkSyncStatus() {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.SyncStatus>('/syncStatus', 'GET');
    }
}
