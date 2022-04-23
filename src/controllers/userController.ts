import { Request, Response } from "express";
import userService from "../services/userService.js";
import { CreateUserData } from "../repositories/userRepository.js";
import { User } from "@prisma/client";

export async function signUp(req: Request, res: Response){
  const user: CreateUserData = req.body;

  await userService.insertUser(user);

  res.sendStatus(201);
};

export async function signIn(req: Request, res: Response){
  const user: CreateUserData = req.body;

  const token = await userService.signIn(user);

  res.send(token);
};

export async function findAllUsers(req: Request, res: Response){
  const users: User[] = await userService.findAll();
  res.send(users)
};

export async function findById(req: Request, res: Response){

  const { id } = req.params;

  const user: CreateUserData = await userService.findById(Number(id));
  res.send(user)
};
