export namespace UserLogoutTypes {
    export type WeekDays = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

    interface Trigger {
        weekDays: WeekDays[];
        type: 'STRING_TIME';
        timeZoneOffset?: number;
    }

    export interface UserLogoutPolicyTrigger extends Trigger {
        time: string;
    }

    export interface UserLoginPolicyTrigger extends Trigger {
        time: string; // To be removed when backend implemented
    }

    interface UserPolicy<T extends Trigger> {
        id: string;
        creatorId: string;
        cronDescription: string;
        reminderNotificationMinutes: number;
        userId: string;
        trigger: T;
    }

    export type UserLogoutPolicy = UserPolicy<UserLogoutPolicyTrigger>

    export interface LoginPolicy {
        fromTime: string;
        toTime: string;
        type: 'STRING_TIME';
        timeZoneOffset?: number;
    }

    export interface UserLoginPolicy extends UserPolicy<UserLoginPolicyTrigger>{
        loginPolicy: LoginPolicy;
    }

    export interface UserPolicyCreateRequest<T extends Trigger> {
        reminderNotificationMinutes: number;
        userId: string;
        trigger: T;
    }

    export type UserLogoutPolicyCreateRequest = UserPolicyCreateRequest<UserLogoutPolicyTrigger>

    export interface UserLoginPolicyCreateRequest extends UserPolicyCreateRequest<UserLoginPolicyTrigger>{
        loginPolicy: LoginPolicy;
    }

    export interface UserListDataResponse<T> {
        entries: T[];
        size: number;
    }

    export type UserLogoutPolicyListResponse = UserListDataResponse<UserLogoutPolicy>
    export type UserLoginPolicyListResponse = UserListDataResponse<UserLoginPolicy>

    export interface LoginPolicyValidationResponse {
        isLoginPolicyValid: boolean;
    }
}
