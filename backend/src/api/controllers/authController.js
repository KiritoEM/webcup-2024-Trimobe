const AuthService = require("../services/authService");
const { createToken, verifyToken } = require("../helpers/tokenHelper");

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await AuthService.login(email, password);
      if (!user) {
        return res.status(500).json({ message: error.message });
      }
      const payload = { uid: user.id };
      const token = createToken(payload);
      return res.status(200).json({ 
        token, 
        email: user.email,
        name: user.fullname
      });
    } catch (error) {

    }
  }

  async register(req, res, next) {
    try {
      const { fullname, email, password } = req.body;
      const user = await AuthService.register(fullname, email, password);
      if (!user) {
        return res.status(500).json({ message: error.message });
      }
      const payload = { uid: user.id };
      const token = createToken(payload);
      return res.status(201).json({ 
        token, 
        email: user.email,
        name: user.fullname
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();