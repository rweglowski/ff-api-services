export type weekDays = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export namespace UserLogoutTypes {
    export interface UserLogoutPolicyRequestCronTrigger {
        cronExpression: string;
        cronDescription?: string;
        type: 'CRON';
    }

    export interface UserLogoutPolicyRequestStringTimeTrigger {
        weekDays: weekDays[];
        time: string;
        type: 'STRING_TIME';
    }

    export interface UserLogoutData {
        entries: UserLogoutDataEntries
    }

    export interface UserLogoutDataEntries {
        trigger: UserLogoutPolicyRequestCronTrigger | UserLogoutPolicyRequestStringTimeTrigger;
        reminderNotificationMinutes: number;
        userId: string;
    }

    export interface UserLogoutInformation extends UserLogoutData {
        id: string;
        creatorId: string;
        cronDescription: string;
    }
}
