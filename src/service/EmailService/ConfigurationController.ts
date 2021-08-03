import {APIClient, APIMapping} from '../../http';
import {EmailServiceTypes} from './EmailService.Types';

export class ConfigurationController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * TODO: Please comment this method
     * @param domain
     */
    createDomain(domain: string) {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.DomainConfigurationResponse>('/configuration/whitelabel', 'POST', { domain });
    }

    /**
     * TODO: Please comment this method
     * @param domain
     */
    verifyDomain(domain: string) {
        return this.invokeApiWithErrorHandling<EmailServiceTypes.DomainConfigurationResponse>('/configuration/whitelabel/verify', 'POST', { domain });
    }
}
