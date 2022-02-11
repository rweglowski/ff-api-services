import { APIClient, APIMapping } from '../../http';
import { PreconditionServiceTypes } from './PreconditionsService.Types';

export class NylasPreconditionController extends APIClient {
    constructor() {
        super(APIMapping.nylasService);
    }

    async fetchPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/activeMailAccount', 'GET');
    }

    /**
     * @deprecated please use fetchRunningMailAccountsPreconditions(). Will be removed soon
     */
    async fetchIncorrectAccountPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/incorrectMailAccount', 'GET');
    }

    async fetchRunningMailAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/runningMailAccounts', 'GET');
    }

    async fetchIrelandMigrationAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/irelandMigration', 'GET');
    }

    async fetchInactiveAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/userHasNoActiveMailAccounts', 'GET');
    }
}
