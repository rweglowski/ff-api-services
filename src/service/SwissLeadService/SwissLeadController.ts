import { APIClient, APIMapping } from '../../http';
import { SwissLeadServiceTypes } from './SwissLeadService.Types';
import { PagedResponse } from '@flowfact/types';

export class SwissLeadController extends APIClient {
    constructor() {
        super(APIMapping.swissLeadService);
    }

    /**
     * Fetches SwissLead api settings for current user company
     */
    async fetchSettings() {
        return this.invokeApiWithErrorHandling<SwissLeadServiceTypes.Settings>(`/settings`, 'GET');
    }

    /**
     * Saves SwissLead API settings of the company
     * @param settings
     */
    async saveSettings(settings: SwissLeadServiceTypes.Settings) {
        return this.invokeApiWithErrorHandling<SwissLeadServiceTypes.Settings>(`/settings`, 'POST',  settings);
    }

    /**
     * Updates SwissLead API settings of the company
     * @param settings
     */
    async updateSettings(settings: SwissLeadServiceTypes.Settings) {
        return this.invokeApiWithErrorHandling<SwissLeadServiceTypes.Settings>(`/settings`, 'PUT', settings);
    }

    /**
     * Removes SwissLead API settings of the company
     */
    async deleteSettings() {
        return this.invokeApiWithErrorHandling<void>(`/settings`, 'DELETE');
    }

    /**
     * Import SwissLead leads for current user company
     */
    async importLeads() {
        return this.invokeApiWithErrorHandling<PagedResponse<SwissLeadServiceTypes.SwissLeadsList>>(`/leads/import`, 'GET');
    }
}
