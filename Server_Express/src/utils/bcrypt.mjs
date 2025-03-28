import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password) => {
   const salt = await bcrypt.genSalt(saltRounds);
   return await bcrypt.hash(password, salt);
};

export const comparePassword = async (plain, hashed) => {
   if (!plain || !hashed) {
      throw new Error("Both plain password and hashed password are required");
    }
  
    const match = await bcrypt.compare(plain, hashed);
    return match;
} 