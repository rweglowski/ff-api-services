import { APIClient, APIMapping } from '../../http';
import { GeoInformationsServiceTypes } from './GeoInformationService.Types';
import FindPolygonResponse = GeoInformationsServiceTypes.FindPolygonResponse;
import GeoInformationValue = GeoInformationsServiceTypes.GeoInformationValue;

export class SearchController extends APIClient {
    constructor() {
        super(APIMapping.geoInformationService);
    }

    /**
     * free text search for polygons based on captions
     * @param query
     */
    async findPolygon(query: string) {
        return this.invokeApiWithErrorHandling<FindPolygonResponse>(`/polygons/search?q=${query}`, 'GET');
    }

    /**
     * fetch polygons list by captions
     * @param captions
     * @param onlyMetadata
     */
    async fetchPolygonDetails(captions: string, onlyMetadata: boolean = false) {
        return this.invokeApiWithErrorHandling<GeoInformationValue[]>(`/polygons/list?names=${captions}&onlyMetadata=${onlyMetadata}`, 'GET');
    }
}
