import { APIClient, APIMapping } from '../../http';
import { User, UserTokenEntity } from './UserService.Types';

export class InternalController extends APIClient {
    constructor() {
        super(APIMapping.userService);
    }

    /**
     * Returns user indentified by given email address
     * @param email
     */
    async getUserByEmail(email: string) {
        return await this.invokeApiWithErrorHandling<User>(`/internal/users/byEmail/${email}`, 'GET', undefined);
    }

    /**
     * Creates new user
     * @param user
     */
    async createUser(user: Partial<User>) {
        return await this.invokeApiWithErrorHandling<User>(`/internal/users`, 'POST', user);
    }

    /**
     * Returns apiToken for user
     * @param userId
     * @param tokenName
     */
    async getTokenByNameForUser(userId: string, tokenName: string) {
        return await this.invokeApiWithErrorHandling<UserTokenEntity>(`/internal/token/user/${userId}/tokenName/${tokenName}`, 'GET', undefined);
    }

    /**
     * Create api token for user
     * @param userId
     * @param tokenName
     */
    async generateTokenForUser(userId: string, tokenName: string) {
        return await this.invokeApiWithErrorHandling<UserTokenEntity>(`/internal/token/user/${userId}/api-token`, 'POST', undefined, {
            queryParams: {
                name: tokenName,
            },
        });
    }
}
