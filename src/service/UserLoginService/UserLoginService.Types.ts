export namespace UserLoginTypes {
    export type WeekDays = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

    export interface LogoutTrigger {
        weekDays: WeekDays[];
        type: 'STRING_TIME';
        timeZoneOffset?: number;
        time: string;
    }

    export interface LoginPolicy {
        fromTime: string;
        toTime: string;
        type: 'STRING_TIME';
        timeZoneOffset?: number;
    }

    export interface UserLoginPolicy {
        id: string;
        creatorId: string;
        cronDescription: string;
        reminderNotificationMinutes: number;
        userId: string;
        trigger: LogoutTrigger;
        loginPolicy: LoginPolicy;
    }

    export interface UserLoginPolicyCreateRequest {
        reminderNotificationMinutes: number;
        userId: string;
        trigger: LogoutTrigger;
        loginPolicy: LoginPolicy;
    }

    export interface UserLoginPolicyListResponse {
        entries: UserLoginPolicy[];
        size: number;
    }

    export interface LoginPolicyValidationResponse {
        isLoginPolicyValid: boolean;
    }
}
