import {APIClient, APIMapping} from '../../http';
import {EmailServiceTypes} from './EmailService.Types';

export class ResyncController extends APIClient {

    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * Resync a mail account in a specific time period
     * @param email
     * @param from
     * @param to
     */
    resync = async (email: string, from: number, to: number) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>('/resync', 'POST', {
            email: email,
            received_after: from,
            received_before: to
        });
    }

    /**
     * Resync a whole company
     * @param from
     * @param to
     */
    resyncCompany = async (from: number, to: number) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>('/resync/company', 'POST', {
            received_after: from,
            received_before: to
        });
    }

    /**
     * Checks if a resync progress is running
     * @param processId
     */
    checkResyncRunning = async (processId: number) => {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.ResyncResponse>(`/resync/progress/${processId}`, 'GET');
    }
}
