import { CsvDataToEntityImporterController } from './CsvDataToEntityImporterController';

export * from './CsvDataToEntityImporter.Types';

class CsvDataToEntityImporterService {
    public readonly contract: CsvDataToEntityImporterController;

    constructor() {
        this.contract = new CsvDataToEntityImporterController();
    }
}

export const CsvDataToEntityImporterServiceInstance = new CsvDataToEntityImporterService();
