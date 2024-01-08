import { admin } from "./firebase-config"

export const sendPushNotification = async (token: any, title: any, body: any) => {
    try {
        const message = {
            notification: {
                title,
                body,
            },
            token
        };
        await admin.messaging().send(message);
        return true;
    } catch (error) {
        return false;
    }
} 