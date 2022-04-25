import { Request, Response } from "express";
import  authService from "../services/authService.js";
import { CreateUserData } from "../repositories/authRepository.js";

export async function signUp(req: Request, res: Response){
  const user: CreateUserData = req.body;
  await  authService.insertUser(user);
  res.sendStatus(201);
};

export async function signIn(req: Request, res: Response){
  const user: CreateUserData = req.body;
  const token = await authService.signIn(user);
  res.send(token);
};