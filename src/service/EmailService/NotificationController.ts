import { APIClient, APIMapping } from '../../http';
import { EmailServiceTypes } from './EmailService.Types';

export class NotificationController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    notify(template: EmailServiceTypes.EmailTemplate, recipients: EmailServiceTypes.EmailRecipient | EmailServiceTypes.EmailRecipient[]) {
        return this.invokeApiWithErrorHandling('/notifications', 'POST', {
            recipientGroup: Array.isArray(recipients) ? recipients : [recipients],
            emailTemplate: template,
        });
    }
}
