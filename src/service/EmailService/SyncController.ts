import {APIClient, APIMapping} from '../../http';

export class SyncController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * Sync a mail manually into the platform
     * @param emailAccount
     * @param subject
     */
    syncEmail(emailAccount: string, subject: string) {
        return this.invokeApiWithErrorHandling('/emails/sync', 'POST', {
            emailAccount: emailAccount,
            subject: subject,
        });
    }
}
