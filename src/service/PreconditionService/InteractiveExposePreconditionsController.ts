import { APIClient, APIMapping } from '../../http';
import { PreconditionServiceTypes } from './PreconditionsService.Types';

export class InteractiveExposePreconditionsController extends APIClient {
    constructor() {
        super(APIMapping.interactiveExposeService);
    }

    async fetchPreconditions() {
        return this.invokeApiWithErrorHandling<
            PreconditionServiceTypes.PreconditionResponse<PreconditionServiceTypes.InteractiveExpose.DetailedResult>
        >('/preconditions/interactiveExposeSetup', 'GET');
    }
}
