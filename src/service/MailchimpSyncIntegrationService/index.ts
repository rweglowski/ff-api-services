import { MailchimpController } from './MailchimpController';

export * from './MailchimpService.Types';

export class MailchimpService {
    public readonly controller: MailchimpController;

    constructor() {
        this.controller = new MailchimpController();
    }
}

export const MailchimpServiceInstance = new MailchimpService();
