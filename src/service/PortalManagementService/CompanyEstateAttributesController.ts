import {APIClient, APIMapping} from "../../http";
import { PortalManagementTypes } from './PortalManagementService.Types';
import CompanyEstateAttributes = PortalManagementTypes.CompanyEstateAttributes;

/**
 * Manages company wide attributes for an estate in a Record<string, any> (CompanyEstateAttributes) model.
 */
export class CompanyEstateAttributesController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Setts attributes of given key and value.
     * @param entityId as UUID
     * @param key as string
     * @param value as any - you can set anything your business case needs
     */
    async set(entityId: string, key: string, value: any) {
        return await this.invokeApiWithErrorHandling<CompanyEstateAttributes>(`companies/estates/${entityId}/attributes/${key}`, 'POST', value);
    }

    /**
     * Setts attributes of given key and value.
     * @param entityId as UUID
     * @param attributes as Record containing key: value enties - you can set anything your business case needs
     */
    async setAll(entityId: string, attributes: CompanyEstateAttributes) {
        return await this.invokeApiWithErrorHandling<CompanyEstateAttributes>(`companies/estates/${entityId}/attributes`, 'POST', attributes);
    }

    /**
     * Retrieves a Record containing given attribute by key, if exists.
     * @param entityId as UUID
     * @param key as string
     */
    async get(entityId: string, key: string) {
        return await this.invokeApiWithErrorHandling<CompanyEstateAttributes>(`companies/estates/${entityId}/attributes/${key}`, 'GET');
    }

    /**
     * Retrieves all attributes as Record for given entity
     * @param entityId as UUID
     */
    async getAll(entityId: string) {
        return await this.invokeApiWithErrorHandling<CompanyEstateAttributes>(`companies/estates/${entityId}/attributes`, 'GET');
    }

    /**
     * Removes an attribute by providing the key
     * Returns deleted attributes
     * @param entityId as UUID
     * @param key as String
     */
    async remove(entityId: string, key: string) {
        return await this.invokeApiWithErrorHandling<CompanyEstateAttributes>(`companies/estates/${entityId}/attributes/${key}`, 'DELETE');
    }

    /**
     * Removes all attributes from given entity
     * Returns deleted attributes
     * @param entityId as UUID
     */
    async removeAll(entityId: string) {
        return await this.invokeApiWithErrorHandling<CompanyEstateAttributes>(`companies/estates/${entityId}/attributes`, 'DELETE');
    }
}