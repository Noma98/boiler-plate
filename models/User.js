import mongoose from 'mongoose';

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
const BlogUser = mongoose.model("BlogUser", userSchema);
export default BlogUser;