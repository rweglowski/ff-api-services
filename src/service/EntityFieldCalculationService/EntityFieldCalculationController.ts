import { APIClient, APIMapping } from '../../http';
import { EntityFieldCalculationServiceTypes } from './EntityFieldCalculationService.Types';

type FormulaVerificationRequest = EntityFieldCalculationServiceTypes.FormulaVerificationRequest;
type FormulaVerificationResponse = EntityFieldCalculationServiceTypes.FormulaVerificationResponse;

export class EntityFieldCalculationController extends APIClient {
    constructor() {
        super(APIMapping.entityFieldCalculationService);
    }

    /**
     * Sends a request to EntityFieldCalculationService
     */
    async formulaVerification(formulaVerificationRequest: FormulaVerificationRequest) {
        return await this.invokeApiWithErrorHandling<FormulaVerificationResponse>('/formula-tools/verifications', 'POST', formulaVerificationRequest);
    }
}
