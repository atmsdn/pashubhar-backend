import { NextFunction, Request, Response } from 'express';
import { CalculateValue, createUser, getConstantValue, getCurrentUser } from '../services/user.service';

export const handleCreateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, species, address1, address2, phoneNumber } = req.body;
    try {
        const user = await createUser(name, species, address1, address2, phoneNumber);
        res.status(200).json(user);
    } catch (ex) {
        next(ex);
    }
};
export const handleGetCurrentUser = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.user.id)
        const response = await getCurrentUser(id)
        res.status(200).json({ data: response });
    }
    catch (ex) {
        next(ex);
    }
}
export const handleGetConstantValue = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await getConstantValue()
        res.status(200).json({ data: response });
    }
    catch (ex) {
        next(ex);
    }
}
export const handleCalculateValue = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const { type, field1, field2, field3, field4, field5 } = req.body;
        const response = await CalculateValue(type, field1, field2, field3, field4, field5)
        res.status(200).json({ data: response });
    }
    catch (ex) {
        next(ex);
    }
}
