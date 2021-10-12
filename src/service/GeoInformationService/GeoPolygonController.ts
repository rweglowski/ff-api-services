import { APIClient, APIMapping } from '../../http';
import { GeoInformationsServiceTypes } from './GeoInformationService.Types';
import ListOfPolygons = GeoInformationsServiceTypes.ListOfPolygons;
import GeoInformationValue = GeoInformationsServiceTypes.GeoInformationValue;
import CreateGeoInformationRequest = GeoInformationsServiceTypes.CreateGeoInformationRequest;

export class GeoPolygonController extends APIClient {
    constructor() {
        super(APIMapping.geoInformationService);
    }

    /**
     * fetch list of all the polygons
     */
    async fetchAll() {
        return this.invokeApiWithErrorHandling<ListOfPolygons>('/polygons', 'GET');
    }

    /**
     * create new geoInformation
     */
    async create(request: CreateGeoInformationRequest) {
        return this.invokeApiWithErrorHandling<GeoInformationValue>('/polygons', 'POST', request);
    }

    /**
     * fetch polygon by name
     * @param name
     */
    async fetchByName(name: string) {
        return this.invokeApiWithErrorHandling<GeoInformationValue>(`/polygons/${name}`, 'GET');
    }

    /**
     * update polygon by name
     * @param geoInformation
     */
    async updateByName(geoInformation: GeoInformationValue) {
        return this.invokeApiWithErrorHandling<GeoInformationValue>(`/polygons/${geoInformation.name}`, 'PUT', geoInformation);
    }

    /**
     * delete polygon by name
     * @param name
     */
    async deleteByName(name: string) {
        return this.invokeApiWithErrorHandling<ListOfPolygons>(`/polygons/${name}`, 'DELETE');
    }

    /**
     * fetch all searches where given polygon is used
     * @param name
     * return list of ids for all connected searches
     */
    async fetchConnectedSearches(name: string) {
        return this.invokeApiWithErrorHandling<Array<string>>(`/polygons/${name}/searches`, 'GET');
    }

}
