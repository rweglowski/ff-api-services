export namespace ReleaseNoteServiceTypes {
    export interface ReleaseNote {
        id: number;
        appName: string;
        version: string;
        header: string;
        content: string;
        releaseDate?: Date;
    }

    export interface ReleaseNotesResponse {
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        content: ReleaseNote[];
        last: boolean;
        first: boolean;
    }
}
