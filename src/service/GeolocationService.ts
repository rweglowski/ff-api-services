import { APIClient, APIMapping } from '../http';
import { GeoInformationsServiceTypes as types } from './GeoInformationService';

export class GeolocationService extends APIClient {
    constructor() {
        super(APIMapping.geolocationService);
    }

    /**
     * TODO: Please comment this method
     * @param query
     */
    fetchAutocompletionResults(query: string) {
        const additionalParams = {
            queryParams: {
                q: query,
            },
        };
        return this.invokeApiWithErrorHandling<types.AutocompleteResults>('/search', 'GET', undefined, additionalParams);
    }

    /**
     * TODO: Please comment this method
     * @param query
     */
    fetchBestMatchCoordinates(query: string) {
        const additionalParams = {
            queryParams: {
                q: query,
            },
        };
        return this.invokeApiWithErrorHandling<types.BestMatchResult>('/getBestMatchCoordinates', 'GET', undefined, additionalParams);
    }

    fetchAddressCoordinates(locationAddress: types.LocationAddress) {
        const additionalParams = {
            queryParams: locationAddress,
        };
        return this.invokeApiWithErrorHandling<types.Coordinates>('/searchByAddress', 'GET', undefined, additionalParams);
    }
}

export default new GeolocationService();
