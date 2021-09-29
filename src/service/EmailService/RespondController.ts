import {APIClient, APIMapping} from '../../http';

export class RespondController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * Prepares reply draft_email entity.
     * @param emailEntityId
     *      The id of a entity (schema email)
     * @param replyEmailBody
     *      Body of reply email.
     * @returns ID of created draft_email
     */
    async replyMail(emailEntityId: string, replyEmailBody: string) {
        return this.replyMailCall(emailEntityId, replyEmailBody, false);
    }

    /**
     * Prepares reply draft_email entity.
     * @param emailEntityId
     *      The id of a entity (schema email)
     * @param replyEmailBody
     *      Body of reply email.
     * @returns ID of created draft_email
     */
    async replyAllMail(emailEntityId: string, replyEmailBody: string) {
        return this.replyMailCall(emailEntityId, replyEmailBody, true);
    }

    private async replyMailCall(emailEntityId: string, replyEmailBody: string, replyAll: boolean) {
        return this.invokeApiWithErrorHandling<string>(`/emails/reply`, 'POST', {
            emailEntityId,
            replyEmailBody,
            replyAll,
        }, {
            headers: {
                'x-ff-version': 2,
            }
        });
    }

    /**
     * Prepares forward draft_email entity.
     * @param emailEntityId
     *      The id of a entity (schema email)
     * @param forwardEmailBody
     *      Body of the forward email.
     * @returns ID of created draft_email
     */
    async forwardMail(emailEntityId: string, forwardEmailBody: string) {
        return this.invokeApiWithErrorHandling<string>(`/emails/forward`, 'POST', {
            emailEntityId,
            forwardEmailBody,
        }, {
            headers: {
                'x-ff-version': 2,
            }
        });
    }
}
