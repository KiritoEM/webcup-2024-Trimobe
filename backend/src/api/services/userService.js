const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

class UserService {
  constructor(model) {
    this.User = model;
  }

  async getUserbyEmail(email) {
    try {
      return await this.User.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }
  async createNewUser(fullname, email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new this.User({
        fullname,
        email,
        password: hashedPassword
      });
      return await newUser.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new UserService(userModel);