import express from 'express';
import {
    handleAuthOTPInit,
    handleAuthOTPVerify,
    handleSignInViaEmailIdPassword,
    refreshAccessToken,
} from '../controllers/auth.controller';
import { ROUTES } from '../shared/constants/url';
import { handleCreateUser } from '../controllers/user.controller';

const authRouter = express.Router();
authRouter.post(ROUTES.OTP_INIT, handleAuthOTPInit);
authRouter.post(ROUTES.OTP_VERIFY, handleAuthOTPVerify);
authRouter.post(ROUTES.TOKEN, handleSignInViaEmailIdPassword);
authRouter.post(ROUTES.TOKEN_REFRESH, refreshAccessToken);
authRouter.post(ROUTES.CREATE_USER, handleCreateUser);


export default authRouter;
