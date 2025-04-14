const mongoose = require("mongoose");
const Collection = require("../Config/collection");
const { passwordEncoded } = require("../Utils/utils");
require("../Config/DB")

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requires: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

authSchema.pre("save", function () {
  this.password = passwordEncoded(this.password);
});

const authModel = mongoose.model(Collection.account, authSchema);

module.exports = authModel;
