const UserService = require("./userService");
const bcrypt = require("bcrypt");

class AuthService {
  async register(fullname, email, password) {
    try {
      const user = await UserService.getUserbyEmail(email);
      if (user) {
        throw new Error("User already exists");
      }
      return await UserService.createNewUser(fullname, email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(email, password) {
    try {
      const user = await UserService.getUserbyEmail(email);
      if (!user) {
        throw new Error("User does not exist");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new AuthService();