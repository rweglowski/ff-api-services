import { ACP } from '@flowfact/types';
import { IS24ImportServiceTypes } from '../IS24ImportService';
import ProjectInfo = IS24ImportServiceTypes.ProjectInfo;

export namespace PortalManagementTypes {
    export interface PortalAuthenticationModel {
        callbackUrl: string;
    }

    export interface BulkPublishRequest {
        companyId: string;
        userId: string;
        publishRequestEntry: PublishRequestEntry;
        publishPortalRequestEntries: PublishPortalRequestEntry[];
    }

    export interface PublishPortalRequestEntry {
        portalId: string;
        portalType?: PortalType;
    }

    export interface PublishBulkResponse {
        entityId: string;
        schemaId: string;
        schema: string;
        targetStatus: PortalEstateStatusType;
        portalsWithoutAccessRights: string[];
        succeededPublications: PublishBulkResponseEntry[];
        failedPublications: PublishBulkResponseEntry[];
    }

    export interface PublishBulkResponseEntry {
        portalId: string;
        portalType?: PortalType;
        errorResponseMessage?: string;
    }

    export type PortalEstateStatusType = 'OFFLINE' | 'ONLINE';

    export interface PublishRequest {
        portalId: string;
        entries: PublishRequestEntry[];
        portalType?: PortalType;
    }

    export interface PublishRequestEntry {
        entityId: string;
        externalId?: string;
        targetStatus: PortalEstateStatusType;
        entityLocation?: string;
        publishChannels?: PublishChannel[];
        schema?: string;
        schemaId?: string;
        showAddress?: boolean;
    }

    export interface PublishChannel {
        channelIdentifier: string;
        type: 'SCOUT' | 'HOMEPAGE' | 'PROJECT';
    }

    export interface Portal {
        companyId?: string;
        description?: string;
        ftpConnectionType?: 'FTP';
        ftpPort?: number;
        ftpServer?: string;
        id?: string;
        loginName?: string;
        logo?: string;
        name?: string;
        password?: string;
        portalKey?: string;
        portalType?: PortalType;
        contingent?: number;
        authenticated: boolean;
        ftpFolder?: string;
        fullUpdate: boolean;
        vendor?: string;
        index?: number;
        _acps?: ACP[];
        _metadata?: PortalMetadata;
    }

    export interface PortalEstate {
        portalId?: string;
        entityId?: string;
        lastUpdate?: number;
        onlineSince?: number;
        showAddress?: boolean;
        channels: PublishChannel[];
    }

    export type PortalPublishInformation = Partial<PortalEstate> & { portalId: string };

    export interface PortalEstateSettings {
        id: string;
        portalId: string;
        schemaId: string;
        entityId: string;
        externalId: string;
        showAddress: boolean;
    }

    export type PortalType = 'IS24' | 'OPENIMMO' | 'WORDPRESS' | 'IDX' | 'IDX_SUB' | 'SWISSRETS';

    export type PredefinedPortal = {
        category: string;
        defaultCaption: string;
        ftpServer: string;
        fullUpdate?: boolean;
        logo: string;
        port: number;
        portalType: PortalType;
    };

    export interface ProjectPublishResponseEntry {
        entityId: string;
        schemaId: string;
        schema: string;
        messages: string[];
    }

    export interface ProjectDetails {
        id: string;
        schema: string;
        name: string;
        title: string;
    }

    export interface ProjectEstateResponse {
        assignedProjects: ProjectDetails[];
        importedProjects: ProjectInfo[];
    }

    export interface ProjectPublishResponse {
        targetStatus: PortalEstateStatusType;
        warnings: ProjectPublishResponseEntry[];
        errors: ProjectPublishResponseEntry[];
    }

    export interface PortalTypeWithCaption {
        captions: { [key: string]: string };
        logo: string;
        portalType: PortalType;
    }

    export type PortalMetadata = {
        currentAccessLevel: number
    }
}
