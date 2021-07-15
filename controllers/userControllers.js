import BlogUser from '../models/User';

export const postJoin = async (req, res) => {
    const { name, email, password, image } = req.body;
    try {
        await BlogUser.create({
            name,
            email,
            password,
            image
        });
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(400).json({ success: false, err: err });
    }
}