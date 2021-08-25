import { AlternativeCompanyDataController } from './AlternativeCompanyDataController';

export * from './AlternativeCompanyDataService.Types';

export class AlternativeCompanyDataService {
    public readonly alternativeCompanyData: AlternativeCompanyDataController;

    constructor() {
        this.alternativeCompanyData = new AlternativeCompanyDataController();
    }
}

export const AlternativeCompanyDataServiceInstance = new AlternativeCompanyDataService();
