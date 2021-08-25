import { APIClient, APIMapping } from '../../http';
import { AlternativeCompanyDataServiceTypes } from './AlternativeCompanyDataService.Types';

import AlternativeCompanyDataResponse = AlternativeCompanyDataServiceTypes.AlternativeCompanyDataResponse;
import AlternativeCompanyDataSaveRequest = AlternativeCompanyDataServiceTypes.AlternativeCompanyDataSaveRequest;
import AlternativeCompanyDataSaveResponse = AlternativeCompanyDataServiceTypes.AlternativeCompanyDataSaveResponse;
import AlternativeCompanyDataSavedResponse = AlternativeCompanyDataServiceTypes.AlternativeCompanyDataSavedResponse;

export class AlternativeCompanyDataController extends APIClient {
    constructor() {
        super(APIMapping.alternativeCompanyDataService);
    }

    /**
     * Getting the list of alternative configurations
     */
    async fetchAlternativeCompanyConfiguration() {
        return await this.invokeApiWithErrorHandling<AlternativeCompanyDataResponse>('/company/configurations', 'GET');
    }
    /**
     * Saving a new alternative configuration to a portal
     */
    async saveAlternativeCompanyConfigurationToPortal(alternativeCompanyDataSaveRequest: AlternativeCompanyDataSaveRequest) {
        return await this.invokeApiWithErrorHandling<AlternativeCompanyDataSaveResponse>(
            '/company/configurations/assignments/entities',
            'POST',
            alternativeCompanyDataSaveRequest
        );
    }
    /**
     * Getting the saved alternative configuration for portal
     */
    async fetchSavedAlternativeCompanyConfiguration(portalId: string) {
        return await this.invokeApiWithErrorHandling<AlternativeCompanyDataSavedResponse>(
            `/company/configurations/assignments/entities/${portalId}`,
            'GET'
        );
    }
}
