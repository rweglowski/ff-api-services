import { CompanyController } from './CompanyController';
import { InternalController } from './InternalController';
import { LegislationTextController } from './LegislationTextController';
import { MetadataController } from './MetadataController';

export * from './CompanyService.Types';

export class CompanyService {
    public static instance = new CompanyService();

    public readonly company: CompanyController;
    public readonly internal: InternalController;
    public readonly legislationText: LegislationTextController;
    public readonly metadata: MetadataController;

    constructor() {
        this.company = new CompanyController();
        this.internal = new InternalController();
        this.legislationText = new LegislationTextController();
        this.metadata = new MetadataController();
    }
}

export const CompanyServiceInstance = new CompanyService();
