import { NextFunction, Request, Response } from 'express';
import { addUpdatePushNotification, getPushNotificationToken } from '../services/push-notification-token.service';

export const handleAddUpdateNotificationToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { token, deviceId, platform } = req.body;
        const pushNotification = await addUpdatePushNotification(token, deviceId, platform);
        res.status(200).json({ data: pushNotification });
    } catch (ex) {
        next(ex);
    }
}

export const handleGetPushNotificationToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { deviceId } = req.body;
        const pushNotificationToken = await getPushNotificationToken(deviceId)
        res.status(200).json({ data: pushNotificationToken });
    } catch (ex) {
        next(ex);
    }
}
