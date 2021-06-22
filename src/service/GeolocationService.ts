import { APIClient, APIMapping } from '../http';
import { CancelToken } from 'axios';
import { GeoInformationsServiceTypes as types } from './GeoInformationService';

export class GeolocationService extends APIClient {
    constructor() {
        super(APIMapping.geolocationService);
    }

    /**
     * TODO: Please comment this method
     * @param query
     * @param cancelToken
     */
    fetchAutocompletionResults(query: string, cancelToken: CancelToken) {
        const additionalParams = {
            queryParams: {
                q: query,
            },
            cancelToken,
        };
        return this.invokeApi('/search', 'GET', undefined, additionalParams).then((s) => s.data);
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
        return this.invokeApi('/getBestMatchCoordinates', 'GET', undefined, additionalParams).then((s) => s.data);
    }

    fetchAddressCoordinates(request: types.FetchAddressLocationRequest): Promise<types.FetchAddressResponse> {
        const additionalParams = {
            queryParams: request,
        };
        return this
            .invokeApiWithErrorHandling('/searchByAddress', 'GET', undefined, additionalParams)
            .then((s) => {
                const { lat, lon } = s.data;
                return { lat, lng: lon}
            });
    }

}

export default new GeolocationService();
