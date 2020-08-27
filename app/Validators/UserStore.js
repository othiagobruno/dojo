"use strict";

const { rule } = use("Validator");

class UserStore {
  get rules() {
    return {
      email: "required|email|unique:users",
      password: [rule("required"), rule("string")],
    };
  }
}

module.exports = UserStore;
