import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 5,
        required: true
    },
    image: { type: String, default: "" },
    admin: { type: Number, default: 0 },
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
userSchema.static("generateToken", async function (user) {
    return jwt.sign(user._id.toHexString(), config.tokenSecret);
})
userSchema.static("findByToken", async function (token) {
    //토큰 decode => user._id
    const decoded = jwt.verify(token, config.tokenSecret);

    //user._id를 이용해서 유저를 찾은 다음에 클라이언트에서 가져온 토큰과 DB에 보관된 토큰이 일치하는지 확인
    const user = await this.findOne({ _id: decoded, token });
    console.log(user);
    return user;
})
const BlogUser = mongoose.model("BlogUser", userSchema);
export default BlogUser;