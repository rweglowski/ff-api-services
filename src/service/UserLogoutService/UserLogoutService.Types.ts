export namespace UserLogoutTypes {
    export type WeekDays = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

    export interface UserLogoutPolicyRequestStringTimeTrigger {
        weekDays: WeekDays[];
        time: string;
        type: 'STRING_TIME';
        timeZoneOffset?: number;
    }

    export interface UserLogoutDataResponse {
        entries: UserLogoutPolicyRequest[];
        size: number;
    }

    export interface UserLogoutPolicyRequest {
        id: string;
        creatorId: string;
        cronDescription: string;
        reminderNotificationMinutes: number;
        userId: string;
        trigger: UserLogoutPolicyRequestStringTimeTrigger;
    }

    export interface UserLogoutDataCreateRequest {
        reminderNotificationMinutes: number;
        userId: string;
        trigger: UserLogoutPolicyRequestStringTimeTrigger;
    }
}
