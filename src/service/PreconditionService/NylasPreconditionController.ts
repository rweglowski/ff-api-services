import { APIClient, APIMapping } from '../../http';
import { PreconditionServiceTypes } from './PreconditionsService.Types';

export class NylasPreconditionController extends APIClient {
    constructor() {
        super(APIMapping.nylasService);
    }

    async fetchPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/activeMailAccount', 'GET');
    }

    /**
     * @deprecated please use fetchRunningMailAccountsPreconditions(). Will be removed soon
     */
    async fetchIncorrectAccountPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/incorrectMailAccount', 'GET');
    }

    async fetchRunningMailAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/runningMailAccounts', 'GET');
    }

    async fetchIrelandMigrationAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/irelandMigration', 'GET');
    }

    async fetchIrelandMigrationCompanyAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/irelandMigrationCompany', 'GET');
    }

    async fetchInactiveAccountsPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.PreconditionResponse>('/preconditions/userHasNoActiveMailAccounts', 'GET');
    }
}
