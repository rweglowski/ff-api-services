import {APIClient, APIMapping} from '../../http';
import {EmailServiceTypes} from './EmailService.Types';

export class SendController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    sendMail(mail: EmailServiceTypes.Email) {
        const formData = new FormData();
        formData.append('model', JSON.stringify(mail));
        return this.invokeApiWithErrorHandling('/mails/html', 'POST', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    }
}
