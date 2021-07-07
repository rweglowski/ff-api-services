const weekDays = 'MONDAY'||'TUESDAY' || 'WEDNESDAY'||'THURSDAY'||'FRIDAY'||'SATURDAY'||'SUNDAY'

export interface UserLogoutPolicyRequestCronTrigger{
    cronExpression:	string
    cronDescription?: string
    type: 'CRON'
}

export interface UserLogoutPolicyRequestStringTimeTrigger {
    weekDays: typeof weekDays[]
    time: string
    type: 'STRING_TIME'
}

export interface UserLogoutData {
    trigger: UserLogoutPolicyRequestCronTrigger | UserLogoutPolicyRequestStringTimeTrigger ,
    reminderNotificationMinutes: number,
    userId: string
}

export interface UserLogoutInformation extends UserLogoutData {
    id: string,
    creatorId: string,
    cronDescription: string
}
