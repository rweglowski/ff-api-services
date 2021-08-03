import {SyncController} from './SyncController';
import {BodyController} from './BodyController';
import {NotificationController} from './NotificationController';
import {SendController} from './SendController';
import {ConfigurationController} from './ConfigurationController';

export * from './EmailService.Types';

export class EmailService {

    public readonly sync: SyncController;
    public readonly body: BodyController;
    public readonly notification: NotificationController;
    public readonly send: SendController;
    public readonly config: ConfigurationController;

    constructor() {
        this.sync = new SyncController();
        this.body = new BodyController();
        this.notification = new NotificationController();
        this.send = new SendController();
        this.config = new ConfigurationController();
    }
}

export const EmailServiceInstance = new EmailService();
