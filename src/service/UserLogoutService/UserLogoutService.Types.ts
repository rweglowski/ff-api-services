
export interface UserLogoutData {
    cronExpression: string,
    reminderNotificationMinutes: number,
    userId: string
}

export interface UserLogoutInformation extends UserLogoutData {
    id: string,
    creatorId: string,
    cronDescription: string
}
