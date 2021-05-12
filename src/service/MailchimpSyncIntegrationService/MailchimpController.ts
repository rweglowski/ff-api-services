import {APIClient, APIMapping} from '../../http';
import {MailchimpServiceTypes} from './MailchimpService.Types';

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
    async fetchMailchimpLists() {
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.MailchimpLists>(`/mailchimp/lists`, 'GET');
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
        return this.invokeApiWithErrorHandling<MailchimpServiceTypes.Credentials>(`/settings`, 'POST', settings);
    }
}
