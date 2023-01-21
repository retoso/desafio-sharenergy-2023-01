import jwt from "jsonwebtoken";

import User from "../models/User";

import authConfig from "../config/auth";

class SessionController {
    async create(req, res) {

        const { username, password } = req.body;

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(401).json({ error: "User / password invalid." })
        }

        const { id } = user;

        return res.json({
            user: {
                id,
                username
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,

            })
        });
    }
}

export default new SessionController();