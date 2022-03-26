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


const User = mongoose.model("User", userSchema)
module.exports = User