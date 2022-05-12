import { APIClient, APIMapping } from '../../http';
import { PagedResult } from '@flowfact/types';
import { SoftLinksEntityServiceTypes } from './SoftLinksEntityService.Types';

export class LinkController extends APIClient {
    constructor() {
        super(APIMapping.softLinksEntityService);
    }

    /**
     * Create link between the entities with ids from source and destination
     * @param link
     */
    async createLink(link: SoftLinksEntityServiceTypes.CreateSoftlinkRequest) {
        return this.invokeApiWithErrorHandling<SoftLinksEntityServiceTypes.Softlink>(`/link`, 'POST', link || {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Updates an existing softlink
     * @param link
     */
    async updateLink(link: SoftLinksEntityServiceTypes.CreateSoftlinkRequest) {
        return this.invokeApiWithErrorHandling<SoftLinksEntityServiceTypes.Softlink>(`/link`, 'PUT', link || {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Delete link
     * @param linkId
     */
    async deleteLink(linkId: string) {
        return this.invokeApiWithErrorHandling<void>(`/link/${linkId}`, 'DELETE');
    }

    /**
     * Search link by label
     * @param label
     */
    async searchLinksByLabel(label: string) {
        return this.invokeApiWithErrorHandling<{ count: number; label: string }>(`/link/search`, 'GET', undefined, {
            queryParams: {
                label,
            },
        });
    }

    /**
     * Search links with pagination
     * @param link
     * @param page
     * @param size
     */
    async searchLinksWithPagination(link: SoftLinksEntityServiceTypes.NulleableSoftlinkSearch, page = 1, size = 20) {
        return this.invokeApiWithErrorHandling<PagedResult<SoftLinksEntityServiceTypes.Softlink>>(`/link/search`, 'POST', link || {}, {
            queryParams: {
                page,
                size,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Search all links with pagination
     * @param request
     * @param page
     * @param size
     */
    async searchAllSoftLinks(request: SoftLinksEntityServiceTypes.AllSoftlinksRequest, page = 1, size = 20) {
        return this.invokeApiWithErrorHandling<PagedResult<SoftLinksEntityServiceTypes.Softlink>>(
            `/link/search/all-softlinks`,
            'POST',
            request || {},
            {
                queryParams: {
                    page,
                    size,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}
