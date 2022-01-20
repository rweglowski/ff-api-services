import { APIClient, APIMapping } from '../../http';
import { SprengnetterGatewayServiceTypes } from './SprengnetterGatewayService.Types';

export class LinkedCustomerAccountController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Fetches customer account linked with the company of currently logged-in user
     */
    async fetchCustomerAccount() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.CustomerAccount>('/accounts');
    }

    /**
     * Creates a new Sprengnetter account for given data
     */
    async createCustomerAccount(account: SprengnetterGatewayServiceTypes.Account) {
        return await this.invokeApiWithErrorHandling('/accounts', 'POST', account);
    }

    /**
     * Deletes customer account linked with the company of currently logged-in user
     */
    async deleteCustomerAccount() {
        return await this.invokeApiWithErrorHandling('/accounts', 'DELETE');
    }
}
