import dotenv from "dotenv";
import userRepository from "../repositories/userRepository.js";
dotenv.config();

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw { type: "not_found" };
  delete user.password;
  return user;
};

async function findAll(){
  const users = await userRepository.findAllUsers();
  if(!users) throw { type: "not_found" };

  users.map((user) => {
    delete user.password;
  });

  return users;
};

export default {
  findById,
  findAll
};