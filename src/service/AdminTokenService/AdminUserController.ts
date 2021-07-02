import { APIClient, APIMapping } from '../../http';

export class PublicAdminUserController extends APIClient {
    constructor() {
        super(APIMapping.adminTokenService);
    }

    /**
     * Authenticate the user with the platformToken and returns the cognitoToken
     * @param {string} platformToken
     * @returns {Promise<AxiosResponse>}
     */
    async authenticate(platformToken: string) {
        return this.invokeApiWithErrorHandling('/public/adminUser/authenticate', 'GET', undefined, {
            headers: {
                token: platformToken,
            },
        });
    }

    /**
     * Authenticate the user with the platformToken and returns the cognitoToken + username
     * @param {string} platformToken
     * @returns {Promise<AxiosResponse>}
     */
    async authenticateAndReturnUsernameWithToken(platformToken: string) {
        return this.invokeApiWithErrorHandling('/public/adminUser/authenticateAndReturnUsernameWithToken', 'GET', undefined, {
            headers: {
                token: platformToken,
            },
        });
    }
}
