export * from './InteractiveExposeV2Service.Types';

import { CompanySettingsController } from './CompanySettingsController';
import { InteractiveExposeV2Controller } from './InteractiveExposeV2Controller';
import { TemplatesRepositoryController } from './TemplatesRepositoryController';

export class InteractiveExposeV2Service {
    public readonly iex: InteractiveExposeV2Controller;
    public readonly companySettings: CompanySettingsController;
    public readonly template: TemplatesRepositoryController;

    constructor() {
        this.iex = new InteractiveExposeV2Controller();
        this.companySettings = new CompanySettingsController();
        this.template = new TemplatesRepositoryController();
    }
}

export const InteractiveExposeV2ServiceInstance = new InteractiveExposeV2Service();
