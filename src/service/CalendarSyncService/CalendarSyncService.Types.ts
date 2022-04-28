export namespace CalendarSyncServiceTypes {
    export interface Appointment {
        id: string;
        nylasAccountId: string;
        subject: string;
        message: string;
        participants: number[];
        start_date: number;
        end_date: number;
        isFullDayAppointment: boolean;
        location: Address;
        location_description: string;
        assignee: number[];
        status: string;
        ical_uid: string;
    }

    interface Address {
        street: string;
        zipCode: string;
        city: string;
        country: string;
        type: string;
    }
}
