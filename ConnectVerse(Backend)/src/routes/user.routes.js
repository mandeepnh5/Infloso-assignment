import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, loginUser, logoutUser, refreshAccessToken, signupUser, updateAccountDetails } from "../controllers/user.controller.js";
import verfiyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);


//protected routes
router.route("/logout").post(verfiyJWT, logoutUser);
router.route("/refresh-token").post(verfiyJWT, refreshAccessToken);
router.route("/change-password").post(verfiyJWT, changeCurrentPassword)
router.route("/current-user").get(verfiyJWT, getCurrentUser)
router.route("/update-account").patch(verfiyJWT, updateAccountDetails)

export default  router;