import { Router } from "express";
import * as authController from "../controllers/auth";

const router = Router();

router.get("/signup", authController.getSignUp);
router.post("/signup", authController.postSignUp);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.post("/logout", authController.postLogout);
router.get(
  "/protected",
  authController.authenticateUser,
  authController.getProtected
);

export const authRouter = router;
