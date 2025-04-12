import express,{Router} from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";
import {JWT_verify} from "../middlewares/jwtVerify.js";
const router = Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(JWT_verify , logoutUser);
export default router; 