"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request, response, auth }) {
    try {
      const data = request.only(["email", "password"]);
      const user = User.create(data);
      return user;
    } catch (error) {
      return response
        .status(error.status)
        .json({ error: "error when creating new user" });
    }
  }

  async index({ auth }) {
    const users = await User.all();
    const me = await auth.current.user;
    return { users, me };
  }
}

module.exports = UserController;
