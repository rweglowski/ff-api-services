import { APIClient, APIMapping } from '../../http';
import { PossibleValue } from '@flowfact/types';

export default class PossibleValuesController extends APIClient {
    constructor() {
        super(APIMapping.schemaService);
    }

    async fetchAllPossibleValues(schemaName: string) {
        return this.invokeApiWithErrorHandling<PossibleValue[]>(`/schemas/${schemaName}/possiblevalues`, 'GET', undefined);
    }

    /**
     * Not working at the moment
     * @param schemaName
     * @param possibleValues
     */
    async addPossibleValues(schemaName: string, possibleValues: any) {
        return this.invokeApiWithErrorHandling<void>(`/schemas/${schemaName}/possiblevalues`, 'POST', possibleValues);
    }

    /**
     *
     * @param schemaName
     * @param fieldName
     * @param possibleValue
     */
    async deletePossibleValue(schemaName: string, fieldName: string, possibleValue: string) {
        return this.invokeApiWithErrorHandling<void>(`/schemas/${schemaName}/fields/${fieldName}/possiblevalues`, 'DELETE', undefined, {
            queryParams: { value: possibleValue },
            headers: {
                'x-ff-version': 2,
            },
        });
    }
}
