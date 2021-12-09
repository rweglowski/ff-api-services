import {APIClient, APIMapping} from "../../http";
import { CalendarSyncServiceTypes } from './CalendarSyncService.Types';

export class CalendarSyncServiceController extends APIClient {
    constructor() {
        super(APIMapping.calendarSyncService);
    }

    /**
     * Creates or updates appointment in entity-service with duplicate check (based on ical_uid and nylas account id
     * for normal accounts and on ical_uid for manual accounts).
     * @param appointment appointment that will be created or updated
     */
    async pushAppointment(appointment: CalendarSyncServiceTypes.Appointment) {
        return await this.invokeApiWithErrorHandling('/appointment', 'POST', appointment);
    }
}