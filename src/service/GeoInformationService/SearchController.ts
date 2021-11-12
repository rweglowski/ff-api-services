import { APIClient, APIMapping } from '../../http';
import { GeoInformationsServiceTypes } from './GeoInformationService.Types';
import FindPolygonResponse = GeoInformationsServiceTypes.FindPolygonResponse;
import GeoInformationValue = GeoInformationsServiceTypes.GeoInformationValue;
import GeoInformationMetadataOnly = GeoInformationsServiceTypes.GeoInformationMetadataOnly;

export class SearchController extends APIClient {
    constructor() {
        super(APIMapping.geoInformationService);
    }

    /**
     * free text search for polygons based on captions
     * @param query
     * @param countryCode
     */
    async findPolygon(query: string, countryCode = GeoInformationsServiceTypes.CountryCode.GERMANY) {
        return this.invokeApiWithErrorHandling<FindPolygonResponse>(`/polygons/search?q=${query}&country=${countryCode}`, 'GET');
    }

    /**
     * fetch polygons list by names
     * @param names
     */
    async fetchPolygonDetails(names: string) {
        return this.invokeApiWithErrorHandling<GeoInformationValue[]>(`/polygons/list?names=${names}&onlyMetadata=false`, 'GET');
    }
    /**
     * fetch polygons metadata only by names
     * @param names - e.g. "name1,name2,name3"
     */
    async fetchPolygonsMetadata(names: string) {
        return this.invokeApiWithErrorHandling<GeoInformationMetadataOnly[]>(`/polygons/list?names=${names}&onlyMetadata=true`, 'GET');
    }
}
