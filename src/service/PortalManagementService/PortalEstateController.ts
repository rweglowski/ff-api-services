import { APIClient, APIMapping } from '../../http';
import { PortalManagementTypes } from './PortalManagementService.Types';
import PortalEstateSettings = PortalManagementTypes.PortalEstateSettings;
import PortalEstate = PortalManagementTypes.PortalEstate;
import EstatesPublishedOnPortalResponse = PortalManagementTypes.EstatesPublishedOnPortalResponse;
import PortalPublishInformation = PortalManagementTypes.PortalPublishInformation;
import EstatePortalPublishInformation = PortalManagementTypes.EstatePortalPublishInformation;

export class PortalEstateController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Fetches the information on which portal a estate is published on.
     * @param estateId
     */
    async fetchPublishInformation(estateId: string) {
        return await this.invokeApiWithErrorHandling<PortalPublishInformation[]>(`/estates/${estateId}/portals`, 'GET');
    }

    /**
     * Fetches the information on which portals the given estates are published on.
     * @param estateIds
     */
    async fetchEstatesPublishInformation(estateIds: string[]) {
        return await this.invokeApiWithErrorHandling<EstatePortalPublishInformation>(`/estates/portals`, 'POST', estateIds);
    }

    /**
     * Fetches app published estates for special portal
     * @param portalId
     */
    async fetchAll(portalId: string) {
        return await this.invokeApiWithErrorHandling<PortalEstate[]>(`/portals/${portalId}/estates`, 'GET');
    }

    /**
     * Fetches app published estates for special portal
     * @param portalId
     */
    async fetchAllPaged(portalId: string, page: int, itemsPerPage: int) {
        return await this.invokeApiWithErrorHandling<EstatesPublishedOnPortalResponse>(`/portals/${portalId}/estates-paged/?page=${page}&size=${itemsPerPage}`, 'GET');
    }

    /**
     * Fetches a specified app published estate for special portal
     * @param portalId
     * @param estateId
     */
    async fetch(portalId: string, estateId: string) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}/estates/${estateId}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     * @param estateId
     * @param portalEstateSettings
     */
    async updateSettings(portalId: string, estateId: string, portalEstateSettings: PortalEstateSettings) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}/estates/${estateId}`, 'POST', portalEstateSettings);
    }

    /**
     * Unlinks a estate from a portal
     * @param portalId
     * @param entityId
     */
    async unlink(portalId: string, entityId: string) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}/estates/${entityId}`, 'DELETE');
    }

    async fetchNumberOfPublishedEstates(portalId: string) {
        return await this.invokeApiWithErrorHandling<number>(`/portals/${portalId}/estates/count`, 'GET');
    }

    /**
     * Fetches additional settings for en estate by id.
     * @param estateId
     */
    async fetchSettings(estateId: string) {
        return await this.invokeApiWithErrorHandling<PortalEstateSettings[]>(`/portals/estates/${estateId}`, 'GET');
    }
}
