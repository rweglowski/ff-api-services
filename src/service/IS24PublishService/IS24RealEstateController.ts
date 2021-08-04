import { APIClient, APIMapping } from '../../http';

export class IS24RealEstateController extends APIClient {
    constructor() {
        super(APIMapping.is24PublishService);
    }

    /**
     * This method deletes IS24 real estate by FlowFact estateId and portalId
     * @param portalId
     * @param estateId
     */
    async deleteEstate(portalId: string, estateId: string) {
        return await this.invokeApiWithErrorHandling(`/portal/${portalId}/estate/${estateId}`, 'DELETE', undefined);
    }
}

export default new IS24RealEstateController();
