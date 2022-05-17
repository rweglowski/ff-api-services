import { APIClient, APIMapping } from '../../http';
import { PoiServiceTypes } from './PoiService.Types';

type PoiRequest = PoiServiceTypes.PoiRequest;
type PoiList = PoiServiceTypes.PoiList;

export class PoiSearchController extends APIClient {
    constructor() {
        super(APIMapping.geolocationService);
    }

    /**
     * Fetches the list of Points of Interest
     * @param poiRequest defines latitude, longitude, radius and categories
     * @param limit maximum number of results for each category
     */
    async fetchPoiList(poiRequest: PoiRequest, limit = 10) {
        return this.invokeApiWithErrorHandling<PoiList>('/pois', 'POST', poiRequest, {
            queryParams: {
                limit,
            },
        });
    }
}
