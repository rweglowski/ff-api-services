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
    async createAccount(account: Account) {
        return await this.invokeApiWithErrorHandling('/accounts', 'POST', account);
    }
}
