import { ParamList } from '../..';
import { APIClient, APIMapping } from '../../http';
import { ReleaseNoteServiceTypes } from './ReleaseNotesService.Types';

type ReleaseNotesResponse = ReleaseNoteServiceTypes.ReleaseNotesResponse;

export class ReleaseNotesController extends APIClient {
    constructor() {
        super(APIMapping.releaseNotesService);
    }

    /**
     * Fetches the share token of the entity
     * @param appName
     * @param size
     * @param page
     * @param sort
     */
    async fetchReleaseNotes(appName: string, size: number, page: number, sort = 'id,desc') {
        const queryParams: ParamList = {
            appName,
            size,
            page,
            sort,
        };
        return this.invokeApiWithErrorHandling<ReleaseNotesResponse>('/release-note', 'GET', undefined, { queryParams });
    }
}
