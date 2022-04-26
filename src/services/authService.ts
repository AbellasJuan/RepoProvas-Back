import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import authRepository, { CreateUserData } from "../repositories/authRepository.js";
import userRepository from "../repositories/userRepository.js";
dotenv.config();

async function insertUser(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByEmail(createUserData.email);
  if (existingUser)
  throw { type: "conflict", message: "Users must have unique emails" };

  const hashedPassword = bcrypt.hashSync(createUserData.password, 12);

  await authRepository.insert({ ...createUserData, password: hashedPassword });
};

async function signIn({ email, password }: CreateUserData) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw { type: "unauthorized", message: "Invalid credentials" };

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid)
  throw { type: "unauthorized", message: "Invalid credentials" };

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {expiresIn: "2 days"});
  return token;
};

export default {
  insertUser,
  signIn
};