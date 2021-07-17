import BlogUser from '../models/User.js';


export const postJoin = async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await BlogUser.exists({ email });
    if (userExists) {
        return res.json({ joinSuccess: false, message: "이미 사용중인 이메일입니다." });
    }
    try {
        await BlogUser.create({
            name,
            email,
            password,
        });
        return res.status(201).json({ joinSuccess: true, message: "회원가입 성공" });
    } catch (err) {
        return res.status(400).json({ joinSuccess: false, message: err });
    }
}
export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await BlogUser.findOne({ email });
    if (!user) {
        return res.json({
            loginSuccess: false,
            message: "해당 이메일이 없습니다."
        })
    }
    const isMatch = await BlogUser.comparePassword(password, user.password);
    if (!isMatch) {
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
    };
    try {
        const token = await BlogUser.generateToken(user);
        user.token = token;
        await user.save();
        return res
            .status(200)
            .cookie("x_auth", user.token)
            .json({
                loginSuccess: true,
                userId: user._id,
                message: "로그인 성공"
            });
    } catch (err) {
        return res.json({
            loginSuccess: false,
            message: "토큰 생성 실패"
        });
    }
};
export const getAuth = (req, res) => {
    //여기는 Authentication이 Ture인 상태
    const { _id, role, email, name, image } = req.user;
    return res.status(200).json({
        _id,
        email,
        name,
        image,
        isAuth: true,
        isAdmin: role === 0 ? false : true,
    })
}
export const getLogout = async (req, res) => {
    try {
        await BlogUser.findOneAndUpdate({ _id: req.user._id },
            { token: "", });
        return res.status(200).cookie("x_auth", null).json({ success: true });
    } catch (err) {
        return res.json({ success: false, err });
    }
}