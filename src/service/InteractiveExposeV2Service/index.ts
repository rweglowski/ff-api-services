export * from './InteractiveExposeV2Service.Types';

import { CompanySettingsController } from './CompanySettingsController';
import { InteractiveExposeV2Controller } from './InteractiveExposeV2Controller';
import { InteractiveExposeV2S3Controller } from './InteractiveExposeV2S3Controller';

export class InteractiveExposeV2Service {
    public readonly iex: InteractiveExposeV2Controller;
    public readonly companySettings: CompanySettingsController;
    public readonly s3: InteractiveExposeV2S3Controller;

    constructor() {
        this.iex = new InteractiveExposeV2Controller();
        this.companySettings = new CompanySettingsController();
        this.s3 = new InteractiveExposeV2S3Controller();
    }
}

export const InteractiveExposeV2ServiceInstance = new InteractiveExposeV2Service();
