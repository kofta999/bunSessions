import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import { SignUp } from "../pages/signup";
import { Login } from "../pages/login";
import { Session } from "express-session";
import { Index } from "../pages";

interface CustomSession extends Session {
  isLoggedIn: boolean;
  user: any;
}

export function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session = req.session as CustomSession;
  if (session.isLoggedIn && session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

export function getSignUp(req: Request, res: Response) {
  res.send(SignUp());
}

export async function postSignUp(req: Request, res: Response) {
  const name = req.body.name;
  const email = req.body.email;
  const hashedPassword = await Bun.password.hash(req.body.password);

  if (await User.findOne({ email: email })) {
    res.send(SignUp("User already exists"));
  } else {
    const user = new User({
      name,
      email,
      hashedPassword,
    });

    await user.save();
    res.redirect("/login");
  }
}

export function getLogin(req: Request, res: Response) {
  res.send(Login());
}

export async function postLogin(req: Request, res: Response) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });
  if (user && (await Bun.password.verify(password, user.hashedPassword))) {
    const session = req.session as CustomSession;
    session.isLoggedIn = true;
    session.user = user;
    session.save((err) => console.log(err));
    res.redirect("/");
  } else {
    res.send(Login("Wrong email or password"));
  }
}

export function postLogout(req: Request, res: Response) {
  req.session.destroy(() => {
    res.redirect("/");
  });
}

export function getProtected(req: Request, res: Response) {
  const session = req.session as CustomSession;
  const user = session.user;
  res.send(Index(user.name));
}
