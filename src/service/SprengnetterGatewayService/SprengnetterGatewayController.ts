import { APIClient, APIMapping } from '../../http';
import { SprengnetterGatewayServiceTypes } from './SprengnetterGatewayService.Types';
import Account = SprengnetterGatewayServiceTypes.Account;

export class SprengnetterGatewayController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterGatewayService);
    }

    /**
     * Creates a new Sprengnetter account for given data
     */
    async createCustomerAccount(account: Account) {
        return await this.invokeApiWithErrorHandling('/accounts', 'POST', account);
    }

    /**
     * Fetches customer account linked with the company of currently logged-in user
     */
    async fetchCustomerAccount() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.CustomerAccount>('/accounts');
    }

    /**
     * Deletes customer account linked with the company of currently logged-in user
     */
    async deleteCustomerAccount() {
        return await this.invokeApiWithErrorHandling('/accounts', 'DELETE');
    }

    /**
     * Fetches all available consents (eg. legal agreements, privacy policy)
     */
    async fetchConsents() {
        return await this.invokeApiWithErrorHandling<SprengnetterGatewayServiceTypes.Consent[]>('/consents');
    }

    /**
     * Logs in with the credentials of linked customer account. Credentials are read from the current user
     *
     * @return 200 - user is successfully logged in. Response is a url to the Sprengnetter Valuation Apps page.
     * The user will be automatically logged in
     * @return 404 - user is not registered
     */
    async login() {
        return await this.invokeApiWithErrorHandling<string>('/accounts/login', 'POST');
    }
}
