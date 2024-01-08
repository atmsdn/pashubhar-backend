import express from 'express';
import { handleCalculateValue, handleCreateUser, handleGetConstantValue, handleGetCurrentUser } from '../controllers/user.controller';
import { EMPTY_ROUTE, ROUTES } from '../shared/constants/url';

const userRouter = express.Router();

userRouter.get(ROUTES.GET_CURRENT_USER, handleGetCurrentUser);
userRouter.get(ROUTES.GET_CONSTANT_VALUES, handleGetConstantValue);
userRouter.post(ROUTES.CALCULATE_CONSTANT_VALUES, handleCalculateValue);


export default userRouter;
