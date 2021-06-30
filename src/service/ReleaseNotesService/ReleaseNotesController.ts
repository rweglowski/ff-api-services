import { APIClient, APIMapping } from '../../http';
import { ReleaseNoteServiceTypes } from './ReleaseNotesService.Types';

import ReleaseNotesResponse = ReleaseNoteServiceTypes.ReleaseNotesResponse;

export class ReleaseNotesController extends APIClient {

    constructor() {
        super(APIMapping.releaseNotesService);
    }

    /**
     * Fetches the share token of the entity
     * @param appName
     * @param size
     * @param page
     */
    async fetchReleaseNotes(appName: string, size: number, page: number) {
        return this.invokeApiWithErrorHandling<ReleaseNotesResponse>(`/release-note?appName=${appName}&size=${size}&page=${page}&sort=id,desc`, 'GET');
    }
}
