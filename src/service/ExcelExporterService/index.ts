import { ExcelExporterController } from './ExcelExporterController';

export * from './ExcelExporterService.Types';

export class ExcelExporterService {
    public readonly excelExporter: ExcelExporterController;

    constructor() {
        this.excelExporter = new ExcelExporterController();
    }
}

export const ExcelExporterServiceInstance = new ExcelExporterService();
