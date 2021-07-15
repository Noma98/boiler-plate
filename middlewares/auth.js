import BlogUser from '../models/User';

export const authMiddleware = async (req, res, next) => {
    // 클라이언트 쿠키에서 토큰을 가져온다.
    const token = req.cookie.x_auth;

    // 토큰을 복호화 한 후 유저를 찾는다.
    try {
        const user = await BlogUser.findByToken(token);
        if (!user) {
            return res.json({ isAuth: false });
        }
        //일치하는 유저가 있다면 req로 접근할 수 있도록 넣어주기
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        throw new Error(err);
    }
}