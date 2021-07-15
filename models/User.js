import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 20
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5,
    },
    image: String,
    token: String,
    tokenExp: Number,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 5);
    next();
});
userSchema.static("comparePassword", async function (plain, hash) {
    return await bcrypt.compare(plain, hash);
});
userSchema.static("generateToken", function (user) {
    return jwt.sign(user._id.toHexString(), "secretToken");
})

const BlogUser = mongoose.model("BlogUser", userSchema);
export default BlogUser;