const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true
      }
    }, { timestamps: true }
  )

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


const User = mongoose.model("User", userSchema)
module.exports = User