import { APIClient, APIMapping } from '../../http';
import { PlaceholderServiceTypes } from './PlaceholderService.Types';
type PlaceholderRequest = PlaceholderServiceTypes.PlaceholderRequest;

export default class PlaceholderController extends APIClient {
    constructor() {
        super(APIMapping.placeholderService);
    }

    /**
     * Resolve placeholders of a specific request.
     * @param placeholderRequest
     * @param resolveLinkedEntitiesLevel
     */
    async fetchPlaceholders(placeholderRequest: PlaceholderRequest, resolveLinkedEntitiesLevel = 0) {
        return this.invokeApiWithErrorHandling('/placeholders', 'POST', placeholderRequest, {
            queryParams: {
                resolveLinkedEntitiesLevel,
            },
        });
    }
}
