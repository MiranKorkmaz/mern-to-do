import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        id: {type: String}
    }, { timestamps: true }
)


const User = mongoose.model("User", userSchema)
export default User;