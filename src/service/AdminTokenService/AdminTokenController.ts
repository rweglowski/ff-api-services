import { APIClient, APIMapping } from '../../http';

export interface CreateAPIUserResponse {
    userId: string;
    token: string;
}

export class AdminTokenController extends APIClient {
    constructor() {
        super(APIMapping.adminTokenService);
    }

    /**
     * This method creates or return an admin token.
     */
    async createOrReturnAdminToken() {
        return this.invokeApiWithErrorHandling('/createOrReturnAdminToken', 'POST');
    }

    /**
     * This method creates a new api user. A normal user with type API will be created and a valid token will be safed for this
     * created user.
     * This ressource returns a userId and the token.
     */
    async createAPIUser() {
        return this.invokeApiWithErrorHandling<CreateAPIUserResponse>('/admin-token', 'POST', undefined, {
            queryParams: {
                userType: 'API',
            },
        });
    }

    /**
     * Fetches a admin token related to a specific user.
     * @param userId
     */
    async fetchAdminToken(userId: string) {
        return this.invokeApiWithErrorHandling<string>(`/admin-token/${userId}`, 'GET', undefined);
    }
}
